// src/pages/ProjectsPage.jsx
import React, { useState } from 'react';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Projects_</h1>
        <p className="text-cyber-primary/70">Some of my recent works</p>
      </div>
      
      <ProjectFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;