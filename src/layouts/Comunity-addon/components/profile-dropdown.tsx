"use client"

import { Settings, Moon, Sun, Library, Plus, ChevronRight } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../components/ui/dropdown-menu"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { useTheme } from "../components/theme-provider"

interface ProfileDropdownProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProfileDropdown({ open, onOpenChange }: ProfileDropdownProps) {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          Splendor Jerry
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Splendor Jerry</p>
              <p className="text-xs text-purple-600">Moderator</p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">Account</DropdownMenuLabel>

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Account settings
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {theme === "light" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
            Light mode
            <ChevronRight className="ml-auto h-4 w-4" />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">Community</DropdownMenuLabel>

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Community settings
        </DropdownMenuItem>

        <DropdownMenuItem>Community settings</DropdownMenuItem>

        <DropdownMenuItem>
          <Library className="mr-2 h-4 w-4" />
          Library
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          Add offer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
