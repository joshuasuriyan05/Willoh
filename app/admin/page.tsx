export default function Admin() {
  return (
    <section className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Total Clients</h2>
          <p className="text-2xl mt-2">320</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Publications</h2>
          <p className="text-2xl mt-2">3050</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Pending Requests</h2>
          <p className="text-2xl mt-2">12</p>
        </div>
      </div>
    </section>
  );
}