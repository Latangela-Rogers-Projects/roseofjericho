# Quick Setup Checklist

Complete these steps to fully activate the dashboard metrics and notifications system.

## Pre-Flight Checks

- [ ] WordPress is installed and running
- [ ] WooCommerce plugin is installed and activated
- [ ] REST API is enabled (check Settings > Permalinks)
- [ ] At least one admin user exists in WordPress

## Backend Setup (WordPress)

### Step 1: Copy Notifications File
```bash
# From project root:
cp wordpress-backend/cpts/notifications.php /path/to/wordpress/wp-content/themes/yourtheme/cpts/
```
- [ ] File copied to correct location
- [ ] File is readable (permissions 644 or 755)

### Step 2: Verify CPT Auto-Loading
Check `functions.php` contains:
```php
foreach (glob(get_template_directory() . '/cpts/*.php') as $file) {
    require_once $file;
}
```
- [ ] Auto-loading code present in functions.php

### Step 3: Flush WordPress Rewrite Rules
In WordPress admin:
1. Go to Settings > Permalinks
2. Click "Save Changes" (without changing anything)
- [ ] Rewrite rules flushed

### Step 4: Clear Cache
If using caching plugin:
```bash
wp cache flush
```
- [ ] Cache cleared
- [ ] Redis/Memcached restarted (if applicable)

### Step 5: Verify CORS Configuration
Edit `wordpress-backend/functions.php` and ensure your frontend URL is in allowed_origins:
```php
$allowed_origins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://your-frontend-domain.com',  // <- Add your URL here
];
```
- [ ] Frontend URL added to allowed origins

## Frontend Setup (React/Next.js)

### Step 1: Install Dependencies
```bash
npm install @tanstack/react-query
```
- [ ] Dependencies installed without errors

### Step 2: Update API Files
Copy/update these files:
- [ ] `src/api/notifications.ts` (NEW)
- [ ] `src/api/dashboard.ts` (UPDATED)

### Step 3: Add Notification Bell Component
Copy new component:
- [ ] `src/components/NotificationBell.tsx` (NEW)

### Step 4: Update Dashboard Overview
Update existing file:
- [ ] `src/pages/dashboard/Overview.tsx` (UPDATED)

### Step 5: Add NotificationBell to Layout
Find your dashboard header/layout component and:
1. Import the component: `import NotificationBell from '@/components/NotificationBell'`
2. Add to JSX: `<NotificationBell />`
- [ ] NotificationBell imported in layout
- [ ] NotificationBell rendered in header

### Step 6: Update Environment Variables (if needed)
Verify in `.env` or environment variables:
```
NEXT_PUBLIC_API_BASE_URL=https://your-wordpress-site
```
- [ ] API base URL points to your WordPress instance
- [ ] Frontend can reach WordPress API

## Testing Verification

### Test 1: API Connectivity
```bash
# Test notifications endpoint (replace DOMAIN and TOKEN)
curl "https://DOMAIN/wp-json/custom/v1/notifications" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```
Expected: JSON array with notifications or empty array
- [ ] API returns valid JSON response

### Test 2: Dashboard Metrics
Check browser Network tab in DevTools:
1. Go to Dashboard > Overview
2. Open DevTools (F12) > Network tab
3. Look for request to `/custom/v1/analytics` or `/custom/v1/dashboard-metrics`
4. Response should show metrics like: `recent_orders`, `total_sales`, etc.
- [ ] Metrics API returns data
- [ ] Dashboard displays numbers (not 0s or errors)

### Test 3: Create Test Notification
1. Create a new WooCommerce order
2. Check dashboard - notification bell should show badge
3. Click bell - notification should appear
- [ ] Notification appears in bell
- [ ] Can mark as read
- [ ] Can delete notification

### Test 4: Notification Auto-Refresh
1. Create another order in a different browser/tab
2. Wait 30 seconds
3. Original browser should show updated notification count
- [ ] Auto-refresh working
- [ ] New notifications appear without refresh

## Common Issues & Quick Fixes

### Issue: 404 on /custom/v1/notifications
**Fix**: 
1. Flush WordPress rewrite rules (Settings > Permalinks > Save)
2. Clear browser cache (Ctrl+Shift+Del)
3. Verify notifications.php is in `wp-content/themes/yourtheme/cpts/`

### Issue: 403 Unauthorized
**Fix**:
1. Verify you're logged in (check Auth token)
2. Ensure user has `manage_woocommerce` capability
3. Check CORS allowed origins include your domain

### Issue: Dashboard shows 0 for all metrics
**Fix**:
1. Create test orders in WooCommerce
2. Ensure orders are marked "Completed"
3. Check browser console for API errors
4. Verify user role has `view_woocommerce_reports` capability

### Issue: Notification Bell doesn't appear
**Fix**:
1. Verify component imported in layout
2. Check browser console for JavaScript errors
3. Clear browser cache completely
4. Restart dev server (npm run dev)

## Rollback Plan

If you need to rollback changes:

1. **Remove Notifications CPT**:
   ```bash
   rm /path/to/wordpress/wp-content/themes/yourtheme/cpts/notifications.php
   ```

2. **Restore Original Files**:
   ```bash
   git checkout src/api/dashboard.ts src/pages/dashboard/Overview.tsx
   ```

3. **Remove NotificationBell from Layout** (edit the layout file)

4. **Flush Cache**:
   ```bash
   wp cache flush
   ```

## Security Checklist

- [ ] CORS origins whitelist only includes trusted domains
- [ ] JWT tokens have appropriate expiration times
- [ ] Database backups taken before making changes
- [ ] WordPress admin user has strong password
- [ ] API keys/tokens not committed to version control
- [ ] HTTPS enabled on production

## Performance Checklist

- [ ] Database indexes added for postmeta queries:
  ```sql
  ALTER TABLE wp_postmeta ADD INDEX notification_user (_user_id);
  ALTER TABLE wp_postmeta ADD INDEX notification_type (_notification_type);
  ALTER TABLE wp_postmeta ADD INDEX notification_read (_is_read);
  ```

- [ ] WordPress object cache enabled (Redis recommended)
- [ ] Old notifications (>90 days) archived/cleaned up
- [ ] Notification polling interval appropriate for your use case
- [ ] Frontend bundles minified for production

## Documentation Files

All documentation is in:
- [ ] `IMPLEMENTATION_GUIDE.md` - Detailed implementation info
- [ ] `SETUP_CHECKLIST.md` - This file

## Final Sign-Off

- [ ] All steps completed
- [ ] All tests passing
- [ ] System ready for production use
- [ ] Backups taken
- [ ] Team notified of new features

---

## Quick Reference: Files Changed

### Backend
- **NEW**: `wordpress-backend/cpts/notifications.php`

### Frontend
- **NEW**: `src/api/notifications.ts`
- **NEW**: `src/components/NotificationBell.tsx`
- **UPDATED**: `src/api/dashboard.ts`
- **UPDATED**: `src/pages/dashboard/Overview.tsx`

### Documentation
- **NEW**: `IMPLEMENTATION_GUIDE.md`
- **NEW**: `SETUP_CHECKLIST.md`

---

**Last Updated**: 2/5/2026
**Status**: Production Ready ✅
