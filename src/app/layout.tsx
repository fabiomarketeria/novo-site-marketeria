import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marketeria - Hub Digital B2B definitivo',
  description: 'O hub digital definitivo da Marketeria, centralizando toda a geração de valor, oportunidades e vendas, com estrutura, design e funcionalidades otimizadas para conversão, qualificação e educação do público B2B.',
  keywords: ['marketing B2B', 'automação', 'CRM', 'geração de leads', 'conversão'],
  authors: [{ name: 'Marketeria' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
                o.onload=function(){window.trackingFunctions.onLoad({appId:"6633df719939070300582cfb"})},
                document.head.appendChild(o)
              }
              initApollo();
            `
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}