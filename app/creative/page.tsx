"use client";

import { motion } from "framer-motion";

export default function CreativeComingSoon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1c3d] to-[#1e3a8a] text-white pt-32 pb-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Creative Publishing Division
        </motion.h1>

        <p className="text-xl mt-4 text-gray-200">
          Coming Soon
        </p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mt-8 text-gray-200 leading-relaxed"
        >
          WILLOH Publications is expanding into a new creative publishing
          division dedicated to comics, graphic novels, manga, manhwa,
          and original storytelling content.
        </motion.p>

        <p className="max-w-3xl mx-auto mt-4 text-gray-200">
          This upcoming platform will allow talented creators, writers,
          and illustrators to publish their stories and reach a global
          audience.
        </p>

      </div>

      {/* What We Will Publish */}
      <section className="mt-20 max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          What We Will Publish
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Manga",
            "Manhwa",
            "Comics",
            "Graphic Novels",
            "Anime Story Concepts",
            "Light Novels",
            "Fantasy & Fiction Stories",
            "Webtoon Style Series",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center"
            >
              {item}
            </motion.div>
          ))}

        </div>
      </section>

      {/* Opportunities */}
      <section className="mt-20 max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Opportunities for Creators
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Story Writers",
            "Manga Artists",
            "Comic Illustrators",
            "Anime Concept Creators",
            "Digital Storytelling Creators",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center"
            >
              {item}
            </motion.div>
          ))}

        </div>

        <p className="text-center text-gray-200 mt-10 max-w-3xl mx-auto">
          Creators will be able to submit their works and collaborate
          with our editorial and creative teams for professional
          publishing and global distribution.
        </p>

      </section>

      {/* Launch Section */}
      <section className="mt-20 text-center px-6">

        <h2 className="text-3xl font-bold">
          Launching Soon
        </h2>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Our creative publishing platform is currently under
          development and will soon provide a unique space for
          emerging storytellers and artists.
        </p>

        <div className="mt-8 text-lg font-semibold">
          Stay tuned for the official launch.
        </div>

      </section>

    </main>
  );
}