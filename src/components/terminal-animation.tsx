"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"

const COMMANDS = [
  { text: "$ sudo nginx -t", delay: 500 },
  { text: "nginx: the configuration file /etc/nginx/nginx.conf syntax is ok", delay: 1000 },
  { text: "nginx: configuration file /etc/nginx/nginx.conf test is successful", delay: 300 },
  { text: "$ sudo systemctl reload nginx", delay: 800 },
  { text: "$ docker-compose ps", delay: 1200 },
  { text: "NAME                COMMAND                  SERVICE             STATUS              PORTS", delay: 300 },
  {
    text: 'api                 "node dist/main.js"      api                 running             0.0.0.0:3000->3000/tcp',
    delay: 200,
  },
  {
    text: 'db                  "docker-entrypoint.s…"   db                  running             0.0.0.0:5432->5432/tcp',
    delay: 200,
  },
  {
    text: 'redis               "docker-entrypoint.s…"   redis               running             0.0.0.0:6379->6379/tcp',
    delay: 200,
  },
  {
    text: 'web                 "nginx -g \'daemon of…"   web                 running             0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp',
    delay: 200,
  },
  { text: "$ ", delay: 1000, loop: true },
]

export function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentIndex < COMMANDS.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, COMMANDS[currentIndex].text])
        setCurrentIndex((prev) => prev + 1)
      }, COMMANDS[currentIndex].delay)

      return () => clearTimeout(timer)
    } else if (COMMANDS[COMMANDS.length - 1].loop) {
      // Reset to beginning for loop
      const timer = setTimeout(() => {
        setLines([])
        setCurrentIndex(0)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-gray-800">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-gray-400 text-sm font-medium">terminal@rfm-portfolio ~ DevOps</div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-green-400 h-64 overflow-y-auto">
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap mb-1">
            {line}
          </div>
        ))}
        <span
          className={cn("inline-block w-2 h-4 bg-green-400 ml-0.5", cursorVisible ? "opacity-100" : "opacity-0")}
        ></span>
      </div>
    </div>
  )
}

