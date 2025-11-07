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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-cool-gray/20 dark:bg-charcoal/80"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-charcoal dark:text-cool-gray"
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
              className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary dark:bg-primary rounded-full" />
              
              <div className="bg-soft-ivory dark:bg-charcoal rounded-xl p-6 shadow-soft dark:shadow-soft-dark hover:shadow-xl dark:hover:shadow-soft-dark transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-charcoal dark:text-cool-gray">
                    {exp.position}
                  </h3>
                  <span className="text-sm font-semibold text-primary dark:text-primary">
                    {exp.company}
                  </span>
                </div>

                <p className="text-charcoal/80 dark:text-cool-gray/80 mb-4 font-medium">
                  {exp.period}
                </p>

                <p className="text-charcoal dark:text-cool-gray mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full"
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

