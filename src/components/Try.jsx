import React from 'react';

const Try = () => {
    return (
        <section id="experimente" className="py-10 md:py-24 my-4 bg-gradient-to-br from-clickdish-purple via-clickdish-magenta to-clickdish-orange text-white relative overflow-hidden">
            {/* Background elements for rich aesthetics */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-clickdish-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in-up">
                    Pronto para transformar sua rotina?
                </h2>
                <p className="text-lg md:text-xl text-clickdish-cream mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    Junte-se a milhares de pessoas que estão melhorando sua alimentação com um clique. É simples, rápido e divertido!
                </p>
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <a 
                        href="https://app.clickdish.fit" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-clickdish-magenta px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:bg-clickdish-cream hover:text-clickdish-orange transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                    >
                        Teste sem custo ! 🚀
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Try;
