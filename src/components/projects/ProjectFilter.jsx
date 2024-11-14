// src/components/projects/ProjectFilter.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const ProjectFilter = ({ categories, selected, onSelect }) => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-lg transition-all
            ${selected === category
              ? (isDark ? 'bg-cyber-primary/20 text-cyber-primary' : 'bg-gray-200 text-gray-800')
              : (isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100')}
            border ${isDark ? 'border-cyber-primary/30' : 'border-gray-300'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};