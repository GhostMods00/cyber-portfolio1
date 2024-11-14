// src/components/about/Skills.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { skills } from '../../data/skills';

export const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.category}
          className={`p-6 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} 
            backdrop-blur-sm hover:scale-105 transition-transform`}
        >
          <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
          <div className="mb-4">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyber-primary animate-pulse" 
                style={{width: `${skill.level}%`}} 
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className={`px-3 py-1 rounded-full text-sm
                  ${isDark ? 'bg-gray-700 text-cyber-primary' : 'bg-gray-200 text-gray-800'}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};