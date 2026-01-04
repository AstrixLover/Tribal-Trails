import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tribal-charcoal text-tribal-cream">
      {/* CTA Section */}
      <div className="border-b border-tribal-cream/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience{" "}
              <span className="text-tribal-ochre">Tribal India?</span>
            </h2>
            <p className="text-tribal-cream/70 font-serif mb-8">
              Join our community of responsible travelers. Get curated itineraries, 
              festival calendars, and stories from the heart of tribal regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Planning
              </Button>
              <Button variant="heroOutline" size="lg">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">Tribal India</h3>
            <p className="text-tribal-cream/70 text-sm leading-relaxed mb-6">
              Promoting responsible and sustainable tourism in India's tribal 
              heartlands. We believe in preserving heritage while creating 
              opportunities for indigenous communities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-tribal-cream/70 hover:text-tribal-ochre transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-tribal-cream/70 hover:text-tribal-ochre transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-tribal-cream/70 hover:text-tribal-ochre transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-tribal-cream/70 hover:text-tribal-ochre transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Maharashtra Tribes", "Odisha Tribes", "Festival Calendar", "Cultural Tours", "Art & Crafts"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-tribal-cream/70 hover:text-tribal-ochre transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Travel Tips", "Responsible Tourism", "Blog", "Photo Gallery", "FAQs"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-tribal-cream/70 hover:text-tribal-ochre transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-tribal-cream/70 text-sm">
                <Mail size={16} />
                <span>hello@tribalindia.com</span>
              </li>
              <li className="flex items-center gap-3 text-tribal-cream/70 text-sm">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-tribal-cream/70 text-sm">
                <MapPin size={16} className="mt-1" />
                <span>
                  Tribal Heritage Center<br />
                  Mumbai, Maharashtra
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tribal-cream/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-tribal-cream/50 text-sm">
            © {currentYear} Tribal India. All rights reserved.
          </p>
          <div className="flex gap-6 text-tribal-cream/50 text-sm">
            <a href="#" className="hover:text-tribal-ochre transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-tribal-ochre transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-tribal-ochre transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
