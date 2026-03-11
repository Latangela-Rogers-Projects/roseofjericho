"use client"

import { useQuery } from "@tanstack/react-query"
import { analyticsAPI } from "../../api/analytics"
import { dashboardAPI } from "../../api/dashboard"
import { ordersAPI } from "../../api/orders"
import Link from "@/components/Link"
import { useState } from "react"
// import { formatCurrency } from "../../utils/currency"
// import { formatNumberCurrency } from "../../utils/currency" // Declare the variable here


const formatCurrency = (amount: string | number): string => {
  const num = typeof amount === "string" ? parseFloat(amount) : amount
  return num.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

const formatNumberCurrency = (amount: string | number): string => {
  const num = typeof amount === "string" ? parseFloat(amount) : amount
  return num.toLocaleString("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}


export default function Overview() {
  const [period, setPeriod] = useState<"week" | "month" | "year">("week")

  const { data: metrics, isLoading: metricsLoading } = useQuery({
    queryKey: ["dashboard-metrics", period],
    queryFn: () => dashboardAPI.getMetrics(period),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  const { data: recentOrders, isLoading: ordersLoading } = useQuery({
    queryKey: ["recent-orders", period],
    queryFn: () => ordersAPI.getAll({ per_page: 5, orderby: "date" }),
    staleTime: 5 * 60 * 1000,
  })

  const { data: topProducts, isLoading: productsLoading } = useQuery({
    queryKey: ["top-products", period],
    queryFn: () => analyticsAPI.getTopProducts({ limit: 5 }),
    staleTime: 5 * 60 * 1000,
  })

  const overviewWidgets = [
    {
      label: "Recent Orders",
      value: metrics?.recent_orders || 0,
      loading: metricsLoading,
      color: "text-green-600",
      bgColor: "bg-green-100/50",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      label: "Products Sold",
      value: metrics?.products_sold || 0,
      loading: metricsLoading,
      color: "text-blue-600",
      bgColor: "bg-blue-100/50",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
      label: "New Customers",
      value: metrics?.new_customers || 0,
      loading: metricsLoading,
      color: "text-amber-600",
      bgColor: "bg-amber-100/50",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      label: "Website Visits",
      value: metrics?.website_visits || 0,
      loading: metricsLoading,
      color: "text-primary-600",
      bgColor: "bg-primary-100/50",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ]

  const salesWidgets = [
    {
      label: "Total Sales",
      value: `₦${formatCurrency(metrics?.total_sales || 0)}`,
      loading: metricsLoading,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      label: "Total Settled",
      value: `₦${formatCurrency(metrics?.total_settled || 0)}`,
      loading: metricsLoading,
      color: "text-green-600",
      bgColor: "bg-green-100",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      label: "Total Owned",
      value: `₦${formatCurrency(metrics?.total_owned || 0)}`,
      loading: metricsLoading,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      label: "Offline Sales",
      value: metrics?.offline_sales || 0,
      loading: metricsLoading,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M19 11v-3a4 4 0 00-4-4h-2a4 4 0 00-4 4v3",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm md:text-base text-gray-600">Monitor your business performance at a glance</p>
      </div>

      {/* Overview Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {overviewWidgets.map((widget) => (
          <div key={widget.label} className={`card flex rounded-xl border-white/0 shadow-lg ${widget.bgColor}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className={`w-5 md:w-6 h-5 md:h-6 ${widget.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={widget.icon} />
                </svg>
              </div>
            </div>
            <div className="ml-2">
              <p className="text-gray-600 text-xs md:text-sm mb-1 truncate">{widget.label}</p>
              {widget.loading ? (
                <div className="h-6 w-16 bg-gray-300 rounded animate-pulse"></div>
              ) : (
                <p className="text-xl md:text-3xl font-bold text-gray-900 truncate">{widget.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Sales Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-6">
        <div className="lg:col-span-3 bg-gray-100 p-3 md:p-6 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {salesWidgets.map((widget) => (
              <div key={widget.label}>
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div className={`w-10 md:w-12 h-10 md:h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-5 md:w-6 h-5 md:h-6 ${widget.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={widget.icon} />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-1 truncate">{widget.label}</p>
                {widget.loading ? (
                  <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
                ) : (
                  <p className="text-lg md:text-2xl font-bold truncate">{widget.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-3 md:p-6 rounded-xl">
          <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Period</label>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as "week" | "month" | "year")}
            className="input w-full"
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>

      {/* Data Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Recent Orders */}
        <div className="card overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h2 className="text-lg md:text-xl font-bold">Recent Orders</h2>
            <Link to="/dashboard/orders" className="text-primary-600 hover:text-primary-700 text-xs md:text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-3 md:space-y-4">
            {ordersLoading ? (
              <>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="pb-3 md:pb-4 border-b">
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-32"></div>
                  </div>
                ))}
              </>
            ) : recentOrders?.data && recentOrders.data.length > 0 ? (
              recentOrders.data.map((order) => (
                <div key={order.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 md:pb-4 border-b last:border-b-0 gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base">#{order.number}</p>
                    <p className="text-xs md:text-sm text-gray-600 truncate">
                      {order.billing?.first_name || "—"} {order.billing?.last_name || ""}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-sm md:text-base">₦{formatCurrency(order.total)}</p>
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded-full ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "processing"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No recent orders</p>
            )}
          </div>
        </div>

        {/* Top Products */}
        <div className="card overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h2 className="text-lg md:text-xl font-bold">Top Products</h2>
            <Link to="/dashboard/products" className="text-primary-600 hover:text-primary-700 text-xs md:text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-3 md:space-y-4">
            {productsLoading ? (
              <>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="pb-3 md:pb-4 border-b">
                    <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>
                ))}
              </>
            ) : topProducts && topProducts.length > 0 ? (
              topProducts.map((product) => (
                <div key={product.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 md:pb-4 border-b last:border-b-0 gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm md:text-base truncate">{product.name}</p>
                    <p className="text-xs md:text-sm text-gray-600">{product.quantity} sold</p>
                  </div>
                  <p className="font-semibold text-primary-600 text-sm md:text-base flex-shrink-0">₦{formatNumberCurrency(product.revenue)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No products sold in this period</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
