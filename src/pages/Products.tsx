import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import smartphoneImg from "@/assets/product-smartphone.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const Products = () => {
  const categories = [
    {
      image: smartphoneImg,
      category: "Smartphones",
      title: "Dernière Génération",
      description:
        "iPhone, Samsung Galaxy, et autres marques premium. Les modèles les plus récents importés d'Europe et des USA.",
      items: [
        "iPhone 15 Pro Max",
        "Samsung Galaxy S24 Ultra",
        "Google Pixel 8 Pro",
        "OnePlus 12",
      ],
    },
    {
      image: laptopImg,
      category: "Ordinateurs",
      title: "Laptops Premium",
      description:
        "MacBook, Dell XPS, HP Spectre et plus. Des machines puissantes pour les professionnels exigeants.",
      items: [
        "MacBook Pro M3",
        "Dell XPS 15",
        "HP Spectre x360",
        "Lenovo ThinkPad X1",
      ],
    },
    {
      image: accessoriesImg,
      category: "Accessoires",
      title: "Collection Exclusive",
      description:
        "Montres connectées, écouteurs sans fil, chargeurs et accessoires de qualité supérieure.",
      items: [
        "Apple Watch Ultra",
        "AirPods Pro",
        "Samsung Galaxy Buds",
        "Chargeurs rapides",
      ],
    },
  ];

  const handleWhatsAppContact = (product: string) => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par vos ${product}. Pouvez-vous me donner plus d'informations ?`
    );
    window.open(`https://wa.me/22898775158?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container-luxury relative z-10 px-6 text-center">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Notre Collection
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mt-4 mb-6 text-white">
            Produits <span className="text-gradient-gold">Premium</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de produits électroniques haut de gamme, 
            soigneusement importés d'Europe et des États-Unis.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="space-y-24">
            {categories.map((category, index) => (
              <div
                key={category.category}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-orange/10 rounded-3xl blur-2xl transform rotate-2" />
                  <div className="relative overflow-hidden rounded-3xl group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm text-gold text-sm font-medium">
                        {category.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h2 className="font-serif text-4xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {category.description}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price badge */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/5">
                    <span className="text-gold font-medium">Prix sur demande</span>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="luxury"
                      size="lg"
                      onClick={() => handleWhatsAppContact(category.category)}
                    >
                      Demander un devis
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour toute demande spéciale. Nous pouvons commander 
            n'importe quel produit électronique selon vos besoins.
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={() => handleWhatsAppContact("produits sur commande")}
          >
            Contactez-nous sur WhatsApp
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
