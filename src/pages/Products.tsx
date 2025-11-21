import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productPremium from "@/assets/product-premium.jpg";
import productRed from "@/assets/product-red.jpg";
import productBaby from "@/assets/product-baby.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium White Potatoes",
      description: "Large, versatile white potatoes perfect for mashing, baking, or frying. Rich in nutrients and flavor.",
      price: "KES 80/kg",
      image: productPremium
    },
    {
      name: "Red Potatoes",
      description: "Vibrant red-skinned potatoes with creamy texture. Ideal for salads, roasting, and boiling.",
      price: "KES 90/kg",
      image: productRed
    },
    {
      name: "Baby Potatoes",
      description: "Small, tender baby potatoes with thin skin. Perfect for roasting whole or adding to stews.",
      price: "KES 100/kg",
      image: productBaby
    },
    {
      name: "Bulk Premium Mix",
      description: "A mix of our best potatoes at wholesale pricing. Minimum order 50kg.",
      price: "KES 75/kg",
      image: productPremium
    },
    {
      name: "Organic Red Potatoes",
      description: "Certified organic red potatoes grown without chemicals. Premium quality for health-conscious customers.",
      price: "KES 120/kg",
      image: productRed
    },
    {
      name: "Specialty Baby Potatoes",
      description: "Hand-selected premium baby potatoes. Perfect for gourmet dishes and special occasions.",
      price: "KES 130/kg",
      image: productBaby
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Our <span className="text-secondary">Premium Products</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our full range of fresh, high-quality potatoes. Each variety carefully 
              selected and harvested for optimal flavor and nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-12 text-center shadow-sm animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-6">Need Bulk Orders?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer special pricing for bulk orders and regular deliveries. 
              Perfect for restaurants, hotels, and retail businesses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:0700395568">Call: 0700 395 568</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
