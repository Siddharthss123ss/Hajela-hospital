export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom grid md:grid-cols-4 gap-8">

        {[
          ["100+", "Doctors"],
          ["50K+", "Patients"],
          ["24/7", "Emergency"],
          ["25+", "Experience"],
        ].map((item, i) => (
          <div
            key={i}
            className="bg-slate-50 p-10 rounded-3xl text-center shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-5xl font-bold text-blue-900">
              {item[0]}
            </h2>

            <p className="mt-3 text-slate-600">
              {item[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}