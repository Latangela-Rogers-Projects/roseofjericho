"use client"

import { motion } from "framer-motion"
import { MoreHorizontal } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog"
import { Button } from "../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"

interface NotificationsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const notifications = [
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: true,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
  {
    id: 1,
    type: "challenge",
    title: "A new challenge has started! Be the first to complete",
    time: "10 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    type: "announcement",
    title: "New announcement from LaTangela",
    time: "12 days ago",
    read: false,
    avatar: "/placeholder-user.jpg",
    badge: "New",
  },
]

export function NotificationsModal({ open, onOpenChange }: NotificationsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Notifications</DialogTitle>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-4 overflow-scroll min-h-full max-h-[600px]">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  {!notification.read && <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium leading-tight">{notification.title}</p>
                    {notification.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {notification.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3 mt-4 overflow-scroll min-h-full max-h-[600px]">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-tight">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </motion.div>
              ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
