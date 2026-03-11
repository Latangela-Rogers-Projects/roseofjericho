# Quick Reference Guide

Quick commands and code snippets for common tasks.

---

## Installation Commands

### Backend Setup
```bash
# 1. Copy notifications CPT
cp wordpress-backend/cpts/notifications.php /path/to/wordpress/wp-content/themes/yourtheme/cpts/

# 2. Flush rewrite rules
wp rewrite flush

# 3. Clear cache
wp cache flush
```

### Frontend Setup
```bash
# 1. Install dependencies
npm install

# 2. Copy files (handled by git/file system)

# 3. Start dev server
npm run dev
```

---

## Testing Commands

### Test Notifications API
```bash
# Get JWT token
TOKEN=$(curl -s -X POST https://your-domain.com/wp-json/jwt-auth/v1/token \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password"}' | jq -r '.token')

# Get notifications
curl -X GET "https://your-domain.com/wp-json/custom/v1/notifications" \
  -H "Authorization: Bearer $TOKEN"

# Get unread only
curl -X GET "https://your-domain.com/wp-json/custom/v1/notifications?unread_only=true" \
  -H "Authorization: Bearer $TOKEN"
```

### Test Dashboard API
```bash
# Last week metrics
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics?period=week" \
  -H "Authorization: Bearer $TOKEN"

# Last month metrics
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics?period=month" \
  -H "Authorization: Bearer $TOKEN"
```

---

## Code Snippets

### React Hook - Fetch Notifications
```typescript
import { useQuery } from '@tanstack/react-query'
import { notificationsAPI } from '@/api/notifications'

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => notificationsAPI.getAll({ limit: 50 }),
    refetchInterval: 30000, // Every 30 seconds
  })

  if (isLoading) return <div>Loading...</div>
  
  return (
    <div>
      <p>Unread: {data?.unread_count}</p>
      {data?.data.map(notif => (
        <div key={notif.id}>{notif.title}</div>
      ))}
    </div>
  )
}
```

### React Hook - Dashboard Metrics
```typescript
import { useQuery } from '@tanstack/react-query'
import { dashboardAPI } from '@/api/dashboard'

function DashboardMetrics() {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('week')
  
  const { data: metrics } = useQuery({
    queryKey: ['metrics', period],
    queryFn: () => dashboardAPI.getMetrics(period),
    staleTime: 5 * 60 * 1000, // Cache 5 min
  })

  return (
    <div>
      <div>Sales: {metrics?.total_sales}</div>
      <div>Orders: {metrics?.recent_orders}</div>
      <select value={period} onChange={(e) => setPeriod(e.target.value as any)}>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    </div>
  )
}
```

### WordPress - Create Notification
```php
// In WordPress hooks or custom code
create_notification(
  get_current_user_id(),  // User ID
  'new_sale',             // Notification type
  'New Sale!',            // Title
  'John just bought...',  // Body
  [                       // Data (optional)
    'order_id' => 123,
    'customer_name' => 'John'
  ]
);
```

### WordPress - Get Notifications
```php
// Get all notifications for user
$notifications = get_posts([
    'post_type' => 'notification',
    'numberposts' => 20,
    'meta_query' => [
        [
            'key' => '_user_id',
            'value' => get_current_user_id(),
        ]
    ],
    'orderby' => 'date',
    'order' => 'DESC',
]);

foreach ($notifications as $post) {
    $title = $post->post_title;
    $type = get_post_meta($post->ID, '_notification_type', true);
    $is_read = get_post_meta($post->ID, '_is_read', true);
}
```

---

## File Locations

### Backend
```
wordpress-backend/
├── cpts/
│   ├── notifications.php          ← NEW: Notifications CPT
│   ├── analytics.php              ← Existing: Analytics
│   └── [other CPTs...]
└── functions.php                  ← Auto-loads all CPTs

WordPress (active theme)
├── functions.php                  ← Must have CPT auto-loader
└── cpts/
    └── notifications.php          ← Copy here
```

### Frontend
```
src/
├── api/
│   ├── notifications.ts           ← NEW: Notifications API
│   ├── dashboard.ts               ← UPDATED: Dashboard API
│   └── [other APIs...]
├── components/
│   ├── NotificationBell.tsx       ← NEW: Bell component
│   └── [other components...]
├── pages/
│   └── dashboard/
│       ├── Overview.tsx           ← UPDATED: Dashboard overview
│       └── [other pages...]
└── [other folders...]
```

---

## Environment Variables

### Frontend (.env.local or similar)
```env
NEXT_PUBLIC_API_BASE_URL=https://your-wordpress-site
```

### WordPress (functions.php)
```php
// Allowed frontend origins for CORS
$allowed_origins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://your-frontend-domain.com',
];
```

---

## Common Issues & Quick Fixes

### "Notifications API returns 404"
```bash
# Solution: Flush rewrite rules
wp rewrite flush

# Or in WordPress admin: Settings > Permalinks > Save Changes
```

