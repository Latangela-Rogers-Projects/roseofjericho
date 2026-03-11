# API Testing & Examples Guide

This guide provides examples and testing procedures for the Notifications and Dashboard APIs.

## Authentication Setup

### Getting a JWT Token

1. **Get your credentials ready**:
   - WordPress username
   - WordPress password

2. **Request JWT token**:
```bash
curl -X POST https://your-domain.com/wp-json/jwt-auth/v1/token \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your-username",
    "password": "your-password"
  }'
```

3. **Response**:
```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user_email": "admin@example.com",
  "user_nicename": "admin",
  "user_display_name": "Admin"
}
```

4. **Save the token** for use in API calls:
```bash
TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
```

---

## Notifications API Testing

### 1. Get All Notifications

**Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/notifications?limit=10&offset=0" \
  -H "Authorization: Bearer $TOKEN"
```

**Query Parameters**:
- `limit`: Number of notifications to return (1-100, default: 50)
- `offset`: Number to skip (for pagination)
- `unread_only`: Boolean - return only unread notifications

**Example with pagination**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/notifications?limit=20&offset=40" \
  -H "Authorization: Bearer $TOKEN"
```

**Example - Only unread**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/notifications?unread_only=true" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
{
  "data": [
    {
      "id": 245,
      "title": "Low Stock Alert!",
      "body": "You only have 3 of 123 Nike Air Max left",
      "type": "low_stock_alert",
      "data": {
        "product_id": 123,
        "product_name": "Nike Air Max",
        "current_stock": 3,
        "threshold": 5
      },
      "is_read": false,
      "created_at": "2026-02-05T10:30:00Z"
    },
    {
      "id": 244,
      "title": "Congrats! You just made a sale!",
      "body": "John Doe just purchased 2 items worth ₦50,000.00 from your website #00995",
      "type": "new_sale",
      "data": {
        "order_id": 9901,
        "order_number": "00995",
        "customer_name": "John Doe",
        "total": "50000.00",
        "item_count": 2
      },
      "is_read": false,
      "created_at": "2026-02-05T09:15:00Z"
    }
  ],
  "total": 45,
  "unread_count": 3
}
```

### 2. Mark Single Notification as Read

**Request**:
```bash
curl -X POST "https://your-domain.com/wp-json/custom/v1/notifications/245/read" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
{
  "success": true,
  "notification": {
    "id": 245,
    "title": "Low Stock Alert!",
    "body": "You only have 3 of 123 Nike Air Max left",
    "type": "low_stock_alert",
    "data": {
      "product_id": 123,
      "product_name": "Nike Air Max",
      "current_stock": 3,
      "threshold": 5
    },
    "is_read": true,
    "created_at": "2026-02-05T10:30:00Z"
  }
}
```

### 3. Mark All Notifications as Read

**Request**:
```bash
curl -X POST "https://your-domain.com/wp-json/custom/v1/notifications/read-all" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
{
  "success": true,
  "marked_count": 3
}
```

### 4. Delete a Notification

**Request**:
```bash
curl -X DELETE "https://your-domain.com/wp-json/custom/v1/notifications/245" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
{
  "success": true
}
```

### 5. Get Only Unread Notifications

**Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/notifications?unread_only=true&limit=100" \
  -H "Authorization: Bearer $TOKEN"
```

**Use Case**: Load unread notifications in notification center on app startup

---

## Dashboard Metrics API Testing

### Get Dashboard Metrics (by Period)

**Base Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics?period=week" \
  -H "Authorization: Bearer $TOKEN"
```

**With Date Range**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics?start_date=2026-02-01&end_date=2026-02-05" \
  -H "Authorization: Bearer $TOKEN"
```

**Period Options**:
- `week` - Last 7 days
- `month` - Last 30 days
- `year` - Last 12 months

**Response (Week)**:
```json
{
  "recent_orders": 12,
  "products_sold": 34,
  "new_customers": 5,
  "website_visits": 892,
  "total_sales": "245500.00",
  "total_settled": "233225.00",
  "total_owned": "12275.00",
  "offline_sales": 2,
  "currency": "NGN"
}
```

