
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { portfolioData } from '../data/portfolioData';
import CertificateCard from './CertificateCard';

const Certifications: React.FC = () => {
  const { t } = useTranslations();
  
  return (
    <section id="certifications" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 animate-fade-in">
          {t.certifications.title}
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12 animate-fade-in"></div>

        <div className="max-w-4xl mx-auto space-y-8">
            {portfolioData.certifications.map((cert, index) => (
                <div key={cert.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`}}>
                    <CertificateCard certification={cert} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
