import { LanguageToggle } from "./language-toggle"
import { useTranslation } from "../hooks/use-translation"

export function StatusBanner() {
  const { t } = useTranslation()

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border-b border-border/30">
      <div className="container py-4">
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl font-bold animated-gradient-text">RFM</div>

          <div className="hidden md:flex flex-row justify-center items-center gap-4">
            <p className="text-lg font-semibold">
              {t("available")} <span className="animated-gradient-text">{t("opportunities")}</span>
            </p>
            <a
              href="#contact"
              className="pulse-button px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              {t("getInTouch")}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a
              href="#contact"
              className="md:hidden pulse-button px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors text-sm"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

