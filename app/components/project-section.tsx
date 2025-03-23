"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "~/components/project-card"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

// Dados de exemplo para os projetos
const projects = [
  {
    id: 1,
    title: "LibreTec",
    description: "Meu primeiro projeto, desenvolvido em 2022, é uma plataforma para gerenciar os livros da ETEC Rosa Perrone.",
    image: "/projects-image/libretec.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "NodeJs"],
    demoUrl: "https://www.linkedin.com/posts/kaynan-wallen-9b542024a_reactjs-nodejs-tailwindcss-activity-7155577936350195712-vNkZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2kd5kBc8EJF8DrZhiUESc5JS-3dyhWXFM",
    githubUrl: "https://github.com/KaynanWallen/LibreTec3.0",
    category: "web",
  },
  {
    id: 2,
    title: "Collabx FrontEnd",
    description:
      "Collbax é um rede social para gestão e colaboração em projetos. A aplicação permite criar, visualizar e interagir com projetos e perfis de usuários, proporcionando uma experiência rica em interações.",
    image: "/projects-image/collabx-frontend.png",
    tags: ["RemixJs", "TypeScript", "Tailwind CSS", "Zustand", "SEO"],
    demoUrl: null,
    githubUrl: "https://github.com/KaynanWallen/collabx-frontend",
    category: "web",
  },
  {
    id: 3,
    title: "Collabx BackeEnd",
    description: "Collbax é um rede social para gestão e colaboração em projetos. O backend da aplicação foi desenvolvido para oferecer um serviço seguro, escalável e eficiente para todas as funcionalidades do sistema.",
    image: "/projects-image/image-backend.png",
    tags: ["Node.Js", "NestJs", "Redis", "Prisma", "PostgreSQL", "Cloudflare R2", "JWT"],
    demoUrl: "",
    githubUrl: "https://github.com/KaynanWallen/collabx-backend",
    category: "backend",
  }
]

// Categorias para filtrar os projetos
const categories = [
  { id: "all", name: "Todos", active: true},
  { id: "web", name: "Web", active: true },
  { id: "mobile", name: "Mobile", active: false},
  { id: "backend", name: "Backend", active: true },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Projetos</span>{" "}
          Recentes
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-zinc-800/50 rounded-lg">
            {categories.filter(c => c.active).map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 text-sm rounded-md transition-all",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-zinc-400">Nenhum projeto encontrado nesta categoria.</div>
        )}

        <div className="flex justify-center mt-12">
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0">
            Ver todos os projetos
          </Button>
        </div>
      </div>
    </section>
  )
}

