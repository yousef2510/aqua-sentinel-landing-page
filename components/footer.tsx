"use client"

import { Droplets, Shield, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { useTranslation } from '@/components/i18n'
import { Brand } from '@/components/brand'

export function Footer() {
  const { t } = useTranslation()

  const socialLinks = [
    { icon: Github, href: "#", label: t('social.github') },
    { icon: Linkedin, href: "#", label: t('social.linkedin') },
    { icon: Twitter, href: "#", label: t('social.twitter') },
    { icon: Mail, href: "#", label: t('social.email') },
  ]

  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Logo and Team Name */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mb-4 ring-2 ring-accent/30">
            <div className="relative">
              <Shield className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <Droplets className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-accent/80" strokeWidth={2} />
            </div>
          </div>
          <h3 className="text-xl font-bold"><Brand/></h3>
          <p className="text-sm text-muted-foreground mt-1">{t('footer.tagline')}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-accent hover:ring-2 hover:ring-accent/30 transition-all duration-300 group"
            >
              <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-8" />

        {/* Thank You Message */}
        <div className="text-center mb-8">
          <p className="text-foreground/80 text-sm md:text-base flex items-center justify-center gap-2 flex-wrap">
            {t('footer.thanks')}
            <Heart className="w-4 h-4 text-accent animate-pulse inline" />
            {t('footer.builtWith')}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aqua Sentinel.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with innovation, passion, and dedication.
          </p>
        </div>
      </div>
    </footer>
  )
}
