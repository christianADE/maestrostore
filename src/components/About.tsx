import { Shield, Globe, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Importation Premium",
      description: "Produits directement importés d'Europe et des États-Unis",
    },
    {
      icon: Shield,
      title: "Qualité Certifiée",
      description: "Chaque produit est vérifié et garanti authentique",
    },
    {
      icon: Award,
      title: "Dernière Génération",
      description: "Les technologies les plus récentes du marché",
    },
    {
      icon: Heart,
      title: "Service Client",
      description: "Un accompagnement personnalisé et professionnel",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            À propos de nous
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            L'Excellence au Service de la{" "}
            <span className="text-gradient-gold">Technologie</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Depuis notre établissement à Lomé, Maestro Store Premier s'est engagé à offrir 
            à notre clientèle les meilleurs produits électroniques du marché mondial, 
            avec un service digne des plus grandes enseignes internationales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-luxury p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-orange/10 mb-6 group-hover:from-gold/20 group-hover:to-orange/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-3 h-3 rotate-45 border-2 border-gold" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      </div>
    </section>
  );
};

export default About;
