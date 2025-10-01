import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Wrench, Car, Shield, Clock, MapPin } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Emergency Towing",
    description:
      "Fast response emergency towing services available 24/7. We'll get you and your vehicle to safety quickly and safely.",
  },
  {
    icon: Car,
    title: "Roadside Assistance",
    description:
      "Jump starts, tire changes, lockout service, and fuel delivery. We handle the small problems so they don't become big ones.",
  },
  {
    icon: MapPin,
    title: "Long Distance Towing",
    description:
      "Need to transport your vehicle across state lines? Our long-distance towing service gets your car where it needs to go.",
  },
  {
    icon: Wrench,
    title: "Vehicle Recovery",
    description:
      "Stuck in a ditch, snow, or mud? Our recovery specialists have the equipment and expertise to get you out safely.",
  },
  {
    icon: Shield,
    title: "Accident Recovery",
    description:
      "Professional accident scene management and vehicle recovery. We work with insurance companies and law enforcement.",
  },
  {
    icon: Clock,
    title: "Fleet Services",
    description:
      "Commercial fleet towing and roadside assistance. Keep your business moving with our reliable commercial services.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From emergency towing to roadside assistance, we provide comprehensive automotive services when you need
            them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
