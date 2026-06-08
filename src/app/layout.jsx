import './globals.css';

export const metadata = {
  title: 'ClickDish - sua melhor rotina de alimentação saudável e redes sociais turbinadas',
  description: 'Com o ClickDish suas refeições serão cada vez mais fit, seu corpo e alma mais leves, e suas redes sociais mais animadas.',
  openGraph: {
    title: 'ClickDish - sua melhor rotina de alimentação saudável e redes sociais turbinadas',
    description: 'Com o ClickDish suas refeições serão cada vez mais fit, seu corpo e alma mais leves, e suas redes sociais mais animadas.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-clickdish-dark font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
