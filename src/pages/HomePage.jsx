// src/pages/HomePage.jsx
import React from 'react';
import { Hero } from '../components/home/Hero';
import { TechStack } from '../components/home/TechStack';

const HomePage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <TechStack />
    </div>
  );
};

export default HomePage;