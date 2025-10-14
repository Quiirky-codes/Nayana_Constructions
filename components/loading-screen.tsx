"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { IMAGES } from "@/constants/images"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={IMAGES.logo || "/placeholder.svg"}
                  alt="Nayana Constructions Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-primary">Nayana Constructions</h1>
              <p className="text-muted-foreground">Building Dreams Since 1990</p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
