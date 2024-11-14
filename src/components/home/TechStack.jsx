// src/components/home/TechStack.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const TechStack = () => {
  const { isDark } = useTheme();
  
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Express', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Tech_Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="cyber-card group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl mb-2 group-hover:animate-bounce">{tech.icon}</div>
            <div className="text-sm font-semibold">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};