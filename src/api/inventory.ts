import apiClient from "../utils/axios"
import { API_ENDPOINTS } from "../config/api"

export const inventoryAPI = {
  getLowStockAlerts: async (): Promise<
    Array<{
      product_id: number
      name: string
      stock_quantity: number
      threshold: number
    }>
  > => {
    const response = await apiClient.get(`${API_ENDPOINTS.INVENTORY}/alerts`)
    return response.data
  },

  getAll: async (params?: {
    page?: number
    per_page?: number
    stock_status?: string
  }): Promise<
    Array<{
      product_id: number
      name: string
      sku: string
      stock_quantity: number
      low_stock_amount: number
      stock_status: string
    }>
  > => {
    const response = await apiClient.get(API_ENDPOINTS.INVENTORY, {
      params,
    })
    return response.data
  },

  updateStock: async (productId: number, quantity: number): Promise<void> => {
    await apiClient.put(`${API_ENDPOINTS.INVENTORY}/${productId}`, {
      stock_quantity: quantity,
    })
  },
}
