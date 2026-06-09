import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.clickdish.fit'),
  title: 'ClickDish - sua melhor rotina de alimentação saudável e redes sociais turbinadas',
  description: 'Com o ClickDish suas refeições serão cada vez mais fit, seu corpo e alma mais leves, e suas redes sociais mais animadas.',
  icons: {
    icon: '/pwa-64x64-v2.png',
    shortcut: '/pwa-64x64-v2.png',
    apple: '/pwa-192x192-v2.png',
  },
  openGraph: {
    title: 'ClickDish - sua melhor rotina de alimentação saudável e redes sociais turbinadas',
    description: 'Com o ClickDish suas refeições serão cada vez mais fit, seu corpo e alma mais leves, e suas redes sociais mais animadas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClickDish - Sua dieta instagramável',
      },
    ],
    url: 'https://www.clickdish.fit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S3J09TXCZQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S3J09TXCZQ');
        `}
      </Script>
    </html>
  );
}
