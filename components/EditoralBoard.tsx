export default function EditorialBoard() {

  const editors = [
    {
      name: "Dr. Michael Anderson",
      field: "Computer Science",
      university: "MIT"
    },
    {
      name: "Prof. Laura Bennett",
      field: "Business Management",
      university: "Harvard University"
    },
    {
      name: "Dr. Ahmed Hassan",
      field: "Engineering",
      university: "University of Cambridge"
    },
  ];

  return (
    <section className="py-24 bg-white">

      <h2 className="text-center text-3xl font-bold text-[#0b1c3d]">
        Editorial Board
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-16">

        {editors.map((editor, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-xl shadow text-center">

            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-6"></div>

            <h3 className="font-semibold">
              {editor.name}
            </h3>

            <p className="text-gray-600">
              {editor.field}
            </p>

            <p className="text-gray-500 text-sm">
              {editor.university}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}