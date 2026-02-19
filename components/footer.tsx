import Link from "next/link"
import { Instagram, Mail, Check, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CLAXON GPS PRO</h3>
            <p className="text-background/70 mb-4 leading-relaxed">
              Más de 40 años brindando soluciones en electricidad automotriz y sistemas de seguridad vehicular en Coquimbo y la región.
            </p>
            <div className="text-background/70 space-y-1 mb-4">
              <p><a href="tel:+56994437243" className="hover:text-background transition-colors">+56 9 9443 7243</a></p>
              <p><a href="tel:+56940025197" className="hover:text-background transition-colors">+56 9 4002 5197</a></p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/claxon32/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background hover:bg-primary transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/56994437243"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background hover:bg-[#25d366] transition-all hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </Link>
              <Link
                href="mailto:claxongpspro@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background hover:bg-primary transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                "Alarmas vehiculares",
                "GPS de rastreo",
                "Inmovilizadores",
                "Sistemas de audio",
                "Luces Xenon/LED",
                "Turbo Timer",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-background/70">
                  <Check className="h-4 w-4 text-secondary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule & Payments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
            <div className="text-background/70 space-y-2 mb-6">
              <p><strong className="text-background">Lunes a Viernes:</strong> 8:30 - 18:30 hrs</p>
              <p><strong className="text-background">Sábado:</strong> 9:00 - 13:00 hrs</p>
              <p><strong className="text-background">Domingo:</strong> Solo emergencias</p>
            </div>
            
            <p className="text-background/70 mb-3">Aceptamos todos los medios de pago:</p>
            <div className="flex items-center gap-4 text-background">
              <CreditCard className="h-8 w-8" />
              {/* Visa */}
              <svg className="h-10 w-14" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" rx="40" fill="white"/>
                <path d="M293.2 348.7l33.4-195.8h53.4L346.6 348.7h-53.4zm246.8-191c-10.6-4-27.2-8.3-47.9-8.3-52.8 0-90 26.6-90.2 64.6-.3 28.1 26.5 43.8 46.7 53.2 20.8 9.6 27.8 15.7 27.7 24.3-.1 13.1-16.6 19.1-31.9 19.1-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.8c12.5 5.5 35.6 10.2 59.6 10.5 56.2 0 92.6-26.3 93-66.8.2-22.3-14-39.2-44.8-53.2-18.6-9.1-30-15.1-29.9-24.3 0-8.1 9.6-16.8 30.4-16.8 17.4-.3 30 3.5 39.8 7.5l4.8 2.2 7.2-42.4h.2zm137.2-4.8h-41.3c-12.8 0-22.4 3.5-28 16.3l-79.3 179.5h56.1l11.2-29.4h68.5l6.5 29.4h49.5l-43.2-195.8zm-65.8 126.4c4.4-11.3 21.4-54.8 21.4-54.8-.3.5 4.4-11.4 7.1-18.8l3.6 17s10.3 47 12.5 56.6h-44.6zM246.2 152.9L193.8 283l-5.6-27.2c-9.7-31.3-40-65.2-73.9-82.2l47.8 174.9h56.6l84.2-195.8h-56.7v.2z" fill="#1A1F71"/>
                <path d="M146.9 152.9H61.8l-.7 3.8c67.1 16.2 111.5 55.4 129.9 102.5L173.1 170c-3.1-12.4-12.5-16.6-26.2-17.1z" fill="#F9A533"/>
              </svg>
              {/* Mastercard */}
              <svg className="h-10 w-14" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="780" height="500" rx="40" fill="#1A1F71"/>
                <circle cx="330" cy="250" r="140" fill="#EB001B"/>
                <circle cx="450" cy="250" r="140" fill="#F79E1B"/>
                <path d="M390 148.5c35.5 27.2 58.3 70.1 58.3 118.5s-22.8 91.3-58.3 118.5c-35.5-27.2-58.3-70.1-58.3-118.5s22.8-91.3 58.3-118.5z" fill="#FF5F00"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} CLAXON GPS PRO - Electricidad Automotriz. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-xs mt-2">
            Diseño y desarrollo web optimizado para SEO.
          </p>
        </div>
      </div>
    </footer>
  )
}
