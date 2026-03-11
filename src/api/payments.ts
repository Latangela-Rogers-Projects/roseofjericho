import apiClient, { publicApiClient } from "../utils/axios"
import { API_BASE_URL, API_ENDPOINTS } from "../config/api"
import { Order } from "@/types"

export const paymentsAPI = {
  // Initialize payment for order
  initializePayment: async (orderId: number, paymentMethod: string, amount: number) => {
    const response = await apiClient.post(`${API_BASE_URL}/toyfront/v1/orders/${orderId}/payment`, {
      payment_method: paymentMethod,
    })
    console.log("Payment initialization response:", response.data)
    return response.data
  },
  // Verify payment status (Paystack or other online gateway)
  verifyPayment: async (reference: string) => {
    const response = await apiClient.post(`${API_BASE_URL}/toyfront/v1/payments/verify`, {
      reference,
    })
    console.log("Payment verification response:", response.data)
    return response.data
  },

  // Mark order as paid in WooCommerce (used after verification)
  markOrderPaid: async (orderId: number, verificationData?: any) => {
    const response = await apiClient.post(
      `${API_BASE_URL}/toyfront/v1/orders/${orderId}/confirm-payment`,
      verificationData || {}
    );
    console.log("Mark order paid response:", response.data);
    return response.data;
  },

  fetchPaymentMethods: async () => {
    try {
      const res = await apiClient.get('/toyfront/v1/payment-methods');
      const methods = res.data.filter((m: any) => m.enabled) || [];
      return methods;
    } catch (err) {
      console.error('Error fetching payment methods:', err);
      return [];
    }
  },
  confirmOfflinePayment: async (orderId: number) => {
    const response = await apiClient.post(`${API_BASE_URL}/toyfront/v1/orders/${orderId}/confirm-payment`)
    return response.data
  },
  createPublicOrder: async (orderData: {
    customer_id: number
    line_items: Array<{ product_id: number; quantity: number }>
    billing?: any
    shipping?: any
    payment_method?: string
    payment_method_title?: string
    set_paid?: boolean
    meta_data?: Array<{ key: string; value: string }>
  }): Promise<Order> => {
    const response = await publicApiClient.post(API_ENDPOINTS.ORDERS_PUBLIC, orderData)
    return response.data
  },
}
