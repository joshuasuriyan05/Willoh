"use client";

import { motion } from "framer-motion";

export default function Partnerships() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="text-4xl font-bold text-[#0b1c3d] text-center"
        >
          University & Institutional Partnerships
        </motion.h1>

        <p className="text-center mt-6 text-gray-600 max-w-3xl mx-auto">
          WILLOH Publications actively collaborates with universities,
          research institutions, academic organizations, and scholarly
          networks to support high-quality research publication and
          global academic visibility.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Institutional Collaboration Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              "Universities",
              "Colleges and Academic Departments",
              "Research Centers",
              "Independent Research Institutions",
              "Academic Conferences and Symposiums",
              "Educational Organizations"
            ].map((item,i)=>(
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Partnership Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              "Research Publication Support for Students and Faculty",
              "Journal Selection & Submission Guidance",
              "Academic Writing and Editing Assistance",
              "Research Workshops and Training Programs",
              "Institutional Publication Consulting"
            ].map((item,i)=>(
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Our Global Academic Network
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            WILLOH Publications has supported researchers from
            <b> 300+ universities across 27+ countries</b>, helping scholars
            publish in reputable international journals aligned with global
            academic standards.
          </p>
        </section>

      </div>
    </main>
  );
}