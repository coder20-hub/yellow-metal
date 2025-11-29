import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Shield, Award, Users, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-custom">
        <div className="pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Company Info - Takes up more space */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold" style={{ fontSize: 'var(--text-sm)' }}>₹</span>
                </div>
                <span className="font-semibold text-foreground" style={{ fontSize: 'var(--text-xl)' }}>GoldLoan Express</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md" style={{ fontSize: 'var(--text-base)', lineHeight: '1.6' }}>
                Trusted gold loan provider serving rural India with transparent rates, 
                quick approvals, and doorstep service. Your jewelry is safe with us.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>RBI Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>50,000+ Customers</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4" style={{ fontSize: 'var(--text-lg)' }}>Services</h3>
              <ul className="space-y-3">
                <li><a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Gold Loan</a></li>
                <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Silver Loan</a></li>
                <li><a href="#calculator" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Business Loan</a></li>
                <li><a href="#application" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Home Visit</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Online Appraisal</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-foreground mb-4" style={{ fontSize: 'var(--text-lg)' }}>Company</h3>
              <ul className="space-y-3">
                <li><a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>About Us</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Branches</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Careers</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Success Stories</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>News & Updates</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-foreground mb-4" style={{ fontSize: 'var(--text-lg)' }}>Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground" style={{ fontSize: 'var(--text-sm)' }}>1800-123-4567</p>
                    <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Toll-free helpline</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground" style={{ fontSize: 'var(--text-sm)' }}>support@goldloanexpress.com</p>
                    <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Customer support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground" style={{ fontSize: 'var(--text-sm)' }}>Head Office</p>
                    <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.4' }}>123 Business Center<br />Delhi - 110001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <Separator className="my-12" />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="font-bold text-foreground" style={{ fontSize: 'var(--text-2xl)' }}>₹800 Cr+</div>
                <div className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Disbursed</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground" style={{ fontSize: 'var(--text-2xl)' }}>50,000+</div>
                <div className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Customers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground" style={{ fontSize: 'var(--text-2xl)' }}>1200+</div>
                <div className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Villages</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-sm)' }}>
                © 2024 GoldLoan Express. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: 'var(--text-sm)' }}>Disclaimer</a>
            </div>
          </div>

          {/* Important Notice */}
          <Separator className="my-8" />
          
          <div className="bg-secondary/30 rounded-xl p-6">
            <div className="text-center space-y-3">
              <h4 className="font-semibold text-foreground flex items-center justify-center gap-2" style={{ fontSize: 'var(--text-sm)' }}>
                <Shield className="w-4 h-4" />
                Important Disclosure
              </h4>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.5' }}>
                <strong>Beware of fraud:</strong> We never ask for advance fees, processing charges, or security deposits. 
                Your gold ornaments are 100% safe and insured with us. Interest rates start from 0.75% per month. 
                Please verify our authorized representatives before any transaction.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)', lineHeight: '1.4' }}>
                As per RBI guidelines, we ensure complete transparency in all our loan processes. 
                Report any suspicious activity to our customer care immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}