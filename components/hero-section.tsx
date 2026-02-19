import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                +40 años de experiencia
              </span>
              <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Atención a Domicilio/Terreno con Vehículo Acondicionado
              </span>
            </div>

            {/* Fotos del vehiculo acondicionado y taller */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/vehiculo-domicilio.jpeg"
                  alt="Vehiculo acondicionado para atencion a domicilio - CLAXON GPS PRO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 15vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/local-taller.jpeg"
                  alt="Local del taller CLAXON - Electricidad Automotriz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 15vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/herramientas.jpeg"
                  alt="Herramientas profesionales del taller CLAXON"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 15vw"
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Electricidad Automotriz & <span className="text-primary">Sistemas GPS</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Expertos en instalación de alarmas, GPS tracker, inmovilizadores y sistemas de seguridad vehicular en Coquimbo. Servicio profesional garantizado.
            </p>
            
            <Button asChild size="lg" className="mb-10">
              <Link href="#contacto">Solicitar Cotización</Link>
            </Button>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Dirección</h4>
                  <p className="text-muted-foreground">Río Caren #1259, Coquimbo</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Teléfonos</h4>
                  <a href="tel:+56994437243" className="text-muted-foreground hover:text-primary transition-colors block">
                    +56 9 9443 7243
                  </a>
                  <a href="tel:+56940025197" className="text-muted-foreground hover:text-primary transition-colors block">
                    +56 9 4002 5197
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:claxongpspro@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    claxongpspro@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-claxon.png"
                alt="CLAXON GPS PRO - Electricidad Automotriz y Sistemas GPS"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
