(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/loan/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
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
        'footer.rbi-guideline': 'As per RBI guidelines, we follow responsible lending practices.'
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
        'footer.rights-reserved': 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
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
        'footer.rights-reserved': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.'
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useLanguage = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
_s(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const LanguageProvider = ({ children })=>{
    _s1();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/loan/contexts/LanguageContext.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(LanguageProvider, "fVUtOCD1O58HgvMjnE8lxRQa0QA=");
_c = LanguageProvider;
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loan/hooks/useGoldRates.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGoldRates",
    ()=>useGoldRates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useGoldRates() {
    _s();
    const [goldRate, setGoldRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Store latest values
    const goldPriceUSDRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(2050); // PAXG price in USD
    const usdToInrRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(83.5); // USD to INR rate
    const goldPriceChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0); // 24h price change %
    // WebSocket references
    const goldWsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectAttemptsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Polling interval for USD/INR (as backup to WebSocket)
    const usdInrPollingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Calculate and update gold rate
    const updateGoldRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[updateGoldRate]": ()=>{
            const goldPriceUSD = goldPriceUSDRef.current;
            const usdToInr = usdToInrRef.current;
            const priceChangePercent = goldPriceChangeRef.current;
            // Convert troy ounce to grams (1 troy oz = 31.1035 grams)
            const TROY_OZ_TO_GRAMS = 31.1035;
            const goldPricePerGramUSD = goldPriceUSD / TROY_OZ_TO_GRAMS;
            // Convert USD to INR using LIVE rate
            const goldPricePerGramINR = goldPricePerGramUSD * usdToInr;
            console.log(`💰 Live Gold: $${goldPriceUSD.toFixed(2)}/oz | USD/INR: ₹${usdToInr.toFixed(2)} → ₹${Math.round(goldPricePerGramINR)}/gram`);
            setGoldRate({
                rate24k: Math.round(goldPricePerGramINR),
                currency: "INR",
                lastUpdated: new Date().toLocaleString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }),
                source: "Live Real-Time Data (Binance)",
                priceChangePercent: priceChangePercent,
                usdToInr: usdToInr
            });
            setError(null);
        }
    }["useGoldRates.useCallback[updateGoldRate]"], []);
    // Fetch USD/INR from multiple sources (API-based real-time)
    const fetchUsdInrRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[fetchUsdInrRate]": async ()=>{
            try {
                console.log("🔄 Fetching live USD/INR rate from API...");
                // Try multiple sources in order of preference
                // Source 1: ExchangeRate-API (free, no key needed, updates hourly)
                try {
                    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                    const data = await response.json();
                    if (data && data.rates && data.rates.INR) {
                        const rate = parseFloat(data.rates.INR);
                        if (rate > 0) {
                            console.log(`✅ USD/INR from ExchangeRate-API: ₹${rate.toFixed(2)}`);
                            usdToInrRef.current = rate;
                            updateGoldRate();
                            return;
                        }
                    }
                } catch (err) {
                    console.warn("⚠️ ExchangeRate-API failed, trying next source...");
                }
                // Source 2: Fawaz Ahmed's Exchange Rate API (free, no key, updates daily)
                try {
                    const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
                    const data = await response.json();
                    if (data && data.usd && data.usd.inr) {
                        const rate = parseFloat(data.usd.inr);
                        if (rate > 0) {
                            console.log(`✅ USD/INR from Fawaz API: ₹${rate.toFixed(2)}`);
                            usdToInrRef.current = rate;
                            updateGoldRate();
                            return;
                        }
                    }
                } catch (err) {
                    console.warn("⚠️ Fawaz API failed, trying next source...");
                }
                // Source 3: Use Binance P2P API (real-time USDT/INR from Indian market)
                try {
                    const response = await fetch('https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            asset: 'USDT',
                            fiat: 'INR',
                            merchantCheck: false,
                            page: 1,
                            rows: 1,
                            tradeType: 'BUY',
                            transAmount: '100'
                        })
                    });
                    const data = await response.json();
                    if (data && data.data && data.data.length > 0) {
                        const rate = parseFloat(data.data[0].adv.price);
                        if (rate > 0) {
                            console.log(`✅ USD/INR from Binance P2P: ₹${rate.toFixed(2)}`);
                            usdToInrRef.current = rate;
                            updateGoldRate();
                            return;
                        }
                    }
                } catch (err) {
                    console.warn("⚠️ Binance P2P API failed, trying next source...");
                }
                // Fallback: Keep last known rate or use default
                console.warn("⚠️ All USD/INR sources failed, using last known rate:", usdToInrRef.current);
            } catch (err) {
                console.error("❌ Error fetching USD/INR rate:", err);
            }
        }
    }["useGoldRates.useCallback[fetchUsdInrRate]"], [
        updateGoldRate
    ]);
    // Connect to PAXG/USDT WebSocket (Gold price in USD)
    const connectGoldWebSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[connectGoldWebSocket]": ()=>{
            try {
                console.log("🔄 Connecting to Binance for PAXG/USDT (Gold Price)...");
                if (goldWsRef.current) {
                    goldWsRef.current.close();
                }
                const ws = new WebSocket("wss://stream.binance.com:9443/ws/paxgusdt@ticker");
                ws.onopen = ({
                    "useGoldRates.useCallback[connectGoldWebSocket]": ()=>{
                        console.log("✅ Gold Price WebSocket connected");
                        setLoading(false);
                        reconnectAttemptsRef.current = 0;
                    }
                })["useGoldRates.useCallback[connectGoldWebSocket]"];
                ws.onmessage = ({
                    "useGoldRates.useCallback[connectGoldWebSocket]": (event)=>{
                        try {
                            const data = JSON.parse(event.data);
                            const goldPriceUSD = parseFloat(data.c); // Current price
                            const priceChangePercent = parseFloat(data.P); // 24h change
                            if (goldPriceUSD && goldPriceUSD > 0) {
                                goldPriceUSDRef.current = goldPriceUSD;
                                goldPriceChangeRef.current = priceChangePercent;
                                updateGoldRate(); // Recalculate with latest USD/INR
                            }
                        } catch (parseError) {
                            console.error("❌ Error parsing gold price:", parseError);
                        }
                    }
                })["useGoldRates.useCallback[connectGoldWebSocket]"];
                ws.onerror = ({
                    "useGoldRates.useCallback[connectGoldWebSocket]": (error)=>{
                        console.error("❌ Gold WebSocket error:", error);
                    }
                })["useGoldRates.useCallback[connectGoldWebSocket]"];
                ws.onclose = ({
                    "useGoldRates.useCallback[connectGoldWebSocket]": (event)=>{
                        console.log(`🔌 Gold WebSocket closed (${event.code})`);
                        // Attempt to reconnect
                        if (reconnectAttemptsRef.current < 5) {
                            const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
                            console.log(`🔄 Reconnecting in ${delay / 1000}s... (attempt ${reconnectAttemptsRef.current + 1}/5)`);
                            reconnectTimeoutRef.current = setTimeout({
                                "useGoldRates.useCallback[connectGoldWebSocket]": ()=>{
                                    reconnectAttemptsRef.current++;
                                    connectGoldWebSocket();
                                }
                            }["useGoldRates.useCallback[connectGoldWebSocket]"], delay);
                        } else {
                            console.warn("⚠️ Max reconnection attempts reached, using fallback");
                            setError("Live feed unavailable - using market rate");
                            useFallbackRate();
                        }
                    }
                })["useGoldRates.useCallback[connectGoldWebSocket]"];
                goldWsRef.current = ws;
            } catch (err) {
                console.error("❌ Failed to create Gold WebSocket:", err);
            }
        }
    }["useGoldRates.useCallback[connectGoldWebSocket]"], [
        updateGoldRate
    ]);
    // Start USD/INR polling (fetch every 10 seconds for real-time updates)
    const startUsdInrPolling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[startUsdInrPolling]": ()=>{
            console.log("🔄 Starting USD/INR real-time polling (every 10 seconds)...");
            // Fetch immediately
            fetchUsdInrRate();
            // Then poll every 10 seconds
            if (usdInrPollingRef.current) {
                clearInterval(usdInrPollingRef.current);
            }
            usdInrPollingRef.current = setInterval({
                "useGoldRates.useCallback[startUsdInrPolling]": ()=>{
                    fetchUsdInrRate();
                }
            }["useGoldRates.useCallback[startUsdInrPolling]"], 10000); // 10 seconds
        }
    }["useGoldRates.useCallback[startUsdInrPolling]"], [
        fetchUsdInrRate
    ]);
    const connectWebSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[connectWebSocket]": ()=>{
            console.log("🚀 Initializing real-time gold rate system...");
            connectGoldWebSocket();
            startUsdInrPolling();
        }
    }["useGoldRates.useCallback[connectWebSocket]"], [
        connectGoldWebSocket,
        startUsdInrPolling
    ]);
    const useFallbackRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[useFallbackRate]": ()=>{
            console.log("📍 Using market-based fallback rate: ₹7,200/gram");
            setGoldRate({
                rate24k: 7200,
                currency: "INR",
                lastUpdated: new Date().toLocaleString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                }),
                source: "Market Rate",
                usdToInr: 83.5
            });
            setLoading(false);
        }
    }["useGoldRates.useCallback[useFallbackRate]"], []);
    const refetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGoldRates.useCallback[refetch]": ()=>{
            console.log("🔄 Manual refresh triggered - reconnecting...");
            reconnectAttemptsRef.current = 0;
            connectWebSocket();
        }
    }["useGoldRates.useCallback[refetch]"], [
        connectWebSocket
    ]);
    // Initial connection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGoldRates.useEffect": ()=>{
            connectWebSocket();
            // Cleanup on unmount
            return ({
                "useGoldRates.useEffect": ()=>{
                    if (goldWsRef.current) {
                        goldWsRef.current.close();
                        goldWsRef.current = null;
                    }
                    if (reconnectTimeoutRef.current) {
                        clearTimeout(reconnectTimeoutRef.current);
                    }
                    if (usdInrPollingRef.current) {
                        clearInterval(usdInrPollingRef.current);
                    }
                }
            })["useGoldRates.useEffect"];
        }
    }["useGoldRates.useEffect"], [
        connectWebSocket
    ]);
    return {
        goldRate,
        loading,
        error,
        refetch
    };
}
_s(useGoldRates, "eMMKKdAyjnmQxVgCMzWA4oQQe+Q=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loan/hooks/useLoanPlans.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useLoanPlan",
    ()=>useLoanPlan,
    "useLoanPlans",
    ()=>useLoanPlans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$lib$2f$api$2f$loanPlans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/lib/api/loanPlans.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
class LoanPlansCache {
    cache = new Map();
    CACHE_DURATION = 5 * 60 * 1000;
    generateKey(filters) {
        return JSON.stringify(filters);
    }
    get(filters) {
        const key = this.generateKey(filters);
        const entry = this.cache.get(key);
        if (!entry) return null;
        const isExpired = Date.now() - entry.timestamp > this.CACHE_DURATION;
        if (isExpired) {
            this.cache.delete(key);
            return null;
        }
        return entry.data;
    }
    set(filters, data) {
        const key = this.generateKey(filters);
        this.cache.set(key, {
            data,
            timestamp: Date.now(),
            filters
        });
    }
    clear() {
        this.cache.clear();
    }
    // Clear cache entries for specific loan amounts (useful when loan amount changes)
    clearForAmount(loanAmount) {
        for (const [key, entry] of this.cache.entries()){
            if (entry.filters.loanAmount === loanAmount) {
                this.cache.delete(key);
            }
        }
    }
}
const cache = new LoanPlansCache();
function useLoanPlans(initialFilters = {}) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        plans: [],
        loading: false,
        error: null,
        total: 0,
        message: undefined
    });
    const [currentFilters, setCurrentFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters);
    const fetchPlans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLoanPlans.useCallback[fetchPlans]": async (filters = {})=>{
            setState({
                "useLoanPlans.useCallback[fetchPlans]": (prev)=>({
                        ...prev,
                        loading: true,
                        error: null
                    })
            }["useLoanPlans.useCallback[fetchPlans]"]);
            setCurrentFilters(filters);
            try {
                // Check cache first
                const cachedData = cache.get(filters);
                if (cachedData) {
                    setState({
                        plans: cachedData.plans,
                        loading: false,
                        error: null,
                        total: cachedData.total,
                        message: cachedData.message
                    });
                    return;
                }
                // Fetch from API
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$lib$2f$api$2f$loanPlans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loanPlansService"].getLoanPlans(filters);
                // Cache the response
                cache.set(filters, response);
                setState({
                    plans: response.plans,
                    loading: false,
                    error: null,
                    total: response.total,
                    message: response.message
                });
            } catch (error) {
                console.error('Error in useLoanPlans:', error);
                setState({
                    "useLoanPlans.useCallback[fetchPlans]": (prev)=>({
                            ...prev,
                            loading: false,
                            error: error instanceof Error ? error.message : 'Failed to fetch loan plans'
                        })
                }["useLoanPlans.useCallback[fetchPlans]"]);
            }
        }
    }["useLoanPlans.useCallback[fetchPlans]"], []);
    const refetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLoanPlans.useCallback[refetch]": async ()=>{
            // Clear cache for current filters and refetch
            cache.clear();
            await fetchPlans(currentFilters);
        }
    }["useLoanPlans.useCallback[refetch]"], [
        currentFilters,
        fetchPlans
    ]);
    // Initial fetch on mount - use useEffect with empty dependency array to avoid infinite re-renders
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLoanPlans.useEffect": ()=>{
            fetchPlans(initialFilters);
        }
    }["useLoanPlans.useEffect"], []); // Remove the problematic dependencies
    return {
        plans: state.plans,
        loading: state.loading,
        error: state.error,
        total: state.total,
        message: state.message,
        refetch,
        fetchPlans
    };
}
_s(useLoanPlans, "jRYAEO0HbOv9/gP+jQKPB0wsFL0=");
function useLoanPlan(planId) {
    _s1();
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLoanPlan.useCallback[fetchPlan]": async (id)=>{
            setLoading(true);
            setError(null);
            try {
                const planData = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$lib$2f$api$2f$loanPlans$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loanPlansService"].getLoanPlanById(id);
                setPlan(planData);
            } catch (error) {
                console.error('Error fetching loan plan:', error);
                setError(error instanceof Error ? error.message : 'Failed to fetch loan plan');
            } finally{
                setLoading(false);
            }
        }
    }["useLoanPlan.useCallback[fetchPlan]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLoanPlan.useEffect": ()=>{
            if (planId) {
                fetchPlan(planId);
            } else {
                setPlan(null);
                setError(null);
            }
        }
    }["useLoanPlan.useEffect"], [
        planId,
        fetchPlan
    ]);
    return {
        plan,
        loading,
        error,
        refetch: planId ? ()=>fetchPlan(planId) : undefined
    };
}
_s1(useLoanPlan, "EpBfSgLLoELOHnyaBrYQ1tbXoVk=");
const __TURBOPACK__default__export__ = useLoanPlans;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loan/config/environment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Environment configuration with proper fallbacks and type safety
__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "apiBaseUrl",
    ()=>apiBaseUrl,
    "appConfig",
    ()=>appConfig,
    "appUrl",
    ()=>appUrl,
    "default",
    ()=>__TURBOPACK__default__export__,
    "domain",
    ()=>domain,
    "env",
    ()=>env,
    "features",
    ()=>features,
    "goldRateApi",
    ()=>goldRateApi,
    "logEnvironmentConfig",
    ()=>logEnvironmentConfig,
    "mainSiteDomain",
    ()=>mainSiteDomain,
    "notion",
    ()=>notion,
    "security",
    ()=>security,
    "supabase",
    ()=>supabase,
    "validateEnvironment",
    ()=>validateEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Safe environment variable getter with fallbacks
