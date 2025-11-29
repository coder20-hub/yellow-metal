module.exports = [
"[project]/app/loan/contexts/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
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
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
}),
"[project]/app/loan/components/ui/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/app/loan/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/ui/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/loan/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/loan/config/environment.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
// Safe environment variable getter with fallbacks for Next.js
function getEnvVar(key, fallback = '') {
    try {
        // In Next.js, use process.env with NEXT_PUBLIC_ prefix for client-side access
        const nextPublicKey = key.startsWith('NEXT_PUBLIC_') ? key : `NEXT_PUBLIC_${key}`;
        if (typeof process !== 'undefined' && process.env) {
            const value = process.env[nextPublicKey] || process.env[key];
            if (value !== undefined && value !== null && value !== '') {
                return String(value);
            }
        }
        return fallback;
    } catch (error) {
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
}),
"[project]/app/loan/components/MinimalHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinimalHeader",
    ()=>MinimalHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/config/environment.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Use public folder path for logo in Next.js
const logoImage = '/loan-assets/da124a0c074b8c023228740c8aa4a81fd9689824.png';
function MinimalHeader() {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const languages = [
        {
            code: 'en',
            name: 'English',
            flag: '🇺🇸'
        },
        {
            code: 'kn',
            name: 'ಕನ್ನಡ',
            flag: '🇮🇳'
        },
        {
            code: 'te',
            name: 'తెలుగు',
            flag: '🇮🇳'
        }
    ];
    const currentLanguage = languages.find((lang)=>lang.code === language);
    const scrollToApplication = ()=>{
        document.getElementById('application')?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "absolute top-0 left-0 right-0 z-50 bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-32 px-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$config$2f$environment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainSiteDomain"],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transition-transform hover:scale-105 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: logoImage,
                                        alt: "Yellow Metal Logo",
                                        className: "h-24 w-auto object-contain drop-shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute pointer-events-none",
                                        style: {
                                            top: '2px',
                                            right: '2px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 h-2",
                                                style: {
                                                    animation: 'sparkleFloat1 2.5s ease-out infinite',
                                                    top: '0px',
                                                    right: '0px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
                                                            fill: "url(#sparkle-gold-1)",
                                                            className: "drop-shadow-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "sparkle-gold-1",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#FFD700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 63,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#FFA500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 64,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#FF8C00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 65,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-1.5 h-1.5",
                                                style: {
                                                    animation: 'sparkleFloat2 2.8s ease-out 0.4s infinite',
                                                    top: '8px',
                                                    right: '-10px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
                                                            fill: "url(#sparkle-gold-2)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "sparkle-gold-2",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#FFD700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#FFA500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 88,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#FF8C00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 89,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 h-2",
                                                style: {
                                                    animation: 'sparkleFloat3 3s ease-out 0.8s infinite',
                                                    top: '-10px',
                                                    right: '15px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
                                                            fill: "url(#sparkle-gold-3)",
                                                            className: "drop-shadow-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "sparkle-gold-3",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#FFD700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#FFA500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#FF8C00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-1.5 h-1.5",
                                                style: {
                                                    animation: 'sparkleFloat4 2.6s ease-out 1.2s infinite',
                                                    top: '5px',
                                                    right: '20px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
                                                            fill: "url(#sparkle-gold-4)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "sparkle-gold-4",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#FFD700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#FFA500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#FF8C00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-2 h-2",
                                                style: {
                                                    animation: 'sparkleFloat5 2.9s ease-out 1.6s infinite',
                                                    top: '-5px',
                                                    right: '-5px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
                                                            fill: "url(#sparkle-gold-5)",
                                                            className: "drop-shadow-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "sparkle-gold-5",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#FFD700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#FFA500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#FF8C00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 163,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute w-1.5 h-1.5",
                                                style: {
                                                    animation: 'sparkleFloat6 2.4s ease-out 2s infinite',
                                                    top: '12px',
                                                    right: '8px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z",
                                                            fill: "url(#sparkle-gold-6)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "sparkle-gold-6",
                                                                x1: "0%",
                                                                y1: "0%",
                                                                x2: "100%",
                                                                y2: "100%",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "0%",
                                                                        stopColor: "#FFD700"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "50%",
                                                                        stopColor: "#FFA500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "100%",
                                                                        stopColor: "#FF8C00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsLanguageMenuOpen(!isLanguageMenuOpen),
                                            className: "flex items-center space-x-2 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground transition-colors rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: currentLanguage?.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: currentLanguage?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-3 h-3 transition-transform group-hover:rotate-180"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this),
                                        isLanguageMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 top-full mt-2 w-48 bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-xl py-2 z-50",
                                            children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setLanguage(lang.code);
                                                        setIsLanguageMenuOpen(false);
                                                    },
                                                    className: `w-full px-4 py-3 text-left text-sm hover:bg-secondary/50 transition-colors flex items-center space-x-3 group rounded-lg mx-1 ${language === lang.code ? 'bg-secondary/50 font-medium' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: lang.flag
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: lang.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this),
                                                        language === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-auto w-2 h-2 rounded-full status-indicator"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, lang.code, true, {
                                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: scrollToApplication,
                                    className: "btn-primary shadow-lg hover:shadow-xl transition-all duration-300",
                                    size: "lg",
                                    children: t('header.apply-now')
                                }, void 0, false, {
                                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            isLanguageMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40",
                onClick: ()=>setIsLanguageMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/loan/components/MinimalHeader.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/loan/components/MinimalHeader.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/loan/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageWithFallback",
    ()=>ImageWithFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
function ImageWithFallback(props) {
    const [didError, setDidError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleError = ()=>{
        setDidError(true);
    };
    const { src, alt, style, className, ...rest } = props;
    return didError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${className ?? ''}`,
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: ERROR_IMG_SRC,
                alt: "Error loading image",
                ...rest,
                "data-original-url": src
            }, void 0, false, {
                fileName: "[project]/app/loan/components/figma/ImageWithFallback.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/loan/components/figma/ImageWithFallback.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/loan/components/figma/ImageWithFallback.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: className,
        style: style,
        ...rest,
        onError: handleError
    }, void 0, false, {
        fileName: "[project]/app/loan/components/figma/ImageWithFallback.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/loan/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/figma/ImageWithFallback.tsx [app-ssr] (ecmascript)");
;
;
;
;
// Use public folder paths for images in Next.js
const image_f6176e935d277229becc55033e75185fcd01783f = '/loan-assets/f6176e935d277229becc55033e75185fcd01783f.png';
const image_42e90d3b248fa1a196ccaab27084b6259874ed93 = '/loan-assets/42e90d3b248fa1a196ccaab27084b6259874ed93.png';
const image_4d94e7b5b4498e3f28fb0605e4cd62b31918e3ad = '/loan-assets/4d94e7b5b4498e3f28fb0605e4cd62b31918e3ad.png';
const image_dda93ea931a3583394aee4bee3a6fe2674ac5171 = '/loan-assets/dda93ea931a3583394aee4bee3a6fe2674ac5171.png';
const traditionalBangle = '/loan-assets/1fb3c1576e24931b905039038514e24995c20e6c.png';
const goldOrnament = '/loan-assets/614198e351b64b31c5db1b73d69cf45df0b3726c.png';
function Hero() {
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const scrollToCalculator = ()=>{
        document.getElementById('calculator')?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const scrollToApplication = ()=>{
        document.getElementById('application')?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative hero-section-optimized bg-white overflow-hidden flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full flex items-center justify-center px-6 lg:px-8 py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center justify-center relative w-full max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8 animate-fade-in-up w-full mx-auto text-center mt-[100px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `font-normal text-center hero-headline hero-headline-${language}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-line-1",
                                            children: t('hero.title-highlight')
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Hero.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/loan/components/Hero.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-line-2",
                                            children: t('hero.title-suffix')
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Hero.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/loan/components/Hero.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-line-3",
                                            children: t('hero.title-audience')
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Hero.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/loan/components/Hero.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/loan/components/Hero.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-6 max-w-2xl mx-auto mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 bg-black rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-3 h-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/components/Hero.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/Hero.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground group-hover:text-foreground transition-colors",
                                                children: t('hero.secure-process')
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/Hero.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/loan/components/Hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 group"
                                    }, void 0, false, {
                                        fileName: "[project]/app/loan/components/Hero.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 bg-black rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-3 h-3 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/loan/components/Hero.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/Hero.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground group-hover:text-foreground transition-colors",
                                                children: t('contact.available-24x7')
                                            }, void 0, false, {
                                                fileName: "[project]/app/loan/components/Hero.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/loan/components/Hero.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/loan/components/Hero.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/loan/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[40px] right-[210px] lg:right-[250px] w-48 h-48 animate-float scale-[0.6]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: traditionalBangle,
                            alt: "Traditional Indian Gold Bangle",
                            className: "w-full h-full object-contain rotate-[30deg] hover:scale-105 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/loan/components/Hero.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/loan/components/Hero.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[150px] right-[775px] lg:right-[815px] w-50 h-50 animate-float rotate-[30deg]",
                        style: {
                            animationDelay: '-3s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                            src: image_dda93ea931a3583394aee4bee3a6fe2674ac5171,
                            alt: "Indian Gold Ring",
                            className: "w-[70%] h-[70%] object-cover hover:scale-105 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/loan/components/Hero.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/loan/components/Hero.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[140px] left-[75px] lg:left-[115px] w-84 h-84 animate-float scale-[0.45] rotate-[-30deg]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$figma$2f$ImageWithFallback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                            src: image_f6176e935d277229becc55033e75185fcd01783f,
                            alt: "Indian Gold Chain",
                            className: "w-full h-full object-contain hover:scale-105 transition-transform duration-300 rotate-[60deg]"
                        }, void 0, false, {
                            fileName: "[project]/app/loan/components/Hero.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/loan/components/Hero.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/loan/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/loan/components/Hero.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/loan/components/Hero.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/loan/components/Trust.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trust",
    ()=>Trust
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
;
;
function Trust() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-8 pb-32 px-6 lg:px-8 bg-white trust-section-optimized",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center animate-fade-in-up",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full px-12 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center gap-8 lg:gap-12 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-medium text-foreground text-[64px] px-[36px] py-[0px] mx-[10px] my-[0px] tracking-[-0.02em]",
                                            children: "50,000"
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Trust.tsx",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground text-[16px] font-normal",
                                            children: t('hero.customers')
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Trust.tsx",
                                            lineNumber: 17,
                                            columnNumber: 155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/loan/components/Trust.tsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block w-px h-8 bg-border"
                                }, void 0, false, {
                                    fileName: "[project]/app/loan/components/Trust.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-medium text-foreground text-[64px] px-[36px] py-[0px] tracking-[-0.02em] whitespace-nowrap",
                                            children: "₹800 Cr"
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Trust.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground text-[16px] font-normal",
                                            children: "disbursed"
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Trust.tsx",
                                            lineNumber: 21,
                                            columnNumber: 155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/loan/components/Trust.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:block w-px h-8 bg-border"
                                }, void 0, false, {
                                    fileName: "[project]/app/loan/components/Trust.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-medium text-foreground text-[64px] px-[36px] py-[0px] tracking-[-0.02em] whitespace-nowrap",
                                            children: "1200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Trust.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground text-[16px] font-normal whitespace-nowrap",
                                            children: t('hero.villages-served')
                                        }, void 0, false, {
                                            fileName: "[project]/app/loan/components/Trust.tsx",
                                            lineNumber: 25,
                                            columnNumber: 152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/loan/components/Trust.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/loan/components/Trust.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/loan/components/Trust.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/loan/components/Trust.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-6 text-[16px] font-normanot-l not-italic no-underline font-normal",
                        children: '"You money needs and your jewels are our responsibility. Everyone around you have trusted us."'
                    }, void 0, false, {
                        fileName: "[project]/app/loan/components/Trust.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/loan/components/Trust.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/loan/components/Trust.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/loan/components/Trust.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/loan/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoanPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/contexts/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$MinimalHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/MinimalHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Trust$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/loan/components/Trust.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
'use client';
;
;
;
;
;
;
;
// Lazy load heavy components
const HowItWorks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/HowItWorks.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.HowItWorks
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/HowItWorks.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[400px]"
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 12,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const LoanCalculator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/LoanCalculator.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.LoanCalculator
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/LoanCalculator.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[500px]"
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 15,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const ApplicationForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/ApplicationForm.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.ApplicationForm
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/ApplicationForm.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[400px]"
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 18,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const Testimonials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/Testimonials.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.Testimonials
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/Testimonials.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[300px]"
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 21,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const Contact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/Contact.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.Contact
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/Contact.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[400px]"
        }, void 0, false, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 24,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/Footer.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.Footer
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/Footer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
const SectionNavigator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/app/loan/components/SectionNavigator.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.SectionNavigator
        })), {
    loadableGenerated: {
        modules: [
            "[project]/app/loan/components/SectionNavigator.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
function LoanPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$MinimalHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MinimalHeader"], {}, void 0, false, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "hero",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "trust",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loan$2f$components$2f$Trust$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trust"], {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "calculator",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoanCalculator, {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "how-it-works",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HowItWorks, {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "application",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplicationForm, {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "testimonials",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                                fileName: "[project]/app/loan/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/loan/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionNavigator, {}, void 0, false, {
                    fileName: "[project]/app/loan/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/loan/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/loan/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_loan_7150ffda._.js.map