"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const serviceOptions = [
  { value: "alarma", label: "Alarmas vehiculares" },
  { value: "gps", label: "GPS de rastreo" },
  { value: "inmovilizador", label: "Inmovilizador/Corta corriente" },
  { value: "alzavidrios", label: "Alzavidrios eléctricos" },
  { value: "audio", label: "Sistemas de audio" },
  { value: "luces", label: "Luces Xenon/LED" },
  { value: "diagnostico", label: "Diagnóstico electrónico" },
  { value: "otros", label: "Otros servicios" },
]

const subjectOptions = [
  { value: "consulta", label: "Consulta general" },
  { value: "soporte", label: "Soporte técnico" },
  { value: "reclamo", label: "Reclamo" },
  { value: "sugerencia", label: "Sugerencia" },
  { value: "otros", label: "Otros" },
]

export function ContactSection() {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    message: "",
  })

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construir mensaje para WhatsApp
    const text = `Hola, me gustaría solicitar una cotización:\n\n*Nombre:* ${quoteForm.name}\n*Teléfono:* ${quoteForm.phone}\n*Email:* ${quoteForm.email}\n*Servicio:* ${quoteForm.service}\n*Vehículo:* ${quoteForm.vehicle}\n*Detalles:* ${quoteForm.message}`
    const whatsappUrl = `https://wa.me/56994437243?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construir mailto
    const subject = encodeURIComponent(`Contacto Web - ${contactForm.subject}`)
    const body = encodeURIComponent(`Nombre: ${contactForm.name}\nTeléfono: ${contactForm.phone}\nEmail: ${contactForm.email}\n\nMensaje:\n${contactForm.message}`)
    window.location.href = `mailto:claxongpspro@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solicita una cotización o contáctanos para más información sobre nuestros servicios.
          </p>
          <p className="mt-4 inline-block bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold">
            Atención mínima: $10.000
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quote Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Solicitar Cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="quote-name">Nombre completo *</Label>
                  <Input
                    id="quote-name"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="quote-phone">Teléfono *</Label>
                  <Input
                    id="quote-phone"
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="quote-email">Email</Label>
                  <Input
                    id="quote-email"
                    type="email"
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="quote-service">Servicio de interés *</Label>
                  <Select
                    value={quoteForm.service}
                    onValueChange={(value) => setQuoteForm({ ...quoteForm, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="quote-vehicle">Tipo de vehículo</Label>
                  <Input
                    id="quote-vehicle"
                    placeholder="Ej: Toyota Hilux 2020"
                    value={quoteForm.vehicle}
                    onChange={(e) => setQuoteForm({ ...quoteForm, vehicle: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="quote-message">Detalles adicionales</Label>
                  <Textarea
                    id="quote-message"
                    rows={4}
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Solicitar Cotización
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Contacto Directo</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Nombre *</Label>
                  <Input
                    id="contact-name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Teléfono *</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-subject">Asunto *</Label>
                  <Select
                    value={contactForm.subject}
                    onValueChange={(value) => setContactForm({ ...contactForm, subject: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="contact-message">Mensaje *</Label>
                  <Textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <h4 className="font-semibold text-foreground mb-4">Información de contacto</h4>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Río Caren #1259, Coquimbo
                </p>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  +56 9 9443 7243
                </p>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  +56 9 4002 5197
                </p>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  claxongpspro@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
