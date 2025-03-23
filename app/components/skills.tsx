"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

// Dados das tecnologias com seus logos
const technologies = [
  {
    name: "HTML",
    logo: "/skills-image/html.png",
    category: "frontend",
  },
  {
    name: "CSS",
    logo: "/skills-image/css.png",
    category: "frontend",
  },
  {
    name: "JavaScript",
    logo: "/skills-image/js.png",
    category: "frontend",
  },
  {
    name: "TypeScript",
    logo: "/skills-image/ts.png",
    category: "frontend",
  },
  {
    name: "React",
    logo: "/skills-image/react.png",
    category: "frontend",
  },
  {
    name: "Next.js",
    logo: "/skills-image/next.png",
    category: "frontend",
  },
  {
    name: "Remix.js",
    logo: "/skills-image/remix.png",
    category: "frontend",
  },
  {
    name: "Node.js",
    logo: "/skills-image/node.png",
    category: "backend",
  },
  {
    name: "Nest.Js",
    logo: "/skills-image/nest.png",
    category: "backend",
  },
  {
    name: "MongoDB",
    logo: "/skills-image/mongodb.png",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    logo: "/skills-image/postgreesql.png",
    category: "backend",
  },
  {
    name: "Tailwind CSS",
    logo: "/skills-image/tailwindcss.png",
    category: "frontend",
  },
  {
    name: "Git",
    logo: "/skills-image/git.png",
    category: "tools",
  },
  {
    name: "GitHub",
    logo: "/skills-image/github.png",
    category: "tools",
  },
  {
    name: "Docker",
    logo: "/skills-image/docker.png",
    category: "tools",
  },
  {
    name: "Figma",
    logo: "/skills-image/figma.png",
    category: "design",
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.05,
              },
            },
          }}
          className="group flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/50 transition-all duration-300"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-800/50 flex items-center justify-center">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={tech.name}
                width={64}
                height={64}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </div>
          </div>
          <span className="text-xs md:text-sm text-center font-medium text-zinc-300 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

