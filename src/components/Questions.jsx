import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  
  {
    question: "Qual é a proposta do ClickDish?",
    answer: "Nossa IA analisa a foto enviada, identifica os alimentos e estima o tamanho das porções. O objetivo é ajudar o usuário a ter consciência alimentar, não substituir uma avaliação nutricional. E fazer isso de forma divertida e gamificada para compartilhar o progresso individual com os amigos e familiares."
  },
  {
    question: "Como a Inteligência Artificial calcula as calorias?",
    answer: "Nossa IA analisa a foto enviada, identifica os alimentos e estima o tamanho das porções. Em seguida, ela cruza essas informações com uma extensa base de dados nutricionais para calcular as calorias e os macronutrientes do seu prato de forma rápida. A ideia é gerar uma estimativa orientativa para medir sua constância e disciplina no cuidado da saúde alimentar, não como número clínico exato. Considere uma margem de erro de ±15% em certas análises dependendo da arrumação do alimentos no prato."
  },
  {
    question: "Preciso pagar para testar o aplicativo?",
    answer: "Não! Você ganha 2 análises totalmente gratuitas para testar o aplicativo, conhecer nossa IA bem-humorada e gerar seus primeiros cards divertidos. Depois disso, você escolhe a assinatura que mais se adequa a sua necessidade."
  },
  {
    question: "Qual o preço do ClickDish?",
    answer: "Versão grátis disponível. Plano Premium Mensal R$ 7,90/mês ou Plano Premium Anual por R$ 67,90/ano, equivalente a R$ 5,65 por mês, ou 28% de desconto!"
  },
  {
    question: "O que acontece se eu atingir o limite de análises do meu plano?",
    answer: "O plano Mensal permite 3 análises diárias e o Anual permite 4 análises diárias. Caso você atinja esse limite em um único dia, não se preocupe: os limites não são acumulativos e são zerados à meia-noite todos os dias."
  },
  {
    question: "Posso cancelar minha assinatura quando quiser?",
    answer: "Sim, com certeza! Não existe fidelidade. Você pode gerenciar ou cancelar a sua assinatura a qualquer momento de forma simples, direto pelo painel principal da aplicação, ou pela plataforma parceira (Mercado Pago)."
  },
  {
    question: "Consigo compartilhar o resultado no meu Instagram e WhatsApp?",
    answer: "É pra já! O ClickDish foi criado pensando exatamente nas suas redes sociais. O aplicativo gera um card premium incrível com a foto do seu prato, o título bem-humorado e os detalhes para você postar nos stories com apenas um clique."
  },
  {
    question: "Como falar com o suporte?",
    answer: "É só enviar-nos um e-mail para suporte@clickdish.fit que reponderemos com a brevidade possível."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`border border-white/60 backdrop-blur-md rounded-2xl mb-4 bg-white/60 transition-all duration-300 ${isOpen ? 'shadow-lg ring-1 ring-clickdish-green/30' : 'shadow-sm hover:shadow-md hover:bg-white/80'}`}>
      <button 
        className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`font-bold text-sm sm:text-lg transition-colors duration-300 pr-4 ${isOpen ? 'text-clickdish-green' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-green-100 text-clickdish-green rotate-180 shadow-inner' : 'bg-gray-100 text-gray-400'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm sm:text-lg px-6 pb-6 text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-clickdish-dark mb-4 drop-shadow-sm">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-clickdish-green to-green-600">Frequentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tire todas as suas dúvidas sobre o funcionamento do ClickDish e nossos planos de assinatura.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => toggleAccordion(index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
