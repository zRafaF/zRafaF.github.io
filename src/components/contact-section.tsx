"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Download, Send, Loader2, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "../lib/utils"
import { useTranslation } from "../hooks/use-translation"
import { PlaceholderImage } from "./placeholder-image"

export function ContactSection() {
  const { t } = useTranslation()

  const [formState, setFormState] = useState<{
    name: string
    email: string
    message: string
  }>({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real implementation, you would use a form submission service
      // const response = await fetch("https://formspree.io/f/your-form-id", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formState),
      // });

      // if (!response.ok) throw new Error("Failed to submit form");

      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
    } catch (err) {
      setError(t("errorMessage"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-circuit-pattern" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contactTitle")}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t("contactSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Panel */}
          <div className="space-y-8">
            <motion.div
              className="p-6 bg-card rounded-xl border border-border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 animated-gradient-text">{t("activelyBuilding")}</h3>
              <p className="text-foreground/70">{t("activelySub")}</p>
            </motion.div>

            <motion.div
              className="p-6 bg-card rounded-xl border border-border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{t("academicPartners")}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <PlaceholderImage
                    width={120}
                    height={60}
                    alt="UTFPR Logo"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <PlaceholderImage
                    width={120}
                    height={60}
                    alt="SANEPAR Logo"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <PlaceholderImage
                    width={120}
                    height={60}
                    alt="Claro Logo"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <div className="text-center text-foreground/50 text-sm">{t("morePartners")}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-card rounded-xl border border-border shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{t("connectWithMe")}</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/zrafaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-background/80 transition-colors"
                >
                  <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-500">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-foreground/70">@zRafaF</div>
                  </div>
                </a>

                <a
                  href="mailto:rafaelmeneses@alunos.utfpr.edu.br"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-background/80 transition-colors"
                >
                  <div className="p-2 rounded-md bg-blue-500/10 text-blue-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{t("email")}</div>
                    <div className="text-sm text-foreground/70">rafaelmeneses@alunos.utfpr.edu.br</div>
                  </div>
                </a>

                <a
                  href="https://br.linkedin.com/in/rafael-farias-meneses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-background/80 transition-colors"
                >
                  <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-500">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-foreground/70">linkedin.com/in/rafael-farias-meneses</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg border border-border hover:bg-card/80 transition-colors group"
              >
                <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="font-mono text-sm">
                  <span className="text-foreground/50">$</span> wget rfm-portfolio/resume.pdf
                </div>
                <Download className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Panel - Contact Form */}
          <motion.div
            className="bg-card rounded-xl border border-border shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">{t("messageSent")}</h3>
                <p className="text-foreground/70">{t("thankYou")}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                >
                  {t("sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder={t("yourName")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder={t("yourEmail")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                    placeholder={t("yourMessage")}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2",
                    isSubmitting
                      ? "bg-emerald-500/70 text-white cursor-not-allowed"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white",
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t("sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("sendMessage")}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

