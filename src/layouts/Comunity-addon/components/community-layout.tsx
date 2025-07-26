"use client"

import type React from "react"

import { useState } from "react"
import { Search, Bell, MessageSquare, ChevronLeft, MoreHorizontal } from "lucide-react"
import { Button } from "../components/ui/button"
import { Sidebar } from "../components/sidebar"
import { RightPanel } from "../components/right-panel"
import { SearchModal } from "../components/modals/search-modal"
import { NotificationsModal } from "../components/modals/notifications-modal"
import { MessagesModal } from "../components/modals/messages-modal"
import { ProfileDropdown } from "../components/profile-dropdown"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"

interface CommunityLayoutProps {
  children: React.ReactNode
  activeSection: string
  onSectionChange: (section: string) => void
}

export function CommunityLayout({ children, activeSection, onSectionChange }: CommunityLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [messagesOpen, setMessagesOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const updateURL = (section: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set("section", section)
    window.history.pushState({}, "", url.toString())
    onSectionChange(section)
  }

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onSectionChange={updateURL} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                The Transformation Collective
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)} className="gap-2">
                    <Search className="h-4 w-4" />
                    Search
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                      ⌘K
                    </kbd>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Search community</TooltipContent>
              </Tooltip>

              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={() => setNotificationsOpen(true)} className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-[10px] text-primary-foreground flex items-center justify-center">
                      2
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" onClick={() => setMessagesOpen(true)}>
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Direct Messages</TooltipContent>
              </Tooltip>

              <ProfileDropdown open={profileOpen} onOpenChange={setProfileOpen} />
            </div>
          </header>

          <div className="flex-1 flex">
            {/* Main Content Area */}
            <main className="flex-1 overflow-auto">{children}</main>

            {/* Right Panel */}
            <RightPanel />
          </div>
        </div>

        {/* Modals */}
        <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
        <NotificationsModal open={notificationsOpen} onOpenChange={setNotificationsOpen} />
        <MessagesModal open={messagesOpen} onOpenChange={setMessagesOpen} />
      </div>
    </TooltipProvider>
  )
}
