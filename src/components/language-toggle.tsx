import { Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../contexts/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-foreground/70" />
      <div className="flex rounded-full bg-secondary p-1">
        <button
          onClick={() => setLanguage("en")}
          className={cn(
            "px-3 py-1 text-xs font-medium rounded-full transition-colors",
            language === "en"
              ? "bg-emerald-500 text-white"
              : "text-foreground/70 hover:text-foreground"
          )}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("pt-BR")}
          className={cn(
            "px-3 py-1 text-xs font-medium rounded-full transition-colors",
            language === "pt-BR"
              ? "bg-emerald-500 text-white"
              : "text-foreground/70 hover:text-foreground"
          )}
        >
          PT-BR
        </button>
      </div>
    </div>
  );
}
