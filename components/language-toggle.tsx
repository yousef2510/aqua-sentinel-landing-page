"use client"

import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from '@/components/i18n'

export function LanguageToggle() {
  const { locale, setLocale, t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="fixed top-6 right-24 z-50 w-14 h-14 rounded-full glass-card" />
  }

  const nextLocale = locale === 'en' ? 'ar' : 'en'

  return (
    <button
      onClick={() => setLocale(nextLocale)}
      className="fixed top-6 right-24 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center group hover:scale-105 transition-all duration-300 shadow-lg"
      aria-label={t('language.toggleLabel')}
      title={t(`language.${nextLocale === 'en' ? 'english' : 'arabic'}`)}
    >
      <span className="text-sm font-semibold">{locale === 'en' ? 'EN' : 'ع'}</span>
      <div className="absolute inset-0 rounded-full blur-xl transition-all duration-500 opacity-30 bg-accent/40" />
    </button>
  )
}
