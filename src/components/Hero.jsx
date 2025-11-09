import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient to improve text contrast; does not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/0" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 px-6 sm:px-10 max-w-7xl mx-auto flex min-h-[90vh] items-center">
        <div className="text-white/90">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-10 max-w-2xl shadow-xl"
          >
            <p className="uppercase tracking-widest text-xs sm:text-sm text-white/70">Interactive Storytelling</p>
            <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Glass Postcard Tales
              <span className="block text-white/70 text-xl sm:text-2xl mt-2">Modern, vibrant, and alive with motion</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/80">
              Craft immersive narratives with responsive 3D scenes, cinematic transitions, and tactile UI. Move your cursor and watch the world react.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#chapters"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 font-medium shadow/50 shadow-black/20 hover:shadow-black/30 hover:shadow-lg transition"
              >
                Begin the Journey <ArrowRight size={18} />
              </a>
              <button
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/15 transition"
              >
                <Play size={18} /> Preview
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
