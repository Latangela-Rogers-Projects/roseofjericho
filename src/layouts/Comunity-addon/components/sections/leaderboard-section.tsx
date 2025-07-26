"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

export function LeaderboardSection() {
  const [selectedPeriod, setSelectedPeriod] = useState("all")

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Members</SelectItem>
            <SelectItem value="active">Active Members</SelectItem>
            <SelectItem value="new">New Members</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Current User Profile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardContent className="p-6 text-center">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">Splendor Jerry</h2>
            <p className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block mt-1">Moderator</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="font-semibold">0 points</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Get points when you engage with your community.{" "}
              <Button variant="link" className="h-auto p-0 text-sm">
                Read more
              </Button>
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Leaderboard Tabs */}
      <Tabs defaultValue="weekly" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="alltime">All time</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              <p>Members with the most points in this period will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              <p>Members with the most points in this period will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alltime" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              <p>Members with the most points will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
