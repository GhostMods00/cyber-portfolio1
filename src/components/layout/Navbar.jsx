// src/components/layout/Navbar.jsx
import React from 'react';
import { Moon, Sun, Home, User, Code, Mail, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useState } from 'react';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { icon: <Home className="w-4 h-4" />, label: 'Home', href: '/' },
    { icon: <User className="w-4 h-4" />, label: 'About', href: '/about' },
    { icon: <Code className="w-4 h-4" />, label: 'Projects', href: '/projects' },
    { icon: <Mail className="w-4 h-4" />, label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 ${isDark ? 'bg-gray-900/90' : 'bg-white/90'} 
      backdrop-blur-sm border-b ${isDark ? 'border-green-500/30' : 'border-gray-300'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-cyber text-xl">
            <span className="text-cyber-primary">&lt;</span>
            WALEED_ZARYAB
            <span className="text-cyber-primary">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg 
                  transition-all hover:bg-cyber-primary/20
                  ${isDark ? 'text-cyber-primary' : 'text-gray-800'}`}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-cyber-primary" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all
                ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-cyber-primary" />
              ) : (
                <Menu className="w-6 h-6 text-cyber-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg 
                    transition-all hover:bg-cyber-primary/20
                    ${isDark ? 'text-cyber-primary' : 'text-gray-800'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-lg 
                  transition-all hover:bg-cyber-primary/20
                  ${isDark ? 'text-cyber-primary' : 'text-gray-800'}`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;