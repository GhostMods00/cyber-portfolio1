// src/pages/AboutPage.jsx
import React from 'react';
import { Bio } from '../components/about/Bio';
import { Skills } from '../components/about/Skills';

const AboutPage = () => {
  return (
    <div className="space-y-16">
      <Bio />
      <Skills />
    </div>
  );
};

export default AboutPage;