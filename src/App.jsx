import React from 'react';
import Hero from './components/Hero';
import ChapterGrid from './components/ChapterGrid';
import StoryScroller from './components/StoryScroller';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0c10] text-white selection:bg-white/20 selection:text-white">
      <Hero />
      <ChapterGrid />
      <StoryScroller />
      <Footer />
    </div>
  );
}

export default App;
