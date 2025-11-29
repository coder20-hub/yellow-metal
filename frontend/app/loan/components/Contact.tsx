import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, MapPin, Clock, Mail, MessageCircle, Sparkles, Home } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const branches = [
    {
      city: "Delhi",
      address: "Main Branch, Connaught Place",
      phone: "011-4567-8901",
      timing: "9 AM to 9 PM"
    },
    {
      city: "Mumbai", 
      address: "Andheri West, D.N. Nagar",
      phone: "022-4567-8902",
      timing: "9 AM to 9 PM"
    },
    {
      city: "Bangalore",
      address: "Indiranagar, 100 Feet Road",
      phone: "080-4567-8903", 
      timing: "9 AM to 9 PM"
    }
  ];

  return (
    <section id="contact" className="section-padding-large bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ backgroundColor: '#f6f7f8' }} />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-30"></div>
            <Sparkles className="w-4 h-4 mr-2 relative z-10" />
            <span className="text-sm font-medium relative z-10">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="lead">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="card-modern animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10 blur-sm"></div>
              
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-8">{t('contact.instant-contact')}</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Phone className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{t('contact.toll-free')}</div>
                      <div className="text-2xl font-bold gradient-text-fast">1800-123-4567</div>
                      <div className="text-sm text-muted-foreground">{t('contact.available-24x7')}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{t('contact.whatsapp-support')}</div>
                      <div className="text-2xl font-bold text-green-600">+91 98765-43210</div>
                      <div className="text-sm text-muted-foreground">{t('contact.quick-response')}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{t('contact.email-support')}</div>
                      <div className="text-xl font-bold text-blue-600">support@goldloanexpress.com</div>
                      <div className="text-sm text-muted-foreground">{t('contact.reply-24hrs')}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-primary flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('contact.call-now')}
                    </Button>
                    <Button className="btn-outline flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t('contact.whatsapp-chat')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-modern animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-white opacity-5 blur-sm"></div>
              
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{t('contact.working-hours')}</h3>
                  <p className="text-sm text-muted-foreground">Always available</p>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <span className="text-muted-foreground">{t('contact.mon-sat')}</span>
                  <span className="font-semibold">9 AM - 9 PM</span>
                </div>
                <div className="flex justify-between p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <span className="text-muted-foreground">{t('contact.sunday')}</span>
                  <span className="font-semibold">10 AM - 6 PM</span>
                </div>
                <div className="flex justify-between p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border/50">
                  <span className="text-muted-foreground">{t('contact.public-holidays')}</span>
                  <span className="font-semibold">10 AM - 4 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold mb-8">{t('contact.our-branches')}</h3>
            <div className="space-y-6">
              {branches.map((branch, index) => (
                <div key={index} className="card-modern hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-5 blur-sm"></div>
                  
                  <div className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{branch.city}</h4>
                        <p className="text-muted-foreground mb-4">{branch.address}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm">
                          <div className="flex items-center space-x-2 p-2 bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50">
                            <Phone className="w-4 h-4" />
                            <span className="font-medium">{branch.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{branch.timing}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-modern relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-5 blur-sm"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <Home className="w-5 h-5 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold">{t('contact.home-service')}</h4>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('contact.home-service-desc')}
                </p>
                <Button className="btn-outline w-full">
                  {t('contact.book-home-visit')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}