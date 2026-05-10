"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Lightbulb, Target } from "lucide-react"
import { useTranslation } from '@/components/i18n'
import { Brand } from '@/components/brand'

export function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Target,
      titleKey: 'features.mission.title',
      descriptionKey: 'features.mission.desc',
    },
    {
      icon: Cpu,
      titleKey: 'features.technology.title',
      descriptionKey: 'features.technology.desc',
    },
    {
      icon: Lightbulb,
      titleKey: 'features.innovation.title',
      descriptionKey: 'features.innovation.desc',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-medium text-accent glass rounded-full mb-6 tracking-widest">
            {t('welcome.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">{t('welcome.headingPrefix')}</span> <Brand />
          </h2>
        </div>

        {/* Main Message Card */}
        <div
          className={`glass-card rounded-3xl p-8 md:p-12 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-4 -left-2 text-6xl text-accent/20 font-serif">&ldquo;</div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed text-center relative z-10">
              {t('welcome.message.prefix')}
              <span className="text-accent font-semibold"> {t('welcome.message.strong1')} </span>
              {t('welcome.message.and')}
              <span className="text-accent font-semibold"> {t('welcome.message.strong2')}</span>.
            </p>
            
            {/* Decorative quote mark */}
            <div className="absolute -bottom-8 -right-2 text-6xl text-accent/20 font-serif rotate-180">&ldquo;</div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey ?? index}
              className={`glass-card rounded-2xl p-6 text-center group hover:ring-2 hover:ring-accent/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
