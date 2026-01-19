import { Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-white">
      {/* Main Footer */}
      <div className="container-luxury px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="Maestro Store Premier"
                className="h-16 w-16 rounded-full object-cover shadow-elegant"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-gradient-gold">
                  Maestro Store
                </h3>
                <p className="text-gold/80 font-medium">Premier</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Votre boutique premium d'électronique à Lomé. 
              Produits de qualité supérieure importés d'Europe et des États-Unis, 
              avec un service client d'excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/22898775158"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-gold" />
              </a>
              <a
                href="tel:+22898775158"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Téléphone"
              >
                <Phone className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "À propos" },
                { href: "#products", label: "Produits" },
                { href: "#why-us", label: "Pourquoi nous" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors underline-luxury"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/60">
                  <p>+228 98 77 51 58</p>
                  <p>+228 90 13 52 52</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60">Lomé, Togo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Maestro Store Premier. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              <span className="text-gold/80 text-sm font-medium">
                Boutique Premium à Lomé
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
