"use client";

import { motion } from "framer-motion";
import { FileText, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0b1c3d] to-[#1a2a5a] text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          About WILLOH Publications
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto"
        >
          WILLOH Publications is dedicated to helping researchers publish
          high-quality work in international journals. We provide end-to-end
          support from manuscript preparation to final publication.
        </motion.p>

        {/* GLASS CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            {
              icon: <FileText />,
              title: "500+ Papers",
              desc: "Successfully published research articles worldwide.",
            },
            {
              icon: <Users />,
              title: "1000+ Clients",
              desc: "Researchers supported globally.",
            },
            {
              icon: <Globe />,
              title: "Global Reach",
              desc: "Serving across multiple countries.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}