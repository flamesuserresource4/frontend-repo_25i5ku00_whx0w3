import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StoryBlock = ({ index, title, copy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl p-6 sm:p-8"
    >
      <div className="text-white/60 text-sm">Chapter {index}</div>
      <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white/90">{title}</h3>
      <p className="mt-3 text-white/70 leading-relaxed">{copy}</p>
    </motion.div>
  );
};

const StoryScroller = () => {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative py-24 px-6 sm:px-10">
      {/* Progress indicator bound to scroll, non-interactive */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-1 bg-gradient-to-b from-white/30 via-white/10 to-transparent"
        style={{ height: progress }}
      />
      <div className="max-w-3xl mx-auto space-y-6">
        <StoryBlock index={1} title="A Note in the Glass" copy="You tilt the card and the light bends; a hidden sentence swims into focus. It reads like a memory you haven’t had yet." />
        <StoryBlock index={2} title="Frictionless Echoes" copy="Every interaction ripples outward—hover, drag, tap—an ecosystem of tiny signals composing a larger song." />
        <StoryBlock index={3} title="Cities of Reflection" copy="Skylines shaped by your motions. Buildings shift, reflections stretch, the horizon plays back your intent." />
        <StoryBlock index={4} title="The Listener" copy="The postcard is a witness. It collects gestures, turns them into little galaxies, and sets them adrift." />
      </div>
    </section>
  );
};

export default StoryScroller;
