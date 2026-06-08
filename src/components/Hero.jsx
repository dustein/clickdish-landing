"use client";

import React, { useState, useRef } from 'react';
import { LeafyGreen, HopOff, CookingPot, Wheat } from 'lucide-react';
import pratoOriginal from '../assets/hero-prato.png';
import pratoCard from '../assets/hero-card.png';

const Hero = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (event) => {
        if (!containerRef.current) return;
        
        const containerRect = containerRef.current.getBoundingClientRect();
        
        const clientX = 'touches' in event 
            ? event.touches[0].clientX 
            : event.clientX;
            
        const x = clientX - containerRect.left;
        const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
        
        setSliderPos(percentage);
    };

    return (
        <section className="bg-gradient-to-br from-emerald-400 via-teal-600 to-slate-900 py-1 sm:py-32 relative overflow-hidden">
            
            {/* Mesh Gradient Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-sky-400 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-teal-400 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>

            {/* Decorative Floating Icons */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                <LeafyGreen 
                    className="absolute top-[2%] left-[2%] md:top-[10%] md:left-[10%] lg:left-[2%] lg:top-[5%] w-20 h-20 md:w-40 md:h-40 text-emerald-950/30 rotate-[-15deg] mix-blend-overlay animate-float blur-[2px]" 
                    style={{ animationDelay: '0.5s' }} 
                />
                <HopOff 
                    className="absolute bottom-[5%] left-[2%] md:bottom-[15%] md:left-[5%] lg:left-[2%] lg:bottom-[10%] w-24 h-24 md:w-[200px] md:h-[200px] text-teal-950/30 rotate-[10deg] mix-blend-overlay animate-float blur-[3px]" 
                    style={{ animationDelay: '1.2s' }} 
                />
                <CookingPot 
                    className="absolute top-[8%] right-[2%] md:top-[20%] md:right-[10%] lg:right-[2%] lg:top-[10%] w-20 h-20 md:w-[150px] md:h-[150px] text-slate-900/30 rotate-[30deg] mix-blend-overlay animate-float blur-[2px]" 
                    style={{ animationDelay: '2.5s' }} 
                />
                <Wheat 
                    className="absolute bottom-[5%] right-[2%] md:bottom-[15%] md:right-[10%] lg:right-[2%] lg:bottom-[5%] w-24 h-24 md:w-[180px] md:h-[180px] text-emerald-900/30 rotate-[-25deg] mix-blend-overlay animate-float blur-sm" 
                    style={{ animationDelay: '0.8s' }} 
                />
            </div>

            <div className="container mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center md:items-stretch relative z-10 gap-8 lg:gap-0">
                <div className="md:w-1/2 text-center md:text-left mb-16 md:mb-0 animate-fade-in-up relative z-10 w-full">
                    <div className="sm:bg-white/10 sm:backdrop-blur-md sm:border sm:border-white/20 rounded-3xl py-4 sm:p-10 sm:shadow-2xl relative h-full flex flex-col justify-center">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 break-words drop-shadow-lg">
                            Sua dieta nunca foi tão <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400 drop-shadow-md">instagramável.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0 font-medium">
                            Transforme fotos simples dos seus pratos em <span className="text-teal-700 font-bold text-xl bg-white py-1 px-1">cards épicos</span> com nossa <span className="text-yellow-300 font-bold text-xl">inteligência artificial</span>. Descubra calorias, ganhe nomes criativos e turbine seu feed.
                        </p>
                        <div className="flex justify-center">
                            <a href="https://app.clickdish.fit" className="bg-white text-slate-900 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold text-base sm:text-xl hover:bg-gray-100 shadow-[0_10px_30px_rgba(255,255,255,0.2)] transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center">
                                COMECE AGORA GRÁTIS !
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {/* Glassmorphism Mockup Container */}
                    <div className="bg-white/10 backdrop-blur-xl sm:p-3 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative z-10 border border-white/20 h-full w-full max-w-[400px] flex flex-col justify-center mb-16">
                        {/* Mockup Screen */}
                        <div className="w-full h-full mx-auto">
                            <div className="bg-white rounded-3xl p-4 sm:p-2 shadow-xl border border-slate-100 h-full flex flex-col">
                                <div className="flex justify-between items-center mb-4 px-2 shrink-0">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 m-auto">Arraste para comparar</span>
                                    <div className="flex gap-2">
                                        {/* <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">ORIGINAL</span>
                                        <span className="bg-indigo-100 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded">ANALISADO</span> */}
                                    </div>
                                </div>

                                <div 
                                    ref={containerRef}
                                    className="relative w-full aspect-[3/4] md:aspect-auto md:flex-1 rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none bg-slate-100"
                                    onMouseMove={handleMove}
                                    onTouchMove={handleMove}
                                >
                                    {/* After Image (The Card) */}
                                    <img 
                                        src={pratoCard.src}
                                        alt="Prato Analisado"
                                        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                                        draggable="false"
                                    />

                                    {/* Before Image (The Original) */}
                                    <div 
                                        className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white shadow-2xl bg-slate-100"
                                        style={{ width: `${sliderPos}%` }}
                                    >
                                        <img 
                                            src={pratoOriginal.src} 
                                            alt="Foto Original"
                                            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none rounded-xl"
                                            style={{ width: `${sliderPos > 0 ? 10000 / sliderPos : 10000}%` }}
                                            draggable="false"
                                        />

                                    </div>

                                    {/* Slider Handle */}
                                    <div 
                                        className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center"
                                        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
                                    >
                                        <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-indigo-600">
                                            <div className="flex gap-0.5">
                                                <div className="w-1 h-3 bg-indigo-200 rounded-full"></div>
                                                <div className="w-1 h-5 bg-indigo-600 rounded-full"></div>
                                                <div className="w-1 h-3 bg-indigo-200 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
