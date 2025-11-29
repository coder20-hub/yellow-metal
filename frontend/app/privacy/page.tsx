'use client';

import Link from 'next/link';
import Footer from '@/components/footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Simple Header with Logo Only */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[80px]">
            <Link href="/" className="flex items-center">
              <img
                src="/Container.png"
                alt="Yellow Metal"
                className="h-20 md:h-24 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.jpg';
                }}
              />
            </Link>
          </div>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Date */}
        <div className="mb-4">
          <p className="text-gray-600">January 1, 2021</p>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">Author, Legal Team</p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy shall be a legal binding agreement between you and Yellow Metal (the "Company").
            </p>
          </div>

          {/* Paragraphs 1-7 */}
          <div className="space-y-6 pt-8">
            <p className="text-gray-700 leading-relaxed">
              <strong>1.</strong> This Privacy Policy is an electronic record in the form of an electronic contract formed under the Information Technology Act, 2000 and rules made thereunder and the amended provisions pertaining to electronic documents / records in various statutes as amended by the Information Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital signature.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>2.</strong> This Privacy Policy is published in accordance with the provisions of Rule 3(1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and terms and conditions for access or usage of the website https://www.yellowmetal.co/.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>3.</strong> The website https://www.yellowmetal.co/ ("Website") is owned and operated by Yellow Fintech Private Limited ("Company", "We", "Us", "Our"), a company incorporated under the Companies Act, 2013 with its registered office at #677, 27th main, 13th cross, sector 1, HSR Layout, Bangalore 560102, Karnataka, India.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>4.</strong> "Yellow Metal" (hereinafter referred to as "Our", "Us", "We", "Website", "Site") is a marketplace for loans against gold.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>5.</strong> "You", "Your", or "User" shall mean any natural or legal person who has agreed to become a buyer on the Website or mobile application by providing registration data while registering on the Website or mobile application as a registered user using the computer systems.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>6.</strong> By accessing or using this Website or mobile application, You agree to be bound by this Privacy Policy. Providing any information through the Website or mobile application is completely voluntary. You have the right to withdraw Your consent at any point, provided such withdrawal of the consent is intimated to us in writing through an email at contact@yellowmetal.co. In case you do not provide Your information or consent for usage of Your information, we reserve the right to not provide You any services through the Website or mobile application. If You wish to withdraw Your consent or delete Your information with Us, You may send an email to Us at contact@yellowmetal.co requesting the same. Please note that it may take up to 7 days to process Your request. Providing information is a choice. You can choose not to provide the information. In such an event, You can still access and browse some sections of the Website or mobile application. You may not be able to use some of the features on the Website or mobile application, including processing of Your loan application. If You wish to remove Your name, contact and personal information from our database, You can send an email to contact@yellowmetal.co.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>7.</strong> The Company reserves the right to change or modify this Privacy Policy without any prior notification or intimation to the users. Any change or modification in the Privacy Policy will be published on the Website and such changes or modifications shall automatically become effective immediately after they are posted on the Website.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>8.</strong> Please review the privacy policy from time-to-time. Your continued use of the website and/or mobile application following the posting of changes and/or modifications will constitute your acceptance of any revised privacy policy. The company retains the right at any time to deny or suspend access to all or part of the website and/or mobile application to anyone who the company believes has violated any condition of this privacy policy.
            </p>
          </div>

          {/* Section A: Personal Identification Information */}
          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">A. Personal Identification Information</h2>
            
            <p className="text-gray-700 leading-relaxed">
              <strong>1.</strong> We may collect personal identification information from Users in a variety of ways, including, but not limited to, when users visit our site, fill out a sign-up/registration form and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number, etc. We will collect personal identification information from users only if they voluntarily submit such information to us. You agree to provide true, accurate, current and complete information about yourself as prompted by the registration form. If You provide information that is untrue, inaccurate, not current or incomplete, or We have reasonable grounds to suspect that You have provided such information, then Company may (in addition to any other rights or remedies available to us) refuse registration, suspend access to all current or future use of the Website or mobile application and the Services (or any portion thereof) permanently.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>2.</strong> Users who are competent to contract under the Indian Contract Act, 1872, are eligible to register themselves as members on the Website or mobile application and can avail Our Newsletter Services. Persons who are competent to contract would mean and include every person who, (i) has completed 18 years of age (as per The Indian Majority Act, 1875); (ii) is of sound mind; and (iii) not disqualified from contracting by any law for the time being in force in India.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              <li>You may unsubscribe from the Newsletter by opting-out of it anytime or by reaching out to the Company on contact@yellowmetal.co</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              <strong>3.</strong> We will not sell, share or rent Your personal information to any third party or use Your email address/mobile number for unsolicited emails and/or SMS. Any emails and/or SMS sent by Us will only be in connection with the provision of agreed services & products and this Privacy Policy. To carry out general marketing we would be sending out emails to users registered on Our Website and/or mobile application (or by any means and in any media, including, but not limited to, on Our Website and/or mobile application or through Our merchants or in advertisements/marketing campaigns/any form of audio or visual media or websites).
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>4.</strong> You hereby consent to the collection, storage, use, disclosure, transfer, processing of the personal information for the purposes set out herein. We may disclose your personal information in the circumstances set out below and you hereby consent to the same to be shared with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Any third-party service provider to whom disclosure is necessary to enable us to provide you with the services which you wish to access on or through the website or mobile application;</li>
              <li>Any person/entity to whom disclosure is necessary for accordance with applicable law;</li>
              <li>Any government or statutory authority or court of law or judicial forum to whom disclosure is necessary for accordance with applicable law;</li>
              <li>In circumstances we believe necessary or appropriate to respond to valid claims and legal process, to protect the property and rights of the Company, to protect the safety of the public or any person or user, or to prevent or stop any illegal, unethical or legally actionable activity;</li>
              <li>Any person/entity to whom disclosure is necessary to enable us to enforce our terms and conditions of use of the website or mobile application.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              <strong>5.</strong> We may disclose transaction-based data excluding personal identification like name, email ID, phone number, age, gender to third parties for research, development and market analysis related to mobile application transactions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>6.</strong> We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of Your personal information, username, password, transaction information and data stored on Our Site. We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>7.</strong> There is no absolute security on the online/internet sphere. While we take all necessary steps to protect Your personal data, You are strongly advised not to disclose any sensitive personal data or information on the Website or mobile application. Internet transmission is not completely secure and we cannot guarantee security of data during transmission to Our Website or mobile application. Any transmission of data is at Your own risk. We cannot assume any responsibility or liability for any disclosure of information due to errors in transmission, unauthorized third party access or other acts of third parties, or acts or omissions beyond our reasonable control.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>8.</strong> Transactions on the Website or mobile application are secure and protected. Any information entered by the User when transacting on the Website or mobile application is encrypted to protect it against unintentional disclosure to third parties.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>9.</strong> The Company will never ask You to share Your sensitive personal data or information. You must never share Your sensitive personal data or information with the Company or any person acting on behalf of the Company. Any disclosure of sensitive personal data or information by You shall be at Your sole risk and We shall not be liable (including but not limited to the directors, key managerial personnel, officers and employees of the Company) for any losses or damages that may arise to You on account of such disclosure. You acknowledge that the Company or any other person acting on behalf of the Company shall not be responsible for the authenticity of the personal information or sensitive personal data or information supplied by the User to the Company or any other person acting on behalf of the Company.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>10.</strong> You must not disclose the following information on the Website or mobile application:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>a. Passwords</li>
              <li>b. Physical, physiological and mental health conditions</li>
              <li>c. Sexual orientation</li>
              <li>d. Medical records and history</li>
              <li>e. Biometric Information</li>
              <li>f. National identification numbers</li>
              <li>g. And such other sensitive personal data or information.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              <strong>11.</strong> Information that is freely available or accessible in public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as personal information or sensitive personal data or information for the purposes of this Privacy Policy. In relation to such information, we are under no obligation to protect such publicly available information.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>12.</strong> We understand clearly that You and Your Personal Information is one of Our most important assets. We store and process Your Information including any sensitive financial information collected (as defined under the Information Technology Act, 2000), if any, on computers that may be protected by physical as well as reasonable technological security measures and procedures in accordance with Information Technology Act 2000 and rules there under. We are committed to protecting Your privacy. Identity theft and the practice currently known as "phishing" are of great concern to Us. Safeguarding information to help protect You from identity theft is a top priority. We do not and will not, at any time, request Your credit card information, debit card information, financial PIN numbers, or passwords in an unsolicited e-mail or telephone call or SMS. Any such request shall be considered fraudulent and shall be reported to the appropriate authorities.
            </p>
          </div>

          {/* Section B: Cookies */}
          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">B. Cookies</h2>
            
            <p className="text-gray-700 leading-relaxed">
              <strong>1.</strong> Most web browsers are set to accept cookies by default. If You prefer, You can usually choose to set Your browser to remove or reject browser cookies. However, If You do not want cookies installed, You may change the setting of Your browser to refuse cookies. Please note that if cookies are refused, You may not be able to use all the features on the Website.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>2.</strong> Our Website and/or third parties may use "cookies" and other similar "tracking technologies" to collect information automatically as You browse the Website and the internet.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>3.</strong> By visiting the Website, whether as a registered user or otherwise, You acknowledge, understand and hereby consent to such collection, storage and use, and agree that the laws for the protection of information as may be applicable in India.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>4.</strong> If You do not consent to any part of the terms of this Privacy Policy or wish to withdraw Your consent to processing of Your information, You may stop using the Website and request Us to remove Your information from Our records by writing to Us at contact@yellowmetal.co.
            </p>
          </div>

          {/* Section C: Dispute Resolution & Jurisdiction */}
          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">C. Dispute Resolution & Jurisdiction</h2>
            
            <p className="text-gray-700 leading-relaxed">
              <strong>1.</strong> In case of any dispute between the parties, if the parties fail to amicably resolve the dispute through mediation, the dispute shall be referred to arbitration by a sole arbitrator to be appointed by the Company and the award passed by such arbitrator shall be valid and binding on both parties. The parties shall bear their own costs for the mediation/arbitration proceedings. However, the sole arbitrator may, in his/her sole discretion, direct either party to bear the entire cost of the proceedings. The arbitration proceedings shall be conducted in English language. The seat of Arbitration shall be at Bangalore, Karnataka, India.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong>2.</strong> The parties expressly agree that the Terms, Policy and any other agreements entered into pursuant to the Terms shall be governed by the laws, rules and regulations of India, and that the Courts at Bangalore, Karnataka, India shall have exclusive jurisdiction over any disputes arising between the parties.
            </p>
          </div>

          {/* Section D: Grievance Officer */}
          <div className="space-y-6 pt-8">
            <h2 className="text-3xl font-bold text-gray-900">D. Grievance Officer</h2>
            
            <p className="text-gray-700 leading-relaxed">
              In accordance with the Information Technology Act 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:
            </p>

            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p><strong>Rahul Boggaram</strong></p>
              <p>contact@yellowmetal.co</p>
              <p>Grievances will be redressed within 7 days.</p>
            </div>
          </div>

          {/* Closing Remarks */}
          <div className="space-y-4 pt-8 border-t border-gray-200 mt-12">
            <p className="text-gray-700 leading-relaxed">
              Thank you for using our services. We hope they are helpful, informative, and convenient. Should You have any questions regarding the Terms and Conditions of this Privacy Policy, please contact Us by email at contact@yellowmetal.co.
            </p>

            <div className="space-y-3 text-gray-700 pt-4">
              <p className="font-semibold text-lg">Yellow Fintech Pvt Ltd</p>
              <p>#677, 27th main, 13th cross, sector 1, HSR Layout, Bangalore 560102</p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-red-600">📞</span>
                  <a href="tel:9090976076" className="text-gray-700 hover:text-gray-900">90909 76076</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl text-red-600">✉️</span>
                  <a href="mailto:contact@yellowmetal.co" className="text-gray-700 hover:text-gray-900">contact@yellowmetal.co</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

