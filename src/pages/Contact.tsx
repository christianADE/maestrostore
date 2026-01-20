import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\+/g, "").replace(/\s/g, "")}`, "_blank");
  };

  const handlePhoneClick = (phone: string) => {
    window.open(`tel:${phone.replace(/\s/g, "")}`, "_self");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      lines: ["+228 98 77 51 58", "+228 90 13 52 52"],
      action: handlePhoneClick,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["+228 98 77 51 58"],
      action: (phone: string) => handleWhatsAppClick(phone),
      highlight: true,
    },
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["Lomé, Togo"],
      action: null,
    },
    {
      icon: Clock,
      title: "Horaires",
      lines: ["Lun - Sam: 8h - 19h", "Dim: Sur rendez-vous"],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <ScrollReveal animation="fade-in" className="container-luxury relative z-10 px-6 text-center">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Nous Contacter
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-white">
            Parlons de Vos <span className="text-gradient-gold">Besoins</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions et vous accompagner dans vos achats.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <ScrollReveal
                key={info.title}
                animation="fade-up"
                delay={index * 0.1}
                className={`card-luxury p-8 text-center h-full transition-all duration-300 ${info.highlight
                    ? "border-2 border-gold/30 bg-gradient-to-b from-gold/5 to-transparent"
                    : ""
                  }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${info.highlight
                      ? "bg-gradient-to-br from-gold to-gold-light"
                      : "bg-gradient-to-br from-gold/10 to-orange/10"
                    }`}
                >
                  <info.icon
                    className={`w-8 h-8 ${info.highlight ? "text-deep-black" : "text-primary"
                      }`}
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className={`${info.action
                          ? "text-foreground font-medium cursor-pointer hover:text-primary transition-colors"
                          : "text-muted-foreground"
                        }`}
                      onClick={() => info.action?.(line)}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Main CTA Section */}
          <div className="bg-gradient-hero rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/10 rounded-full blur-2xl" />

            <div className="relative z-10 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Contactez-nous Maintenant
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Pour toute demande d'information sur nos produits et nos prix,
                n'hésitez pas à nous contacter via WhatsApp ou par téléphone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={() => handleWhatsAppClick("+22898775158")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Écrire sur WhatsApp
                </Button>
                <Button
                  variant="hero-outline"
                  size="xl"
                  onClick={() => handlePhoneClick("+22898775158")}
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pourquoi Nous <span className="text-gradient-gold">Choisir</span> ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <span className="text-gradient-gold font-serif font-bold">01</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Réponse Rapide
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nous répondons à vos messages dans les plus brefs délais
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <span className="text-gradient-gold font-serif font-bold">02</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Conseils Experts
                </h3>
                <p className="text-muted-foreground text-sm">
                  Notre équipe vous guide dans vos choix technologiques
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <span className="text-gradient-gold font-serif font-bold">03</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Devis Gratuit
                </h3>
                <p className="text-muted-foreground text-sm">
                  Obtenez un devis personnalisé sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
