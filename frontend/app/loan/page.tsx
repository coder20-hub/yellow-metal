'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hero } from "./components/Hero";
import { Trust } from "./components/Trust";
import { HowItWorks } from "./components/HowItWorks";
import { LoanCalculator } from "./components/LoanCalculator";
import { ApplicationForm } from "./components/ApplicationForm";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MinimalHeader } from "./components/MinimalHeader";
import { SectionNavigator } from "./components/SectionNavigator";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./loan.css";

export default function LoanPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <MinimalHeader />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="trust">
            <Trust />
          </section>
          <section id="calculator">
            <LoanCalculator />
          </section>
          <section id="how-it-works">
            <HowItWorks />
          </section>
          <section id="application">
            <ApplicationForm />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <SectionNavigator />
      </div>
    </LanguageProvider>
  );
}
