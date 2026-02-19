"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/slide-1.jpeg",
    alt: "Letrero del taller CLAXON - Electricidad Automotriz con listado de servicios",
    caption: "",
  },
  {
    src: "/images/gallery/slide-2.jpeg",
    alt: "Vehiculo de servicio a domicilio CLAXON - Electricidad Automotriz",
    caption: "",
  },
  {
    src: "/images/gallery/slide-3.jpeg",
    alt: "Sistema de alarma K-9 Mundial SSR/LA Security System",
    caption: "Alarma K-9 para vehiculos",
  },
  {
    src: "/images/gallery/slide-4.jpeg",
    alt: "Modulo de interface FKS MR200 5S EXP para reboque",
    caption: "Interfaz de Remolque",
  },
  {
    src: "/images/gallery/slide-5.jpeg",
    alt: "Ampolletas LED Black Widow Turbo LED Headlight Serie 3.0 12000LM",
    caption: "Luces LED",
  },
  {
    src: "/images/gallery/slide-6.jpeg",
    alt: "Kit de cierre centralizado Black Widow Door Lock para 4 puertas",
    caption: "Centralizado - Door Lock marca Black Widow",
  },
  {
    src: "/images/gallery/slide-7.jpeg",
    alt: "Dispositivos GPS tracker compactos e imantados",
    caption: "GPS de Rastreo",
  },
  {
    src: "/images/gallery/slide-8.jpeg",
    alt: "Variedad de equipos GPS tracker BAANOOL de distintos tamanos",
    caption: "GPS de Rastreo",
  },
  {
    src: "/images/gallery/slide-9.jpeg",
    alt: "Coleccion de equipos GPS tracker con empaques Jimi IoT y BAANOOL",
    caption: "GPS de Rastreo",
  },
];

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce nuestros equipos, productos e instalaciones.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={image.src} className="flex flex-col">
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </button>
              {image.caption && (
                <p className="mt-2 text-center text-sm font-medium text-foreground">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Cerrar visor"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="relative w-full max-w-4xl max-h-[85vh] mx-12">
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh] rounded-lg"
              priority
            />
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 text-background hover:text-background/70 transition-colors z-10"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <p className="absolute bottom-4 text-center text-background/80 text-sm w-full px-4">
            {galleryImages[lightboxIndex].alt} - {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
