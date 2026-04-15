export default function Services() {
  const services = [
    "Scopus Indexed Journals",
    "Web of Science Journals",
    "SCI / SCIE Journals",
    "UGC Care Journals",
    "PubMed Journals",
    "ABDC & ABS Ranked Journals",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[#0B1F3A] mb-10">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg">{item}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}