import apiClient from "../utils/axios"
import { API_ENDPOINTS } from "../config/api"
import type { Order } from "../types"

export const ordersAPI = {
  getAll: async (params?: {
    page?: number
    per_page?: number
    status?: string
    customer?: number
    after?: string
    before?: string
    orderby?: string
    channel?: string
  }): Promise<{ data: Order[]; total: number; totalPages: number }> => {
    const response = await apiClient.get(API_ENDPOINTS.ORDERS, {
      params,
    })

    return {
      data: response.data.data,
      total: Number.parseInt(response.headers["x-wp-total"] || "0"),
      totalPages: Number.parseInt(response.headers["x-wp-totalpages"] || "0"),
    }
  },

  getById: async (id: number): Promise<Order> => {
    const response = await apiClient.get(`${API_ENDPOINTS.ORDERS}/${id}`)
    return response.data
  },

  create: async (orderData: {
    customer_id: number
    line_items: Array<{ product_id: number; quantity: number }>
    billing?: any
    shipping?: any
    payment_method?: string
    payment_method_title?: string
    set_paid?: boolean
    meta_data?: Array<{ key: string; value: string }>
  }): Promise<Order> => {
    const response = await apiClient.post(API_ENDPOINTS.ORDERS, orderData)
    return response.data
  },

  update: async (id: number, orderData: Partial<Order>): Promise<Order> => {
    const response = await apiClient.put(`${API_ENDPOINTS.ORDERS}/${id}`, orderData)
    return response.data
  },

  updateStatus: async (id: number, status: Order["status"]): Promise<Order> => {
    const response = await apiClient.put(`${API_ENDPOINTS.ORDERS}/${id}`, { status })
    return response.data
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`${API_ENDPOINTS.ORDERS}/${id}`)
  },
}
