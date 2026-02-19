import Image from "next/image"

const clients = [
  {
    src: "/images/confian-1.jpeg",
    alt: "Metalurgica Indumetal Ltda",
  },
  {
    src: "/images/confian-2.jpeg",
    alt: "Out Insects - Control de Plagas",
  },
  {
    src: "/images/confian-3.jpeg",
    alt: "Comercial Alameda",
  },
  {
    src: "/images/confian-4.jpeg",
    alt: "Dispromin - Limpiafosas y Servicios Ambientales",
  },
  {
    src: "/images/confian-5.jpeg",
    alt: "DSS SPA - Drilling Services and Solutions",
  },
]

export function ClientsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Confian en nosotros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas que han confiado en nuestros servicios de electricidad automotriz y sistemas GPS.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.alt}
              className="relative h-24 w-40 md:h-28 md:w-48 rounded-lg overflow-hidden bg-background shadow-sm border border-border flex items-center justify-center p-3 transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
