"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll contact you soon.")
    setFormData({ name: "", phone: "", email: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleGetQuote = () => {
    window.open(
      "http://public.towbook.com/66Q6",
      "quote-popup",
      "width=800,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no",
    )
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get Help Now</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Need immediate assistance? Call us now or get a quote online for fast service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  Emergency Hotline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+14706002326" className="text-2xl font-bold text-primary mb-2 hover:underline block">
                  (470) 600-2326
                </a>
                <p className="text-muted-foreground">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Emergency Services:</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Office Hours:</span>
                    <span className="font-semibold">Mon-Fri 8AM-6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend:</span>
                    <span className="font-semibold">Sat-Sun 9AM-5PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Service Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We serve the greater metropolitan area and surrounding counties. Long-distance towing available
                  nationwide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@famtowing.com</p>
                <p className="text-muted-foreground">For non-emergency inquiries</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get Quote Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground">
                  Get an instant quote for your towing or roadside assistance needs. Our online system provides quick
                  estimates based on your location and service requirements.
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Quick & Easy Process:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Enter your location and vehicle details</li>
                      <li>• Select the service you need</li>
                      <li>• Get instant pricing</li>
                      <li>• Schedule your service</li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleGetQuote}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    Get Quote Now
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    For immediate emergencies, call{" "}
                    <a href="tel:+14706002326" className="font-bold text-primary hover:underline">
                      (470) 600-2326
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
