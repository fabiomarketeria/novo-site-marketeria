const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO, TechCorp",
      content: "A Marketeria transformou completamente nossa presença digital. Conseguimos aumentar nossa geração de leads em 300% nos primeiros 6 meses.",
      rating: 5
    },
    {
      name: "Ana Paula",
      position: "Diretora de Marketing, InnovaCo",
      content: "A integração com nossas ferramentas de CRM foi perfeita. Agora temos visibilidade completa do nosso funil de vendas.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      position: "Founder, StartupXYZ",
      content: "Profissionalismo excepcional e resultados concretos. Nossa taxa de conversão dobrou após implementarem as otimizações.",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram sua presença digital conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials