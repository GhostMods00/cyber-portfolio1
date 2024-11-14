// src/components/layout/Footer.jsx
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Footer = () => {
  const { isDark } = useTheme();
  
  const socialLinks = [
    { icon: <Github />, href: 'https://github.com/GHOSTMODS00', label: 'GitHub' },
    { icon: <Linkedin />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Twitter />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Mail />, href: 'mailto:your@email.com', label: 'Email' }
  ];

  return (
    <footer className={`w-full ${isDark ? 'bg-gray-900/90' : 'bg-white/90'} 
      backdrop-blur-sm border-t ${isDark ? 'border-green-500/30' : 'border-gray-300'}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="font-cyber text-xl">
              <span className="text-cyber-primary">&lt;</span>
              WALEED_ZARYAB
              <span className="text-cyber-primary">/&gt;</span>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting digital experiences with code and creativity
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-cyber text-lg">Quick_Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className={`text-sm hover:text-cyber-primary transition-colors
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-cyber text-lg">Connect_</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all hover:bg-cyber-primary/20
                    ${isDark ? 'text-gray-400' : 'text-gray-600'}
                    hover:text-cyber-primary`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by WALEED_ZARYAB</span>
            </div>
            
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;