import React, { useState } from 'react';
import logo from '../assets/logotipo-v1.webp';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50 animate-fade-in-down">
            <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <a href="/">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto" />
                        <span className="text-3xl sm:text-4xl font-bold text-purple-800">Click
                        <span className="text-clickdish-magenta">Dish</span>
                        </span>
                    </div>
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-sm">
                    <a href="#como-funciona" className="text-clickdish-dark hover:text-clickdish-magenta font-medium transition-colors">Como Funciona</a>
                    <a href="#precos" className="text-clickdish-dark hover:text-clickdish-green font-medium transition-colors">Preços</a>
                    <a href="#sobre" className="text-clickdish-dark hover:text-clickdish-purple font-medium transition-colors">Sobre</a>
                    <a href="https://app.clickdish.fit/" className="bg-green-800 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-900 transition transform hover:-translate-y-0.5">App ClickDish</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-clickdish-dark hover:text-clickdish-purple focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
                        <a 
                            href="#como-funciona" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-clickdish-dark hover:text-clickdish-magenta hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Como Funciona
                        </a>
                        <a 
                            href="#precos" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-clickdish-dark hover:text-clickdish-green hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Preços
                        </a>
                        <a 
                            href="#sobre" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-clickdish-dark hover:text-clickdish-purple hover:bg-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sobre
                        </a>
                        <div className="pt-2">
                            <a 
                                href="https://app.clickdish.fit" 
                                className="block w-full text-center bg-clickdish-purple text-white px-5 py-3 rounded-full font-semibold hover:bg-clickdish-magenta transition"
                            >
                                Acessar App
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
