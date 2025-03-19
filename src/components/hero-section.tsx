import { AnimatedText } from "./animated-text";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "../hooks/use-translation";

export function HeroSection() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => setLoaded(true), 300);
    }
  }, [inView]);

  return (
    <section className="min-h-screen pt-16 pb-12 flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={cn(
              "space-y-6 transition-all duration-700 transform",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <AnimatedText
                text={t("heroTitle1")}
                className="block animated-gradient-text"
              />
              <span className="block text-foreground">{t("heroTitle2")}</span>
            </h1>

            <div className="space-y-4 text-lg text-foreground/80">
              <p
                className={cn(
                  "transition-all duration-500 delay-300",
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-5 opacity-0"
                )}
              >
                {t("heroParagraph1")}
              </p>

              <p
                className={cn(
                  "transition-all duration-500 delay-500",
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-5 opacity-0"
                )}
              >
                {t("heroParagraph2")}
              </p>

              <p
                className={cn(
                  "transition-all duration-500 delay-700",
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-5 opacity-0"
                )}
              >
                {t("heroParagraph3")}
              </p>
            </div>

            <div
              className={cn(
                "flex gap-4 transition-all duration-500 delay-1000",
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
              >
                {t("viewProjects")}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-foreground/20 hover:border-foreground/40 font-medium transition-colors"
              >
                {t("contactMe")}
              </a>
            </div>
          </div>

          <div
            className={cn(
              "relative flex justify-center items-center transition-all duration-700 transform",
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative w-[90%] aspect-square max-w-md animate-float">
              <img
                width={400}
                height={400}
                src="/overview-image.png"
                alt="3D Visual combining circuit board, code snippets and drone model"
                className="z-10 relative"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl z-0"></div>
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-[20%] left-[10%] w-16 h-16 bg-emerald-500/10 rounded-lg animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-[20%] right-[10%] w-12 h-12 bg-blue-500/10 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
