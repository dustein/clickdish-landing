import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BlogLayout({ children }) {
  return (
    <div className="bg-clickdish-cream text-clickdish-dark font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
