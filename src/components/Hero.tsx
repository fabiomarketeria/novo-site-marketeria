const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            O Hub Digital Definitivo
            <span className="block text-primary-600">para seu Negócio B2B</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Centralize toda a geração de valor, oportunidades e vendas com estrutura, 
            design e funcionalidades otimizadas para conversão, qualificação e educação 
            do seu público B2B.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
              Começar Agora
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
              Agendar Demo
            </button>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Confiado por empresas líderes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">Logo 1</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">Logo 2</span>
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">Logo 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero