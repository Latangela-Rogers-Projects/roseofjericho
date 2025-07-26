"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Users, Gift, Calendar, Target, Plus } from "lucide-react"

export function RightPanel() {
  return (
    <aside className="w-80 bg-background border-l p-4 space-y-4 overflow-auto">
      {/* All Members */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="gap-2 text-sm">
          <Users className="h-4 w-4" />
          All Members
        </Button>
      </div>

      {/* Offers */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Offers
            <Badge variant="secondary" className="text-xs">
              New
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">Add an offer to promote to your members.</p>
          <Button variant="outline" className="w-full gap-2 bg-transparent">
            <Plus className="h-4 w-4" />
            Add offer
          </Button>
        </CardContent>
      </Card>

      {/* Meetups */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Meetups
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-lg font-bold">17</div>
                <div className="text-xs text-muted-foreground">JUL</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">Glory Hour</h4>
                <p className="text-xs text-muted-foreground">3:00 - 4:00 AM GMT+1</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Challenges */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Target className="h-4 w-4" />
            Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Target className="h-4 w-4 mt-0.5 text-primary" />
              <div className="flex-1">
                <h4 className="font-medium text-sm">Start Here: Introduce Yourself!</h4>
                <p className="text-xs text-muted-foreground">Complete by Feb 1</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
