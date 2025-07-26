"use client"

import { motion } from "framer-motion"
import { Calendar, Share, ChevronDown } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

export function MeetupsSection() {
  const meetups = [
    {
      id: 1,
      title: "Glory Hour",
      description: "Glory Hour is a powerful 1-hour leadership study",
      date: "Thu, Jul 17, 2025 3:00 AM",
      time: "3:00 - 4:00 AM GMT+1",
      attendees: 1,
      status: "going",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meetups</h1>
      </div>

      {/* Upcoming Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Upcoming</h2>
          <Button variant="ghost" className="text-sm">
            See all
          </Button>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          {meetups.map((meetup) => (
            <motion.div
              key={meetup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-r from-purple-600 to-purple-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">GLORY HOUR</h3>
                      <p className="text-sm opacity-90">7:00 PM PST</p>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-red-600">LIVESTREAM</Badge>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{meetup.date}</p>
                      <h3 className="text-xl font-semibold">{meetup.title}</h3>
                    </div>

                    <p className="text-muted-foreground">{meetup.description}</p>

                    <Button variant="outline" className="w-full bg-transparent">
                      Show more
                    </Button>

                    <div className="text-sm text-muted-foreground">{meetup.attendees} going</div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        Going
                        <Share className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <Calendar className="h-4 w-4" />
                        Add to calendar
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