### "Dashboard shows 0 for all metrics"
```bash
# Solution: Verify orders exist
wp db query "SELECT COUNT(*) FROM wp_posts WHERE post_type='shop_order'"

# Create test order via WooCommerce admin if needed
```

### "NotificationBell not showing"
```bash
# 1. Check import is correct
import NotificationBell from '@/components/NotificationBell'

# 2. Check component is rendered
<NotificationBell />

# 3. Clear cache and restart
npm run dev  # or build and restart
```

### "CORS Error"
```bash
# Solution: Add your domain to allowed_origins in functions.php
$allowed_origins = [
    'https://your-frontend-domain.com',  ← Add this
];

# Then reload WordPress and test
```

---

## Database Queries

### Check Notifications Table
```sql
-- Count notifications
SELECT COUNT(*) as total FROM wp_posts WHERE post_type='notification';

-- Get unread count
SELECT COUNT(*) as unread FROM wp_postmeta 
WHERE meta_key='_is_read' AND meta_value=0;

-- Get by type
SELECT meta_value, COUNT(*) as count FROM wp_postmeta 
WHERE meta_key='_notification_type' 
GROUP BY meta_value;

-- Delete old notifications (>90 days)
DELETE FROM wp_posts WHERE post_type='notification' 
AND post_date < DATE_SUB(NOW(), INTERVAL 90 DAY);
```

### Add Performance Indexes
```sql
-- Add these for better performance
ALTER TABLE wp_postmeta ADD INDEX notification_user (post_id, meta_key, meta_value) 
WHERE meta_key IN ('_user_id', '_is_read');

-- Or individual indexes:
ALTER TABLE wp_postmeta ADD INDEX idx_user_id (meta_key, meta_value) 
WHERE meta_key='_user_id';

ALTER TABLE wp_postmeta ADD INDEX idx_is_read (meta_key, meta_value) 
WHERE meta_key='_is_read';
```

---

## Performance Tuning

### Reduce Notification Polling
```typescript
// In NotificationBell.tsx, line with refetchInterval
refetchInterval: 60000, // Change from 30000 (30s) to 60000 (60s)
```

### Enable Caching
```typescript
// In dashboard.ts
staleTime: 10 * 60 * 1000, // Increase from 5 min to 10 min
gcTime: 15 * 60 * 1000,   // Add garbage collection time
```

### Clear Old Notifications
```bash
# WordPress CLI
wp db query "DELETE FROM wp_posts WHERE post_type='notification' 
AND post_date < DATE_SUB(NOW(), INTERVAL 30 DAY);"
```

---

## Deployment Checklist

```bash
# 1. Backend
[ ] cp wordpress-backend/cpts/notifications.php to theme cpts/
[ ] wp rewrite flush
[ ] wp cache flush
[ ] Verify permissions (755 on PHP files)

# 2. Frontend  
[ ] npm install (if new dependencies)
[ ] npm run build
[ ] Verify .env variables set
[ ] Test API connectivity

# 3. Testing
[ ] Create test order -> notification appears
[ ] Dashboard metrics show real data
[ ] Notification bell updates automatically
[ ] No console errors in DevTools

# 4. Monitoring
[ ] Set up error logging
[ ] Configure performance monitoring
[ ] Document runbooks for common issues
```

---

## API Response Examples

### Notifications Response
```json
{
  "data": [
    {
      "id": 1,
      "title": "New Sale!",
      "body": "John bought something",
      "type": "new_sale",
      "data": {"order_id": 123},
      "is_read": false,
      "created_at": "2026-02-05T10:30:00Z"
    }
  ],
  "total": 42,
  "unread_count": 3
}
```

### Metrics Response
```json
{
  "recent_orders": 15,
  "products_sold": 42,
  "new_customers": 8,
  "website_visits": 1250,
  "total_sales": "245500.00",
  "total_settled": "233225.00",
  "total_owned": "12275.00",
  "offline_sales": 3
}
```

---

## Useful Links

### Documentation
- `IMPLEMENTATION_GUIDE.md` - Full setup guide
- `SETUP_CHECKLIST.md` - Step-by-step checklist
- `API_TESTING_GUIDE.md` - API examples and testing
- `CHANGES_SUMMARY.md` - What was changed

### WordPress
- WooCommerce Docs: https://woocommerce.com/documentation/
- WordPress REST API: https://developer.wordpress.org/rest-api/
- WP-CLI: https://wp-cli.org/

### React/Frontend
- React Query Docs: https://tanstack.com/query/latest
- Next.js Docs: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org/docs/

---

## Support

**If something breaks**:
1. Check browser console for JavaScript errors (F12)
2. Check WordPress error log: `/wp-content/debug.log`
3. Check API responses in Network tab
4. Review `IMPLEMENTATION_GUIDE.md` Troubleshooting section
5. Try database rebuild: `wp rewrite flush && wp cache flush`

**Still stuck**?
- Review the comprehensive documentation files
- Test endpoints with curl (see Testing Commands section)
- Check if WooCommerce/WordPress are up to date

---

**Last Updated**: February 5, 2026  
**Quick Reference v1.0**
