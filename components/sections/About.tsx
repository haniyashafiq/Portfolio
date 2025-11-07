'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import GitHubStats from '@/components/GitHubStats'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-cool-gray/10 dark:bg-charcoal/95"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-charcoal dark:text-cool-gray"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-charcoal dark:text-cool-gray leading-relaxed mb-4">
            I&apos;m an aspiring Full Stack Software Engineer passionate about building
            efficient, scalable web applications. My journey in software development has
            been driven by curiosity and a growth mindset, constantly exploring new
            technologies and best practices.
          </p>

          <p className="text-lg text-charcoal dark:text-cool-gray leading-relaxed mb-4">
            I specialize in Full Stack Development, with a particular interest in backend
            systems, API design, and creating seamless user experiences. Currently, I&apos;m
            focused on mastering modern web technologies while contributing to real-world projects.
          </p>

          <p className="text-lg text-charcoal dark:text-cool-gray leading-relaxed">
            What excites me most is the intersection of clean architecture, efficient
            APIs, and intuitive user interfaces. I believe in writing maintainable code
            and building solutions that solve real problems. Whether it&apos;s designing
            RESTful APIs, optimizing database queries, or crafting responsive frontends,
            I approach each challenge with enthusiasm and attention to detail.
          </p>
        </motion.div>

        <GitHubStats />
      </div>
    </section>
  )
}

