import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/fam-towing-logo.png"
                alt="FAM Towing Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Fast, friendly, and professional towing services available 24/7. Your trusted partner for all automotive
              emergencies and transportation needs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="tel:+14706002326">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: (470) 600-2326
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Emergency Towing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Roadside Assistance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Long Distance Towing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Vehicle Recovery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Fleet Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+14706002326" className="hover:text-primary transition-colors">
                  (470) 600-2326
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>info@famtowing.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Serving Metro Area</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          {/* Removed "FAM Towing" text from copyright, keeping just the year */}
          <p>&copy; 2024 All rights reserved. | Licensed & Insured | DOT #123456</p>
        </div>
      </div>
    </footer>
  )
}
