import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/${phone.replace(/\+/g, "")}`, "_blank");
  };

  const handlePhoneClick = (phone: string) => {
    window.open(`tel:${phone}`, "_self");
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
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Contactez-nous
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Parlons de Vos{" "}
            <span className="text-gradient-gold">Besoins</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos 
            questions et vous accompagner dans vos achats.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className={`card-luxury p-8 text-center ${
                info.highlight
                  ? "border-2 border-gold/30 bg-gradient-to-b from-gold/5 to-transparent"
                  : ""
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                  info.highlight
                    ? "bg-gradient-to-br from-gold to-gold-light"
                    : "bg-gradient-to-br from-gold/10 to-orange/10"
                }`}
              >
                <info.icon
                  className={`w-8 h-8 ${
                    info.highlight ? "text-deep-black" : "text-primary"
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
                    className={`${
                      info.action
                        ? "text-foreground font-medium cursor-pointer hover:text-primary transition-colors"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => info.action?.(line)}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à Découvrir Nos Produits ?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Contactez-nous dès maintenant pour plus d'informations 
              sur nos produits et nos prix exclusifs.
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
  );
};

export default Contact;
