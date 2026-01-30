
import React from 'react';
import type { Certification } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface CertificateCardProps {
  certification: Certification;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certification }) => {
  const { language, t } = useTranslations();
  const Logo = certification.logo;

  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 flex flex-col sm:flex-row items-start gap-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/10">
      <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-md flex items-center justify-center">
        <Logo className="w-10 h-10 text-white" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white">{certification.title[language]}</h3>
        <p className="text-slate-400 font-medium">{certification.issuer}</p>
        <p className="text-sm text-slate-500 mt-1">{certification.date[language]}</p>

        {certification.skills[language].length > 0 && (
            <div className="mt-3">
                <p className="text-sm font-semibold text-slate-300 mb-1">{t.certifications.skills}:</p>
                <div className="flex flex-wrap gap-2">
                    {certification.skills[language].map(skill => (
                        <span key={skill} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2 py-0.5 rounded">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        )}
      </div>
      <a 
        href={certification.credentialUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-shrink-0 mt-4 sm:mt-0 ml-auto bg-slate-700 hover:bg-cyan-500 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center gap-2 transition-colors"
      >
        <span>{t.certifications.viewCredential}</span>
        <ExternalLinkIcon className="w-4 h-4" />
      </a>
    </div>
  );
};

export default CertificateCard;
