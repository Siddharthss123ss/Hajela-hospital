import Image from "next/image";

const galleryImages = [
  "/hospital/about1.webp",
  "/hospital/about2.webp",
  "/doctors/doc1.jpg",
  "/doctors/doc2.jpg",
  "/doctors/doc3.jpg",
  "/doctors/doc4.jpg",
];

export default function GalleryPhotosPage() {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-20">

          <p className="text-cyan-600 font-semibold text-lg">
            Hajela Hospital Gallery
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
            Event Images
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our hospital facilities, healthcare events,
            patient care activities, and medical excellence.
          </p>

        </div>

        {/* GALLERY GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              className="
              group
              overflow-hidden
              rounded-[35px]
              shadow-xl
              bg-white
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={image}
                  alt="Gallery"
                  width={600}
                  height={500}
                  className="
                  w-full
                  h-[320px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}