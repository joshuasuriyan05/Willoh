"use client";

import { motion } from "framer-motion";

export default function ServicesTimeline() {

  const steps = [
    {
      title: "Research Review",
      desc: "Initial review of manuscript quality and research scope."
    },
    {
      title: "Journal Selection",
      desc: "Identify suitable high-impact international journals."
    },
    {
      title: "Manuscript Editing",
      desc: "Professional editing to improve clarity and structure."
    },
    {
      title: "Submission Support",
      desc: "Complete guidance for successful submission."
    },
    {
      title: "Publication Success",
      desc: "Final acceptance and global research visibility."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">

      <h2 className="text-center text-4xl font-bold text-[#0b1c3d]">
        Research Publishing Process
      </h2>

      <div className="max-w-5xl mx-auto mt-16 space-y-12">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow"
          >

            <h3 className="text-xl font-semibold text-[#0b1c3d]">
              {index + 1}. {step.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {step.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}