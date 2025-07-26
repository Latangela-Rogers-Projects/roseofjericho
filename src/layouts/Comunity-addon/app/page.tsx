"use client"

import { useEffect, useState } from "react"
// import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "../components/theme-provider"
import { CommunityLayout } from "../components/community-layout"
import { FeedSection } from "../components/sections/feed-section"
import { ChallengesSection } from "../components/sections/challenges-section"
import { MeetupsSection } from "../components/sections/meetups-section"
import { LeaderboardSection } from "../components/sections/leaderboard-section"
import { ScheduledPostsSection } from "../components/sections/scheduled-posts-section"
import './globals.css'

export default function CommunityApp() {
  // const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("feed")

  // useEffect(() => {
  //   const section = searchParams.get("section") || "feed"
  //   setActiveSection(section)
  // }, [searchParams])

  const renderSection = () => {
    switch (activeSection) {
      case "challenges":
        return <ChallengesSection />
      case "meetups":
        return <MeetupsSection />
      case "leaderboard":
        return <LeaderboardSection />
      case "scheduled-posts":
        return <ScheduledPostsSection />
      default:
        return <FeedSection />
    }
  }

  return (
    <ThemeProvider>
      <CommunityLayout activeSection={activeSection} onSectionChange={setActiveSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </CommunityLayout>
    </ThemeProvider>
  )
}
