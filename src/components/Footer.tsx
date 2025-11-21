import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-secondary-foreground">M</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">MAO POTATOES</h3>
                <p className="text-sm text-primary-foreground/80">Fresh from Narok</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted source for premium quality potatoes, delivered fresh from our farms in Narok, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  P.O. Box 122-20500<br />Narok, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:0700395568" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  0700 395 568
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:sammykilainoi22@gmail.com" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  sammykilainoi22@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} MAO Potatoes Dealer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
