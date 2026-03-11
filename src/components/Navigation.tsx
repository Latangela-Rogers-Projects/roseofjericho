"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "./Link"

const Navigation = ({ currentPageSlug }: any) => {
  const [scrollY, setScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isScrolled = scrollY > 50

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isOpen || isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-4">

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="w-[120px] h-[49px] bg-white rounded-2xl flex items-center justify-center duration-300">
              <img src="assets/img/rojlogo-web.png" alt="logo" className="w-full h-full object-contain" />
            </Link>
          </motion.div>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-[14px] font-medium">
            {NAV_ITEMS.map((item, index) => {
              const isActive = currentPageSlug === item.slug

              return (
                <motion.li
                  key={item.slug}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.slug)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`relative flex flex-col items-center transition-all duration-300 py-2 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    } ${isActive ? "font-bold" : ""} hover:scale-105 group`}
                  >
                    <span className="relative">
                      {item.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[2px] bg-current"
                        initial={{ width: isActive ? "80%" : "0%" }}
                        whileHover={{ width: "80%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </span>
                  </Link>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.slug && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1 -translate-x-1/2 top-full mt-2 bg-gradient-to-br from-[#bb8601] to-[#d4a035] rounded-xl px-6 py-4 shadow-2xl min-w-[220px]"
                      >
                        <div className="absolute -top-2 left-6 -translate-x-1/2 w-4 h-4 bg-[#bb8601] rotate-45" />
                        {item.children.map((child, childIndex) => (
                          <motion.div
                            key={child.slug}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: childIndex * 0.05 }}
                          >
                            <Link
                              to={child.path}
                              className="block text-white py-2.5 whitespace-nowrap hover:pl-2 transition-all duration-200 hover:text-gray-100 relative group/item"
                            >
                              <span className="relative">
                                {child.label}
                                <motion.span
                                  className="absolute bottom-0 left-0 h-[1px] bg-white/50"
                                  initial={{ width: "0%" }}
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.2 }}
                                />
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              )
            })}
          </ul>

          <motion.a
            href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hidden md:block bg-gradient-to-r from-[rgb(183,0,88)] to-[rgb(203,20,72)] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold"
          >
            Donate Now
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
              isOpen ? "text-gray-900 bg-gray-100" : isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[73px] right-0 bottom-0 w-[85%] max-w-[400px] bg-white shadow-2xl z-40 md:hidden overflow-y-auto"
            >
              <div className="px-6 py-8 space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block font-semibold text-gray-900 py-4 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 active:scale-95 ${
                        currentPageSlug === item.slug ? "bg-gray-100 text-[#bb8601]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="pl-6 space-y-1 mt-2"
                      >
                        {item.children.map((child, childIndex) => (
                          <motion.div
                            key={child.slug}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + childIndex * 0.05 + 0.3 }}
                          >
                            <Link
                              to={child.path}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 active:scale-95"
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.1 + 0.2 }}
                  href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
                  className="block bg-gradient-to-r from-[rgb(183,0,88)] to-[rgb(203,20,72)] text-white px-6 py-4 rounded-full text-center font-semibold shadow-lg mt-8 active:scale-95 transition-transform duration-200"
                >
                  Donate Now
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

const NAV_ITEMS = [
  {
    label: "Home",
    slug: "home",
    path: "/",
  },
  {
    label: "About Us",
    slug: "aboutUs",
    path: "/AboutUs",
    children: [
      { label: "Mission & Vision", slug: "missionVision", path: "/mission" },
      { label: "Our Team", slug: "ourTeam", path: "/team" },
    ],
  },
  {
    label: "Our Projects & Services",
    slug: "ourProgramsServices",
    path: "/services",
    children: [
      { label: "Out Of The Box", slug: "outOfTheBox", path: "/OTB" },
      { label: "Community Impact", slug: "communityImpact", path: "/comunity-impact" },
      { label: "Heart for Clean Water Project", slug: "heartForCleanWater", path: "/heart-for-clean-water" },
      { label: "Women's Wellness Clinic", slug: "womensWellnessClinic", path: "/womens-wellness-clinic" },
    ],
  },
  {
    label: "The Joshua Project Coalition",
    slug: "tjp",
    path: "/the-joshua-coalition",
  },
]
