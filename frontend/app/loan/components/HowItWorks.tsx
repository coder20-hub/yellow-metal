import { useLanguage } from "../contexts/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: "Visit branch",
      description: "Bring your gold jewelry"
    },
    {
      number: "02", 
      title: "Value gold",
      description: "Expert evaluation"
    },
    {
      number: "03",
      title: "Money in account",
      description: "Instant transfer"
    }
  ];

  return (
    <section className="pt-16 pb-32 px-6 lg:px-8 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-16 bottom-16 w-px bg-gray-200 hidden sm:block"></div>
            
            {/* Horizontal Timeline Line - Mobile */}
            <div className="absolute top-8 left-16 right-16 h-px bg-gray-200 sm:hidden"></div>

            {/* Steps */}
            <div className="space-y-16 sm:space-y-20">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-sm">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1 pt-2">
                    <h3 className="text-[32px] font-light text-gray-900 mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Journey Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block absolute left-8 top-20 w-px h-12 bg-gradient-to-b from-gray-400 to-gray-200">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}