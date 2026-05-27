import logo from '../assets/logotipo-v1.webp';

const Footer = () => {
    return (
        <footer id="sobre" className="bg-green-900 text-white py-16 mt-24 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-clickdish-magenta opacity-10 rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-clickdish-green opacity-10 rounded-full"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-6">
                    <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto" />
                    <span className="text-3xl sm:text-4xl font-bold text-purple-500">Click<span className="text-clickdish-magenta">Dish</span></span>
                </div>
                <p className="text-gray-300 text-2xl md:text-4xl mx-auto mb-10 font-medium">Transformando a rotina saudável em um lifestyle visualmente épico.</p>
                <p className='mb-4'>Precisa de ajuda? Contate-nos em: <a href="mailto:suporte@clickdish.fit" className='underline font-bold'>suporte@clickdish.fit</a></p>
                <p className="my-6 text-xl">Fitness e Nutrição devem ser divertidos e <span className="text-clickdish-green font-semibold">saudáveis!</span></p>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">© 2026 ClickDish. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
