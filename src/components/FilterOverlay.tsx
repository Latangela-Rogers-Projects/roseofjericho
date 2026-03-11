import React from "react"
import { X, Sliders } from "lucide-react"
import { CustomSelect } from "./CustomSelect"
import { CustomMultiSelect } from "./CustomMultiSelect"

interface FilterOverlayProps {
  isOpen: boolean
  onClose: () => void
  filterType: string
  onFilterTypeChange: (value: string) => void
  groupBy: string
  onGroupByChange: (value: string) => void
  sortBy: string
  onSortByChange: (value: string) => void
  selectedTypes: string[]
  onSelectedTypesChange: (values: string[]) => void
  notificationTypes: string[]
  dateRange: { from?: string; to?: string }
  onDateRangeChange: (range: { from?: string; to?: string }) => void
  hasActiveFilters: boolean | any
  onClearFilters: () => void
  onMarkAllAsRead: () => void
  onDeleteAll: () => void
  filteredNotificationsCount: number
  unreadCount: number
}

export function FilterOverlay({
  isOpen,
  onClose,
  filterType,
  onFilterTypeChange,
  groupBy,
  onGroupByChange,
  sortBy,
  onSortByChange,
  selectedTypes,
  onSelectedTypesChange,
  notificationTypes,
  dateRange,
  onDateRangeChange,
  hasActiveFilters,
  onClearFilters,
  onMarkAllAsRead,
  onDeleteAll,
  filteredNotificationsCount,
  unreadCount,
}: FilterOverlayProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl overflow-y-auto animate-in slide-in-from-right-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 px-4 sm:px-6 py-4 border-b border-gray-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Sliders className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Status</label>
            <CustomSelect
              value={filterType}
              onChange={onFilterTypeChange}
              options={[
                { value: "all", label: "All Notifications" },
                { value: "unread", label: "Unread Only" },
                { value: "read", label: "Read Only" },
              ]}
            />
          </div>

          {notificationTypes.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Type</label>
              <CustomMultiSelect
                values={selectedTypes}
                onChange={onSelectedTypesChange}
                options={notificationTypes.map((type) => ({
                  value: type,
                  label: type
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
                }))}
                placeholder="Filter by type"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Group By</label>
            <CustomSelect
              value={groupBy}
              onChange={onGroupByChange}
              options={[
                { value: "date", label: "Group by Date" },
                { value: "type", label: "Group by Type" },
                { value: "none", label: "No Grouping" },
              ]}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Sort By</label>
            <CustomSelect
              value={sortBy}
              onChange={onSortByChange}
              options={[
                { value: "newest", label: "Newest First" },
                { value: "oldest", label: "Oldest First" },
              ]}
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Date Range</label>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">From Date</label>
                <input
                  type="date"
                  value={dateRange.from || ""}
                  onChange={(e) =>
                    onDateRangeChange({ ...dateRange, from: e.target.value })
                  }
                  className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">To Date</label>
                <input
                  type="date"
                  value={dateRange.to || ""}
                  onChange={(e) =>
                    onDateRangeChange({ ...dateRange, to: e.target.value })
                  }
                  className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-3">
            {unreadCount > 0 && (
              <button
                onClick={() => {
                  onMarkAllAsRead()
                  onClose()
                }}
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
              >
                Mark all {filteredNotificationsCount} as read
              </button>
            )}
            <button
              onClick={() => {
                onDeleteAll()
                onClose()
              }}
              className="w-full px-4 py-3 bg-white text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-all font-medium"
            >
              Delete all {filteredNotificationsCount}
            </button>
          </div>

          {hasActiveFilters && (
            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={onClearFilters}
                className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
