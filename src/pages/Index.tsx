import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-products.jpg";
import logo from "@/assets/logo.jpg";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/22898775158", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Full viewport height */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
        
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />
        
        <div className="container-luxury relative z-10 px-6 pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Premium badge */}
              <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
                <span className="text-gold text-sm font-medium tracking-wide">
                  Boutique Premium à Lomé
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-delay font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Maestro Store</span>
                <br />
                <span className="text-gradient-gold">Premier</span>
              </h1>

              {/* Subheadline */}
              <p className="animate-fade-in-delay-2 text-white/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Électronique premium importée d'Europe et des États-Unis. 
                Les derniers smartphones et ordinateurs à des prix accessibles.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="xl"
                  className="group"
                  asChild
                >
                  <Link to="/products">
                    Découvrir nos produits
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="animate-fade-in-delay-2 pt-8 flex flex-wrap gap-8 justify-center lg:justify-start text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Produits authentiques
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Service professionnel
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Garantie assurée
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-orange/20 rounded-3xl blur-2xl transform rotate-3" />
              <img
                src={heroImage}
                alt="Premium electronics - smartphones and laptops"
                className="relative rounded-3xl shadow-luxury object-cover w-full animate-float"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-luxury">
                <div className="text-gradient-gold font-serif text-2xl font-bold">100%</div>
                <div className="text-foreground/70 text-sm">Qualité garantie</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Explorez Notre <span className="text-gradient-gold">Univers</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nos Produits",
                description: "Smartphones, ordinateurs et accessoires premium",
                link: "/products",
                icon: "📱",
              },
              {
                title: "Notre Histoire",
                description: "Découvrez notre engagement qualité",
                link: "/about",
                icon: "⭐",
              },
              {
                title: "Nous Contacter",
                description: "Parlons de vos besoins",
                link: "/contact",
                icon: "💬",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="card-luxury p-8 text-center group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <span className="text-primary font-medium inline-flex items-center gap-2">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
