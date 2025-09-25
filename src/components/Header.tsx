'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-blue">Marketeria</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/servicos" className="text-gray-600 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
                Serviços
              </Link>
              <Link href="/metodo" className="text-gray-600 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
                Método
              </Link>
              <Link href="/resultados" className="text-gray-600 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
                Resultados
              </Link>
              <Link href="/materiais" className="text-gray-600 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
                Materiais
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link href="/eventos" className="text-gray-600 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium">
                Eventos
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/diagnostico" className="btn-primary">
              Diagnóstico Gratuito
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-blue p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/servicos" className="text-gray-600 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium">
                Serviços
              </Link>
              <Link href="/metodo" className="text-gray-600 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium">
                Método
              </Link>
              <Link href="/resultados" className="text-gray-600 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium">
                Resultados
              </Link>
              <Link href="/materiais" className="text-gray-600 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium">
                Materiais
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium">
                Blog
              </Link>
              <Link href="/eventos" className="text-gray-600 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium">
                Eventos
              </Link>
              <Link href="/diagnostico" className="btn-primary block text-center mt-4">
                Diagnóstico Gratuito
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}