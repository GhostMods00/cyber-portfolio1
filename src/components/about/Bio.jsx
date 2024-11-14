// src/components/about/Bio.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const Bio = () => {
  const { isDark } = useTheme();

  return (
    <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} 
      backdrop-blur-sm animate-fade-in`}>
      <h2 className="text-3xl font-bold mb-6 glitch-text">About_Me</h2>
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          👋 Hey there! I'm a passionate full-stack developer with a love for creating
          innovative digital solutions. My journey in tech started with a curiosity
          about how things work, and it's evolved into a career of building impactful
          web applications.
        </p>
        <p className="text-lg leading-relaxed">
          💻 I specialize in modern web technologies and have a particular interest
          in creating user-centric applications that not only function flawlessly
          but also provide an exceptional user experience.
        </p>
        <p className="text-lg leading-relaxed">
          🚀 When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community.
        </p>
      </div>
    </div>
  );
};