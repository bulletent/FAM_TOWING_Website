import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
