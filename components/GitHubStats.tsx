'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [statsError, setStatsError] = useState(false)
  const [streakError, setStreakError] = useState(false)
  const [streakSrc, setStreakSrc] = useState('')
  const [streakRetryCount, setStreakRetryCount] = useState(0)

  // Initialize streak source after component mounts
  useEffect(() => {
    setStreakSrc('https://github-readme-streak-stats.demolab.com/?user=haniyashafiq&theme=tokyonight&hide_border=true')
  }, [])

  const handleStatsError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('GitHub stats image failed to load')
    setStatsError(true)
  }

  const handleStreakError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Streak image error, retry count:', streakRetryCount)
    const alternatives = [
      'https://streak-stats.demolab.com/?user=haniyashafiq&theme=tokyonight&hide_border=true',
      'https://github-readme-streak-stats.vercel.app/?user=haniyashafiq&theme=tokyonight&hide_border=true',
    ]
    
    if (streakRetryCount < alternatives.length) {
      console.log('Trying alternative endpoint:', alternatives[streakRetryCount])
      setStreakSrc(alternatives[streakRetryCount])
      setStreakRetryCount(prev => prev + 1)
    } else {
      console.error('All streak endpoints failed')
      setStreakError(true)
    }
  }

  return (
    <motion.div
      ref={ref}
      className="mt-12 p-6 bg-cool-gray/20 dark:bg-charcoal/80 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-charcoal dark:text-cool-gray mb-4 text-center">
        GitHub Activity
      </h3>
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-md">
          {!statsError ? (
            <img
              src="https://github-readme-stats.vercel.app/api?username=haniyashafiq&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&locale=en"
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
              onError={handleStatsError}
            />
          ) : (
            <div className="w-full p-8 text-center text-charcoal/70 dark:text-cool-gray/70">
              <p>Unable to load GitHub stats</p>
            </div>
          )}
        </div>
        <div className="w-full max-w-md">
          {!streakError && streakSrc ? (
            <img
              key={streakRetryCount}
              src={streakSrc}
              alt="GitHub Streak - Current and Longest Streak"
              className="w-full rounded-lg"
              loading="lazy"
              style={{ minHeight: '195px', display: 'block', width: '100%' }}
              onError={handleStreakError}
              onLoad={() => console.log('✓ Streak image loaded successfully')}
            />
          ) : streakError ? (
            <div className="w-full p-8 text-center text-charcoal/70 dark:text-cool-gray/70" style={{ minHeight: '195px' }}>
              <p>Unable to load GitHub streak stats</p>
              <p className="text-sm mt-2">The API may be temporarily unavailable.</p>
            </div>
          ) : (
            <div className="w-full p-8 text-center text-charcoal/70 dark:text-cool-gray/70" style={{ minHeight: '195px' }}>
              <p>Loading streak stats...</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

