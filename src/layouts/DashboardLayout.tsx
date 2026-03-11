"use client"


import { useAuthStore } from "../store/authStore"
import { authAPI } from "../api/auth"
import { useEffect, useState } from "react"
import Link, { navigate } from "@/components/Link"
import NotificationBell from "@/components/NotificationBell"
// import { canAccessRoute } from "../utils/permissions"

export default function DashboardLayout(props: any) {
  const { currentPageSlug } = props
  const { user, clearAuth } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    authAPI.logout()
    clearAuth()
    navigate("/login")
  }

  const handleNavClick = () => {
    setSidebarOpen(false)
  }

  useEffect(() => {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
    return
  }

  // navigator.serviceWorker.register("/sw.js")
  //   .then(async (registration) => {
  //     const permission = await Notification.requestPermission()
  //     if (permission !== "granted") return

  //     const subscription = await registration.pushManager.subscribe({
  //       userVisibleOnly: true,
  //       applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  //     })

  //     // Send subscription to backend
  //     await fetch("/wp-json/custom/v1/push/subscribe", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify(subscription)
  //     })
  //   })
}, [])

  const navItems = [
    {
      path: "/dashboard",
      label: "Overview",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      path: "/dashboard/availability",
      label: "Availability",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      path: "/dashboard/bookings",
      label: "Bookings",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      path: "/dashboard/settings",
      label: "Settings",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    },
  ]

  const accessibleNavItems = navItems
  // const accessibleNavItems = navItems.filter((item) => canAccessRoute(user, item.path))

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed xl:sticky top-0
    w-64
    bg-white
    border-r border-gray-200
    h-screen
    overflow-y-auto
    transition-transform duration-300
    z-40 xl:z-10
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
  `}
      >
        <div className="p-6 border-b border-gray-200">
          <Link to="/dashboard" className="text-2xl font-bold text-primary-600">
           The Healing Pavilion
          </Link>
          <p className="text-sm text-gray-600 mt-1">Business Dashboard</p>
        </div>

        <nav className="p-4 space-y-1">
          {accessibleNavItems.map((item) => {
            const slug = item.path.replace("/dashboard/", "")
            const isActive =
              item.path === "/dashboard"
                ? currentPageSlug === "dashboard"
                : slug === currentPageSlug
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                  ? "bg-primary-50 text-primary-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 md:px-8 py-4 gap-4">
            {/* Menu button for mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="xl:hidden flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex-1 min-w-0">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
                Welcome back, {user?.displayName || user?.username}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 capitalize">{user?.role}</p>
            </div>

            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              <NotificationBell />
              <Link to="/" className="text-gray-600 hover:text-gray-900 p-2" target="_blank">
                <svg className="w-5 md:w-6 h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </Link>
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className="hidden md:inline">Logout</span>
              </button>
              <button
                onClick={handleLogout}
                className="sm:hidden p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 md:p-8">
          {props.children}
        </main>
      </div>
    </div>
  )
}
