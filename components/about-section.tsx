import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Customers Served",
  },
  {
    icon: Clock,
    number: "15 min",
    label: "Average Response Time",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Customer Rating",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "FAM Towing saved my day! Quick response, professional service, and fair pricing. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    text: "Called them at 2 AM when my car broke down. They were there in 20 minutes and got me home safely.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    text: "Professional, courteous, and efficient. They handled my accident recovery with care and expertise.",
    rating: 5,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose FAM Towing?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            With over 15 years of experience serving our community, we've built our reputation on reliability,
            professionalism, and customer satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
