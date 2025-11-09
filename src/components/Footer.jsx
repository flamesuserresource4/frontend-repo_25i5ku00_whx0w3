import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative px-6 sm:px-10 py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-center sm:text-left">
          <div className="font-semibold text-white/90">Glass Postcard</div>
          <div className="text-sm">Interactive storytelling in motion.</div>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="GitHub" className="hover:text-white transition"><Github size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
