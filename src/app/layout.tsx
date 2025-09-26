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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}