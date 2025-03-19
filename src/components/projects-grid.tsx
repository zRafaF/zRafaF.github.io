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
    id: "proteja",
    title: "ProteJÁ",
    description:
    "Ecossistema de detecção de quedas vencedor de hackathon Claro Campus Mobile. Hardware vestível ultraeficiente + interface PWA.",
    image: "./proteja.png",
    tags: ["IoT", "Supabase", "React", "MQTT", "Hackathon", "Edge Computing"],
    status: ["award-winning", "ongoing"],
  },
  {
    id: "rastreia",
    title: "RastreIA",
    description:
    "Registro de itens roubados com IA para o Ministério da Justiça. Construído com Next.js + microsserviços FastAPI.",
    image: "./rastreia.png",
    tags: ["AuthJS", "MongoDB", "Shadcn", "AI"],
    status: ["university-partnership", "completed"],
  },
  {
    id: "landing-page",
    title: "Portifólio",
    description: "Landing page e portifólio com meus principais projetos e habilidades.",
    image: "./landing-page.png",
    tags: ["React", "Tailwind", "Ci/CD"],
    status: ["completed"],
  },{
    id: "educautf",
    title: "EducaUTF",
    description:
    "Plataforma educacional escalável em seu pico teve mais de 1,5k impressões mensais. Desenvolvimento full-stack + implantação Docker on-prem.",
    image: "./educa-utf.png",
    tags: ["Next.js", "MUI", "Pocketbase", "Reverse Proxy"],
    status: ["university-partnership", "completed"],
  },
  {
    id: "virote-uav",
    title: "Virote",
    description:
      "Sistema de planejamento de missões e pouso de precisão para drones.",
    image: "./virote.png",
    tags: ["Python", "React", "OpenCV", "3D Modeling"],
    status: ["university-partnership", "completed"],
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
                  className="w-full h-full object-containt"
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