function getEnvVar(key, fallback = '') {
    try {
        // In Next.js client components, use NEXT_PUBLIC_ prefix for client-side access
        const nextPublicKey = key.startsWith('NEXT_PUBLIC_') ? key : `NEXT_PUBLIC_${key}`;
        // Try to get from process.env (works in both server and client with NEXT_PUBLIC_ prefix)
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[nextPublicKey] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key];
            if (value !== undefined && value !== null && value !== '') {
                return String(value);
            }
        }
        return fallback;
    } catch (error) {
        console.warn(`Failed to access environment variable ${key}, using fallback:`, fallback);
        return fallback;
    }
}
function getBooleanEnvVar(key, fallback = false) {
    try {
        const value = getEnvVar(key, fallback.toString());
        return value.toLowerCase() === 'true';
    } catch (error) {
        console.warn(`Failed to parse boolean environment variable ${key}, using fallback:`, fallback);
        return fallback;
    }
}
// Get environment type safely
const nodeEnv = getEnvVar('NODE_ENV', 'development');
const envType = nodeEnv === 'production' || nodeEnv === 'test' ? nodeEnv : 'development';
const appConfig = {
    env: envType,
    domain: getEnvVar('VITE_APP_DOMAIN', 'localhost:3000'),
    mainSiteDomain: getEnvVar('VITE_MAIN_SITE_DOMAIN', 'https://yellowmetal.co'),
    apiBaseUrl: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3000/api'),
    appUrl: getEnvVar('VITE_APP_URL', 'http://localhost:3000'),
    supabase: {
        url: getEnvVar('VITE_SUPABASE_URL', ''),
        anonKey: getEnvVar('VITE_SUPABASE_ANON_KEY', '')
    },
    notion: {
        apiToken: getEnvVar('NOTION_API_TOKEN', ''),
        databaseId: getEnvVar('NOTION_DATABASE_ID', '')
    },
    analytics: {
        gaTrackingId: getEnvVar('VITE_GA_TRACKING_ID', '')
    },
    features: {
        adminPanel: getBooleanEnvVar('VITE_ENABLE_ADMIN_PANEL', true),
        multilingual: getBooleanEnvVar('VITE_ENABLE_MULTILINGUAL', true),
        calculator: getBooleanEnvVar('VITE_ENABLE_CALCULATOR', true)
    },
    goldRateApi: {
        endpoint: getEnvVar('VITE_GOLD_RATE_API', ''),
        apiKey: getEnvVar('VITE_GOLD_RATE_API_KEY', '')
    },
    security: {
        adminSecretKey: getEnvVar('VITE_ADMIN_SECRET_KEY', 'default_dev_key')
    }
};
function validateEnvironment() {
    // In development, we use fallback values, so validation should be more lenient
    if (appConfig.env === 'development') {
        return {
            isValid: true,
            missingVars: []
        };
    }
    const criticalVars = [
        'VITE_MAIN_SITE_DOMAIN',
        'VITE_APP_URL'
    ];
    const missingVars = [];
    for (const varName of criticalVars){
        const value = getEnvVar(varName);
        // In production, we need actual values, not placeholders
        if (!value || value.includes('localhost') || value.includes('your_')) {
            missingVars.push(varName);
        }
    }
    return {
        isValid: missingVars.length === 0,
        missingVars
    };
}
function logEnvironmentConfig() {
    if (appConfig.env === 'development') {
        // Only log basic info, not all the details to reduce console noise
        console.log('🔧 Environment: Development mode loaded successfully');
        // Only show detailed logs if there are actual issues
        const hasIssues = !appConfig.mainSiteDomain || !appConfig.appUrl || appConfig.mainSiteDomain.includes('your_') || appConfig.appUrl.includes('your_');
        if (hasIssues) {
            console.group('🔧 Environment Configuration (Issues Detected)');
            console.log('Main Site Domain:', appConfig.mainSiteDomain);
            console.log('App URL:', appConfig.appUrl);
            console.log('API Base URL:', appConfig.apiBaseUrl);
            console.groupEnd();
        }
    }
}
const { env, domain, mainSiteDomain, apiBaseUrl, appUrl, supabase, notion, analytics, features, goldRateApi, security } = appConfig;
const __TURBOPACK__default__export__ = appConfig;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loan/lib/api/loanPlans.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Client for Loan Plans - Frontend implementation
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "loanPlansService",
    ()=>loanPlansService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/config/environment.ts [app-client] (ecmascript)");
