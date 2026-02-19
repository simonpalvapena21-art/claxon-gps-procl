import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const gpsProducts = [
  {
    title: "GPS Imantados",
    description: "Equipos con iman para instalacion rapida y discreta. Ideal para seguimiento de flotas y vehiculos.",
    image: "/images/gps-imantado.jpg",
  },
  {
    title: "Rastreador GNSS Solar 4G alimentado por LTE",
    description: "Diseñado para la gestión de vehículos de construcción y embarcaciones. Este dispositivo es ideal para una variedad de implementaciones que requieren un largo tiempo de espera y un rendimiento óptimo continuo.",
    image: "/images/gps-solar.jpg",
  },
  {
    title: "GPS Conectados al Vehiculo",
    description: "Conexion directa a la bateria del vehiculo. Monitoreo continuo sin interrupciones.",
    image: "/images/gps-tracker.jpg",
  },
  {
    title: "GPS para Mochilas y Objetos",
    description: "Dispositivos compactos para objetos de valor, equipaje y documentos importantes.",
    image: "/images/gps-imantado.jpg",
  },
  {
    title: "GPS para Personas y Mascotas",
    description: "Localizadores personales para adultos mayores, ninos o personas que requieren supervision.",
    image: "/images/gps-personal.jpg",
  },
  {
    title: "Planes Empresariales",
    description: "Soluciones personalizadas para flotas de vehiculos con plataforma de monitoreo profesional.",
    image: "/images/gps-tracker.jpg",
    badge: "Empresas",
  },
]

export function GPSSection() {
  return (
    <section id="gps" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sistemas GPS de Rastreo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipos de ultima generacion con plataforma profesional de monitoreo para particulares y empresas. Consulta por planes y precios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gpsProducts.map((product) => (
            <Card key={product.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative">
              {product.badge && (
                <span className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </span>
              )}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <a
                  href="https://wa.me/56994437243?text=Hola%2C%20quiero%20consultar%20por%20el%20plan%20GPS%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 0 0 .611.611l4.458-1.495A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.804-6.236-2.152l-.436-.35-3.274 1.097 1.097-3.274-.35-.436A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Consultar precio
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
