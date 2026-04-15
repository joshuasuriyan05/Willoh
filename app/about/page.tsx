"use client";

export default function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c3d] text-center">
          About WILLOH Publications
        </h2>

        {/* INTRO */}
        <p className="mt-6 text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          WILLOH Publications is an academic publication support organization
          committed to enhancing research visibility and impact at a global level.
          We specialize in providing structured, ethical, and process-driven
          publishing solutions tailored to researchers, academicians, and institutions.
        </p>

        <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Our goal is to simplify the complexities involved in academic publishing
          and empower researchers to transform their ideas into high-quality,
          internationally recognized publications. With a focus on excellence and
          integrity, we guide clients through every stage of the publication journey.
        </p>

        {/* GRID SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {/* MISSION */}
          <div>
            <h3 className="text-xl font-semibold text-[#0b1c3d]">
              Institutional Mission
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to strengthen academic and institutional research output
              by delivering reliable, transparent, and high-quality publication
              support services. We aim to help researchers meet global standards
              while maintaining ethical publishing practices.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Through expert guidance and systematic processes, we ensure that every
              research work is presented with clarity, accuracy, and professional
              excellence.
            </p>
          </div>

          {/* VISION */}
          <div>
            <h3 className="text-xl font-semibold text-[#0b1c3d]">
              Institutional Vision
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our vision is to become a globally trusted academic publishing partner
              for universities, institutions, and independent researchers.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We aspire to bridge the gap between innovative research ideas and
              high-impact journals by making the publication process accessible,
              scalable, and ethically driven.
            </p>
          </div>

        </div>

        {/* APPROACH */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-[#0b1c3d] text-center">
            Our Approach
          </h3>

          <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            At WILLOH Publications, we follow a structured and client-centric
            approach to academic publishing. From manuscript development and
            proofreading to journal selection and final submission, we ensure
            every step is handled with precision and care.
          </p>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            Our team works closely with researchers to understand their objectives,
            improve the quality of their work, and align it with the requirements
            of reputed indexing platforms such as Scopus and Web of Science.
          </p>
        </div>

        {/* VALUES */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold text-[#0b1c3d]">Integrity</h4>
            <p className="mt-3 text-gray-600 text-sm">
              We follow ethical publishing practices and maintain complete
              transparency in all our processes.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold text-[#0b1c3d]">Quality</h4>
            <p className="mt-3 text-gray-600 text-sm">
              We ensure every research output meets international standards
              of excellence and accuracy.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold text-[#0b1c3d]">Support</h4>
            <p className="mt-3 text-gray-600 text-sm">
              We provide end-to-end guidance, helping researchers at every
              stage of their publication journey.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}