**Response (Month)**:
```json
{
  "recent_orders": 45,
  "products_sold": 127,
  "new_customers": 18,
  "website_visits": 3250,
  "total_sales": "1250000.00",
  "total_settled": "1187500.00",
  "total_owned": "62500.00",
  "offline_sales": 8,
  "currency": "NGN"
}
```

---

## Related Analytics Endpoints

### Get Revenue Data

**Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics/revenue?period=week" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
[
  {
    "label": "2026-02-01",
    "revenue": 50000
  },
  {
    "label": "2026-02-02",
    "revenue": 75000
  },
  {
    "label": "2026-02-03",
    "revenue": 45000
  },
  {
    "label": "2026-02-04",
    "revenue": 65000
  },
  {
    "label": "2026-02-05",
    "revenue": 55000
  }
]
```

### Get Top Products

**Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics/top-products?limit=5" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
[
  {
    "id": 123,
    "name": "Nike Air Max",
    "quantity": 45,
    "revenue": 450000
  },
  {
    "id": 124,
    "name": "Adidas Ultraboost",
    "quantity": 32,
    "revenue": 320000
  },
  {
    "id": 125,
    "name": "Puma RS-X",
    "quantity": 28,
    "revenue": 280000
  }
]
```

### Get Top Customers

**Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics/top-customers?limit=10" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
[
  {
    "id": 5,
    "name": "John Doe",
    "email": "john@example.com",
    "total_spent": 250000,
    "order_count": 5
  },
  {
    "id": 6,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "total_spent": 180000,
    "order_count": 4
  }
]
```

### Get Sales by Channel

**Request**:
```bash
curl -X GET "https://your-domain.com/wp-json/custom/v1/analytics/sales-by-channel?period=month" \
  -H "Authorization: Bearer $TOKEN"
```

**Response**:
```json
[
  {
    "channel": "website",
    "orders": 42,
    "revenue": 1200000
  },
  {
    "channel": "pos",
    "orders": 8,
    "revenue": 250000
  }
]
```

---

## Testing in Postman

### 1. Create Environment

```json
{
  "name": "E-Commerce API",
  "values": [
    {
      "key": "base_url",
      "value": "https://your-domain.com",
      "enabled": true
    },
    {
      "key": "token",
      "value": "YOUR_JWT_TOKEN_HERE",
      "enabled": true
    }
  ]
}
```

### 2. Get Notifications Collection

**Collection Requests**:

| Name | Method | URL |
|------|--------|-----|
| Get All Notifications | GET | `{{base_url}}/wp-json/custom/v1/notifications` |
| Get Unread Only | GET | `{{base_url}}/wp-json/custom/v1/notifications?unread_only=true` |
| Mark as Read | POST | `{{base_url}}/wp-json/custom/v1/notifications/{{notif_id}}/read` |
| Mark All Read | POST | `{{base_url}}/wp-json/custom/v1/notifications/read-all` |
| Delete | DELETE | `{{base_url}}/wp-json/custom/v1/notifications/{{notif_id}}` |

### 3. Dashboard Metrics Collection

| Name | Method | URL |
|------|--------|-----|
| Week Metrics | GET | `{{base_url}}/wp-json/custom/v1/analytics?period=week` |
| Month Metrics | GET | `{{base_url}}/wp-json/custom/v1/analytics?period=month` |
| Year Metrics | GET | `{{base_url}}/wp-json/custom/v1/analytics?period=year` |
| Revenue | GET | `{{base_url}}/wp-json/custom/v1/analytics/revenue` |
| Top Products | GET | `{{base_url}}/wp-json/custom/v1/analytics/top-products?limit=10` |
| Top Customers | GET | `{{base_url}}/wp-json/custom/v1/analytics/top-customers?limit=10` |
| Sales by Channel | GET | `{{base_url}}/wp-json/custom/v1/analytics/sales-by-channel` |

### 4. Common Headers

Add to all requests:
```
Authorization: Bearer {{token}}
Content-Type: application/json
```

---

## Frontend Integration Examples

### React Query Example

```typescript
import { useQuery } from '@tanstack/react-query'
import { notificationsAPI } from '@/api/notifications'

