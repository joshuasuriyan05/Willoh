"use client";

const steps = [
  "Submit Manuscript",
  "Editorial Review",
  "Peer Review",
  "Revision",
  "Final Publication"
];

export default function Workflow() {

  return (
    <section className="py-20 bg-white">

      <h2 className="text-3xl font-bold text-center mb-16 text-[#0b1c3d]">
        Research Publication Workflow
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">

        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <p className="font-semibold text-[#0b1c3d]">{step}</p>
          </div>
        ))}

      </div>

    </section>
  );
}