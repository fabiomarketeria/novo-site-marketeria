export default function ServicesSection() {
  const services = [
    {
      title: 'Consultoria Estratégica',
      description: 'Análise completa do seu negócio e desenvolvimento de estratégia personalizada para maximizar resultados.',
      icon: '🎯',
      features: ['Diagnóstico empresarial', 'Plano estratégico', 'Definição de personas', 'Análise da concorrência']
    },
    {
      title: 'Funil de Vendas Automatizado',
      description: 'Construção e otimização de funis de vendas que convertem visitantes em clientes pagantes.',
      icon: '🚀',
      features: ['Landing pages', 'Sequência de e-mails', 'Automação completa', 'Testes A/B']
    },
    {
      title: 'Geração de Leads',
      description: 'Estratégias multicanal para atrair e capturar leads qualificados de forma escalável.',
      icon: '📈',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Conteúdo estratégico']
    },
    {
      title: 'Machine de Prospecção',
      description: 'Sistema automatizado de prospecção B2B que identifica e aborda clientes ideais.',
      icon: '🤖',
      features: ['Prospecção automatizada', 'Qualificação de leads', 'Follow-up inteligente', 'CRM integrado']
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de marketing digital e vendas para acelerar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-blue mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-primary-yellow mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contato" className="btn-primary">
            Solicitar Proposta
          </a>
        </div>
      </div>
    </section>
  )
}