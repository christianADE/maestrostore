import { Check, Star } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Qualité Supérieure",
      description:
        "Chaque produit est soigneusement sélectionné et vérifié pour garantir une qualité irréprochable.",
    },
    {
      number: "02",
      title: "Boutique de Confiance",
      description:
        "Une réputation établie à Lomé pour notre fiabilité et notre intégrité commerciale.",
    },
    {
      number: "03",
      title: "Technologies Récentes",
      description:
        "Les dernières générations de smartphones et ordinateurs, directement disponibles.",
    },
    {
      number: "04",
      title: "Service Professionnel",
      description:
        "Un accompagnement personnalisé avant, pendant et après votre achat.",
    },
  ];

  const stats = [
    { value: "500+", label: "Clients satisfaits" },
    { value: "100%", label: "Produits authentiques" },
    { value: "24/7", label: "Support disponible" },
  ];

  return (
    <section id="why-us" className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Pourquoi nous choisir
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              L'Excellence qui Fait la{" "}
              <span className="text-gradient-gold">Différence</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12">
              Chez Maestro Store Premier, nous ne vendons pas simplement des 
              produits électroniques. Nous offrons une expérience d'achat 
              premium qui reflète nos valeurs d'excellence et de confiance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-gradient-gold font-serif text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.number}
                className="group flex gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-orange/20 flex items-center justify-center">
                  <span className="text-gold font-serif font-bold text-lg">
                    {reason.number}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    {reason.title}
                    <Check className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 border border-gold/30">
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span className="text-gold font-medium">
              Boutique recommandée à Lomé, Togo
            </span>
            <Star className="w-5 h-5 text-gold fill-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
