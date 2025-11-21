import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Leaf, Truck, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-potatoes.jpg";
import productPremium from "@/assets/product-premium.jpg";
import productRed from "@/assets/product-red.jpg";
import productBaby from "@/assets/product-baby.jpg";

const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "Farm Fresh",
      description: "Sourced directly from our fertile farms in Narok"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every batch inspected for premium quality"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable and timely delivery to your location"
    }
  ];

  const products = [
    {
      name: "Premium Potatoes",
      description: "Large, high-quality potatoes perfect for any dish",
      price: "KES 80/kg",
      image: productPremium
    },
    {
      name: "Red Potatoes",
      description: "Vibrant red potatoes with rich, earthy flavor",
      price: "KES 90/kg",
      image: productRed
    },
    {
      name: "Baby Potatoes",
      description: "Small, tender potatoes ideal for roasting",
      price: "KES 100/kg",
      image: productBaby
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Fresh Potatoes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Fresh Quality <span className="text-secondary">Potatoes</span> from Narok
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Experience the finest potatoes grown with care in Kenya's rich soil. 
              Farm-fresh quality delivered straight to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of premium potatoes, carefully harvested and prepared for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Order Fresh Potatoes?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today and experience the difference of farm-fresh quality
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
