// src/components/contact/SocialLinks.jsx (continued)
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const SocialLinks = () => {
  const { isDark } = useTheme();
  
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/GhostMods00'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'Facebook',
      href: 'https://www.facebook.com/waleed.zaryab.7'
    },
    {
      icon: <X className="w-6 h-6" />,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: 'westendcrew1982@email.com'
    }
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} 
            transition-colors duration-300 flex items-center gap-2
            hover:text-cyber-primary`}
        >
          {link.icon}
          <span className="hidden md:block">{link.label}</span>
        </a>
      ))}
    </div>
  );
};