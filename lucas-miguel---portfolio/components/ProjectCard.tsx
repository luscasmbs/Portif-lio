
import React from 'react';
import type { Project } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useTranslations();
  const Icon = project.icon;

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 h-full flex flex-col border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10">
      <div className="flex-shrink-0 mb-4">
        <Icon className="w-10 h-10 text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.title[language]}</h3>
      <p className="text-slate-400 flex-grow mb-4">{project.description[language]}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
