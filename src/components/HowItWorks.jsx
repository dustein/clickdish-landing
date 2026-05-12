import React from 'react';

const HowItWorks = () => {
    return (
        <section id="como-funciona" className="py-16 sm:py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-5xl font-extrabold text-center text-clickdish-purple mb-8 sm:mb-16 drop-shadow-sm">Como Funciona o ClickDish</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">

                    <div className="bg-white p-4 sm:p-10 rounded-[2rem] border border-gray-100 hover:border-clickdish-green transition-all shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(76,175,80,0.15)] hover:-translate-y-2 duration-300">

                        <div className="bg-gradient-to-br from-green-400 to-clickdish-green w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-8 text-white text-4xl shadow-[0_10px_25px_rgba(76,175,80,0.4)] transform transition hover:rotate-12">📸</div>

                        <h3 className="text-lg sm:text-2xl font-extrabold mb-2 sm:mb-4 text-clickdish-green">1. Click</h3>
                        <p className="text-gray-600 font-medium text-xs sm:text-lg">Tire uma foto rápida da sua refeição com seu smartphone.</p>
                    </div>

                    <div className="bg-white p-4 sm:p-10 rounded-[2rem] border border-gray-100 hover:border-clickdish-purple transition-all shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(171,71,188,0.15)] hover:-translate-y-2 duration-300 delay-100">
                        <div className="bg-gradient-to-br from-purple-400 to-clickdish-purple w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-8 text-white text-4xl shadow-[0_10px_25px_rgba(171,71,188,0.4)] transform transition hover:scale-110">🧠</div>
                        <h3 className="text-lg sm:text-2xl font-extrabold mb-2 sm:mb-4 text-clickdish-purple">2. Dish</h3>
                        <p className="text-gray-600 font-medium text-xs sm:text-lg">Nossa IA analisa os alimentos e gera um card personalizado em segundos.</p>
                    </div>
                    <div className="bg-white p-4 sm:p-10 rounded-[2rem] border border-gray-100 hover:border-clickdish-magenta transition-all shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(236,64,122,0.15)] hover:-translate-y-2 duration-300 delay-200">

                        <div className="bg-gradient-to-br from-pink-400 to-clickdish-magenta w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-8 text-white text-4xl shadow-[0_10px_25px_rgba(236,64,122,0.4)] transform transition hover:-rotate-12">🚀</div>
                        <h3 className="text-lg sm:text-2xl font-extrabold mb-2 sm:mb-4 text-clickdish-magenta">3. Share</h3>
                        <p className="text-gray-600 font-medium text-xs sm:text-lg">Compartilhe no Instagram ou outras redes e orgulhe-se da sua rotina saudável.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
