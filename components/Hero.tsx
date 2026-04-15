"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-[#0b1c3d]">

      {/* animated gradient */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 200, -200, 0], y: [0, -200, 200, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Publish Your Research with Confidence
        </h1>

        <p className="text-lg opacity-90">
          Professional academic publishing support
        </p>

      </div>

    </section>
  );
}