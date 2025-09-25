import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marketeria - Consultoria em Marketing Digital e Vendas',
  description: 'Transforme seu negócio com estratégias de marketing digital, automação de vendas e consultoria especializada. Resultados comprovados e leads qualificados.',
  keywords: 'marketing digital, consultoria, automação de vendas, leads qualificados, funil de vendas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}