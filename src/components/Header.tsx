'use client'

import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-primary-700">Marketeria</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Serviços
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              Sobre
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Contato
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Serviços
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Sobre
              </Link>
              <Link href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Depoimentos
              </Link>
              <Link href="#contact" className="block px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header