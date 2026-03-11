import apiClient from "../utils/axios"
import { API_ENDPOINTS } from "../config/api"
import type { AnalyticsData } from "../types"

export const analyticsAPI = {
  getOverview: async (params?: {
    period?: "today" | "week" | "month" | "year"
  start_date?: string
  end_date?: string
  }): Promise<AnalyticsData> => {
    const response = await apiClient.get(API_ENDPOINTS.ANALYTICS, {
      params,
    })
    return response.data
  },

  getRevenue: async (params?: {
    period?: "today" | "week" | "month" | "year"
    start_date?: string
    end_date?: string
  }): Promise<
    Array<{
      label: string
      revenue: number
    }>
  > => {
    const response = await apiClient.get(`${API_ENDPOINTS.ANALYTICS}/revenue`, {
      params,
    })
    return response.data
  },

  getTopProducts: async (params?: {
    limit?: number
    start_date?: string
    end_date?: string
  }): Promise<
    Array<{
      id: number
      name: string
      quantity: number
      revenue: number
    }>
  > => {
    const response = await apiClient.get(`${API_ENDPOINTS.ANALYTICS}/top-products`, {
      params,
    })
    return response.data
  },

  getTopCustomers: async (params?: {
    limit?: number
  }): Promise<
    Array<{
      id: number
      name: string
      email: string
      total_spent: number
      order_count: number
    }>
  > => {
    const response = await apiClient.get(`${API_ENDPOINTS.ANALYTICS}/top-customers`, {
      params,
    })
    return response.data
  },

  getSalesByChannel: async (params?: {
    period?: "today" | "week" | "month" | "year"
    start_date?: string
    end_date?: string
  }): Promise<
    Array<{
      channel: string
      orders: number
      revenue: number
    }>
  > => {
    const response = await apiClient.get(
      `${API_ENDPOINTS.ANALYTICS}/sales-by-channel`,
      { params }
    )
    return response.data
  },

  getCustomerGrowth: async (params?: {
    period?: "today" | "week" | "month" | "year"
  }): Promise<{
    labels: string[]
    data: number[]
  }> => {
    const response = await apiClient.get(
      `${API_ENDPOINTS.ANALYTICS}/customer-growth`,
      { params }
    )
    return response.data
  },
}
