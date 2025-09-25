import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary-blue to-blue-800 text-white section-padding mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme seu Negócio em uma
              <span className="text-primary-yellow"> Máquina de Vendas</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Estratégias comprovadas de marketing digital que geram leads qualificados, 
              aumentam vendas e automatizam seu funil comercial. Resultados em até 90 dias.
            </p>
            
            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-primary-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Diagnóstico completo do seu negócio</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-primary-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Funil de vendas automatizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-primary-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Acompanhamento e otimização contínua</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/diagnostico" className="btn-primary text-center">
                Diagnóstico Gratuito
              </Link>
              <Link 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Marketeria"
                className="btn-secondary text-center"
              >
                Falar no WhatsApp
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-blue-700">
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-yellow">500+</div>
                  <div className="text-sm text-blue-200">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-yellow">300%</div>
                  <div className="text-sm text-blue-200">Aumento Médio em Vendas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-yellow">90 dias</div>
                  <div className="text-sm text-blue-200">Resultados Garantidos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-yellow to-yellow-400 rounded-lg p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <h3 className="text-primary-blue font-bold text-xl">Diagnóstico Gratuito</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="WhatsApp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue text-gray-600">
                      <option value="">Faturamento mensal da empresa</option>
                      <option value="ate-10k">Até R$ 10.000</option>
                      <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                      <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                      <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                      <option value="500k-mais">Acima de R$ 500.000</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-secondary">
                    Solicitar Diagnóstico
                  </button>
                </form>
                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão seguros. Não fazemos spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}