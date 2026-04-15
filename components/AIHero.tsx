"use client";

import { motion } from "framer-motion";

export default function AIHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c3d] via-[#123b7a] to-[#1f5dbf]" />

      {/* Animated floating circles */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-3xl right-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          AI-Powered Academic Publishing
        </motion.h1>

        <p className="mt-6 text-lg text-gray-200">
          Helping researchers publish globally with advanced editorial
          and research support.
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-[#0b1c3d] rounded-lg font-semibold hover:scale-105 transition">
          Start Publishing
        </button>

      </div>
    </section>
  );
}