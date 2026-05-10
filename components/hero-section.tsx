"use client"

import { useEffect, useState } from "react"
import { useTranslation } from '@/components/i18n'
import { Waves } from "lucide-react"
import Image from "next/image"
import { Brand } from '@/components/brand'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-accent/10 animate-pulse-glow" />
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-accent/15 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-accent/20 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Ripple effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 rounded-full border-2 border-accent/30 animate-ripple" />
        <div className="absolute w-32 h-32 rounded-full border-2 border-accent/30 animate-ripple" style={{ animationDelay: "1s" }} />
        <div className="absolute w-32 h-32 rounded-full border-2 border-accent/30 animate-ripple" style={{ animationDelay: "2s" }} />
      </div>

      {/* Logo and Content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Logo */}
        <div className="relative group">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-accent/30 rounded-full blur-3xl group-hover:bg-accent/40 transition-all duration-500 animate-pulse-glow" />
          {/* Inner glow ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-b from-accent/20 to-transparent blur-xl" />
          {/* Logo container */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-2 ring-accent/50 ring-offset-4 ring-offset-background shadow-[0_0_60px_rgba(var(--accent),0.4)] group-hover:shadow-[0_0_80px_rgba(var(--accent),0.6)] transition-all duration-500 flex items-center justify-center p-2 bg-transparent">
            <Image
              src="/images/aqua-sentinel-logo.png"
              alt="Aqua Sentinel Logo"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Team Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center">
          <Brand />
        </h1>

        {/* Tagline */}
        <div className="flex items-center gap-3 px-6 py-3 glass rounded-full">
          <Waves className="w-5 h-5 text-accent animate-pulse" />
          <p className="text-lg md:text-xl text-foreground/80 font-medium tracking-wide">
            {t('hero.tagline')}
          </p>
          <Waves className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Welcome Badge */}
        <div
          className={`mt-8 px-8 py-4 glass-card rounded-2xl max-w-md text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
            {t('hero.welcome.greeting')}
          </p>
          <p className="text-muted-foreground text-xs md:text-sm mt-2">
            {t('hero.welcome.thanks')}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
