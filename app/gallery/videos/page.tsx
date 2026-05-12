const videos = [
  "/videos/hero.mp4",
  "/videos/hero.mp4",
  "/videos/hero.mp4",
];

export default function GalleryVideosPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg">
            Hajela Hospital Media
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
            Video Gallery
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our hospital facilities, healthcare services,
            advanced treatment technology, and patient care videos.
          </p>

        </div>

        {/* VIDEO GRID */}

        <div className="grid lg:grid-cols-2 gap-10">

          {videos.map((video, index) => (

            <div
              key={index}
              className="
              bg-slate-950
              rounded-[35px]
              overflow-hidden
              shadow-2xl
              "
            >

              {/* VIDEO */}

              <video
                controls
                className="
                w-full
                h-[300px]
                object-cover
                "
              >

                <source
                  src={video}
                  type="video/mp4"
                />

              </video>

              {/* CONTENT */}

              <div className="p-8">

                <h2 className="text-2xl font-bold text-white">
                  Hospital Healthcare Services
                </h2>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  Experience advanced healthcare technology,
                  patient support services, and modern medical
                  infrastructure at Hajela Hospital.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}