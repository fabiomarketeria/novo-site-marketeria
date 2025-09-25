export default function MethodSection() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Análise completa do seu negócio, identificando oportunidades de crescimento e gargalos que impedem o aumento das vendas.',
      details: ['Auditoria digital completa', 'Análise da concorrência', 'Identificação de personas', 'Mapeamento da jornada do cliente']
    },
    {
      number: '02',
      title: 'Estruturação',
      description: 'Desenvolvimento da estratégia personalizada e criação dos ativos digitais necessários para atingir seus objetivos.',
      details: ['Plano estratégico detalhado', 'Criação de landing pages', 'Desenvolvimento de conteúdo', 'Setup de ferramentas']
    },
    {
      number: '03',
      title: 'Automação',
      description: 'Implementação de sistemas automatizados de marketing e vendas que trabalham 24/7 para gerar leads e converter clientes.',
      details: ['Funis de vendas automatizados', 'E-mail marketing', 'Chatbots inteligentes', 'Integração com CRM']
    },
    {
      number: '04',
      title: 'Acompanhamento',
      description: 'Monitoramento contínuo dos resultados com otimizações constantes para maximizar o ROI e acelerar o crescimento.',
      details: ['Relatórios mensais', 'Análise de métricas', 'Otimização contínua', 'Suporte especializado']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Método <span className="text-primary-blue">Marketeria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia comprovada que já transformou centenas de empresas em máquinas de vendas
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-yellow text-primary-blue font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-primary-blue">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-primary-yellow mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className="bg-gradient-to-br from-primary-blue to-blue-800 rounded-lg p-8 text-white">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary-yellow mb-2">
                      {step.number}
                    </div>
                    <div className="text-2xl font-bold mb-4">
                      {step.title}
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-yellow rounded-full mr-2"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma conversa estratégica gratuita e descubra como podemos acelerar seus resultados
            </p>
            <a href="#contato" className="btn-primary">
              Agendar Consultoria Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}