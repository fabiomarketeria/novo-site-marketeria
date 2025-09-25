'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Como funciona o diagnóstico gratuito?',
      answer: 'O diagnóstico é uma análise completa do seu negócio onde identificamos oportunidades de crescimento, gargalos que impedem o aumento das vendas e criamos um plano estratégico personalizado. É 100% gratuito e sem compromisso.'
    },
    {
      question: 'Em quanto tempo vejo os primeiros resultados?',
      answer: 'Nossos clientes costumam ver os primeiros resultados significativos entre 30 a 90 dias, dependendo do segmento e da estratégia implementada. Temos casos de clientes que viram resultados já na primeira semana.'
    },
    {
      question: 'Vocês atendem todos os tipos de empresa?',
      answer: 'Atendemos principalmente empresas B2B, consultores, coaches, infoprodutores e prestadores de serviços. Nosso foco são negócios que faturam entre R$ 50k e R$ 2M por mês e querem escalar suas vendas.'
    },
    {
      question: 'Qual o investimento necessário?',
      answer: 'O investimento varia de acordo com o tamanho da empresa e escopo do projeto. Durante o diagnóstico gratuito, apresentamos uma proposta personalizada com valor fixo ou percentual sobre resultados.'
    },
    {
      question: 'Vocês garantem resultados?',
      answer: 'Sim! Oferecemos garantia de resultados em todos os nossos projetos. Se não atingirmos as metas acordadas no prazo estipulado, continuamos trabalhando sem custo adicional até alcançá-las.'
    },
    {
      question: 'Como é o acompanhamento dos projetos?',
      answer: 'Temos reuniões semanais de alinhamento, relatórios mensais detalhados e um gestor dedicado para cada cliente. Você tem acesso a um dashboard em tempo real para acompanhar todos os resultados.'
    },
    {
      question: 'Preciso ter conhecimento técnico?',
      answer: 'Não! Nossa equipe cuida de toda a parte técnica. Você só precisa focar no seu negócio enquanto nós cuidamos da estratégia, implementação e otimização de todos os processos de marketing e vendas.'
    },
    {
      question: 'Posso cancelar o serviço quando quiser?',
      answer: 'Nossos contratos têm prazo mínimo de 6 meses para garantir a implementação completa da estratégia. Após esse período, você pode cancelar com 30 dias de antecedência.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-primary-blue">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclareça suas principais dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary-blue rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-primary-blue transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-primary-blue mb-4">
              Não encontrou sua pergunta?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e nossa equipe responderá todas suas dúvidas
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Tenho algumas dúvidas sobre os serviços da Marketeria"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}