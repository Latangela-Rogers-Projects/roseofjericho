"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeConfig {
  primaryColor: string
  accentColor: string
}

interface ThemeContextType {
  theme: Theme
  themeConfig: ThemeConfig
  setTheme: (theme: Theme) => void
  setThemeConfig: (config: ThemeConfig) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const defaultThemeConfig: ThemeConfig = {
  primaryColor: "hsl(262, 83%, 58%)", // Purple from the screenshots
  accentColor: "hsl(262, 83%, 70%)",
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeConfig)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)

    // Apply custom CSS variables for theme colors
    root.style.setProperty("--primary", themeConfig.primaryColor)
    root.style.setProperty("--accent", themeConfig.accentColor)
  }, [theme, themeConfig])

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme, setThemeConfig }}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
