import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RealCases from './components/RealCases';
import Pricing from './components/Pricing';
import Sobre from './components/Sobre';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-clickdish-dark font-sans antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <RealCases />
      <Pricing />
      <Sobre />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
