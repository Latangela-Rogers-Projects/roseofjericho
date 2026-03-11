import type React from "react"
import { useAuthStore } from "../store/authStore"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles?: string[]
  requiredPermissions?: string[]
}

export default function ProtectedRoute({
  children,
  requiredRoles,
  requiredPermissions,
}: ProtectedRouteProps) {
  const store = useAuthStore()
  const hasHydrated = useAuthStore.persist.hasHydrated()

  if (!hasHydrated) {
    return <div>Loading</div> // or loading spinner
  }

  if (!store.isAuthenticated) {
      window.location.replace("/login")
  }

  if (requiredRoles?.length && !requiredRoles.some(store.hasRole)) {
      window.location.replace("/unauthorized")
  }

  if (requiredPermissions?.length && !store.hasAnyPermission(requiredPermissions)) {
      window.location.replace("/unauthorized")
  }

  return <>{children}</>
}
