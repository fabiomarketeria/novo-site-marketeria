const Services = () => {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas com React/Next.js, otimizadas para conversão e performance.",
      features: ["React & Next.js", "TailwindCSS", "TypeScript", "Responsive Design"]
    },
    {
      title: "Integração de Marketing",
      description: "Conectamos seu site com as principais ferramentas de marketing digital e automação.",
      features: ["CRM Integration", "Email Marketing", "Analytics", "Lead Tracking"]
    },
    {
      title: "Automação B2B",
      description: "Fluxos automatizados para qualificação e nutrição de leads, otimizando seu funil de vendas.",
      features: ["Lead Scoring", "Workflow Automation", "Segmentation", "Personalization"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital em uma máquina de geração de leads
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services