;
class LoanPlansService {
    // Get loan plans filtered by loan amount and other criteria
    async getLoanPlans(filters = {}) {
        // Check if we should use API or mock data
        const useApi = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl !== 'http://localhost:3000/api' && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl !== '';
        if (!useApi) {
            // Use mock data by default
            return this.getMockLoanPlans(filters);
        }
        try {
            const queryParams = new URLSearchParams();
            if (filters.loanAmount) queryParams.set('loanAmount', filters.loanAmount.toString());
            if (filters.category) queryParams.set('category', filters.category);
            if (filters.minInterestRate) queryParams.set('minInterestRate', filters.minInterestRate.toString());
            if (filters.maxInterestRate) queryParams.set('maxInterestRate', filters.maxInterestRate.toString());
            if (filters.minTenure) queryParams.set('minTenure', filters.minTenure.toString());
            if (filters.maxTenure) queryParams.set('maxTenure', filters.maxTenure.toString());
            if (filters.minLTV) queryParams.set('minLTV', filters.minLTV.toString());
            if (filters.maxLTV) queryParams.set('maxLTV', filters.maxLTV.toString());
            if (filters.activeOnly !== undefined) queryParams.set('activeOnly', filters.activeOnly.toString());
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000); // 30 second timeout
            try {
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl}/api/v1/loan-plans?${queryParams.toString()}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Version': '1.0'
                    },
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        } catch (error) {
            console.error('Error fetching loan plans:', error);
            // Fallback to mock data in case of API failure
            return this.getMockLoanPlans(filters);
        }
    }
    // Get a specific loan plan by ID
    async getLoanPlanById(id) {
        // Check if we should use API or mock data
        const useApi = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl !== 'http://localhost:3000/api' && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl !== '';
        if (!useApi) {
            // Use mock data by default
            const mockResponse = this.getMockLoanPlans({});
            return mockResponse.plans.find((plan)=>plan.id === id) || null;
        }
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000);
            try {
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl}/api/v1/loan-plans/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Version': '1.0'
                    },
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    if (response.status === 404) {
                        return null;
                    }
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                return data.plan;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        } catch (error) {
            console.error('Error fetching loan plan:', error);
            // Fallback to mock data
            const mockResponse = this.getMockLoanPlans({});
            return mockResponse.plans.find((plan)=>plan.id === id) || null;
        }
    }
    // Create a new loan plan (admin functionality)
    async createLoanPlan(plan) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000);
            try {
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl}/api/v1/loan-plans`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Version': '1.0'
                    },
                    body: JSON.stringify(plan),
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                return data.plan;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        } catch (error) {
            console.error('Error creating loan plan:', error);
            throw error;
        }
    }
    // Update an existing loan plan (admin functionality)
    async updateLoanPlan(id, updates) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000);
            try {
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl}/api/v1/loan-plans/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Version': '1.0'
                    },
                    body: JSON.stringify(updates),
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                return data.plan;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        } catch (error) {
            console.error('Error updating loan plan:', error);
            throw error;
        }
    }
    // Delete a loan plan (admin functionality)
    async deleteLoanPlan(id) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000);
            try {
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].apiBaseUrl}/api/v1/loan-plans/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-API-Version': '1.0'
                    },
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                return response.ok;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        } catch (error) {
            console.error('Error deleting loan plan:', error);
            return false;
        }
    }
    // Fallback mock data for development/testing
    getMockLoanPlans(filters) {
        const mockPlans = [
            {
                id: 'basic-1',
                name: 'Quick Cash Plan',
                interestRate: 12,
                maxTenure: 12,
                minAmount: 10000,
                maxAmount: 100000,
                processingFee: 0.5,
                loanToValue: 70,
                features: [
                    'Quick approval in 30 minutes',
                    'Minimal documentation',
                    'Flexible repayment',
                    'No hidden charges'
                ],
                category: 'basic',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            },
            {
                id: 'basic-2',
                name: 'Standard Gold Loan',
                interestRate: 10.5,
                maxTenure: 18,
                minAmount: 25000,
                maxAmount: 150000,
                processingFee: 0.75,
                loanToValue: 72,
                features: [
                    'Competitive interest rate',
                    'Up to 18 months tenure',
                    'Online account management',
                    'Part payment facility'
                ],
                category: 'basic',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            },
            {
                id: 'premium-1',
                name: 'Premium Gold Plus',
                interestRate: 9.5,
                maxTenure: 24,
                minAmount: 50000,
                maxAmount: 500000,
                processingFee: 0,
                loanToValue: 75,
                features: [
                    'Zero processing fee',
                    'Priority customer service',
                    'Extended tenure options',
                    'Gold price protection',
                    'Free gold valuation'
                ],
                specialOffer: 'First 3 months at 8.5% interest',
                isPopular: true,
                category: 'premium',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            },
            {
                id: 'premium-2',
                name: 'Business Growth Loan',
                interestRate: 9,
                maxTenure: 36,
                minAmount: 100000,
                maxAmount: 750000,
                processingFee: 0,
                loanToValue: 78,
                features: [
                    'Lowest interest rate',
                    'Extended 3-year tenure',
                    'Business-focused features',
                    'Bulk payment discounts',
                    'Dedicated relationship manager'
                ],
                specialOffer: 'Additional 0.5% discount for businesses',
                category: 'premium',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            },
            {
                id: 'elite-1',
                name: 'Elite Gold Reserve',
                interestRate: 8.5,
                maxTenure: 60,
                minAmount: 200000,
                maxAmount: 2000000,
                processingFee: 0,
                loanToValue: 80,
                features: [
                    'Ultra-low interest rate',
                    'Up to 5 years tenure',
                    'Concierge banking services',
                    'Investment advisory',
                    'Insurance coverage',
                    'Gold buyback guarantee'
                ],
                specialOffer: 'Complimentary gold storage for 1 year',
                isPopular: true,
                category: 'elite',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            },
            {
                id: 'elite-2',
                name: 'Platinum Wealth Loan',
                interestRate: 8,
                maxTenure: 84,
                minAmount: 500000,
                maxAmount: 5000000,
                processingFee: 0,
                loanToValue: 85,
                features: [
                    'Best-in-class interest rate',
                    'Up to 7 years tenure',
                    'White-glove service',
                    'Wealth management services',
                    'Tax advisory support',
                    'Premium lounge access'
                ],
                specialOffer: 'Personal financial advisor included',
                category: 'elite',
                status: 'active',
                createdAt: '2024-01-01T00:00:00Z',
                updatedAt: '2024-01-01T00:00:00Z'
            }
        ];
        // Filter mock data based on criteria
        let filteredPlans = mockPlans;
        if (filters.loanAmount) {
            filteredPlans = filteredPlans.filter((plan)=>filters.loanAmount >= plan.minAmount && filters.loanAmount <= plan.maxAmount);
        }
        if (filters.category) {
            filteredPlans = filteredPlans.filter((plan)=>plan.category === filters.category);
        }
        if (filters.minLTV && filters.maxLTV) {
            filteredPlans = filteredPlans.filter((plan)=>plan.loanToValue >= filters.minLTV && plan.loanToValue <= filters.maxLTV);
        } else if (filters.minLTV) {
            filteredPlans = filteredPlans.filter((plan)=>plan.loanToValue >= filters.minLTV);
        } else if (filters.maxLTV) {
            filteredPlans = filteredPlans.filter((plan)=>plan.loanToValue <= filters.maxLTV);
        }
        if (filters.activeOnly) {
            filteredPlans = filteredPlans.filter((plan)=>plan.status === 'active');
        }
        // Sort by interest rate
        filteredPlans = filteredPlans.sort((a, b)=>a.interestRate - b.interestRate);
        return {
            plans: filteredPlans,
            total: filteredPlans.length,
            message: 'Using demo data - Ready for API integration'
        };
    }
}
const loanPlansService = new LoanPlansService();
const __TURBOPACK__default__export__ = loanPlansService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/loan/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoanPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Trust$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Trust.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$HowItWorks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/HowItWorks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$LoanCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/LoanCalculator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ApplicationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/ApplicationForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Testimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$MinimalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/MinimalHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$SectionNavigator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/SectionNavigator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$AdminPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/AdminPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$AdminAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/AdminAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$DeploymentSteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/DeploymentSteps.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$DeploymentChecklist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/DeploymentChecklist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/contexts/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/config/environment.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function LoanPage() {
    _s();
    const [isAdminMode, setIsAdminMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeploymentMode, setIsDeploymentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deploymentView, setDeploymentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('steps');
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize app and check environment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanPage.useEffect": ()=>{
            // Log environment configuration in development
            if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].env === 'development') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logEnvironmentConfig"])();
            }
            // Validate critical environment variables (only warn in production)
            if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].env === 'production') {
                const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateEnvironment"])();
                if (!validation.isValid) {
                    console.warn('⚠️ Some environment variables are missing:', validation.missingVars);
                }
            }
            // Check for admin mode from URL parameters
            if ("TURBOPACK compile-time truthy", 1) {
                const urlParams = new URLSearchParams(window.location.search);
                const adminParam = urlParams.get('admin');
                const deployParam = urlParams.get('deploy');
                if (adminParam === 'true') {
                    setIsAdminMode(true);
                }
                if (deployParam === 'true') {
                    setIsDeploymentMode(true);
                }
            }
        }
    }["LoanPage.useEffect"], []);
    // Check authentication status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const authStatus = localStorage.getItem('admin_authenticated');
                const authTimestamp = localStorage.getItem('admin_timestamp');
                if (authStatus === 'true' && authTimestamp) {
                    const timeDiff = Date.now() - parseInt(authTimestamp);
                    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
                    if (timeDiff < oneHour) {
                        setIsAuthenticated(true);
                    } else {
                        // Session expired
                        localStorage.removeItem('admin_authenticated');
                        localStorage.removeItem('admin_timestamp');
                    }
                }
            }
        }
    }["LoanPage.useEffect"], []);
    const handleAdminAccess = ()=>{
        setIsAdminMode(true);
        setIsDeploymentMode(false);
        // Update URL without page reload
        if ("TURBOPACK compile-time truthy", 1) {
            const url = new URL(window.location.href);
            url.searchParams.set('admin', 'true');
            url.searchParams.delete('deploy');
            window.history.pushState({}, '', url.toString());
        }
    };
    const handleDeploymentAccess = ()=>{
        setIsDeploymentMode(true);
        setIsAdminMode(false);
        // Update URL without page reload
        if ("TURBOPACK compile-time truthy", 1) {
            const url = new URL(window.location.href);
            url.searchParams.set('deploy', 'true');
            url.searchParams.delete('admin');
            window.history.pushState({}, '', url.toString());
        }
    };
    const handleBackToPublic = ()=>{
        setIsAdminMode(false);
        setIsDeploymentMode(false);
        // Update URL without page reload
        if ("TURBOPACK compile-time truthy", 1) {
            const url = new URL(window.location.href);
            url.searchParams.delete('admin');
            url.searchParams.delete('deploy');
            window.history.pushState({}, '', url.toString());
        }
    };
    const handleAuthenticated = ()=>{
        setIsAuthenticated(true);
    };
    const handleLogout = ()=>{
        setIsAuthenticated(false);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem('admin_authenticated');
            localStorage.removeItem('admin_timestamp');
        }
        // Optionally redirect to public site
        handleBackToPublic();
    };
    // Deployment mode rendering
    if (isDeploymentMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-bold text-xl",
                                                children: "Deployment Guide"
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "default",
                                                        size: "sm",
                                                        onClick: ()=>setDeploymentView('steps'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/loan/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Steps"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/loan/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "default",
                                                        size: "sm",
                                                        onClick: ()=>setDeploymentView('checklist'),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                                className: "w-4 h-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/loan/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Checklist"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/loan/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/loan/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/loan/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/page.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Back to Home"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                onClick: handleBackToPublic,
                                                className: "flex items-center space-x-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Back to Site"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/loan/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/loan/page.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8",
                        children: deploymentView === 'steps' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$DeploymentSteps$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeploymentSteps"], {}, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 188,
                            columnNumber: 43
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$DeploymentChecklist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeploymentChecklist"], {}, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 188,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/loan/page.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/loan/page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    // Admin mode rendering
    if (isAdminMode) {
        if (!isAuthenticated) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$AdminAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminAuth"], {
                            onAuthenticated: handleAuthenticated
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed top-4 right-4 z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            className: "flex items-center space-x-2 bg-white/90 backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Back to Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/loan/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/loan/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: handleBackToPublic,
                                        className: "flex items-center space-x-2 bg-white/90 backdrop-blur-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Back to Site"
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/loan/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/loan/page.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$AdminPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPanel"], {
                onLogout: handleLogout
            }, void 0, false, {
                fileName: "[project]/app/loan/page.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 230,
            columnNumber: 7
        }, this);
    }
    // Public site rendering
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$MinimalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MinimalHeader"], {}, void 0, false, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "hero",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "trust",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Trust$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trust"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "calculator",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$LoanCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoanCalculator"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "how-it-works",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$HowItWorks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowItWorks"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "application",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ApplicationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplicationForm"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "testimonials",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Testimonials"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$SectionNavigator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionNavigator"], {}, void 0, false, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-4 left-4 z-50 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: handleAdminAccess,
                            className: "opacity-0 hover:opacity-100 transition-opacity duration-300 block",
                            title: "Admin Access",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: handleDeploymentAccess,
                            className: "opacity-0 hover:opacity-100 transition-opacity duration-300 block",
                            title: "Deployment Guide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/loan/page.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_s(LoanPage, "NrJ4VlDPzTH7k9e8Xm4KCaXyTis=");
_c = LoanPage;
var _c;
__turbopack_context__.k.register(_c, "LoanPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_loan_d159791a._.js.map