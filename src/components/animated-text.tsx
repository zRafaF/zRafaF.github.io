"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Reset the animation when the text prop changes
  useEffect(() => {
    setDisplayText("")
    setIndex(0)
    setShowCursor(true)
  }, [text])

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, 100) // Adjust speed as needed

      return () => clearTimeout(timeout)
    } else {
      // Start blinking cursor when typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 530)

      return () => clearInterval(cursorInterval)
    }
  }, [index, text])

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="text-emerald-500 dark:text-emerald-500">|</span>}
    </span>
  )
}