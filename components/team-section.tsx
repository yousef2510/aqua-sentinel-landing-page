"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users } from "lucide-react"
import { useTranslation } from '@/components/i18n'
import { Brand } from '@/components/brand'

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  const rawTeamHeading = t('team.heading')
  const headingWithoutBrand = rawTeamHeading.replace(/Aqua\s*Sentinel|أكوا\s*سنتينل/g, '').trim()

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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-accent" />
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              {t('team.badge')}
            </span>
            <Users className="w-6 h-6 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {headingWithoutBrand ? <>{headingWithoutBrand} </> : null}
            <Brand />
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            {t('team.description')}
          </p>

          {/* Team Photo */}
          <div className="relative group w-full max-w-4xl">
            {/* Outer glow */}
            <div className="absolute -inset-6 bg-accent/20 rounded-2xl blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
            
            {/* Decorative border */}
            <div className="absolute -inset-3 rounded-2xl border border-accent/30 animate-pulse-glow" />
            <div className="absolute -inset-6 rounded-3xl border border-accent/20" />
            
            {/* Image container */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden ring-4 ring-accent/40 shadow-lg group-hover:ring-accent/60 transition-all duration-500">
              <Image
                src="/images/team-photo.jpeg"
                alt="Aqua Sentinel Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Team caption */}
          <p className="mt-8 text-muted-foreground italic">
            {t('team.caption')}
          </p>
        </div>
      </div>
    </section>
  )
}
