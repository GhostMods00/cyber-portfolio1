// src/components/projects/ProjectCard.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ProjectCard = ({ project }) => {
  const { isDark } = useTheme();

  return (
    <div className="cyber-card group">
      <div className="relative h-48 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
          transition-opacity flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className={isDark ? 'text-cyber-primary/70' : 'text-gray-600'}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 rounded-md text-sm
                ${isDark ? 'bg-gray-700 text-cyber-primary' : 'bg-gray-200 text-gray-800'}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};