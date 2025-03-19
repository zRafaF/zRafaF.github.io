"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"
import { useTranslation } from "../hooks/use-translation"

// Define project types
type ProjectStatus = "ongoing" | "completed" | "award-winning" | "university-partnership"
type ProjectTag = string

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: ProjectTag[]
  status: ProjectStatus[]
}

// Project data
const PROJECTS: Project[] = [
  {
    id: "educautf",
    title: "EducaUTF",
    description:
      "Scalable educational platform with 1.5k monthly impressions. Handled full-stack development + on-prem Docker deployment.",
    image: "https://via.placeholder.com/500x300",
    tags: ["Next.js", "MUI", "Pocketbase", "Reverse Proxy"],
    status: ["university-partnership"],
  },
  {
    id: "virote-uav",
    title: "Virote/UAV",
    description:
      "Autonomous drone system with OpenCV precision landing. Partnered with SANEPAR for environmental monitoring.",
    image: "https://via.placeholder.com/500x300",
    tags: ["Python", "React", "OpenCV", "3D Modeling"],
    status: ["university-partnership", "ongoing"],
  },
  {
    id: "proteja",
    title: "ProteJÁ",
    description:
      "Hackathon-winning fall-detection ecosystem. Designed ultra-efficient wearable hardware + PWA interface.",
    image: "https://via.placeholder.com/500x300",
    tags: ["IoT", "Supabase", "MQTT", "Hackathon"],
    status: ["award-winning", "completed"],
  },
  {
    id: "rastreia",
    title: "RastreIA",
    description:
      "AI-powered stolen item registry for the Ministry of Justice. Built with Next.js + FastAPI microservices.",
    image: "https://via.placeholder.com/500x300",
    tags: ["AuthJS", "MongoDB", "Shadcn", "AI"],
    status: ["university-partnership", "completed"],
  },
  {
    id: "petrobras-hackathon",
    title: "Petrobras Hackathon",
    description: "2nd place solution for predictive oil field maintenance using time-series analysis.",
    image: "https://via.placeholder.com/500x300",
    tags: ["Python", "Data Science", "Hackathon"],
    status: ["award-winning", "completed"],
  },
]

export function ProjectsGrid() {
  const { t } = useTranslation()
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Status badge colors
  const STATUS_COLORS = {
    ongoing: "bg-blue-500",
    completed: "bg-emerald-500",
    "award-winning": "bg-amber-500",
    "university-partnership": "bg-purple-500",
  }

  // Status badge labels with translations
  const STATUS_LABELS: Record<ProjectStatus, string> = {
    ongoing: t("ongoing"),
    completed: t("completed"),
    "award-winning": t("awardWinning"),
    "university-partnership": t("universityPartnership"),
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projectsTitle")}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t("projectsSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border flex flex-col h-full"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Status badges */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  {project.status.map((status) => (
                    <span
                      key={status}
                      className={cn("px-2 py-1 rounded-full text-xs font-medium text-white", STATUS_COLORS[status])}
                    >
                      {STATUS_LABELS[status]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium bg-secondary transition-all duration-300",
                        hoveredProject === project.id
                          ? "text-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                          : "text-foreground/70",
                      )}
                    >
                      {tag}
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

