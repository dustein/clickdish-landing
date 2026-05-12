import React from 'react';

import prato01Original from '../assets/mock-prato-01-original.jpg';
import prato01Card from '../assets/mock-prato-01-card.jpg';
import prato02Original from '../assets/mock-prato-02-original.jpg';
import prato02App from '../assets/mock-prato-02-app.jpg';
import prato02Card from '../assets/mock-prato-02-card.jpg';
import prato05Original from '../assets/mock-prato-05-original.jpg';
import prato05Card from '../assets/mock-prato-05-card.jpg';

const ArrowSeparator = () => (
  <div className="z-20 flex items-center justify-center transform rotate-90 md:rotate-0 text-emerald-400 drop-shadow-md w-8 h-24 md:w-16 md:h-32">
    <svg className="w-24 h-24 md:w-36 md:h-36 overflow-visible absolute hover:scale-110 transition-transform duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="animate-[pulse_3s_ease-in-out_infinite]">
        {/* Main curve */}
        <path d="M 10 90 Q 10 40, 80 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* Solid arrowhead */}
        <path d="M 65 20 L 95 40 L 65 60 Z" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        
        {/* Middle swoosh */}
        <path d="M 25 95 Q 25 55, 70 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
        
        {/* Inner swoosh */}
        <path d="M 40 100 Q 40 70, 55 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  </div>
);

const CaseImage = ({ src, alt, label, rotateClass = "rotate-2", zIndex="z-10" }) => (
  <div className={`relative flex flex-col items-center group w-[80%] max-w-[260px] md:w-56 lg:w-64 transform ${rotateClass} transition-all duration-500 hover:scale-105 hover:z-30 ${zIndex}`}>
    {/* Polaroid Frame */}
    <div className="bg-white p-3 pb-14 md:p-4 md:pb-16 rounded-sm shadow-xl group-hover:shadow-2xl border border-gray-200 w-full relative before:absolute before:inset-0 before:shadow-[inset_0_0_20px_rgba(0,0,0,0.03)]">
      <img src={src} alt={alt} className="w-full h-auto object-cover rounded-sm shadow-inner bg-gray-100" />
      {/* Label */}
      <span className="absolute bottom-4 left-0 right-0 text-center text-gray-600 font-medium text-sm md:text-base">
        {label}
      </span>
    </div>
  </div>
);

const RealCases = () => {
  return (
    <section className="py-8 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Veja a <span className="text-emerald-500">Mágica</span> Acontecer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
            Faça seus cards compartilháveis para qualquer rede social.
          </p>
        </div>

        {/* Sequences Container */}
        <div className="space-y-8 md:space-y-12">
          
          {/* Sequence 1 */}
          <div className="relative group/row max-w-4xl mx-auto">

            <div className="flex flex-col md:flex-row items-center justify-center gap-0 p-6 md:p-4 rounded-3xl transition-all duration-500 hover:bg-white/80 hover:backdrop-blur-sm hover:shadow-xl border border-transparent bg-amber-50 hover:border-gray-100/50">
              <CaseImage src={prato01Original} alt="Prato original 1" label="Foto Original" rotateClass="-rotate-2" />
              <ArrowSeparator />
              <CaseImage src={prato01Card} alt="Card final 1" label="Análise da IA" rotateClass="rotate-2" />
            </div>
          </div>

          {/* Sequence 2 */}
          <div className="relative group/row max-w-5xl mx-auto">

            <div className="flex flex-col md:flex-row items-center justify-center gap-0 p-6 md:p-4 rounded-3xl transition-all duration-500 hover:bg-white/80 hover:backdrop-blur-sm hover:shadow-xl border border-transparent bg-green-50 hover:border-gray-100/50">
              <CaseImage src={prato02Original} alt="Prato original 2" label="Foto Original" rotateClass="rotate-2" />
              <ArrowSeparator />
              <CaseImage src={prato02App} alt="Análise IA 2" label="Análise IA" rotateClass="-rotate-1" />
              <ArrowSeparator />
              <CaseImage src={prato02Card} alt="Card final 2" label="Card Pronto" rotateClass="rotate-2" />
            </div>
          </div>

          {/* Sequence 3 */}
          <div className="relative group/row max-w-4xl mx-auto">

            <div className="flex flex-col md:flex-row items-center justify-center gap-0 p-6 md:p-4 rounded-3xl transition-all duration-500 hover:bg-white/80 hover:backdrop-blur-sm hover:shadow-xl border border-transparent bg-orange-50 hover:border-gray-100/50">
              <CaseImage src={prato05Original} alt="Prato original 3" label="Foto Original" rotateClass="-rotate-2" />
              <ArrowSeparator />
              <CaseImage src={prato05Card} alt="Card final 3" label="Card Pronto" rotateClass="rotate-2" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RealCases;
