"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Lock, Unlock } from "lucide-react"
import { useTranslation } from '@/components/i18n'
import { Brand } from '@/components/brand'

export function QRMessageSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  const rawUnlockSubtitle = t('qr.unlockSubtitle')
  const unlockWithoutBrand = rawUnlockSubtitle.replace(/Aqua\s*Sentinel|أكوا\s*سنتينل/g, '').trim()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Auto unlock after animation plays
          setTimeout(() => setIsUnlocked(true), 1500)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Exclusive Badge */}
        <div
          className={`flex justify-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium text-accent tracking-widest uppercase">
              {t('qr.badge')}
            </span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
        </div>

        {/* Main Card */}
        <div
          className={`relative glass-card rounded-3xl p-10 md:p-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
          </div>

          {/* Lock Icon Animation */}
          <div className="relative mb-8">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-700 ${isUnlocked ? 'bg-accent/20 ring-2 ring-accent/40' : 'bg-secondary'}`}>
              {isUnlocked ? (
                <Unlock className="w-10 h-10 text-accent animate-pulse" />
              ) : (
                <Lock className="w-10 h-10 text-muted-foreground" />
              )}
            </div>
            
            {/* Success rings */}
            {isUnlocked && (
              <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-accent/40 animate-ripple" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-accent/40 animate-ripple" style={{ animationDelay: "0.5s" }} />
              </>
            )}
          </div>

          {/* Message */}
          <div className={`transition-all duration-700 delay-500 ${isUnlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">{t('qr.unlockTitlePrefix')}</span>
              <span className="text-accent"> {t('qr.unlockTitleAccent')}</span>
            </h3>
            <p className="text-lg md:text-xl text-foreground/80 mb-6">
              {unlockWithoutBrand ? <>{unlockWithoutBrand} </> : null}
              <Brand />
            </p>
            <div className="w-16 h-1 bg-accent/50 mx-auto rounded-full" />
          </div>

          {/* Thank you message */}
          <div className={`mt-8 p-6 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-700 delay-700 ${isUnlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              {t('qr.thankYou')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
