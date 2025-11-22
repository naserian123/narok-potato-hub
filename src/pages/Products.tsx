import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import realPotatoes1 from "@/assets/real-potatoes-1.jpg";
import realPotatoes2 from "@/assets/real-potatoes-2.jpg";
import realPotatoes3 from "@/assets/real-potatoes-3.jpg";
import realPotatoes4 from "@/assets/real-potatoes-4.jpg";
import realPotatoes5 from "@/assets/real-potatoes-5.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium White Potatoes",
      description: "Large, smooth-skinned white potatoes with creamy flesh. Perfect for mashing, baking, or frying.",
      image: realPotatoes5
    },
    {
      name: "Fresh Harvest Potatoes",
      description: "Medium to large light-skinned potatoes with thin skin. Freshly harvested and full of natural flavor.",
      image: realPotatoes1
    },
    {
      name: "Young Potatoes",
      description: "Small to medium potatoes with tender, thin skin. Ideal for roasting whole or adding to stews.",
      image: realPotatoes4
    },
    {
      name: "Bulk Premium Mix",
      description: "Quality white potatoes packed in bulk sacks. Perfect for restaurants and bulk orders. Minimum 50kg.",
      image: realPotatoes3
    },
    {
      name: "Farm Fresh Potatoes",
      description: "Freshly packed white potatoes straight from our farms. Clean, quality-checked, and ready for delivery.",
      image: realPotatoes2
    },
    {
      name: "Select White Potatoes",
      description: "Hand-selected smooth white potatoes with consistent size. Perfect for any cooking method.",
      image: realPotatoes5
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
