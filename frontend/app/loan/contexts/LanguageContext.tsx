import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'kn' | 'te';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.process': 'Process',
    'nav.calculator': 'Calculator',
    'nav.apply': 'Apply',
    'nav.contact': 'Contact',
    'header.apply-now': 'Apply Now',
    
    // Hero
    'hero.badge': 'India\'s #1 Gold Loan Platform',
    'hero.title-highlight': 'Gold loans',
    'hero.title-suffix': 'in 30 mins',
    'hero.title-audience': 'for rural india',
    'hero.subtitle': 'Fast, secure, and transparent loans at your fingertips.',
    'hero.lowest-rates': 'Lowest Interest Rates',
    'hero.quick-approval': '30 Min Approval',
    'hero.secure-process': '100% Secure',
    'hero.instant-cash': 'Instant Cash',
    'hero.apply-now': 'Apply Now',
    'hero.loan-calculator': 'Calculate Loan Amount',
    'hero.trusted-by': 'Trusted by',
    'hero.customers': 'customers',
    'hero.crores-disbursed': 'crores disbursed',
    'hero.villages-served': 'villages served',
    'hero.interest-from': 'Per month interest from',
    'hero.loan-upto': 'Loan up to',
    'hero.approval-time': 'Approval in',
    
    // Benefits
    'benefits.title': 'Gold Loan Benefits',
    'benefits.subtitle': 'Discover why our gold loan is the best choice for your financial needs',
    'benefits.instant-approval': 'Instant Approval',
    'benefits.instant-approval-desc': 'Loan approval in just 30 minutes with instant cash',
    'benefits.no-credit-score': 'No Credit Score Required',
    'benefits.no-credit-score-desc': 'No credit history check needed, your gold is sufficient',
    'benefits.secure-process': 'Secure Process',
    'benefits.secure-process-desc': 'Your gold is completely safe with insurance coverage',
    'benefits.low-interest': 'Low Interest Rates',
    'benefits.low-interest-desc': 'Market\'s lowest interest rates with no hidden fees',
    'benefits.easy-process': 'Easy Process',
    'benefits.easy-process-desc': 'Minimal documentation and simple procedure',
    'benefits.flexible-repayment': 'Flexible Repayment',
    'benefits.flexible-repayment-desc': 'Choose EMI or bullet payment as per your convenience',
    
    // How It Works
    'how-it-works.title': 'How It Works?',
    'how-it-works.subtitle': 'Get loan on your gold in just 5 simple steps',
    'how-it-works.step1': 'Bring Your Gold',
    'how-it-works.step1-desc': 'Bring your gold (jewelry, coins, bars) to our branch or call us',
    'how-it-works.step2': 'Evaluation & Verification',
    'how-it-works.step2-desc': 'Our experts will check the purity and weight of your gold',
    'how-it-works.step3': 'Loan Amount Offer',
    'how-it-works.step3-desc': 'Get instant loan amount based on your gold\'s value',
    'how-it-works.step4': 'Documents & Approval',
    'how-it-works.step4-desc': 'Simple document verification and instant loan approval',
    'how-it-works.step5': 'Get Cash Instantly',
    'how-it-works.step5-desc': 'Take cash, cheque or account transfer - your choice',
    
    // Calculator
    'calculator.title': 'Loan Calculator',
    'calculator.subtitle': 'Estimate your loan amount based on your gold value',
    'calculator.gold-weight': 'Gold Weight (in grams)',
    'calculator.gold-purity': 'Gold Purity',
    'calculator.24k': '24 Carat (99.9% Pure)',
    'calculator.22k': '22 Carat (91.6% Pure)',
    'calculator.21k': '21 Carat (87.5% Pure)',
    'calculator.20k': '20 Carat (83.3% Pure)',
    'calculator.19k': '19 Carat (79.2% Pure)',
    'calculator.18k': '18 Carat (75% Pure)',
    'calculator.gold-rate-today': 'Today\'s Gold Rate',
    'calculator.calculate': 'Calculate Loan Amount',
    'calculator.loan-estimate': 'Loan Estimate',
    'calculator.you-can-get': 'You can get up to',
    'calculator.loan-amount': 'loan amount',
    'calculator.emi-12-months': 'EMI (12 months)',
    'calculator.interest-rate': 'Interest Rate',
    'calculator.note1': '• This is only an estimate',
    'calculator.note2': '• Actual loan amount depends on gold quality',
    'calculator.note3': '• Final loan amount will be decided after verification',
    'calculator.rate-disclaimer': '• Gold rates are updated every 30 minutes during market hours',
    'calculator.verification-note': '• Final loan amount depends on physical verification and current market rates',
    'calculator.add-item': 'Add Item',
    
    // Eligibility
    'eligibility.title': 'Eligibility & Documents',
    'eligibility.subtitle': 'Check if you are eligible for gold loan and required documents',
    'eligibility.criteria': 'Eligibility Criteria',
    'eligibility.age': 'Age 18 to 70 years',
    'eligibility.resident': 'Indian Resident',
    'eligibility.id-proof': 'Valid ID Proof',
    'eligibility.address-proof': 'Address Proof',
    'eligibility.gold-ownership': 'Gold Ownership',
    'eligibility.special-feature': 'Special Feature',
    'eligibility.special-desc': 'No credit score or income proof required. Your gold is your guarantee.',
    'eligibility.required-documents': 'Required Documents',
    'eligibility.id-documents': 'ID Proof',
    'eligibility.address-documents': 'Address Proof',
    'eligibility.income-documents': 'Income Proof',
    'eligibility.document-note': 'Note',
    'eligibility.document-note-desc': 'Any one document from each category is sufficient. Bring originals with photocopies.',
    
    // Application Form
    'application.title': 'Apply Online',
    'application.subtitle': 'Fill your details, our team will contact you within 2 hours',
    'application.form-title': 'Gold Loan Application Form',
    'application.full-name': 'Full Name',
    'application.mobile': 'Mobile Number',
    'application.email': 'Email',
    'application.city': 'City',
    'application.required-loan': 'Required Loan Amount',
    'application.nearest-branch': 'Nearest Branch',
    'application.loan-purpose': 'Loan Purpose',
    'application.loan-purpose-placeholder': 'Tell us why you need the loan (optional)',
    'application.next-steps': 'Next Steps:',
    'application.next-step1': '• Our team will call you within 2 hours',
    'application.next-step2': '• We will schedule an appointment to check your gold',
    'application.next-step3': '• Complete process will be done in 30 minutes',
    'application.submit': 'Submit Application',
    'application.success-title': 'Application Submitted Successfully!',
    'application.success-message': 'Thank you! Our team will contact you within 2 hours.',
    'application.reference-number': 'Your reference number:',
    'application.call-us': 'Call Us: 1800-123-4567',
    'application.new-application': 'New Application',
    
    // Testimonials
    'testimonials.title': 'Customer Reviews',
    'testimonials.subtitle': 'Hear from thousands of our satisfied customers',
    'testimonials.rating': '5000+ Happy Customers',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us, we are here to help',
    'contact.instant-contact': 'Contact Instantly',
    'contact.toll-free': 'Toll-Free Helpline',
    'contact.available-24x7': '24x7 Available',
    'contact.whatsapp-support': 'WhatsApp Support',
    'contact.quick-response': 'Quick Response',
    'contact.email-support': 'Email Support',
    'contact.reply-24hrs': '24 hours reply',
    'contact.call-now': 'Call Now',
    'contact.whatsapp-chat': 'WhatsApp Chat',
    'contact.working-hours': 'Working Hours',
    'contact.mon-sat': 'Monday - Saturday',
    'contact.sunday': 'Sunday',
    'contact.public-holidays': 'Public Holidays',
    'contact.our-branches': 'Our Branches',
    'contact.home-service': 'Home Service',
    'contact.home-service-desc': 'Our experts can visit your home to check gold. This service is available in Delhi, Mumbai and Bangalore.',
    'contact.book-home-visit': 'Book Home Visit',
    
    // Footer
    'footer.description': 'India\'s fastest and most trusted gold loan company. Serving rural India for 10 years.',
    'footer.rbi-approved': 'RBI Approved',
    'footer.iso-certified': 'ISO Certified',
    'footer.services': 'Services',
    'footer.gold-loan': 'Gold Loan',
    'footer.silver-loan': 'Silver Loan',
    'footer.business-loan': 'Business Loan',
    'footer.home-visit': 'Home Visit',
    'footer.online-appraisal': 'Online Appraisal',
    'footer.information': 'Information',
    'footer.about-us': 'About Us',
    'footer.branches': 'Branches',
    'footer.careers': 'Careers',
    'footer.news': 'News',
    'footer.blog': 'Blog',
    'footer.happy-customers': 'Happy Customers',
    'footer.branches-count': 'Branches',
    'footer.years-experience': 'Years Experience',
    'footer.rights-reserved': 'All rights reserved.',
    'footer.privacy-policy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.disclaimer': 'Disclaimer',
    'footer.important-note': 'Important: Loan approval is given after eligibility and document verification.',
    'footer.rbi-guideline': 'As per RBI guidelines, we follow responsible lending practices.',
  },
  
  kn: {
    // Header
    'nav.features': 'ವೈಶಿಷ್ಟ್ಯಗಳು',
    'nav.process': 'ಪ್ರಕ್ರಿಯೆ',
    'nav.calculator': 'ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'nav.apply': 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    'nav.contact': 'ಸಂಪರ್ಕಿಸಿ',
    'header.apply-now': 'ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    
    // Hero
    'hero.badge': 'ಭಾರತದ #1 ಚಿನ್ನದ ಸಾಲ ಪ್ಲಾಟ್‌ಫಾರ���ಮ್',
    'hero.title-highlight': 'ಚಿನ್ನದ ಸಾಲ',
    'hero.title-suffix': '30 ನಿಮಿಷಗಳಲ್ಲಿ',
    'hero.title-audience': 'ಗ್ರಾಮೀಣ ಭಾರತಕ್ಕಾಗಿ',
    'hero.subtitle': 'ವೇಗವಾದ, ಸುರಕ್ಷಿತ ಮತ್ತು ಪಾರದರ್ಶಕ ಸಾಲಗಳು ನಿಮ್ಮ ಬೆರಳ ತುದಿಯಲ್ಲಿ.',
    'hero.lowest-rates': 'ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿ ದರ',
    'hero.quick-approval': '30 ನಿಮಿಷದಲ್ಲಿ ಅನುಮೋದನೆ',
    'hero.secure-process': '100% ಸುರಕ್ಷಿತ',
    'hero.instant-cash': 'ತ್ವರಿತ ನಗದು',
    'hero.apply-now': 'ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    'hero.loan-calculator': 'ಸಾಲದ ಮೊತ್ತವನ್ನು ಲೆಕ್ಕ ಹಾಕಿ',
    'hero.trusted-by': 'ನಂಬಿಕೆಯಿಂದ',
    'hero.customers': 'ಗ್ರಾಹಕರು',
    'hero.crores-disbursed': 'ಕೋಟಿಗಳು ವಿತರಿಸಲಾಗಿದೆ',
    'hero.villages-served': 'ಹಳ್ಳಿಗಳಿಗೆ ಸೇವೆ',
    'hero.interest-from': 'ಪ್ರತಿ ತಿಂಗಳು ಬಡ್ಡಿ',
    'hero.loan-upto': 'ಸಾಲ ವರೆಗೆ',
    'hero.approval-time': 'ಅನುಮೋದನೆ',
    
    // Benefits
    'benefits.title': 'ಚಿನ್ನದ ಸಾಲದ ಪ್ರಯೋಜನಗಳು',
    'benefits.subtitle': 'ನಿಮ್ಮ ಆರ್ಥಿಕ ಅಗತ್ಯಗಳಿಗೆ ನಮ್ಮ ಚಿನ್ನದ ಸಾಲ ಏಕೆ ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ ಎಂದು ತಿಳಿಯಿರಿ',
    'benefits.instant-approval': 'ತ್ವರಿತ ಅನುಮೋದನೆ',
    'benefits.instant-approval-desc': 'ಕೇವಲ 30 ನಿಮಿಷಗಳಲ್ಲಿ ಸಾಲದ ಅನುಮೋದನೆ ಮತ್ತು ತ್ವರಿತ ನಗದು',
    'benefits.no-credit-score': 'ಕ್ರೆಡಿಟ್ ಸ್ಕೋರ್ ಅಗತ್ಯವಿಲ್ಲ',
    'benefits.no-credit-score-desc': 'ಕ್ರೆಡಿಟ್ ಇತಿಹಾಸದ ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿಲ್ಲ, ನಿಮ್ಮ ಚಿನ್ನ ಸಾಕು',
    'benefits.secure-process': 'ಸುರಕ್ಷಿತ ಪ್ರಕ್ರಿಯೆ',
    'benefits.secure-process-desc': 'ವಿಮಾ ರಕ್ಷಣೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಚಿನ್ನ ಸಂಪೂರ್ಣವಾಗಿ ಸುರಕ್ಷಿತ',
    'benefits.low-interest': 'ಕಡಿಮೆ ಬಡ್ಡಿ ದರ',
    'benefits.low-interest-desc': 'ಮಾರುಕಟ್ಟೆಯ ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿ ದರ, ಯಾವುದೇ ಮರೆಮಾಚಿದ ಶುಲ್ಕವಿಲ್ಲ',
    'benefits.easy-process': 'ಸುಲಭ ಪ್ರಕ್ರಿಯೆ',
    'benefits.easy-process-desc': 'ಕನಿಷ್ಠ ದಾಖಲೆಗಳು ಮತ್ತು ಸರಳ ಕಾರ್ಯವಿಧಾನ',
    'benefits.flexible-repayment': 'ಹೊಂದಿಕೊಳ್ಳುವ ಮರುಪಾವತಿ',
    'benefits.flexible-repayment-desc': 'ನಿಮ್ಮ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ EMI ಅಥವಾ ಬುಲೆಟ್ ಪೇಮೆಂಟ್ ಆಯ್ಕೆಮಾಡಿ',
    
    // How It Works
    'how-it-works.title': 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
    'how-it-works.subtitle': 'ಕೇವಲ 5 ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಚಿನ್ನದ ಮೇಲೆ ಸಾಲ ಪಡೆಯಿರಿ',
    'how-it-works.step1': 'ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ತರಿ',
    'how-it-works.step1-desc': 'ನಿಮ್ಮ ಚಿನ್ನವನ್ನು (ಆಭರಣಗಳು, ನಾಣ್ಯಗಳು, ಬಾರ್‌ಗಳು) ನಮ್ಮ ಶಾಖೆಗೆ ತರಿ ಅಥವಾ ನಮಗೆ ಕರೆ ಮಾಡಿ',
    'how-it-works.step2': 'ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಪರಿಶೀಲನೆ',
    'how-it-works.step2-desc': 'ನಮ್ಮ ತಜ್ಞರು ನಿಮ್ಮ ಚಿನ್ನದ ಶುದ್ಧತೆ ಮತ್ತು ತೂಕವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ',
    'how-it-works.step3': 'ಸಾಲ�� ಮೊತ್ತದ ಆಫರ್',
    'how-it-works.step3-desc': 'ನಿಮ್ಮ ಚಿನ್ನದ ಮೌಲ್ಯದ ಆಧಾರದ ಮೇಲೆ ತ್ವರಿತ ಸಾಲದ ಮೊತ್ತವನ್ನು ಪಡೆಯಿರಿ',
    'how-it-works.step4': 'ದಾಖಲೆಗಳು ಮತ್ತು ಅನುಮೋದನೆ',
    'how-it-works.step4-desc': 'ಸರಳ ದಾಖಲೆ ಪರಿಶೀಲನೆ ಮತ್ತು ತ್ವರಿತ ಸಾಲ ಅನುಮೋದನೆ',
    'how-it-works.step5': 'ತಕ್ಷಣ ನಗದು ಪಡೆಯಿರಿ',
    'how-it-works.step5-desc': 'ನಗದು, ಚೆಕ್ ಅಥವಾ ಖಾತೆ ವರ್ಗಾವಣೆ - ನಿಮ್ಮ ಆಯ್ಕೆ',
    
    // Calculator
    'calculator.title': 'ಸಾಲ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'calculator.subtitle': 'ನಿಮ್ಮ ಚಿನ್ನದ ಮೌಲ್ಯದ ಆಧಾರದ ಮೇಲೆ ನಿಮ್ಮ ಸಾಲದ ಮೊತ್ತವನ್ನು ಅಂದಾಜಿಸಿ',
    'calculator.gold-weight': 'ಚಿನ್ನದ ತೂಕ (ಗ್ರಾಂಗಳಲ್ಲಿ)',
    'calculator.gold-purity': 'ಚಿನ್ನದ ಶುದ್ಧತೆ',
    'calculator.24k': '24 ಕಾರಟ್ (99.9% ಶುದ್ಧ)',
    'calculator.22k': '22 ಕಾರಟ್ (91.6% ಶುದ್ಧ)',
    'calculator.21k': '21 ಕಾರಟ್ (87.5% ಶುದ್ಧ)',
    'calculator.20k': '20 ಕಾರಟ್ (83.3% ಶುದ್ಧ)',
    'calculator.19k': '19 ಕಾರಟ್ (79.2% ಶುದ್ಧ)',
    'calculator.18k': '18 ಕಾರಟ್ (75% ಶುದ್ಧ)',
    'calculator.gold-rate-today': 'ಇಂದಿನ ಚಿನ್ನದ ದರ',
    'calculator.calculate': 'ಸಾಲದ ಮೊತ್ತವನ್ನು ಲೆಕ್ಕ ಹಾಕಿ',
    'calculator.loan-estimate': 'ಸಾಲದ ಅಂದಾಜು',
    'calculator.you-can-get': 'ನೀವು ಪಡೆಯಬಹುದು',
    'calculator.loan-amount': 'ವರೆಗಿನ ಸಾಲ',
    'calculator.emi-12-months': 'EMI (12 ತಿಂಗಳು)',
    'calculator.interest-rate': 'ಬಡ��ಡಿ ದರ',
    'calculator.note1': '• ಇದು ಕೇವಲ ಒಂದು ಅಂದಾಜು',
    'calculator.note2': '• ನಿಜವಾದ ಸಾಲದ ಮೊತ್ತವು ಚಿನ್ನದ ಗುಣಮಟ್ಟವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ',
    'calculator.note3': '• ಅಂತಿಮ ಸಾಲದ ಮೊತ್ತವು ಪರಿಶೀಲನೆಯ ನಂತರ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ',
    'calculator.add-item': 'ಐಟಂ ಸೇರಿಸಿ',
    
    // Application Form  
    'application.title': 'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    'application.subtitle': 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ, ನಮ್ಮ ತಂಡ 2 ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ',
    'application.form-title': 'ಚಿನ್ನದ ಸಾಲ ಅರ್ಜಿ ಫಾರ್ಮ್',
    'application.full-name': 'ಪೂರ್ಣ ಹೆಸರು',
    'application.mobile': 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    'application.email': 'ಇಮೇಲ್',
    'application.city': 'ನಗರ',
    'application.required-loan': 'ಅಗತ್ಯವಿರುವ ಸಾಲದ ಮೊತ್ತ',
    'application.nearest-branch': 'ಹತ್ತಿರದ ಶಾಖೆ',
    'application.loan-purpose': 'ಸಾಲದ ಉದ್ದೇಶ',
    'application.loan-purpose-placeholder': 'ನಿಮಗೆ ಸಾಲ ಏಕೆ ಬೇಕು ಎಂದು ಹೇಳಿ (ಐಚ್ಛಿಕ)',
    'application.submit': 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
    
    // And other translations...
    'contact.title': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'footer.rights-reserved': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  },
  
  te: {
    // Header
    'nav.features': 'లక్షణాలు',
    'nav.process': 'ప్రక్రియ',
    'nav.calculator': 'కాలిక్యులేటర్',
    'nav.apply': 'దరఖాస్తు చేయండి',
    'nav.contact': 'సంప్రదించండి',
    'header.apply-now': 'ఇప్పుడే దరఖాస్తు చేయండి',
    
    // Hero
    'hero.badge': 'భారతదేశంలో #1 బంగారు రుణ ప్లాట్‌ఫారం',
    'hero.title-highlight': 'బంగారు రుణాలు',
    'hero.title-suffix': '30 నిమిషాల్లో',
    'hero.title-audience': 'గ్రామీణ భారతదేశం కోసం',
    'hero.subtitle': 'వేగవంతమైన, సురక్షితమైన మరియు పారదర్శకమైన రుణాలు మీ చేతుల అందులో.',
    'hero.lowest-rates': 'అత్యంత తక్కువ వడ్డీ రేట్లు',
    'hero.quick-approval': '30 నిమిషాల్లో ఆమోదం',
    'hero.secure-process': '100% సురక్షితం',
    'hero.instant-cash': 'తక్షణ నగదు',
    'hero.apply-now': 'ఇప్పుడే దరఖాస్తు చేయండి',
    'hero.loan-calculator': 'రుణ మొత్తాన్ని లెక్కించండి',
    'hero.trusted-by': 'విశ్వసించబడింది',
    'hero.customers': 'కస్టమర్లు',
    'hero.crores-disbursed': 'కోట్లు పంపిణీ చేయబడింది',
    'hero.villages-served': 'గ్రామాలకు సేవ',
    'hero.interest-from': 'నెలకు వడ్డీ',
    'hero.loan-upto': 'రుణం వరకు',
    'hero.approval-time': 'ఆమోదం',
    
    // Benefits
    'benefits.title': 'బంగారు రుణ ప్రయోజనాలు',
    'benefits.subtitle': 'మీ ఆర్థిక అవసరాలకు మా బంగారు రుణం ఎందుకు ఉత్తమ ఎంపిక అని తెలుసుకోండి',
    'benefits.instant-approval': 'తక్షణ ఆమోదం',
    'benefits.instant-approval-desc': 'కేవలం 30 నిమిషాల్లో రుణ ఆమోదం మరియు తక్షణ నగదు',
    'benefits.no-credit-score': 'క్రెడిట్ స్కోర్ అవసరం లేదు',
    'benefits.no-credit-score-desc': 'క్రెడిట్ చరిత్ర తనిఖీ అవసరం లేదు, మీ బంగారం సరిపోతుంది',
    'benefits.secure-process': 'సురక్షిత ప్రక్రియ',
    'benefits.secure-process-desc': 'భీమా కవరేజీతో మీ బంగారం పూర్తిగా సురక్షితం',
    'benefits.low-interest': 'తక్కువ వడ్డీ రేట్లు',
    'benefits.low-interest-desc': 'మార్కెట్‌లో అత్యంత తక్కువ వడ్డీ రేట్లు, దాచిన రుసుములు లేవు',
    'benefits.easy-process': 'సులభ ప్రక్రియ',
    'benefits.easy-process-desc': 'కనీస పత్రాలు మరియు సరళమైన విధానం',
    'benefits.flexible-repayment': 'సరళమైన తిరిగి చెల్లింపు',
    'benefits.flexible-repayment-desc': 'మీ సౌకర్యం ప్రకారం EMI లేదా బుల్లెట్ పేమెంట్ ఎంచుకోండి',
    
    // How It Works
    'how-it-works.title': 'ఇది ఎలా పని చేస్తుంది?',
    'how-it-works.subtitle': 'కేవలం 5 సరళమైన దశల్లో మీ బంగారంపై రుణం పొందండి',
    'how-it-works.step1': 'మీ బంగారం తీసుకురండి',
    'how-it-works.step1-desc': 'మీ బంగారం (ఆభరణాలు, నాణేలు, బార్లు) మా శాఖకు తీసుకురండి లేదా మాకు కాల్ చేయండి',
    'how-it-works.step2': 'మూల్యాంకనం మరియు ధృవీకరణ',
    'how-it-works.step2-desc': 'మా నిపుణ��లు మీ బంగారం స్వచ్ఛత మరియు బరువును తనిఖీ చేస్తారు',
    'how-it-works.step3': 'రుణ మొత్తం ఆఫర్',
    'how-it-works.step3-desc': 'మీ బంగారం విలువ ఆధారంగా తక్షణ రుణ మొత్తం పొందండి',
    'how-it-works.step4': 'పత్రాలు మరియు ఆమోదం',
    'how-it-works.step4-desc': 'సరళమైన పత్రాల ధృవీకరణ మరియు తక్షణ రుణ ఆమోదం',
    'how-it-works.step5': 'తక్షణమే నగదు పొందండి',
    'how-it-works.step5-desc': 'నగదు, చెక్ లేదా ఖాతా బదిలీ - మీ ఎంపిక',
    
    // Calculator
    'calculator.title': 'రుణ కాలిక్యులేటర్',
    'calculator.subtitle': 'మీ బంగారం విలువ ఆధారంగా మీ రుణ మొత్తాన్ని అంచనా వేయండి',
    'calculator.gold-weight': 'బంగారం బరువు (గ్రాములలో)',
    'calculator.gold-purity': 'బంగారం స్వచ్ఛత',
    'calculator.24k': '24 క్యారెట్ (99.9% స్వచ్ఛమైన)',
    'calculator.22k': '22 క్యారెట్ (91.6% స్వచ్ఛమైన)',
    'calculator.21k': '21 క్యారెట్ (87.5% స్వచ్ఛమైన)',
    'calculator.20k': '20 క్యారెట్ (83.3% స్వచ్ఛమైన)',
    'calculator.19k': '19 క్యారెట్ (79.2% స్వచ్ఛమైన)',
    'calculator.18k': '18 క్యారెట్ (75% స్వచ్ఛమైన)',
    'calculator.gold-rate-today': 'ఈ రోజు బంగారం రేట్',
    'calculator.calculate': 'రుణ మొత్తాన్ని లెక్కించండి',
    'calculator.loan-estimate': 'రుణ అంచనా',
    'calculator.you-can-get': 'మీరు పొందవచ్చు',
    'calculator.loan-amount': 'వరకు రుణం',
    'calculator.emi-12-months': 'EMI (12 నెలలు)',
    'calculator.interest-rate': 'వడ్డీ రేటు',
    'calculator.note1': '• ఇది కేవలం ఒక అంచనా',
    'calculator.note2': '• వాస్తవ రుణ మొత్తం బంగారం నాణ్యతపై ఆధారపడి ఉంటుంది',
    'calculator.note3': '• చివరి రుణ మొత్తం ధృవీకరణ తర్వాత నిర్ణయించబడుతుంది',
    'calculator.add-item': 'ఐటెమ్ జోడించండి',
    
    // Application Form
    'application.title': 'ఆన్‌లైన్ దరఖాస్తు చేయండి',
    'application.subtitle': 'మీ వివరాలను పూరించండి, మా బృందం 2 గంటల్లో మిమ్మల్ని సంప్రదిస్తుంది',
    'application.form-title': 'బంగారు రుణ దరఖాస్తు ఫారం',
    'application.full-name': 'పూర్తి పేరు',
    'application.mobile': 'మొబైల్ నంబర్',
    'application.email': 'ఇమెయిల్',
    'application.city': 'నగరం',
    'application.required-loan': 'అవసరమైన రుణ మొత్తం',
    'application.nearest-branch': 'సమీప శాఖ',
    'application.loan-purpose': 'రుణ ప్రయోజనం',
    'application.loan-purpose-placeholder': 'మీకు రుణం ఎందుకు కావాలో చెప్పండి (ఐచ్ఛికం)',
    'application.submit': 'దరఖాస్తు సమర్పించండి',
    
    // And other translations...
    'contact.title': 'మమ్మల్ని సంప్రదించండి',
    'footer.rights-reserved': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};