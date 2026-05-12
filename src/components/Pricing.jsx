import React from 'react';

const Pricing = () => {
    return (
        <section id="precos" className="py-8 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-150">
            <div className="container mx-auto px-6 relative">
                <h2 className="text-2xl md:text-5xl font-extrabold text-center text-clickdish-purple mb-8 sm:mb-24 drop-shadow-sm">
                    Escolha Seu Plano de <span className="text-clickdish-green">Card </span><span className="text-purple-800">Click</span><span className="text-clickdish-magenta">Dish</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    
                    {/* Basic Plan */}
                    <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                        
                        <div className="flex justify-between items-center mb-1 sm:mb-6">
                            <h3 className="text-xl sm:text-3xl font-extrabold text-clickdish-green">Plano Básico</h3>
                            <span className="text-2xl sm:text-4xl filter drop-shadow-md">🥗</span>
                        </div>
                        <p className="text-gray-600 mb-3 sm:mb-6 font-medium text-sm sm:text-lg">Pra buscar o foco na consistência.</p>
                        <div className="text-2xl sm:text-5xl font-extrabold text-clickdish-dark mb-4 sm:mb-10 tracking-tight">R$ 7,90 <span className="text-base sm:text-lg text-gray-400 font-medium tracking-normal">/mês</span></div>
                        
                        <ul className="space-y-2 sm:space-y-4 text-gray-700 mb-12 flex-grow font-medium">
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span><span className='text-sm'>3 análises de pratos por dia.  </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span><span className='text-sm'>Nomes e resumos divertidos.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span><    span className='text-sm'>Histórico completo de refeições.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span><span className='text-sm'>Design padrão de cards Premium.</span>
                            </li>
                        </ul>
                        <a href="https://app.clickdish.fit/" className="block w-full text-center border-2 border-clickdish-green text-clickdish-green px-6 py-2 sm:py-3 rounded-full font-bold text-md sm:text-lg hover:bg-clickdish-green hover:text-white transition transform hover:-translate-y-1 shadow-sm">Assine no App</a>
                    </div>
                    
                    {/* Pro Plan */}
                    <div className="bg-gradient-to-b from-gray-900 via-[#1e0a3c] to-black pt-10 p-6 sm:p-10 rounded-[2.5rem] border border-yellow-400/50 shadow-[0_10px_50px_rgba(250,204,21,0.15)] relative flex flex-col transform md:scale-105 hover:shadow-[0_20px_70px_rgba(250,204,21,0.3)] hover:scale-[1.08] transition-all duration-300">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 sm:px-6 py-1.5 rounded-full font-extrabold text-xs sm:text-sm tracking-wide w-[90%] sm:w-auto text-center shadow-[0_4px_14px_0_rgba(251,191,36,0.5)]">
                            MAIS POPULAR & ECONOMIA 30% 🔥
                        </div>
                        <div className="flex justify-between items-center mb-1 sm:mb-6">
                            <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Plano Anual</h3>
                            <span className="text-2xl sm:text-4xl filter drop-shadow-lg">💪</span>
                        </div>
                        <p className="text-gray-300 mb-1 sm:mb-6 font-medium text-sm sm:text-lg">Para quem já tem comprometimento e persistência!</p>
                        <div className="text-2xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">R$ 67,90 <span className="text-base sm:text-lg text-gray-400 font-medium tracking-normal">/ano</span></div>
                        <p className="text-yellow-400 font-bold mb-8 text-md sm:text-lg">(Apenas R$ 5,65/mês)</p>
                        <ul className="space-y-2 sm:space-y-4 text-white/90 mb-12 flex-grow font-medium">
                            <li className="flex items-center text-yellow-400">
                                <span className="text-md sm:text-xl mr-3 drop-shadow-sm">🔥</span> <span className="text-white font-bold text-sm sm:text-lg">4 análises de pratos por dia.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span> <span className="text-white font-bold text-sm sm:text-lg"></span><span className='text-sm'>Nomes e resumos divertidos.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span> <span className='text-sm'>Histórico completo de refeições.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-clickdish-green text-md sm:text-xl mr-3 drop-shadow-sm">✅</span> <span className='text-sm'>Design padrão de cards Premium.</span>
                            </li>
                        </ul>
                        <a href="https://app.clickdish.fit" className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 sm:py-4 rounded-full font-extrabold text-md sm:text-lg hover:from-yellow-300 hover:to-orange-400 transition transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(251,191,36,0.3)]">Assine no App</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
