export default function ResultsSection() {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      position: 'CEO, TechSolutions',
      company: 'Tecnologia',
      result: '400% de aumento em leads',
      testimonial: 'A Marketeria transformou completamente nossa estratégia digital. Em 3 meses, aumentamos nossos leads em 400% e fechamos R$ 200k em novos contratos.',
      image: '👨‍💼'
    },
    {
      name: 'Ana Silva',
      position: 'Diretora Comercial',
      company: 'ConsultFin',
      result: 'R$ 500k em 90 dias',
      testimonial: 'O funil automatizado criado pela equipe gerou mais de R$ 500k em vendas nos primeiros 90 dias. Nosso ROI foi de 800%.',
      image: '👩‍💼'
    },
    {
      name: 'Roberto Lima',
      position: 'Fundador',
      company: 'EduOnline',
      result: '250% crescimento',
      testimonial: 'Passamos de 50 para 175 alunos pagantes em apenas 4 meses. A estratégia de conteúdo e automação foi fundamental para esse crescimento.',
      image: '👨‍🎓'
    }
  ]

  const metrics = [
    {
      number: '500+',
      label: 'Empresas Transformadas',
      description: 'Clientes atendidos com resultados comprovados'
    },
    {
      number: 'R$ 50M+',
      label: 'Vendas Geradas',
      description: 'Volume total de vendas gerado para nossos clientes'
    },
    {
      number: '300%',
      label: 'Aumento Médio',
      description: 'Crescimento médio em leads qualificados'
    },
    {
      number: '90 dias',
      label: 'Primeiros Resultados',
      description: 'Tempo médio para ver resultados significativos'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resultados <span className="text-primary-blue">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossa metodologia já transformou centenas de empresas em máquinas de vendas
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-primary-blue mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-primary-blue font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="bg-primary-yellow/10 rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-primary-blue text-center">
                  {testimonial.result}
                </div>
              </div>

              <blockquote className="text-gray-600 italic mb-6">
                &ldquo;{testimonial.testimonial}&rdquo;
              </blockquote>

              <div className="flex justify-center">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Preview */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              Estudo de Caso: TechSolutions
            </h3>
            <p className="text-gray-600">
              Como uma empresa de software B2B aumentou suas vendas em 400% em apenas 90 dias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-red-100 text-red-600 rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold">Antes</div>
                <div className="text-sm">50 leads/mês</div>
              </div>
              <div className="text-sm text-gray-600">Geração de leads inconsistente</div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 text-yellow-600 rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold">Processo</div>
                <div className="text-sm">90 dias</div>
              </div>
              <div className="text-sm text-gray-600">Implementação da metodologia</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 rounded-lg p-4 mb-2">
                <div className="text-2xl font-bold">Depois</div>
                <div className="text-sm">200 leads/mês</div>
              </div>
              <div className="text-sm text-gray-600">Crescimento sustentável</div>
            </div>
          </div>

          <div className="text-center">
            <a href="/estudos-de-caso" className="btn-secondary">
              Ver Estudo Completo
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary-blue rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer Resultados Como Esses?
            </h3>
            <p className="mb-6 text-blue-100">
              Agende uma conversa estratégica gratuita e descubra como podemos transformar seu negócio
            </p>
            <a href="#contato" className="btn-primary">
              Quero Meus Resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}