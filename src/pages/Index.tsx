import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import logo from "@/assets/logo.jpg";
import productSmartphone from "@/assets/product-smartphone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import iphone12Img from "@/assets/iphone_12_pro_max.png";
import iphone7Img from "@/assets/iphone_7.png";
import bestSellerImg from "@/assets/telephone_best_sellers.png";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/22898775158", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Full viewport height */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-24">
        {/* Background base */}
        <div className="absolute inset-0 bg-gradient-hero z-0" />

        {/* Enhanced Decorative Glowing Shapes */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[120px] z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -left-20 w-[600px] h-[600px] bg-orange/15 rounded-full blur-[120px] z-0"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[150px] z-0" />

        {/* Gold accent line animated */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-30 shadow-[0_0_15px_rgba(198,147,10,0.5)] z-0" />

        {/* Animated Particles/Stars background - FULL DISTRIBUTION */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 8 + 4 + "px",
                height: Math.random() * 8 + 4 + "px",
                backgroundColor: i % 3 === 0 ? "#FFFFFF" : "#C6930A",
                filter: "blur(1px)",
                boxShadow: "0 0 20px rgba(198, 147, 10, 0.4)",
                left: Math.random() * 100 + "%", // Random horizontal position
                top: "105%", // Start below the screen
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                y: "-120vh", // Move up by viewport height
                opacity: [0, 0.5, 0.5, 0], // Fade in/out
              }}
              transition={{
                duration: Math.random() * 10 + 15, // Slow, varying speed
                repeat: Infinity,
                ease: "linear",
                delay: -Math.random() * 20, // Negative delay to start mid-animation
              }}
            />
          ))}
        </div>

        <div className="container-luxury relative z-10 px-6 pt-24 pb-12">
          {/* Content centered and positioned low */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Premium badge */}
            <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              <span className="text-gold text-sm font-medium tracking-wide">
                Boutique Premium à Lomé
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-delay font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">Maestro Store</span>
              <br />
              <span className="text-gradient-gold">Premier</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-delay-2 text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Électronique premium importée d'Europe et des États-Unis.
              Les derniers smartphones et ordinateurs à des prix accessibles.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                variant="hero"
                size="xl"
                className="group min-w-[240px]"
                asChild
              >
                <Link to="/products">
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="hero-outline"
                size="xl"
                className="min-w-[200px]"
                asChild
              >
                <Link to="/about">
                  Notre Histoire
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-delay-2 pt-12 flex flex-wrap gap-10 justify-center text-white/60 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Produits authentiques
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Service professionnel
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Garantie assurée
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

      {/* Best Sellers Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-luxury">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Nos <span className="text-gradient-gold">Best-Sellers</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Découvrez les produits les plus convoités par notre clientèle exigeante.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "iPhone 12 Pro Max",
                category: "Haut de Gamme",
                price: "À partir de 450.000 FCFA",
                image: iphone12Img,
                link: "/products",
              },
              {
                name: "iPhone 7",
                category: "Classique Accessible",
                price: "À partir de 80.000 FCFA",
                image: iphone7Img,
                link: "/products",
              },
              {
                name: "Téléphone Standard",
                category: "Best Seller",
                price: "Sur devis",
                image: bestSellerImg,
                link: "/products",
              },
            ].map((product, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
                <Link to={product.link} className="group block relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-luxury hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur text-deep-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Voir le détail
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gold font-medium mb-2">{product.category}</div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="text-muted-foreground">{product.price}</div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                Voir toute la collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-luxury">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Explorez Notre <span className="text-gradient-gold">Univers</span>
            </h2>
          </ScrollReveal>

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
            ].map((item, index) => (
              <ScrollReveal
                key={item.title}
                animation="fade-up"
                delay={index * 0.15}
              >
                <Link
                  to={item.link}
                  className="card-luxury p-8 text-center group block h-full"
                >
                  <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
