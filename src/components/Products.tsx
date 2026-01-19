import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartphoneImg from "@/assets/product-smartphone.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";

const Products = () => {
  const products = [
    {
      image: smartphoneImg,
      category: "Smartphones",
      title: "Dernière Génération",
      description:
        "iPhone, Samsung Galaxy, et autres marques premium. Les modèles les plus récents importés d'Europe et des USA.",
      featured: true,
    },
    {
      image: laptopImg,
      category: "Ordinateurs",
      title: "Laptops Premium",
      description:
        "MacBook, Dell XPS, HP Spectre et plus. Des machines puissantes pour les professionnels exigeants.",
      featured: false,
    },
    {
      image: accessoriesImg,
      category: "Accessoires",
      title: "Collection Exclusive",
      description:
        "Montres connectées, écouteurs sans fil, chargeurs et accessoires de qualité supérieure.",
      featured: false,
    },
  ];

  const handleWhatsAppContact = (product: string) => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par vos ${product}. Pouvez-vous me donner plus d'informations ?`
    );
    window.open(`https://wa.me/22898775158?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Nos Produits
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Une Sélection{" "}
            <span className="text-gradient-gold">d'Exception</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Découvrez notre collection soigneusement sélectionnée de produits 
            électroniques haut de gamme. Prix sur demande pour un service personnalisé.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative overflow-hidden rounded-2xl ${
                product.featured
                  ? "md:col-span-2 lg:col-span-1 lg:row-span-1"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Category badge */}
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm text-gold text-xs font-medium tracking-wide mb-4">
                    {product.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price on request badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-medium">Prix sur demande</span>
                    <Button
                      variant="luxury"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => handleWhatsAppContact(product.category)}
                    >
                      Demander
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-2xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Button
            variant="luxury-outline"
            size="xl"
            onClick={() => handleWhatsAppContact("produits")}
          >
            Voir tous nos produits
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
