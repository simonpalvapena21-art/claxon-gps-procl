import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const servicesWithPrice = [
  {
    title: "Alarmas Vehiculares",
    description: "Marcas: Teks, Hawk, Black Widow y K9.",
    price: "Desde $85.000",
    image: "/images/alarma-vehicular.jpg",
  },
  {
    title: "Alarma Control Original",
    description: "Alarma con control original Omega K9.",
    price: "$120.000",
    image: "/images/alarma-vehicular.jpg",
  },
  {
    title: "Alarma Beeper K9",
    description: "Dos controles con pantalla LCD.",
    price: "$175.000",
    image: "/images/alarma-vehicular.jpg",
  },
  {
    title: "Camara de Rastreo y Video Vigilancia en vivo Doble-Canal DashCam",
    description: "Cámara orientada hacia el interior o hacia la parte trasera, dependiendo de sus necesidades.",
    price: "",
    image: "/images/dashcam.jpg",
  },
  {
    title: "DashCam de Doble-Canal DSM",
    description: "Es un dispositivo telemático de vídeo compacto que facilita la gestión remota de sus flotas en ruta. Agrega visibilidad a su flota, junto con una potente conectividad LE y capacidad GNSS.",
    price: "",
    image: "/images/doblecanal.png",
  },
  {
    title: "GPS Antirrobo TK303F 3G",
    description: "Controla tu vehiculo con tu celular. Plataforma gratis.",
    price: "$130.000",
    image: "/images/gps-tracker.jpg",
  },
  {
    title: "Interfase Vidrios Automaticos",
    description: "Disponible para dos y cuatro puertas.",
    price: "2 puertas $60.000 / 4 puertas $75.000",
    image: "/images/alzavidrios.jpg",
  },
  {
    title: "Turbo Timer Pro 12/24",
    description: "Para vehiculos diesel. Prolonga la vida util del turbo.",
    price: "$75.000",
    image: "/images/turbo-timer.jpg",
  },
  {
    title: "Luces de Dia Automaticas",
    description: "Luces LED de circulacion diurna con encendido automatico.",
    price: "Desde $75.000",
    image: "/images/luces-dia.jpg",
  },
  {
    title: "Sensores de Retroceso",
    description: "Colores: negro, blanco, gris y grafito.",
    price: "Desde $120.000",
    image: "/images/sensores-retroceso.jpg",
  },
  {
    title: "Instalacion de Radios",
    description: "Instalacion profesional de radios y sistemas multimedia.",
    price: "Desde $35.000",
    image: "/images/radio-audio.jpg",
  },
]

const servicesNoPriceList = [
  {
    title: "Centralizados",
    description: "Dos y cuatro puertas.",
    image: "/images/centralizado.jpg",
  },
  {
    title: "Vidrios Electricos",
    description: "Puertas delanteras.",
    image: "/images/alzavidrios.jpg",
  },
  {
    title: "Instalacion de Neblineros",
    description: "Instalacion profesional de luces antiniebla.",
    image: "/images/neblineros.jpg",
  },
  {
    title: "Luces de Cortesia",
    description: "Iluminacion interior de cortesia para tu vehiculo.",
    image: "/images/luces-xenon.jpg",
  },
  {
    title: "Cargas de Baterias",
    description: "Servicio de carga y diagnostico de baterias.",
    image: "/images/diagnostico.jpg",
  },
  {
    title: "Chequeo Electrico Pre Revision Tecnica",
    description: "Revision electrica completa para aprobar revision tecnica.",
    image: "/images/diagnostico.jpg",
  },
  {
    title: "Luces XENON y LED",
    description: "Mejora la iluminacion de tu vehiculo.",
    image: "/images/luces-xenon.jpg",
  },
  {
    title: "Interfaces",
    description: "Interfaces para sistemas electricos vehiculares.",
    image: "/images/inmovilizador.jpg",
  },
  {
    title: "Camaras de Retroceso",
    description: "Camaras traseras con vision nocturna.",
    image: "/images/camara-retroceso.jpg",
  },
  {
    title: "Fallas Electricas",
    description: "Diagnostico y reparacion de fallas electricas.",
    image: "/images/diagnostico.jpg",
  },
  {
    title: "Instalaciones Generales",
    description: "Instalaciones electricas a medida.",
    image: "/images/inmovilizador.jpg",
  },
  {
    title: "Diagnostico de Fallas",
    description: "Diagnostico profesional de sistemas electricos.",
    image: "/images/diagnostico.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Servicios de Electricidad Automotriz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mas de 40 años de experiencia en electricidad automotriz.
          </p>
        </div>

        {/* Servicios con precio */}
        <h3 className="text-2xl font-bold text-foreground mb-6">Productos y Equipos con Precio</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {servicesWithPrice.map((service) => (
            <Card key={service.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                {service.price ? (
                  <p className="text-primary font-bold text-lg">{service.price}</p>
                ) : (
                  <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Consultar precio
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Servicios sin precio (cotizar) */}
        <h3 className="text-2xl font-bold text-foreground mb-6">Otros Servicios (Consultar Precio)</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesNoPriceList.map((service) => (
            <Card key={service.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Consultar precio
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
