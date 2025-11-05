'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
        GitHub Activity
      </h3>
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-md">
          <img
            src="https://github-readme-stats.vercel.app/api?username=haniyashafiq&show_icons=true&theme=tokyonight&hide_border=true&bg_color=transparent&locale=en"
            alt="GitHub Stats"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full max-w-md">
          <img
            src="https://streak-stats.demolab.com/?user=haniyashafiq&theme=tokyonight&hide_border=true&background=transparent&type=png"
            alt="GitHub Streak - Current and Longest Streak"
            className="w-full rounded-lg"
            loading="lazy"
            style={{ minHeight: '195px' }}
            onError={(e) => {
              // Fallback to alternative API if main one fails
              const target = e.target as HTMLImageElement
              target.src = `https://github-readme-streak-stats.demolab.com/?user=haniyashafiq&theme=tokyonight&hide_border=true&background=transparent`
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

