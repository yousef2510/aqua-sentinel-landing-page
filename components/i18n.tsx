"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import en from '@/locales/en.json'
import ar from '@/locales/ar.json'

type Locale = 'en' | 'ar'

interface LanguageContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (k: string) => k,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
    if (stored === 'ar' || stored === 'en') setLocale(stored)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
      document.documentElement.lang = locale === 'ar' ? 'ar' : 'en'
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    }
  }, [locale])

  const resources: Record<Locale, any> = { en, ar }

  function t(path: string) {
    const parts = path.split('.')
    let res: any = resources[locale]
    for (const p of parts) {
      if (res && typeof res === 'object' && p in res) {
        res = res[p]
      } else {
        return path
      }
    }
    return typeof res === 'string' ? res : path
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  return useContext(LanguageContext)
}
