import apiClient from "../utils/axios"
import { API_ENDPOINTS } from "../config/api"
import type { Campaign } from "../types"

export const campaignsAPI = {
  getAll: async (params?: {
    page?: number
    per_page?: number
  }): Promise<{ data: Campaign[]; total: number }> => {
    const response = await apiClient.get(API_ENDPOINTS.CAMPAIGNS, {
      params,
    })

    return {
      data: response.data.data,
      total: Number.parseInt(response.headers["x-wp-total"] || "0"),
    }
  },

  getById: async (id: number): Promise<Campaign> => {
    const response = await apiClient.get(`${API_ENDPOINTS.CAMPAIGNS}/${id}`)
    return response.data
  },

  create: async (campaignData: {
    code: string
    type: any
    amount: string
    date_expires?: string
    usage_limit?: number
    title?: string
  }): Promise<Campaign> => {
    const response = await apiClient.post(API_ENDPOINTS.CAMPAIGNS, campaignData)
    return response.data
  },

  update: async (id: number, campaignData: Partial<Campaign>): Promise<Campaign> => {
    const response = await apiClient.put(`${API_ENDPOINTS.CAMPAIGNS}/${id}`, campaignData)
    return response.data
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`${API_ENDPOINTS.CAMPAIGNS}/${id}`)
  },

  getPerformance: async (
    id: number,
  ): Promise<{
    total_usage: number
    total_revenue: string
    orders: number
  }> => {
    const response = await apiClient.get(`${API_ENDPOINTS.CAMPAIGNS}/${id}/performance`)
    return response.data
  },
}
