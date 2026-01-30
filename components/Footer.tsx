
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';
import { useTranslations } from '../hooks/useTranslations';

const Footer: React.FC = () => {
    const { t } = useTranslations();
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com/luscasmbs" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110"><GithubIcon className="w-6 h-6"/></a>
            <a href="https://www.linkedin.com/in/lucas-miguel-barbosa-da-silva-326461341/" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110"><LinkedinIcon className="w-6 h-6"/></a>
            <a href="mailto:lucasmiguelbsilva@gmail.com.com" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110"><MailIcon className="w-6 h-6"/></a>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
           &copy; {new Date().getFullYear()} Lucas Miguel Barbosa da Silva. <br className="sm:hidden" />
           {t.footer.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
