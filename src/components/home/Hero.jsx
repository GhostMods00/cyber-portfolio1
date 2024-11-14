// src/components/home/Hero.jsx
import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Hero = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div className="space-y-6 animate-slide-in-left">
        <div className="space-y-2">
          <p className={`text-lg ${isDark ? 'text-cyber-primary' : 'text-gray-600'}`}>
            👋 Hi there, I'm
          </p>
          <h1 className="text-5xl md:text-6xl font-bold glitch-text">
            WALEED_ZARYAB
          </h1>
          <p className={`text-xl md:text-2xl ${isDark ? 'text-cyber-primary/70' : 'text-gray-600'}`}>
            Full Stack Developer-UNDER TRAINING 👨‍💻
          </p>
        </div>

        <p className={`text-lg leading-relaxed ${isDark ? 'text-cyber-primary/90' : 'text-gray-700'}`}>
          Digital experiences with code and creativity. 
          Specializing in building modern web applications.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="/projects" className="cyber-button">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
              className="cyber-button">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="cyber-button">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative flex justify-center md:justify-end animate-slide-in-right">
        <div className="relative">
          <img
            src="/assets/images/profile.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover relative z-10
              border-4 border-cyber-primary/30"
          />
          <div className={`absolute -inset-4 border-2 ${isDark ? 'border-cyber-primary/30' : 'border-gray-300'} 
            rounded-2xl z-0 transform rotate-6 animate-pulse`}></div>
          <div className={`absolute -inset-4 border-2 ${isDark ? 'border-cyber-primary/30' : 'border-gray-300'} 
            rounded-2xl z-0 transform -rotate-6 animate-pulse delay-75`}></div>
        </div>
      </div>
    </div>
  );
};