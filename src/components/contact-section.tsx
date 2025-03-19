import { motion } from "framer-motion"
import { Terminal, Download, Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "../hooks/use-translation"

export function ContactSection() {
  const { t } = useTranslation()

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
                  <img
                    width={120}
                    height={60}
                    alt="UTFPR Logo"
                    src="https://utfpr-ct-static-content.s3.amazonaws.com/utfpr.curitiba.br/wp-content/uploads/sites/7/2019/11/utfpr1.png"
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                {/* <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <PlaceholderImage
                    width={120}
                    height={60}
                    alt="SANEPAR Logo"
                    className="max-h-12 w-auto object-contain"
                  />
                </div> */}
                {/* <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <PlaceholderImage
                    width={120}
                    height={60}
                    alt="Claro Logo"
                    className="max-h-12 w-auto object-contain"
                  />
                </div> */}
                <div className="p-4 bg-background rounded-lg flex items-center justify-center h-20">
                  <div className="text-center text-foreground/50 text-sm">{t("morePartners")}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Contact and Resume Download */}
          <div className="space-y-8">
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
                  <span className="text-foreground/50">$</span> wget rfm-portfolio/curriculo.pdf
                </div>
                <Download className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}