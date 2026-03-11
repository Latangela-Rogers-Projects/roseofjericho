import apiClient, { publicApiClient } from "../utils/axios"
import { API_ENDPOINTS } from "../config/api"
import type { Product } from "../types"





export const productsAPI = {
  // ======================
  // PUBLIC
  // ======================
  getAll: async (params?: {
    page?: number
    per_page?: number
    search?: string
    category?: number
    stock_status?: "instock" | "outofstock" | "onbackorder"
    exclude?: any
  }): Promise<{ data: Product[]; total: number; totalPages: number }> => {
    const response = await publicApiClient.get(API_ENDPOINTS.PRODUCTS, {
      params,
    })

    // console.log("FETCHED URL:", response.config.url)
    // console.log("BASE URL:", response.config.baseURL)

    return {
      data: response.data,
      total: Number(response.headers["x-wp-total"] || 0),
      totalPages: Number(response.headers["x-wp-totalpages"] || 0),
    }
  },

  getById: async (id: number): Promise<Product> => {
    const response = await publicApiClient.get(API_ENDPOINTS.PRODUCTS, {
      params: { id },
    })
    return response.data
  },

  getBySlug: async (slug: string): Promise<Product> => {
    const response = await publicApiClient.get(API_ENDPOINTS.PRODUCTS, {
      params: { slug },
    })
    return response.data
  },


  // ======================
  // ADMIN (TOKEN REQUIRED)
  // ======================
  create: async (data: Partial<Product>): Promise<Product> => {
    const response = await apiClient.post(API_ENDPOINTS.PRODUCTS, data)
    return response.data
  },

  update: async (id: number, data: Partial<Product>) => {
  const response = await apiClient.put(`${API_ENDPOINTS.PRODUCTS}/${id}`, data);
  return response.data
},

delete: async (id: number) => {
  await apiClient.delete(`${API_ENDPOINTS.PRODUCTS}/${id}`)
},



  // ======================
  // SIDELINED
  // ======================
  getCollections: async (): Promise<
    Array<{
      id: number
      name: string
      description: string
      image_url: string
      product_count: number
      product_ids: number[]
    }>
  > => {
    const response = await apiClient.get(API_ENDPOINTS.COLLECTIONS)
    return response.data
  },

  getCollection: async (id: number): Promise<any> => {
    const response = await apiClient.get(`${API_ENDPOINTS.COLLECTIONS}/${id}`)
    return response.data
  },

  createCollection: async (data: { name: string; description: string; image_id: number[] }): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.COLLECTIONS, data)
    return response.data
  },

  updateCollection: async (
    id: number,
    data: Partial<{ name?: string; description?: string; image_id?: number[] }>,
  ): Promise<any> => {
    const response = await apiClient.put(`${API_ENDPOINTS.COLLECTIONS}/${id}`, data)
    return response.data
  },

  deleteCollection: async (id: number) => {
    await apiClient.delete(`${API_ENDPOINTS.COLLECTIONS}/${id}`)
  },
}
