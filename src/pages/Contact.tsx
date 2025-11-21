import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["P.O. Box 122-20500", "Narok, Kenya"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["0700 395 568"],
      link: "tel:0700395568"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["sammykilainoi22@gmail.com"],
      link: "mailto:sammykilainoi22@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "7:00 AM - 6:00 PM"]
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
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions or ready to place an order? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card p-8 rounded-2xl shadow-sm">
                <h2 className="font-heading font-bold text-3xl mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your order or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-2xl shadow-sm hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          info.link && idx === 0 ? (
                            <a 
                              key={idx}
                              href={info.link}
                              className="text-muted-foreground hover:text-secondary transition-colors block"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-secondary text-secondary-foreground p-8 rounded-2xl">
                <h3 className="font-heading font-bold text-2xl mb-4">Quick Order</h3>
                <p className="mb-6 opacity-90">
                  For urgent orders, call us directly and speak with our team.
                </p>
                <Button asChild variant="secondary" size="lg" className="w-full bg-background text-foreground hover:bg-background/90">
                  <a href="tel:0700395568" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now: 0700 395 568
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
