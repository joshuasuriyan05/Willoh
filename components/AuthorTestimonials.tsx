"use client";

import { motion } from "framer-motion";

export default function AuthorTestimonials() {

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      university: "IIT Delhi",
      text: "WILLOH Publications helped us successfully publish our research in a reputed international journal."
    },
    {
      name: "Dr. Sarah Williams",
      university: "University of Oxford",
      text: "Excellent editorial guidance and professional manuscript support."
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <h2 className="text-center text-3xl font-bold text-[#0b1c3d]">
        What Authors Say
      </h2>

      <div className="max-w-4xl mx-auto mt-16 space-y-10">

        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow"
          >

            <p className="text-gray-700">
              "{t.text}"
            </p>

            <h4 className="mt-4 font-semibold">
              {t.name}
            </h4>

            <p className="text-gray-500 text-sm">
              {t.university}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}