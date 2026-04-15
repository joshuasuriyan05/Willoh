"use client";

import { motion } from "framer-motion";

export default function ResearchEthics() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0b1c3d] text-center"
        >
          Research Ethics & Integrity
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-600 text-center leading-relaxed"
        >
          At WILLOH Publications, we strongly believe that academic publishing
          must uphold the highest standards of integrity, transparency,
          and ethical responsibility.
        </motion.p>

        <p className="mt-4 text-gray-600 text-center">
          Our services are designed to support researchers while strictly
          respecting the ethical principles of scholarly communication.
        </p>

        {/* Academic Integrity */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Academic Integrity
          </h2>

          <p className="mt-4 text-gray-600">
            We encourage all authors to maintain academic integrity in their
            research and writing. Manuscripts submitted through our platform
            must adhere to ethical research practices including:
          </p>

          <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
            <li>Original research contributions</li>
            <li>Proper citation of sources</li>
            <li>Transparent research methodology</li>
            <li>Ethical data collection and reporting</li>
          </ul>
        </section>

        {/* Plagiarism Policy */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Plagiarism Policy
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            WILLOH Publications promotes originality and responsible research
            writing. Every manuscript should maintain acceptable similarity
            levels according to journal requirements.
          </p>

          <p className="mt-3 text-gray-600">
            Authors are encouraged to ensure their research work is original
            and properly referenced before submission.
          </p>
        </section>

        {/* Authorship Responsibility */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Authorship Responsibility
          </h2>

          <p className="mt-4 text-gray-600">
            All authors listed in a manuscript must have made significant
            academic contributions to the research work.
          </p>

          <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
            <li>Accurate author information</li>
            <li>Transparent contribution statements</li>
            <li>Author consent before submission</li>
          </ul>
        </section>

        {/* Conflict of Interest */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Conflict of Interest
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Authors must disclose any potential conflicts of interest related
            to their research work. Transparency in research ensures credibility
            and trust within the academic community.
          </p>
        </section>

        {/* Ethical Publication Support */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-[#0b1c3d]">
            Ethical Publication Support
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            While WILLOH Publications provides guidance and editorial support,
            the final editorial and peer-review decisions remain with the
            respective journals.
          </p>

          <p className="mt-3 text-gray-600">
            Our role is to assist researchers in preparing manuscripts that
            meet international academic standards.
          </p>
        </section>

      </div>

    </main>
  );
}