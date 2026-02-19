import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { GPSSection } from "@/components/gps-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <GPSSection />
      <PhotoGallery />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
