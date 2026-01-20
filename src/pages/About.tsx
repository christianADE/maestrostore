import { Shield, Globe, Award, Heart, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import logo from "@/assets/logo.jpg";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Importation Premium",
      description: "Nos produits sont directement importés d'Europe et des États-Unis, garantissant authenticité et qualité.",
    },
    {
      icon: Shield,
      title: "Qualité Certifiée",
      description: "Chaque appareil est soigneusement vérifié avant d'être proposé à notre clientèle exigeante.",
    },
    {
      icon: Award,
      title: "Dernière Génération",
      description: "Nous proposons uniquement les technologies les plus récentes et les plus performantes du marché.",
    },
    {
      icon: Heart,
      title: "Service Client",
      description: "Un accompagnement personnalisé et professionnel, avant, pendant et après votre achat.",
    },
  ];

  const milestones = [
    { year: "Fondation", text: "Création de Maestro Store Premier à Lomé" },
    { year: "Mission", text: "Rendre l'électronique premium accessible au Togo" },
    { year: "Engagement", text: "Service d'excellence et produits authentiques" },
    { year: "Vision", text: "Devenir la référence du premium au Togo" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />

        <ScrollReveal animation="fade-in" className="container-luxury relative z-10 px-6 text-center">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Notre Histoire
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-white">
            À Propos de <span className="text-gradient-gold">Nous</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez l'histoire de Maestro Store Premier, votre boutique
            d'électronique premium de confiance à Lomé.
          </p>
        </ScrollReveal>
      </section>

      {/* Brand Story */}
      <section className="section-padding overflow-hidden">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo & Image */}
            <ScrollReveal animation="slide-left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-orange/10 rounded-3xl blur-2xl" />
              <div className="relative bg-deep-black rounded-3xl p-12 text-center">
                <img
                  src={logo}
                  alt="Maestro Store Premier"
                  className="w-48 h-48 rounded-full mx-auto shadow-elegant mb-6"
                />
                <h3 className="font-serif text-3xl font-bold text-gradient-gold mb-2">
                  Maestro Store
                </h3>
                <p className="text-gold/80 font-medium text-lg">Premier</p>
                <div className="mt-6 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/60 mt-2 text-sm">Boutique Premium à Lomé</p>
              </div>
            </ScrollReveal>

            {/* Story Content */}
            <ScrollReveal animation="slide-right" delay={0.2} className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Une Passion pour l'<span className="text-gradient-gold">Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Maestro Store Premier est né d'une vision simple : offrir aux habitants
                de Lomé et du Togo l'accès à des produits électroniques de qualité
                supérieure, habituellement réservés aux marchés européens et américains.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Notre engagement envers l'excellence nous pousse à sélectionner
                rigoureusement chaque produit, à garantir leur authenticité, et à
                offrir un service client irréprochable qui reflète les standards
                des grandes enseignes internationales.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Que vous soyez un professionnel à la recherche d'outils performants
                ou un particulier souhaitant le meilleur de la technologie, Maestro
                Store Premier est votre partenaire de confiance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Nos Valeurs
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Ce Qui Nous <span className="text-gradient-gold">Distingue</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                animation="scale-up"
                delay={index * 0.1}
                className="card-luxury p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-orange/10 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Notre Parcours
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Notre <span className="text-gradient-gold">Engagement</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-28">
                    <span className="text-gradient-gold font-serif font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gold" />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-gold to-gold/20" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-foreground text-lg">{milestone.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Nous Faire Confiance ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Découvrez notre collection de produits premium et laissez-nous
            vous accompagner dans vos choix technologiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">Voir nos produits</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
