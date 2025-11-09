import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const chapters = [
  {
    id: 1,
    title: 'Awakening',
    desc: 'Where the glass postcard turns and the world begins to breathe.',
    color: 'from-fuchsia-500/20 to-violet-500/20',
  },
  {
    id: 2,
    title: 'Signals',
    desc: 'Digital whispers guide the traveler through neon currents.',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 3,
    title: 'Resonance',
    desc: 'Memories echo in prisms; every tilt reveals a new facet.',
    color: 'from-amber-500/20 to-rose-500/20',
  },
  {
    id: 4,
    title: 'Arrival',
    desc: 'A landing in light—quiet, certain, electric.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

const ChapterCard = ({ title, desc, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-xl hover:shadow-black/20"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition pointer-events-none`} />
    <div className="relative">
      <div className="flex items-center gap-2 text-white/80">
        <Sparkles size={18} className="text-white/70" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-white/70">{desc}</p>
      <div className="mt-5 inline-flex items-center text-sm font-medium text-white/80">
        Read chapter
        <span className="ml-2 h-5 w-5 rounded-full bg-white/20 grid place-items-center group-hover:translate-x-1 transition">→</span>
      </div>
    </div>
  </motion.div>
);

const ChapterGrid = () => {
  return (
    <section id="chapters" className="relative py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold text-white/90">Chapters</h2>
          <p className="mt-2 text-white/70 max-w-2xl">A modular narrative. Each panel is a slice of the world—glassy, dynamic, and responsive.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {chapters.map((c) => (
            <ChapterCard key={c.id} title={c.title} desc={c.desc} color={c.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterGrid;
