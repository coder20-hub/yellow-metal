import { useLanguage } from "../contexts/LanguageContext";

export function CallToAction() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-accent/10 to-orange-500/10 border border-accent/20 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground">Calculate your loan amount in seconds</p>
            </div>
            <button
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary whitespace-nowrap"
            >
              Try Calculator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}