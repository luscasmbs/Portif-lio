
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="projects" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 animate-fade-in">
          {t.projects.title}
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12 animate-fade-in"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
             <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`}}>
                <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
