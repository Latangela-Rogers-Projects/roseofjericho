"use client"

import React, { useState, useMemo } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { notificationsAPI, type Notification } from "../api/notifications"
import { FilterOverlay } from "./FilterOverlay"
import { X, Search, Sliders } from "lucide-react"

interface NotificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

type FilterType = "all" | "unread" | "read"
type GroupBy = "date" | "type" | "none"
type SortBy = "newest" | "oldest"

export default function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<FilterType>("all")
  const [groupBy, setGroupBy] = useState<GroupBy>("date")
  const [sortBy, setSortBy] = useState<SortBy>("newest")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [dateRange, setDateRange] = useState<{ from?: string; to?: string }>({})
  const [isFilterOverlayOpen, setIsFilterOverlayOpen] = useState(false)
  const queryClient = useQueryClient()

  const { data: notificationsData, isLoading } = useQuery({
    queryKey: ["notifications-all"],
    queryFn: () => notificationsAPI.getAll({ limit: 1000 }),
    enabled: isOpen,
  })

  const allNotifications = notificationsData?.data || []

  const markAsReadMutation = useMutation({
    mutationFn: (id: number) => notificationsAPI.markAsRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
      queryClient.invalidateQueries({ queryKey: ["notifications-all"] })
    },
  })

  const deleteNotificationMutation = useMutation({
    mutationFn: (id: number) => notificationsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
      queryClient.invalidateQueries({ queryKey: ["notifications-all"] })
    },
  })

  const markAllAsReadMutation = useMutation({
    mutationFn: () => notificationsAPI.markAllAsRead(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
      queryClient.invalidateQueries({ queryKey: ["notifications-all"] })
    },
  })

  const deleteAllMutation = useMutation({
    mutationFn: async () => {
      for (const notification of filteredNotifications) {
        await notificationsAPI.delete(notification.id)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] })
      queryClient.invalidateQueries({ queryKey: ["notifications-all"] })
    },
  })

  const notificationTypes = useMemo(() => {
    const types = new Set(allNotifications.map((n) => n.type))
    return Array.from(types).sort()
  }, [allNotifications])

  const filteredNotifications = useMemo(() => {
    let filtered = [...allNotifications]

    if (filterType === "unread") {
      filtered = filtered.filter((n) => !n.is_read)
    } else if (filterType === "read") {
      filtered = filtered.filter((n) => n.is_read)
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((n) => selectedTypes.includes(n.type))
    }

    if (dateRange.from || dateRange.to) {
      filtered = filtered.filter((n) => {
        const date = new Date(n.created_at)
        if (dateRange.from) {
          const fromDate = new Date(dateRange.from)
          if (date < fromDate) return false
        }
        if (dateRange.to) {
          const toDate = new Date(dateRange.to)
          toDate.setHours(23, 59, 59, 999)
          if (date > toDate) return false
        }
        return true
      })
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(query) ||
          n.body.toLowerCase().includes(query)
      )
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return sortBy === "newest" ? dateB - dateA : dateA - dateB
    })

    return filtered
  }, [allNotifications, filterType, selectedTypes, dateRange, searchQuery, sortBy])

  const groupedNotifications = useMemo(() => {
    if (groupBy === "none") {
      return { all: filteredNotifications }
    }

    if (groupBy === "type") {
      const groups: { [key: string]: Notification[] } = {}
      filteredNotifications.forEach((n) => {
        if (!groups[n.type]) groups[n.type] = []
        groups[n.type].push(n)
      })
      return groups
    }

    const groups: { [key: string]: Notification[] } = {}
    filteredNotifications.forEach((n) => {
      const date = new Date(n.created_at)
      const today = new Date()
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)

      let dateLabel: string
      if (date.toDateString() === today.toDateString()) {
        dateLabel = "Today"
      } else if (date.toDateString() === yesterday.toDateString()) {
        dateLabel = "Yesterday"
      } else if (date.getTime() > today.getTime() - 7 * 24 * 60 * 60 * 1000) {
        dateLabel = "This Week"
      } else if (date.getTime() > today.getTime() - 30 * 24 * 60 * 60 * 1000) {
        dateLabel = "This Month"
      } else {
        dateLabel = date.toLocaleDateString()
      }

      if (!groups[dateLabel]) groups[dateLabel] = []
      groups[dateLabel].push(n)
    })
    return groups
  }, [filteredNotifications, groupBy])

  const unreadCount = allNotifications.filter((n) => !n.is_read).length

  if (!isOpen) return null

  const hasActiveFilters =
    searchQuery || filterType !== "all" || selectedTypes.length > 0 || dateRange.from || dateRange.to

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-end md:items-center md:justify-center backdrop-blur-sm">
      <div className="h-screen md:h-auto md:max-h-[90vh] w-full md:w-full md:max-w-4xl bg-white rounded-none md:rounded-xl shadow-2xl flex flex-col">
        <div className="flex-shrink-0 px-4 sm:px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">All Notifications</h2>
            <p className="text-sm text-gray-600 mt-1">
              {filteredNotifications.length} notification{filteredNotifications.length !== 1 ? "s" : ""}
              {unreadCount > 0 && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {unreadCount} unread
                </span>
              )}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-shrink-0 px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={() => setIsFilterOverlayOpen(true)}
              className={`p-2.5 rounded-lg transition-all font-medium flex items-center gap-2 whitespace-nowrap ${
                hasActiveFilters
                  ? "bg-primary-600 text-white hover:bg-primary-700 shadow-sm"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Filters</span>
              {hasActiveFilters && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-white text-primary-600 rounded-full ml-1">
                  {[filterType !== "all" ? 1 : 0, selectedTypes.length > 0 ? 1 : 0, dateRange.from || dateRange.to ? 1 : 0].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-10 w-10 border-3 border-gray-200 border-t-primary-600 mb-4"></div>
                <p className="text-gray-600 font-medium">Loading notifications...</p>
              </div>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-1.414 0l-2.414-2.414a1 1 0 00-.707-.293h-2.586"
                    />
                  </svg>
                </div>
                <p className="text-gray-900 font-semibold text-lg">No notifications found</p>
                <p className="text-gray-500 text-sm mt-1">Try adjusting your filters</p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {Object.entries(groupedNotifications).map(([groupLabel, notifications]) => (
                <div key={groupLabel}>
                  {groupBy !== "none" && (
                    <div className="sticky top-0 px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 z-10 backdrop-blur-sm bg-opacity-95">
                      <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        {groupLabel}
                      </h3>
                    </div>
                  )}

                  {notifications.map((notification) => (
                    <NotificationItemFull
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={() => {
                        if (!notification.is_read) {
                          markAsReadMutation.mutate(notification.id)
                        }
                      }}
                      onDelete={() => deleteNotificationMutation.mutate(notification.id)}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <FilterOverlay
          isOpen={isFilterOverlayOpen}
          onClose={() => setIsFilterOverlayOpen(false)}
          filterType={filterType}
          onFilterTypeChange={(value) => setFilterType(value as FilterType)}
          groupBy={groupBy}
          onGroupByChange={(value) => setGroupBy(value as GroupBy)}
          sortBy={sortBy}
          onSortByChange={(value) => setSortBy(value as SortBy)}
          selectedTypes={selectedTypes}
          onSelectedTypesChange={setSelectedTypes}
          notificationTypes={notificationTypes}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={() => {
            setSearchQuery("")
            setFilterType("all")
            setSelectedTypes([])
            setDateRange({})
          }}
          onMarkAllAsRead={() => markAllAsReadMutation.mutate()}
          onDeleteAll={() => deleteAllMutation.mutate()}
          filteredNotificationsCount={filteredNotifications.length}
          unreadCount={unreadCount}
        />
      </div>
    </div>
  )
}

interface NotificationItemFullProps {
  notification: Notification
  onMarkAsRead: () => void
  onDelete: () => void
}

function NotificationItemFull({
  notification,
  onMarkAsRead,
  onDelete,
}: NotificationItemFullProps) {
  const style = notificationsAPI.getNotificationStyle(notification.type)

  return (
    <div
      className={`px-4 sm:px-6 py-4 hover:bg-gray-50 cursor-pointer transition-all border-l-4 ${
        !notification.is_read ? "bg-blue-50 border-l-primary-500" : "border-l-transparent"
      }`}
      onClick={onMarkAsRead}
    >
      <div className="flex gap-4">
        <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${style.bgColor} shadow-sm`}>
          <svg
            className={`w-5 h-5 ${style.color}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={style.icon}
            />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm sm:text-base font-medium ${
                  notification.is_read ? "text-gray-700" : "text-gray-900 font-semibold"
                }`}
              >
                {notification.title}
              </p>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{notification.body}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-flex items-center px-2.5 py-1 text-xs bg-gray-100 text-gray-700 rounded-md font-medium">
                  {formatNotificationType(notification.type)}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 text-xs text-gray-600 font-medium">
                  {formatDate(notification.created_at)}
                </span>
                {!notification.is_read && (
                  <span className="inline-flex items-center px-2.5 py-1 text-xs bg-blue-100 text-blue-700 rounded-md font-semibold">
                    Unread
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              {!notification.is_read && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onMarkAsRead()
                  }}
                  className="px-3 py-1.5 text-xs bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all font-medium shadow-sm"
                  title="Mark as read"
                >
                  Mark read
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete()
                }}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                title="Delete"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return "just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString()
}

function formatNotificationType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
