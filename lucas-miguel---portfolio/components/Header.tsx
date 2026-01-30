
import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerOffset = 80; // height of the header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const navLinks = [
    { href: '#about', text: t.nav.about },
    { href: '#projects', text: t.nav.projects },
    { href: '#certifications', text: t.nav.certifications },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-bold text-white transition-colors hover:text-cyan-400">
              LM
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
               >
                {link.text}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${language === 'pt' ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              PT
            </button>
            <div className="w-px h-5 bg-slate-600 mx-2"></div>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${language === 'en' ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
