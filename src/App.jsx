import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
