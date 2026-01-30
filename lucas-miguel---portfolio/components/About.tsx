
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const About: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-center">
            <div className="md:col-span-1 animate-fade-in">
                 {/* Adicione o link da sua foto no `src` abaixo */}
                <img 
                    src="https://placehold.co/400x400/0f172a/38bdf8?text=LM" 
                    alt="Lucas Miguel"
                    className="rounded-full w-48 h-48 lg:w-64 lg:h-64 mx-auto object-cover shadow-2xl border-4 border-slate-700/50"
                />
            </div>
            <div className="md:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {t.about.title}
                </h2>
                <div className="w-24 h-1 bg-cyan-400 mb-8"></div>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
