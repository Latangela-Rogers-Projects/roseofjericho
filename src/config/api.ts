export const API_BASE_URL = "http://localhost/healing-pavilion/wp-json"
export const APP_BASE_URL = "http://localhost/healing-pavilion/"
// export const API_BASE_URL = "https://test-toyfront.top/wp-json"
// export const APP_BASE_URL = "https://test-toyfront.top/"

export const API_ENDPOINTS = {
  // Auth
  AUTH_TOKEN: "/jwt-auth/v1/token",
  AUTH_VALIDATE: "/jwt-auth/v1/token/validate",

  // Products & Collections
  PRODUCTS: "/toyfront/v1/products",
  COLLECTIONS: "/custom/v1/collections",

  // Orders & Customers (Custom Endpoints)
  ORDERS: "/custom/v1/orders",
  ORDERS_PUBLIC: "/custom/v1/orders/public",
  CUSTOMERS: "/custom/v1/customers",
  CAMPAIGNS: "/custom/v1/campaigns",

  // Inventory & Analytics (Custom Endpoints)
  INVENTORY: "/custom/v1/inventory",
  ANALYTICS: "/custom/v1/analytics",

  // Other Custom Endpoints
  SALES_CHANNELS: "/toyfront/v1/sales-channels",
  POS_ORDERS: "/toyfront/v1/pos/orders",
  STAFF: "/toyfront/v1/staff",
  INVENTORY_ALERTS: "/toyfront/v1/inventory/alerts",
  CUSTOMER_GROUPS: "/custom/v1/customer-groups",
} as const
