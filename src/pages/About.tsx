import { Award, Users, Sprout, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import farmImage from "@/assets/farm-field.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on the quality of our produce"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority"
    },
    {
      icon: Sprout,
      title: "Sustainable Farming",
      description: "We care for the land that feeds us"
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Supporting local farmers and communities"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              About <span className="text-secondary">MAO Potatoes</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for premium quality potatoes from the heart of Narok, Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading font-bold text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MAO Potatoes Dealer was founded with a simple mission: to bring the finest, 
                  freshest potatoes from Narok's fertile farmlands directly to your table. 
                  Located in the heart of Kenya's agricultural region, we've built our reputation 
                  on quality, reliability, and genuine care for our customers.
                </p>
                <p>
                  Our journey began in the rich soils of Narok, where generations of farming 
                  expertise meet modern agricultural practices. Today, we proudly serve families, 
                  restaurants, and businesses across Kenya with premium potatoes that meet the 
                  highest standards of quality.
                </p>
                <p>
                  Every potato we deliver carries with it the dedication of our farmers, the 
                  richness of Narok's soil, and our unwavering commitment to excellence. We're 
                  not just selling potatoes – we're sharing a piece of Kenya's agricultural heritage.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={farmImage} 
                alt="Our Farm"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary text-secondary-foreground rounded-3xl p-12 text-center animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-6">Our Commitment to You</h2>
            <p className="text-lg mb-6 opacity-90">
              We promise to deliver only the freshest, highest quality potatoes. Every batch is 
              carefully inspected, properly stored, and delivered with care. Your trust in us 
              drives us to maintain the highest standards in everything we do.
            </p>
            <p className="text-lg opacity-90">
              From our farms to your kitchen, we ensure quality at every step.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
