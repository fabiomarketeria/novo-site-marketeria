'use client'

import { useState } from 'react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage('Obrigado! Entraremos em contato em breve.')
        setFormData({ name: '', email: '', company: '' })
      } else {
        setSubmitMessage(result.error || 'Erro ao enviar formulário.')
      }
    } catch (error) {
      setSubmitMessage('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Vamos conversar sobre como podemos ajudar sua empresa a alcançar resultados excepcionais
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Falar com Especialista
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
            Ver Casos de Sucesso
          </button>
        </div>

        {/* Contact form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
            />
            <input
              type="email"
              placeholder="Seu e-mail corporativo"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
            />
            <input
              type="text"
              placeholder="Nome da empresa"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              required
              className="w-full px-4 py-3 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
            </button>
          </form>
          
          {submitMessage && (
            <p className={`text-sm mt-4 ${submitMessage.includes('Obrigado') ? 'text-green-200' : 'text-red-200'}`}>
              {submitMessage}
            </p>
          )}
          
          <p className="text-primary-200 text-sm mt-4">
            Responderemos em até 24 horas úteis
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA