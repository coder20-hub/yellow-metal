import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FileText, Phone, MapPin, CheckCircle, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface PincodeOption {
  id: string;
  town: string;
  pincode: string;
}

export function ApplicationForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    loanAmount: "",
    branch: "",
    pincode: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pincodes, setPincodes] = useState<PincodeOption[]>([]);
  const [loadingPincodes, setLoadingPincodes] = useState(true);

  useEffect(() => {
    // Fetch pincodes for dropdown
    fetch('/api/pincodes')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPincodes(data.pincodes || []);
        }
      })
      .catch((error) => {
        console.error('Error fetching pincodes:', error);
      })
      .finally(() => {
        setLoadingPincodes(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pincode) {
      alert('Please select a pincode');
      return;
    }
    
    try {
      const selectedPincode = pincodes.find(p => p.pincode === formData.pincode);
      const response = await fetch('/api/crm/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          loanAmount: formData.loanAmount,
          branch: selectedPincode ? `${selectedPincode.town} - ${formData.pincode}` : formData.pincode,
          pincode: formData.pincode,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission error:', data.error);
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="application" className="section-padding-large bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 gradient-aurora rounded-full blur-3xl opacity-10 animate-float"></div>
        
        <div className="container-custom relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-modern relative overflow-hidden">
              <div className="absolute inset-0 gradient-gold opacity-10 blur-sm"></div>
              
              <div className="p-12 relative z-10">
                <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6">{t('application.success-title')}</h3>
                <p className="lead mb-8">
                  {t('application.success-message')} {t('application.reference-number')} <strong className="gradient-text-fast">GL{Date.now()}</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    {t('application.call-us')}
                  </Button>
                  <Button variant="outline" className="btn-outline" onClick={() => setIsSubmitted(false)}>
                    {t('application.new-application')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application" className="section-padding-large bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
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
            <span className="text-sm font-medium relative z-10">Quick Application</span>
          </div>
          

          
          <p className="lead text-[16px]">
            {t('application.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-modern animate-fade-in-up relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-20"></div>
            

            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="font-medium">Customer Name *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="h-12 bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="font-medium">Mobile Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="h-12 bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="loanAmount" className="font-medium">Required Loan Amount *</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    required
                    placeholder="e.g. 50000"
                    value={formData.loanAmount}
                    onChange={(e) => handleChange("loanAmount", e.target.value)}
                    className="h-12 bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="pincode" className="font-medium">Pincode *</Label>
                  <Select
                    value={formData.pincode}
                    onValueChange={(value) => {
                      handleChange("pincode", value);
                    }}
                    required
                  >
                    <SelectTrigger className="h-12 bg-background/50 backdrop-blur-sm border-border/50">
                      <SelectValue placeholder={loadingPincodes ? "Loading pincodes..." : "Select pincode"} />
                    </SelectTrigger>
                    <SelectContent>
                      {pincodes.length === 0 ? (
                        <div className="px-2 py-1.5 text-sm text-gray-500">
                          {loadingPincodes ? "Loading pincodes..." : "No pincodes available. Please contact support."}
                        </div>
                      ) : (
                        pincodes.map((pincode) => (
                          <SelectItem key={pincode.id} value={pincode.pincode}>
                            {pincode.town} - {pincode.pincode}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-background/80 to-secondary/50 backdrop-blur-sm border border-border/50 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 gradient-shimmer-gold opacity-20"></div>
                <div className="relative z-10">
                  <h4 className="font-semibold mb-4">{t('application.next-steps')}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-2"></span>
                      <span>{t('application.next-step1')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-2"></span>
                      <span>{t('application.next-step2')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-2"></span>
                      <span>{t('application.next-step3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full btn-primary h-14 text-lg">
                {t('application.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}