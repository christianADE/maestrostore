import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/products", label: "Produits" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  // Determine header style based on scroll and page
  const showDarkHeader = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showDarkHeader
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container-luxury px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Maestro Store Premier"
              className="h-12 w-12 rounded-full object-cover shadow-elegant transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl transition-colors duration-300 ${showDarkHeader ? "text-foreground" : "text-white"
                }`}>
                Maestro Store
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${showDarkHeader ? "text-primary" : "text-gold"
                }`}>
                Premier
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-medium transition-colors duration-300 ${isActiveLink(link.href)
                    ? showDarkHeader
                      ? "text-primary"
                      : "text-gold"
                    : showDarkHeader
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  } ${isActiveLink(link.href) ? "" : "underline-luxury"}`}
              >
                {link.label}
                {isActiveLink(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-gold to-orange" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={showDarkHeader ? "luxury" : "hero-outline"}
              size="default"
              asChild
            >
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Contactez-nous
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${showDarkHeader ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${showDarkHeader ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-luxury animate-fade-in">
            <div className="container-luxury px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium py-2 border-b border-border/50 transition-colors ${isActiveLink(link.href)
                      ? "text-primary"
                      : "text-black hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="luxury" size="lg" className="mt-4" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4" />
                  Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
