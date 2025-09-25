const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Conversão Otimizada",
      description: "Landing pages e formulários projetados para maximizar a conversão de visitantes em leads qualificados."
    },
    {
      icon: "🔗",
      title: "Integração Completa",
      description: "Conecte facilmente com suas ferramentas de marketing, automação e CRM favoritas."
    },
    {
      icon: "📊",
      title: "Analytics Avançado",
      description: "Acompanhe métricas importantes e otimize sua estratégia com dados em tempo real."
    },
    {
      icon: "🚀",
      title: "Performance Excepcional",
      description: "Tecnologia moderna garantindo velocidade e experiência superior para seus usuários."
    },
    {
      icon: "📱",
      title: "Responsivo",
      description: "Design adaptável que funciona perfeitamente em todos os dispositivos e tamanhos de tela."
    },
    {
      icon: "🔒",
      title: "Segurança",
      description: "Proteção avançada de dados e conformidade com as melhores práticas de segurança."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Projetados para B2B
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada funcionalidade foi pensada para maximizar sua geração de leads e conversões
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features