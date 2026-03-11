import apiClient from "../utils/axios"
import { API_ENDPOINTS } from "../config/api"

export interface DashboardMetrics {
  recent_orders: number
  products_sold: number
  new_customers: number
  website_visits: number
  total_sales: number
  total_settled: number
  total_owned: number
  offline_sales: number
}

export const dashboardAPI = {
  // Fetch metrics from backend dashboard-metrics endpoint
  getMetrics: async (period: "week" | "month" | "year" = "week"): Promise<DashboardMetrics> => {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.ANALYTICS}/dashboard-metrics`, {
        params: { period },
      })
      console.log("Dashboard metrics response:", response.data)
      return response.data
    } catch (error) {
      console.error("[Dashboard] Error fetching metrics:", error)
      // Return empty metrics on error
      return {
        recent_orders: 0,
        products_sold: 0,
        new_customers: 0,
        website_visits: 0,
        total_sales: 0,
        total_settled: 0,
        total_owned: 0,
        offline_sales: 0,
      }
    }
  },
}
