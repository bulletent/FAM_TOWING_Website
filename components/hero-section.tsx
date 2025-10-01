"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"

export function HeroSection() {
  const openQuotePopup = () => {
    window.open(
      "http://public.towbook.com/66Q6",
      "quoteWindow",
      "width=800,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no",
    )
  }

  return (
    <section
      className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/fam-towing-truck.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Fast, Friendly, Professional <span className="text-primary">Towing Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
            When you're stranded, we're here to help. Available 24/7 with quick response times and professional service
            you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" asChild>
              <a href="tel:+14706002326">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call: (470) 600-2326
              </a>
            </Button>
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90" onClick={openQuotePopup}>
              Get Quote Online
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-200">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-200">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Local & Long Distance</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-200">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
