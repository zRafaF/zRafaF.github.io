"use client"

import { useState } from "react"
import { cn } from "../lib/utils"
import { FaDocker, FaServer, FaCloud } from "react-icons/fa"
import { GiCircuitry, GiProcessor } from "react-icons/gi"
import { MdMemory, MdSensors } from "react-icons/md"
import { TbBrain, TbMathFunction, TbDeviceAnalytics } from "react-icons/tb"
import { RiRobot2Fill } from "react-icons/ri"
import {
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiArduino,
  SiRaspberrypi,
  SiMqtt,
} from "react-icons/si"
import { TerminalAnimation } from "./terminal-animation"
import { useTranslation } from "../hooks/use-translation"

const SKILLS = [
  {
    name: "Docker",
    icon: FaDocker,
    category: "devops",
    experience: 90,
  },
  {
    name: "Nginx",
    icon: FaServer,
    category: "devops",
    experience: 85,
  },
  {
    name: "CI/CD",
    icon: FaCloud,
    category: "devops",
    experience: 80,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "devops",
    experience: 75,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "devops",
    experience: 70,
  },
  {
    name: "PCB Design",
    icon: GiCircuitry,
    category: "embedded",
    experience: 85,
  },
  {
    name: "Microcontrollers",
    icon: GiProcessor,
    category: "embedded",
    experience: 90,
  },
  {
    name: "Arduino",
    icon: SiArduino,
    category: "embedded",
    experience: 95,
  },
  {
    name: "Raspberry Pi",
    icon: SiRaspberrypi,
    category: "embedded",
    experience: 85,
  },
  {
    name: "Sensor Integration",
    icon: MdSensors,
    category: "embedded",
    experience: 80,
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    category: "ai-ml",
    experience: 75,
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    category: "ai-ml",
    experience: 70,
  },
  {
    name: "Computer Vision",
    icon: TbDeviceAnalytics,
    category: "ai-ml",
    experience: 80,
  },
  {
    name: "NLP",
    icon: TbBrain,
    category: "ai-ml",
    experience: 65,
  },
  {
    name: "Machine Learning",
    icon: TbMathFunction,
    category: "ai-ml",
    experience: 75,
  },
  {
    name: "React",
    icon: SiReact,
    category: "full-stack",
    experience: 95,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "full-stack",
    experience: 90,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "full-stack",
    experience: 85,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "full-stack",
    experience: 80,
  },
  {
    name: "MQTT",
    icon: SiMqtt,
    category: "iot",
    experience: 85,
  },
  {
    name: "Sensor Networks",
    icon: MdSensors,
    category: "iot",
    experience: 80,
  },
  {
    name: "Embedded Linux",
    icon: MdMemory,
    category: "iot",
    experience: 75,
  },
  {
    name: "Robotics",
    icon: RiRobot2Fill,
    category: "iot",
    experience: 70,
  },
]

export function SkillsMatrix() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("all")

  // Define categories with translations
  const CATEGORIES = [
    { id: "all", label: t("allSkills") },
    { id: "devops", label: t("devOps") },
    { id: "embedded", label: t("embedded") },
    { id: "ai-ml", label: t("aiMl") },
    { id: "full-stack", label: t("fullStack") },
    { id: "iot", label: t("iot") },
  ]

  const filteredSkills = activeCategory === "all" ? SKILLS : SKILLS.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skillsTitle")}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t("skillsSubtitle")}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-secondary hover:bg-secondary/80",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t("productionExperience")}</span>
                  <span className="font-medium">{skill.experience}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                    style={{ width: `${skill.experience}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Animation - Only show for DevOps category */}
        {(activeCategory === "all" || activeCategory === "devops") && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-4 text-center">{t("devOpsInAction")}</h3>
            <div className="max-w-3xl mx-auto">
              <TerminalAnimation />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

