import { en } from "./en"
import { ptBR } from "./pt-br"

export const translations = {
  en,
  "pt-BR": ptBR,
}

export type TranslationKey = keyof typeof en

