import React from 'react';
import { Camera, Brain, LayoutTemplate, History, UserPlus, Zap, Flame, ShieldCheck } from 'lucide-react';

const Sobre = () => {
    return (
        <section id="sobre" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 -right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-40 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-clickdish-dark mb-4 drop-shadow-sm">
                        Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-clickdish-magenta">Aplicativo</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-md sm:text-lg">
                        Entenda como o ClickDish transforma a sua rotina alimentar com tecnologia avançada e descubra as regras de uso da plataforma.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    
                    {/* Funcionalidades */}
                    <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-lg">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Funcionalidades</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-gray-50 p-2.5 rounded-xl h-fit border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <Camera className="w-5 h-5 text-clickdish-purple" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Análise por Foto</h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">A foto que você envia para o ClickDish é tratada e analisada por nossa inteligência artificial especialmente treinada para identificar os alimentos em seu prato e estimar as calorias de cada um. Nossa IA também vai dar dicas de como seu prato poderia ficar ainda mais saudável.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-gray-50 p-2.5 rounded-xl h-fit border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <LayoutTemplate className="w-5 h-5 text-clickdish-magenta" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Cards para Instagram</h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Nossa IA é bem humorada, e vai bolar um título divertido a altura do seu prato, e uma descrição descontraída para animar os visitantes do seu feed em sua rede social preferida.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-gray-50 p-2.5 rounded-xl h-fit border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                                    <History className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Histórico de Refeições</h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Acompanhe sua consistência. As informações dos pratos analisados ficam salvos e são exibidos no seu painel privativo, para você consultar quando quiser.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Regras de Uso */}
                    <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-[2rem] shadow-xl border border-gray-700 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
                                <ShieldCheck className="w-6 h-6 text-gray-900" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Regras e Limites</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-gray-800 p-2.5 rounded-xl h-fit border border-gray-700 group-hover:bg-gray-700 transition-colors duration-300">
                                    <UserPlus className="w-5 h-5 text-gray-300" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-100 mb-1">Cadastro Gratuito</h4>
                                    <p className="text-gray-50 text-xs sm:text-sm leading-relaxed">Seus primeiros 2 cards são gratuitos para sua diversão. Depois, é só escolher o tipo de assinatura que mais se adequa ao seu momento, e iniciar sua jornada social no caminho da alimentação saudável.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-gray-800 p-2.5 rounded-xl h-fit border border-gray-700 group-hover:bg-gray-700 transition-colors duration-300">
                                    <Zap className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-100 mb-1">Plano Mensal x Anual</h4>
                                    <p className="text-gray-50 text-xs sm:text-sm leading-relaxed">O plano mensal permite analisar até 3 pratos por dia (não acumulativos).</p>
                                    <p className="text-gray-50 text-xs sm:text-sm leading-relaxed">A assinatura anual disponibiliza até 4 pratos analisados por dia.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="mt-1 bg-gray-800 p-2.5 rounded-xl h-fit border border-gray-700 group-hover:bg-gray-700 transition-colors duration-300">
                                    <Flame className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-100 mb-1">Desenvolvimento Constante</h4>
                                    <p className="text-gray-50 text-xs sm:text-sm leading-relaxed">O ClickDish está em constante evolução, e novas funcionalidades implementadas poderão ser desfrutadas por quem já é assinante sem alteração do preço até a data de renovação da respectiva assinatura.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