export function NotificationCenter() {
  // Fetch notifications every 30 seconds
  const { data, isLoading, error } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => notificationsAPI.getAll({ limit: 50 }),
    refetchInterval: 30000,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>Notifications ({data?.unread_count || 0} unread)</h2>
      {data?.data.map(notif => (
        <div key={notif.id}>
          <h3>{notif.title}</h3>
          <p>{notif.body}</p>
        </div>
      ))}
    </div>
  )
}
```

### Dashboard Metrics Example

```typescript
import { useQuery } from '@tanstack/react-query'
import { dashboardAPI } from '@/api/dashboard'

export function DashboardMetrics() {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('week')

  const { data: metrics, isLoading } = useQuery({
    queryKey: ['metrics', period],
    queryFn: () => dashboardAPI.getMetrics(period),
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div>Recent Orders: {metrics?.recent_orders}</div>
      <div>Products Sold: {metrics?.products_sold}</div>
      <div>Total Sales: ₦{metrics?.total_sales}</div>
      
      <select value={period} onChange={(e) => setPeriod(e.target.value as any)}>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
      </select>
    </div>
  )
}
```

---

## Troubleshooting API Responses

### 401 Unauthorized

**Cause**: Invalid or expired token
**Solution**:
```bash
# Get new token
curl -X POST https://your-domain.com/wp-json/jwt-auth/v1/token \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password"}'
```

### 403 Forbidden

**Cause**: User lacks required permissions
**Solution**:
1. Ensure user has admin or shop_manager role
2. Verify user can access WooCommerce reports
3. Check user capabilities in WordPress admin

### 404 Not Found

**Cause**: Endpoint doesn't exist or URL is wrong
**Solution**:
1. Verify notifications.php is in cpts/ directory
2. Check URL exactly matches endpoint
3. Flush WordPress rewrite rules

### 500 Internal Server Error

**Cause**: Server-side error
**Solution**:
1. Check WordPress error logs: `/wp-content/debug.log`
2. Ensure WooCommerce is active
3. Verify PHP version compatibility

### Empty Response

**Cause**: No data matches query
**Solution**:
1. Verify test data exists (orders, products)
2. Check date range is correct
3. Ensure user has permission to view data

---

## Performance Testing

### Load Test Notifications

```bash
# Test 100 requests
for i in {1..100}; do
  curl -s -X GET "https://your-domain.com/wp-json/custom/v1/notifications" \
    -H "Authorization: Bearer $TOKEN" \
    > /dev/null
done
echo "100 requests completed"
```

### Monitor Response Time

```bash
curl -w "Time: %{time_total}s\n" \
  -X GET "https://your-domain.com/wp-json/custom/v1/notifications" \
  -H "Authorization: Bearer $TOKEN"
```

**Expected**: < 100ms for notifications, < 500ms for analytics

---

## Common Use Cases

### Use Case 1: Load Unread Notifications on App Start

```bash
curl -X GET "https://domain.com/wp-json/custom/v1/notifications?unread_only=true&limit=50" \
  -H "Authorization: Bearer $TOKEN"
```

### Use Case 2: Get Sales for Last 30 Days

```bash
curl -X GET "https://domain.com/wp-json/custom/v1/analytics?period=month" \
  -H "Authorization: Bearer $TOKEN"
```

### Use Case 3: Find Top 5 Performing Products

```bash
curl -X GET "https://domain.com/wp-json/custom/v1/analytics/top-products?limit=5" \
  -H "Authorization: Bearer $TOKEN"
```

### Use Case 4: Get Monthly Revenue Chart Data

```bash
curl -X GET "https://domain.com/wp-json/custom/v1/analytics/revenue?period=monthly&start_date=2026-01-01&end_date=2026-02-05" \
  -H "Authorization: Bearer $TOKEN"
```

---

## Rate Limiting (If Enabled)

Default: No rate limiting
If you add rate limiting in the future:
- Notifications: 60 requests/minute
- Analytics: 30 requests/minute

Monitor `X-RateLimit-*` headers in response.

---

**Last Updated**: 2/5/2026
**API Version**: v1
