import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Marketeria</h3>
            <p className="text-blue-200 mb-6">
              Transformamos negócios através de estratégias de marketing digital 
              orientadas à resultados. Especialistas em geração de leads qualificados 
              e automação de vendas.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/5511999999999" className="text-blue-200 hover:text-white">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.996-4.779-2.811-6.598-1.815-1.819-4.145-2.817-6.605-2.818-5.448 0-9.886 4.435-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.277-.857z"/>
                  <path d="M11.893 5.5c2.25 0 4.08 1.83 4.08 4.08s-1.83 4.08-4.08 4.08-4.08-1.83-4.08-4.08 1.83-4.08 4.08-4.08z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/marketeria" className="text-blue-200 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com/marketeria" className="text-blue-200 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/servicos" className="text-blue-200 hover:text-white">Serviços</Link></li>
              <li><Link href="/metodo" className="text-blue-200 hover:text-white">Método Marketeria</Link></li>
              <li><Link href="/resultados" className="text-blue-200 hover:text-white">Resultados</Link></li>
              <li><Link href="/materiais" className="text-blue-200 hover:text-white">Materiais Gratuitos</Link></li>
              <li><Link href="/blog" className="text-blue-200 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="mailto:contato@marketeria.com.br" className="hover:text-white">
                  contato@marketeria.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="hover:text-white">
                  (11) 99999-9999
                </a>
              </li>
              <li>São Paulo, SP</li>
            </ul>
            <Link href="/diagnostico" className="btn-primary inline-block mt-4">
              Agendar Consultoria
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Marketeria. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacidade" className="text-blue-200 hover:text-white text-sm">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-blue-200 hover:text-white text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}