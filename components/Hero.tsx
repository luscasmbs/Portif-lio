
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const Hero: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
       <div className="absolute inset-0 bg-slate-900 z-10"></div>
       <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
       </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 animate-fade-in-up">
        <p className="text-cyan-400 font-medium mb-2">{t.hero.greeting}</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          {t.hero.name}
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
          {t.hero.title}
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
          {t.hero.description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:lucasmiguelbsilva@gmail.com" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
            {t.hero.contact}
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/luscasmbs" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer"><GithubIcon className="w-8 h-8"/></a>
            <a href="https://www.linkedin.com/in/lucas-miguel-barbosa-da-silva-326461341/" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110" target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-8 h-8"/></a>
            <a href="mailto:lucasmiguelbsilva@gmail.com" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110"><MailIcon className="w-8 h-8"/></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
