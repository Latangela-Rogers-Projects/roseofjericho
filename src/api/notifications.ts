import apiClient from "../utils/axios"
import { API_BASE_URL } from "../config/api"

export interface Notification {
  id: number
  title: string
  body: string
  type: "low_stock_alert" | "sold_out" | "new_sale" | "milestone" | "first_shipped" | "settlement" | "daily_report" | "product_added"
  data: Record<string, any>
  is_read: boolean
  created_at: string
}

export const notificationsAPI = {
  // Get all notifications
  getAll: async (params?: {
    limit?: number
    offset?: number
    unread_only?: boolean
  }): Promise<{ data: Notification[]; total: number; unread_count: number }> => {
    const response = await apiClient.get(`${API_BASE_URL}/custom/v1/notifications`, {
      params,
    })
    return response.data
  },

  // Mark single notification as read
  markAsRead: async (id: number): Promise<{ success: boolean; notification: Notification }> => {
    const response = await apiClient.post(
      `${API_BASE_URL}/custom/v1/notifications/${id}/read`
    )
    return response.data
  },

  // Mark all notifications as read
  markAllAsRead: async (): Promise<{ success: boolean; marked_count: number }> => {
    const response = await apiClient.post(
      `${API_BASE_URL}/custom/v1/notifications/read-all`
    )
    return response.data
  },

  // Delete notification
  delete: async (id: number): Promise<{ success: boolean }> => {
    const response = await apiClient.delete(
      `${API_BASE_URL}/custom/v1/notifications/${id}`
    )
    return response.data
  },

  // Get notification icon and color based on type
  getNotificationStyle: (type: Notification["type"]) => {
    const styles: Record<Notification["type"], { icon: string; color: string; bgColor: string }> = {
      low_stock_alert: {
        icon: "M12 9v2m-6 4v2m12-6v2M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
      sold_out: {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      new_sale: {
        icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      milestone: {
        icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
      },
      first_shipped: {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      settlement: {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        color: "text-emerald-600",
        bgColor: "bg-emerald-100",
      },
      daily_report: {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
      },
      product_added: {
        icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
        color: "text-cyan-600",
        bgColor: "bg-cyan-100",
      },
    }
    return styles[type]
  },
}
