import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import MethodSection from '@/components/MethodSection'
import ResultsSection from '@/components/ResultsSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MethodSection />
      <ResultsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}