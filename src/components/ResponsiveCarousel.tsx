"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ArrowRight, Notebook, Store, ArrowLeftCircle, ArrowRightCircle, ShoppingCart, MoveUpRight, Flame, Box, Shirt, Zap, Shield, Package, Search, Minus, Plus } from "lucide-react"

export default function ResponsiveCarousel({ data }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const XDifference = window.innerWidth * 0.05

  const updateState = useCallback(() => {
    if (!emblaApi) return

    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateState()
    emblaApi.on("select", updateState)
    emblaApi.on("reInit", updateState)
  }, [emblaApi, updateState])

  return (
    <div className="relative w-full p-5">

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {data.map((item: any, index: number) => (
            <motion.div
              key={item.id}
              onClick={item.onClick}
              animate={{
                scale: index === selectedIndex ? 1 : 0.85,
                translateX:
                  index === selectedIndex
                    ? 0
                    : index < selectedIndex
                    ? XDifference
                    : -XDifference,
                opacity: index === selectedIndex ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
              className="flex-[0_0_400px] md:flex-[0_0_700px] lg:flex-[0_0_900px] xl:flex-[0_0_1000px] 2xl:flex-[0_0_1200px] cursor-pointer"
            >
              <CategoryCard category={item} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className={`absolute left-3 top-1/2  z-20 transition ${
          canScrollPrev ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <ArrowLeftCircle size={42} className="text-primary-600" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className={`absolute right-3 top-1/2  z-20 transition ${
          canScrollNext ? "opacity-100" : "opacity-30 cursor-not-allowed"
        }`}
      >
        <ArrowRightCircle size={42} className="text-primary-600" />
      </button>

    </div>
  )
}

function CategoryCard({ category, index }: any) {
  const gradient =
    categoryGradients[index % categoryGradients.length]
  const IconComponent =
    categoryIcons[index % categoryIcons.length]

  return (
    <div className="h-[360px] rounded-3xl overflow-hidden shadow-xl relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      <div className="relative h-full flex flex-col items-center justify-center p-8">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <IconComponent className="w-12 h-12 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white text-center">
          {category.name}
        </h3>

        <p className="text-white/90 mt-2">
          {category.product_count} Products
        </p>
      </div>
    </div>
  )
}

const categoryGradients = [
  'from-blue-400 via-blue-500 to-blue-600',
  'from-emerald-400 via-emerald-500 to-emerald-600',
  'from-amber-400 via-amber-500 to-amber-600',
  'from-rose-400 via-rose-500 to-rose-600',
  'from-cyan-400 via-cyan-500 to-cyan-600',
  'from-teal-400 via-teal-500 to-teal-600',
  'from-red-400 via-red-500 to-red-600',
  'from-yellow-400 via-yellow-500 to-yellow-600',
];

const categoryIcons = [Box, Package, Shirt, ShoppingCart, Store, Flame, Zap, Shield];
