"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"

export function ScheduledPostsSection() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Scheduled Posts</h1>
        <Button>Schedule Post</Button>
      </div>

      {/* Empty State */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card>
          <CardContent className="p-12 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No scheduled posts</h3>
            <p className="text-muted-foreground mb-4">
              Schedule posts to be automatically published at specific times.
            </p>
            <Button>Create your first scheduled post</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
