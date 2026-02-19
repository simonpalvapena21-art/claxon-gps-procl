import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});
const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'CLAXON GPS PRO | Electricidad Automotriz & Sistemas de Rastreo',
  description: 'Más de 40 años de experiencia en electricidad automotriz e instalación de sistemas GPS de rastreo en Coquimbo. Alarmas, GPS tracker, inmovilizadores y más.',
  keywords: 'electricidad automotriz, GPS rastreo, alarmas vehiculares, Coquimbo, CLAXON, instalación GPS, seguridad vehicular',
  generator: 'v0.app',
  openGraph: {
    title: 'CLAXON GPS PRO | Electricidad Automotriz & Sistemas de Rastreo',
    description: 'Más de 40 años de experiencia en electricidad automotriz e instalación de sistemas GPS de rastreo en Coquimbo.',
    locale: 'es_CL',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a56db',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
