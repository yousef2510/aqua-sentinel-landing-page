import { AnimatedParticles } from "@/components/animated-particles"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { TeamSection } from "@/components/team-section"
import { QRMessageSection } from "@/components/qr-message-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated particle background */}
      <AnimatedParticles />
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <WelcomeSection />
        <TeamSection />
        <QRMessageSection />
        <Footer />
      </div>
    </main>
  )
}
