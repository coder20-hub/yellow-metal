import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, FileText, User, CreditCard, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Eligibility() {
  const { t } = useLanguage();

  const eligibility = [
    t('eligibility.age'),
    t('eligibility.resident'),
    t('eligibility.id-proof'),
    t('eligibility.address-proof'),
    t('eligibility.gold-ownership')
  ];

  const documents = [
    { 
      category: t('eligibility.id-documents'), 
      items: ["Aadhaar Card", "PAN Card", "Voter ID", "Passport"] 
    },
    { 
      category: t('eligibility.address-documents'), 
      items: ["Aadhaar Card", "Electricity Bill", "Ration Card", "Bank Statement"] 
    },
    { 
      category: t('eligibility.income-documents'), 
      items: ["Salary Slip", "ITR", "Bank Statement", "Business Proof"] 
    }
  ];

  return (
    <section id="eligibility" className="section-padding-large bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
      <div className="absolute -top-40 -left-40 w-80 h-80 gradient-aurora rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 accent-gradient rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 gradient-shimmer-gold opacity-30"></div>
            <Sparkles className="w-4 h-4 mr-2 relative z-10" />
            <span className="text-sm font-medium relative z-10">Quick Eligibility</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('eligibility.title')}
          </h2>
          
          <p className="lead">
            {t('eligibility.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="card-modern animate-fade-in-up relative overflow-hidden">
            <div className="absolute inset-0 gradient-gold opacity-5 blur-sm"></div>
            
            <div className="flex items-center space-x-3 mb-8 relative z-10">
              <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t('eligibility.criteria')}</h3>
                <p className="text-sm text-muted-foreground">Simple requirements</p>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              {eligibility.map((criteria, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-secondary/80 transition-colors">
                  <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{criteria}</span>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50/80 to-green-100/50 backdrop-blur-sm border border-green-200/50 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-shimmer-gold opacity-20"></div>
                <div className="relative z-10">
                  <h4 className="text-green-800 font-semibold mb-3">{t('eligibility.special-feature')}</h4>
                  <p className="text-green-700 leading-relaxed">
                    {t('eligibility.special-desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-modern animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 gradient-gold opacity-5 blur-sm"></div>
            
            <div className="flex items-center space-x-3 mb-8 relative z-10">
              <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t('eligibility.required-documents')}</h3>
                <p className="text-sm text-muted-foreground">Minimal documentation</p>
              </div>
            </div>
            
            <div className="space-y-8 relative z-10">
              {documents.map((doc, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-4">{doc.category}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {doc.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-secondary/80 transition-colors text-center">
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50/80 to-blue-100/50 backdrop-blur-sm border border-blue-200/50 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-shimmer-gold opacity-20"></div>
                <div className="relative z-10">
                  <h4 className="text-blue-800 font-semibold mb-3">{t('eligibility.document-note')}</h4>
                  <p className="text-blue-700 leading-relaxed">
                    {t('eligibility.document-note-desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}