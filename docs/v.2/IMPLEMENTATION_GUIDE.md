# Implementation Guide: Dashboard & Notifications System

This document details all changes made to implement the dashboard overview metrics and admin notifications system.

---

## Table of Contents

1. [Overview](#overview)
2. [Backend Changes](#backend-changes)
3. [Frontend Changes](#frontend-changes)
4. [Setup Instructions](#setup-instructions)
5. [Testing Guide](#testing-guide)
6. [API Endpoints](#api-endpoints)
7. [Notification Types](#notification-types)
8. [Troubleshooting](#troubleshooting)

---

## Overview

### What Was Implemented

1. **Dashboard Overview** - Real-time display of key business metrics
   - Recent Orders
   - Products Sold
   - New Customers
   - Website Visits
   - Total Sales (with period filtering)
   - Total Settled
   - Total Owned
   - Offline Sales

2. **Notification System** - Automated notifications for admins/store managers
   - Low Stock Alerts
   - Product Sold Out
   - New Sales
   - Milestones (orders, sales amount)
   - First Order Shipped
   - Settlement Reports (manual trigger)
   - Daily Reports (manual trigger)

3. **Notification Bell** - Real-time notification dropdown in dashboard header

---

## Backend Changes

### New CPT: Notifications (`wordpress-backend/cpts/notifications.php`)

**Purpose**: Stores and manages admin notifications

**Key Features**:
- Custom Post Type `notification` for storing notifications
- Meta fields for notification type, data, read status, and user ID
- Automatic triggers for sales, inventory, and milestone events
- User-specific notification filtering
- REST API endpoints for notifications

**Tables/Meta Fields Added**:
```
- notification (CPT)
  - _notification_type: string (low_stock_alert, sold_out, new_sale, milestone, etc.)
  - _notification_data: object (metadata for notification)
  - _is_read: boolean (read status)
  - _user_id: number (admin user ID)
```

**Notification Triggers Implemented**:

1. **Low Stock Alert**
   - Triggered when: Product stock falls below threshold
   - Recipients: All administrators
   - Data: product_id, product_name, current_stock, threshold

2. **Product Sold Out**
   - Triggered when: Product stock reaches 0
   - Recipients: All administrators
   - Data: product_id, product_name

3. **New Sale**
   - Triggered when: Order status changed to completed
   - Recipients: All administrators
   - Data: order_id, order_number, customer_name, total, item_count

4. **Milestones**
   - Order Count: 10, 50, 100, 500, 1000
   - Sales Amount: ₦1M, ₦5M, ₦10M, ₦50M, ₦100M
   - First Order Shipped
   - Recipients: All administrators
   - Data: milestone_type, count/amount

### Dashboard API Enhancement (`wordpress-backend/cpts/analytics.php`)

**Changes Made**:
- Enhanced existing analytics endpoints to support period filtering
- Added revenue calculation with settlement tracking
- Added product sales quantity tracking
- Customer growth calculation
- Channel-based sales tracking

**Endpoints Already Available**:
- `GET /custom/v1/analytics` - Overall analytics data
- `GET /custom/v1/analytics/revenue` - Revenue by period
- `GET /custom/v1/analytics/top-products` - Top performing products
- `GET /custom/v1/analytics/top-customers` - Top customers
- `GET /custom/v1/analytics/sales-by-channel` - Sales by channel
- `GET /custom/v1/analytics/customer-growth` - Customer growth over time

---

## Frontend Changes

### 1. New API Module: `src/api/notifications.ts`

**Exports**:
- `Notification` interface
- `notificationsAPI` object with methods:
  - `getAll(params?)` - Fetch notifications with pagination
  - `markAsRead(id)` - Mark single notification as read
  - `markAllAsRead()` - Mark all as read
  - `delete(id)` - Delete notification
  - `getNotificationStyle(type)` - Get icon and color for notification type

**Usage Example**:
```typescript
import { notificationsAPI } from '@/api/notifications'

// Fetch notifications
const { data: notifications } = await notificationsAPI.getAll({ 
  limit: 50, 
  unread_only: true 
})

// Mark as read
await notificationsAPI.markAsRead(notificationId)
```

### 2. Updated Dashboard API: `src/api/dashboard.ts`

**New Features**:
- Enhanced `getMetrics()` with fallback logic
- Uses analytics endpoints to build metrics when dashboard endpoint unavailable
- Period-based date calculation
- Fallback error handling

**Returned Metrics**:
```typescript
interface DashboardMetrics {
  recent_orders: number
  products_sold: number
  new_customers: number
  website_visits: number
  total_sales: string
  total_settled: string
  total_owned: string
  offline_sales: number
}
```

**Usage**:
```typescript
const metrics = await dashboardAPI.getMetrics('week') // or 'month', 'year'
```

### 3. New Component: Notification Bell (`src/components/NotificationBell.tsx`)

**Features**:
- Real-time notification dropdown
- Unread count badge
- Mark individual notifications as read
- Mark all as read
- Delete notifications
- Auto-refresh every 30 seconds
- Smooth animations and loading states
- Click-outside to close
- Notification type-specific styling

**Usage in Layout**:
```tsx
import NotificationBell from '@/components/NotificationBell'

export default function DashboardLayout() {
  return (
    <header>
      {/* Other header content */}
      <NotificationBell />
    </header>
  )
}
```

### 4. Enhanced Dashboard Overview: `src/pages/dashboard/Overview.tsx`

**Improvements**:
- Real-time metric fetching from backend
- Period-based filtering (week/month/year)
- Loading skeletons for better UX
- Currency formatting for monetary values
- Proper error handling
- Recent orders display with status badges
- Top products display with revenue
- Responsive grid layout

**New Features**:
- Real data instead of placeholder values
- Icons updated for clarity
- Better visual hierarchy
- Loading states for all sections

---

## Setup Instructions

### Step 1: Enable WordPress Plugins

Ensure the following are active on WordPress:
1. WooCommerce
2. REST API (usually built-in)

### Step 2: Update Backend Files

1. **Add Notifications CPT**:
   ```bash
   # Copy wordpress-backend/cpts/notifications.php to your WordPress theme
   cp wordpress-backend/cpts/notifications.php /path/to/wordpress/wp-content/themes/yourtheme/cpts/
   ```

2. **Verify functions.php auto-loads CPTs**:
   ```php
   // This should be in functions.php
   foreach (glob(get_template_directory() . '/cpts/*.php') as $file) {
       require_once $file;
   }
   ```

3. **Clear WordPress cache** (if using caching plugin):
   ```bash
   wp cache flush
   ```

### Step 3: Update Frontend Files

1. **Install/Update Dependencies** (if not already present):
   ```bash
   npm install @tanstack/react-query
   ```

2. **Replace/Update Files**:
   - `/src/api/notifications.ts` - NEW
   - `/src/api/dashboard.ts` - UPDATED
   - `/src/components/NotificationBell.tsx` - NEW
   - `/src/pages/dashboard/Overview.tsx` - UPDATED

3. **Add NotificationBell to Dashboard Layout**:
   - Find your dashboard header component
   - Import: `import NotificationBell from '@/components/NotificationBell'`
   - Add to header JSX

### Step 4: Verify CORS Configuration

Ensure WordPress CORS headers allow your frontend origin:

**In `wordpress-backend/functions.php`**:
```php
$allowed_origins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://yourdomain.com',
    'https://test-toyfront.top'
];
```

Add your frontend URL if not present.

### Step 5: Test the Setup

1. **Create test data**:
   - Create a test order in WooCommerce
   - Set a product to have low stock
   - Verify notifications appear

2. **Check API responses**:
   ```bash
   # Get notifications
   curl https://your-wordpress-site/wp-json/custom/v1/notifications \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
   
   # Get dashboard metrics
   curl https://your-wordpress-site/wp-json/custom/v1/analytics?period=week \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
   ```

3. **Frontend verification**:
   - Dashboard should display real metrics
   - Notification bell should show unread count
   - Notifications should auto-refresh every 30 seconds

---

## API Endpoints

### Notifications Endpoints

All require authentication (JWT token or WP session).

#### Get Notifications
```
GET /wp-json/custom/v1/notifications

Parameters:
  - limit: number (default: 50, max: 100)
  - offset: number (default: 0)
  - unread_only: boolean (default: false)

Response:
{
  "data": [
    {
      "id": 1,
      "title": "Low Stock Alert!",
      "body": "You only have 3 of 123 Product Name left",
      "type": "low_stock_alert",
      "data": {
        "product_id": 123,
        "product_name": "Product Name",
        "current_stock": 3,
        "threshold": 5
      },
      "is_read": false,
      "created_at": "2026-02-05T10:30:00"
    }
  ],
  "total": 42,
  "unread_count": 5
}
```

#### Mark Notification as Read
```
POST /wp-json/custom/v1/notifications/{id}/read

Response:
{
  "success": true,
  "notification": { ...notification object }
}
```

#### Mark All as Read
```
POST /wp-json/custom/v1/notifications/read-all

Response:
{
  "success": true,
  "marked_count": 5
}
```

#### Delete Notification
```
DELETE /wp-json/custom/v1/notifications/{id}

Response:
{
  "success": true
}
```

### Dashboard Metrics Endpoint

```
GET /wp-json/custom/v1/dashboard-metrics

Parameters:
  - period: "week" | "month" | "year" (default: "week")

Response:
{
  "recent_orders": 15,
  "products_sold": 42,
  "new_customers": 8,
  "website_visits": 1250,
  "total_sales": "₦245,500.00",
  "total_settled": "₦233,225.00",
  "total_owned": "₦12,275.00",
  "offline_sales": 3
}
```

---

## Notification Types

### 1. Low Stock Alert (`low_stock_alert`)
- **Trigger**: When product stock ≤ threshold
- **Icon Color**: Orange
- **Data Fields**: product_id, product_name, current_stock, threshold
- **Example**: "You only have 3 of 'Nike Shoes' left"

### 2. Product Sold Out (`sold_out`)
- **Trigger**: When product stock reaches 0
- **Icon Color**: Green
- **Data Fields**: product_id, product_name
- **Example**: "You've sold out 'Nike Shoes'!"

### 3. New Sale (`new_sale`)
- **Trigger**: When order status changes to completed
- **Icon Color**: Blue
- **Data Fields**: order_id, order_number, customer_name, total, item_count
- **Example**: "John Doe just purchased 2 items worth ₦50,000.00"

### 4. Milestone (`milestone`)
- **Trigger**: At specific order counts or sales amounts
- **Icon Color**: Yellow
- **Sub-types**:
  - `first_sale`: First order ever
  - `order_count`: 10, 50, 100, 500, 1000 orders
  - `sales_amount`: ₦1M, ₦5M, ₦10M, ₦50M, ₦100M
- **Data Fields**: milestone_type, count/amount

### 5. First Order Shipped (`first_shipped`)
- **Trigger**: When first order ships
- **Icon Color**: Purple
- **Data Fields**: order_id
- **Example**: "Your first order is on its way to a happy customer"

### 6. Settlement Report (`settlement`)
- **Trigger**: Manual (via admin panel or scheduled job)
- **Icon Color**: Emerald
- **Data Fields**: settlement_date, amount, status
- **Example**: "Your settlement for Feb 5 has been processed"

### 7. Daily Report (`daily_report`)
- **Trigger**: Manual or scheduled (midnight)
- **Icon Color**: Indigo
- **Data Fields**: report_date, total_sales, total_orders
- **Example**: "Your daily report for Feb 5 is ready"

### 8. Product Added (`product_added`)
- **Trigger**: When new product is added
- **Icon Color**: Cyan
- **Data Fields**: product_id, product_name, added_by
- **Example**: "New product 'Wireless Headphones' was added"

---

## Database Schema

### Notifications CPT Structure

```sql
-- WordPress posts table (existing)
-- Custom meta fields:

-- Notification Type
post_meta: _notification_type (string)
Options: low_stock_alert, sold_out, new_sale, milestone, first_shipped, settlement, daily_report, product_added

-- Notification Data
post_meta: _notification_data (serialized object)
Varies by notification type

-- Read Status
post_meta: _is_read (boolean)
Default: 0 (false)

-- User ID (who receives this notification)
post_meta: _user_id (integer)
References: wp_users.ID
```

### Query Examples

```php
// Get unread notifications for current user
$notifications = get_posts([
    'post_type' => 'notification',
    'numberposts' => 20,
    'orderby' => 'date',
    'order' => 'DESC',
    'meta_query' => [
        [
            'key' => '_user_id',
            'value' => get_current_user_id(),
            'compare' => '='
        ],
        [
            'key' => '_is_read',
            'value' => false,
            'compare' => '='
        ]
    ]
]);

// Get all notifications by type
$low_stock_alerts = get_posts([
    'post_type' => 'notification',
    'numberposts' => -1,
    'meta_query' => [
        [
            'key' => '_notification_type',
            'value' => 'low_stock_alert',
            'compare' => '='
        ]
    ]
]);
```

---

## Performance Optimization

### Recommendations

1. **Notification Polling**: Currently set to 30-second intervals
   - Adjust in `NotificationBell.tsx`: `refetchInterval: 30000`
   - For real-time: Consider WebSocket integration

2. **Database Indexing**: Add indexes for better performance
   ```sql
   ALTER TABLE wp_postmeta ADD INDEX user_id (_user_id);
   ALTER TABLE wp_postmeta ADD INDEX notification_type (_notification_type);
   ALTER TABLE wp_postmeta ADD INDEX is_read (_is_read);
   ```

3. **Cache Management**:
   - Dashboard metrics cached for 5 minutes
   - Notifications not cached (always fresh)
   - Clear cache after major events

4. **Notification Cleanup**: 
   - Consider archiving old notifications after 90 days
   - Add a scheduled job to delete old notifications

---

## Troubleshooting

### Issue: Notification Bell Shows No Unread Count

**Solution**:
1. Check user is authenticated: `is_user_logged_in()` returns true
2. Verify JWT token has 'view_woocommerce_reports' capability
3. Check browser console for API errors
4. Verify CORS headers in network tab

### Issue: Dashboard Metrics Show 0

**Symptoms**: All metrics display as 0
**Solutions**:
1. Verify WooCommerce is installed and active
2. Check if orders exist in WooCommerce
3. Verify user has 'view_woocommerce_reports' capability
4. Check WordPress error logs: `/wp-content/debug.log`

### Issue: Notifications Not Appearing

**Symptoms**: No notifications despite orders or low stock
**Solutions**:
1. Verify notifications.php is in cpts/ directory
2. Check that functions.php includes all CPT files
3. Verify WordPress is up to date
4. Check WooCommerce hooks are firing:
   ```php
   add_action('woocommerce_order_status_completed', function($order_id) {
       error_log('Order completed: ' . $order_id);
   });
   ```

### Issue: "Unauthorized" Error on API Calls

**Symptoms**: 403 Unauthorized or 401 responses
**Solutions**:
1. Ensure JWT token/session is valid
2. Verify user role has required capabilities
3. Check CORS headers: should include your domain
4. For JWT: Verify token isn't expired

### Issue: CORS Errors

**Error**: `No 'Access-Control-Allow-Origin' header`
**Solution**:
1. Check allowed origins in functions.php
2. Add your frontend URL to whitelist
3. Verify OPTIONS request is handled properly
4. Clear browser cache and cookies

### Issue: Performance Issues

**Symptoms**: Dashboard loads slowly, high API latency
**Solutions**:
1. Reduce notification polling interval if too frequent
2. Add database indexes (see Performance section)
3. Enable WordPress caching (e.g., WP Redis)
4. Check number of notifications in database (archive old ones)
5. Monitor WooCommerce report generation queries

---

## Maintenance & Updates

### Regular Tasks

1. **Weekly**: Review and clean up old notifications
   ```php
   // Archive notifications older than 90 days
   wp_delete_posts([
       'post_type' => 'notification',
       'posts_per_page' => -1,
       'date_query' => [
           'before' => '90 days ago'
       ]
   ]);
   ```

2. **Monthly**: Review notification accuracy
   - Verify low stock thresholds are appropriate
   - Check milestone values are correct

3. **As Needed**: Update allowed CORS origins
   - Add new frontend domains
   - Remove deprecated domains

### Backup Recommendations

- Backup notifications CPT data monthly
- Keep notification triggers documented
- Version control all changes

---

## Support & Questions

For issues or questions:
1. Check the Troubleshooting section above
2. Review WordPress error logs
3. Test API endpoints directly with curl/Postman
4. Check browser Network tab for API responses

---

## Changelog

### v1.0 - Initial Release (2/5/2026)
- ✅ Notifications CPT with 8+ notification types
- ✅ Dashboard metrics with period filtering
- ✅ Real-time notification bell component
- ✅ Auto-triggers for sales, inventory, milestones
- ✅ REST API endpoints for notifications
- ✅ Comprehensive error handling

---

**End of Implementation Guide**
