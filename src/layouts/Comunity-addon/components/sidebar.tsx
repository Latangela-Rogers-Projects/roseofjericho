"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home,
  Target,
  Calendar,
  Trophy,
  Clock,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Instagram,
  Facebook,
  Youtube,
  BookOpen,
  Video,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { cn } from "../lib/utils"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
}

interface NavGroup {
  id: string
  label: string
  items: NavItem[]
  collapsed?: boolean
}

const mainNavItems: NavItem[] = [
  { id: "feed", label: "Feed", icon: Home },
  { id: "challenges", label: "Challenges", icon: Target },
  { id: "meetups", label: "Meetups", icon: Calendar },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  { id: "scheduled-posts", label: "Scheduled Posts", icon: Clock },
]

const navGroups: NavGroup[] = [
  {
    id: "elevate",
    label: "Elevate Leadership Collective",
    items: [
      { id: "elevate-meetups", label: "Meetups", icon: Calendar },
      { id: "elevate-qa", label: "Q&A", icon: MessageSquare },
    ],
  },
  {
    id: "kingdom",
    label: "Kingdom Ambassadors...",
    items: [
      { id: "kingdom-meetups", label: "Meetups", icon: Calendar },
      { id: "kingdom-qa", label: "Q&A", icon: MessageSquare },
    ],
  },
  {
    id: "empower",
    label: "Empower Ministry Alliance",
    items: [
      { id: "empower-meetups", label: "Meetups", icon: Calendar },
      { id: "empower-qa", label: "Q&A", icon: MessageSquare },
    ],
  },
  {
    id: "outthebox",
    label: "Out The Box For Women",
    items: [],
  },
]

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())

  const toggleGroup = (groupId: string) => {
    const newCollapsed = new Set(collapsedGroups)
    if (newCollapsed.has(groupId)) {
      newCollapsed.delete(groupId)
    } else {
      newCollapsed.add(groupId)
    }
    setCollapsedGroups(newCollapsed)
  }

  return (
    <aside className="w-72 bg-muted/30 border-r flex flex-col">
      {/* Community Info */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate">LaTangela Rogers</h3>
            <div className="flex flex-col gap-1 mt-1">
              <h4 className="font-medium text-xs">The Transformation Collective</h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                Step into The Transformation Collective, where ministry leaders, entrepreneurs, and visionaries come to
                ignite their potential and achieve extraordinary results. Join our empowering community to acces...
              </p>
              <Button variant="link" className="h-auto p-0 text-xs text-primary justify-start">
                Show more
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 mt-3">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Youtube className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="ghost" className="w-full justify-start mt-2 text-xs gap-2">
          <BookOpen className="h-4 w-4" />
          Guidelines
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto p-2">
        {/* Main Navigation */}
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                activeSection === item.id && "bg-primary text-primary-foreground",
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.badge && (
                <span className="ml-auto bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                  {item.badge}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Groups */}
        <div className="mt-6 space-y-2">
          {navGroups.map((group) => (
            <div key={group.id}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                onClick={() => toggleGroup(group.id)}
              >
                {collapsedGroups.has(group.id) ? (
                  <ChevronRight className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
                {group.label}
              </Button>

              <motion.div
                initial={false}
                animate={{
                  height: collapsedGroups.has(group.id) ? 0 : "auto",
                  opacity: collapsedGroups.has(group.id) ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-4 space-y-1">
                  {group.items.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start gap-3 text-sm"
                      onClick={() => onSectionChange(item.id)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </nav>

      {/* Live Section */}
      <div className="p-2 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Video className="h-4 w-4" />
          Live
        </Button>
      </div>
    </aside>
  )
}
