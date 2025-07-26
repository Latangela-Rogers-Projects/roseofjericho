"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle, Share, MoreHorizontal, Plus } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
// import Image from "next/image"

export function FeedSection() {
  const [postContent, setPostContent] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Feed</h1>
        <div className="flex items-center gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Hero Banner */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="/images/hero-banner.png"
                alt="The Transformation Collective Leadership Academy"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Write post..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="min-h-[60px] resize-none border-none shadow-none focus-visible:ring-0"
              />
              <div className="flex justify-end mt-2">
                <Button size="sm" disabled={!postContent.trim()}>
                  <Plus className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">LaTangela Rogers</span>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Q&A</span>
                    <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Founder</span>
                    <span className="text-xs text-muted-foreground">1w</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              I'm inviting you to our Meetup: Glory Hour{" "}
              <Button variant="link" className="h-auto p-0 text-sm text-blue-600">
                RSVP Now
              </Button>
            </p>

            <div className="flex items-center gap-4 pt-2 border-t">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                Inspired
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Comment
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share className="h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="border-t pt-4">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <Textarea placeholder="Write a comment..." className="min-h-[40px] resize-none" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
