'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import experienceData from '@/data/experience.json'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary-dark"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary dark:bg-primary-dark rounded-full" />
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft dark:shadow-soft-dark hover:shadow-xl dark:hover:shadow-soft-dark transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="text-sm font-semibold text-primary dark:text-primary-dark">
                    {exp.company}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  {exp.period}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

