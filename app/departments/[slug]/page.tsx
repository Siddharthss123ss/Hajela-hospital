import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, CheckCircle2, ShieldAlert } from "lucide-react";

interface Department {
  _id: string;
  name: string;
  slug: string;
  image_url: string;
  doctor_name: string;
  contact_number: string;
  description: string;
  facilities: string[];
  is_emergency_dept: boolean;
}

// 🔴 Optimized fetch function for Vercel
async function getDepartment(slug: string): Promise<Department | null> {
  try {
    // 🔴 Use environment variable for API URL (Vercel compatible)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
    const res = await fetch(
      `${baseUrl}/api/departments/${slug}`,
      {
        cache: "force-cache", // 🔴 Better for Vercel
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!res.ok) return null;
    const dept = await res.json();
    return dept;
  } catch (error) {
    console.error("Failed to fetch department:", error);
    return null;
  }
}

// 🔴 Generate static params for Vercel (Prevents 404)
export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    const res = await fetch(`${baseUrl}/api/departments`);
    if (!res.ok) return [];
    const departments = await res.json();
    return departments.map((dept: Department) => ({
      slug: dept.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = await getDepartment(slug);

  if (!dept) notFound();

  // 🔴 Optimize Cloudinary image URL
  const getOptimizedImageUrl = (url: string) => {
    if (url.includes('cloudinary')) {
      return url.replace('/upload/', '/upload/q_auto,f_auto,w_1400,c_limit/');
    }
    return url;
  };

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-b
      from-slate-50
      via-white
      to-cyan-50/30
      pt-32
      pb-24
      "
    >
      <div
        className="
        container-custom
        max-w-7xl
        mx-auto
        px-4
        "
      >
        {/* HERO IMAGE - Optimized */}
        <div
          className="
          relative
          w-full
          h-[340px]
          sm:h-[520px]
          lg:h-[720px]
          overflow-hidden
          rounded-[40px]
          shadow-2xl
          bg-slate-800
          "
        >
          {/* 🔴 Skeleton loader while image loads */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
          
          <Image
            src={getOptimizedImageUrl(dept.image_url)}
            alt={dept.name}
            fill
            priority
            className="
            object-cover
            object-center
            transition-all duration-700
            "
            sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 100vw,
            1400px
            "
            quality={90}
          />

          {/* DARK OVERLAY */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
            z-10
            "
          />

          {/* TITLE */}
          <div
            className="
            absolute
            bottom-8
            left-8
            right-8
            z-20
            "
          >
            <h1
              className="
              text-3xl
              sm:text-5xl
              lg:text-7xl
              font-black
              text-white
              drop-shadow-2xl
              leading-tight
              "
            >
              {dept.name}
            </h1>
          </div>

          {/* EMERGENCY BADGE */}
          {dept.is_emergency_dept && (
            <div
              className="
              absolute
              top-6
              right-6
              bg-red-500
              text-white
              px-5
              py-2
              rounded-full
              font-bold
              shadow-lg
              z-20
              animate-pulse
              "
            >
              24/7 Emergency
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div
          className="
          grid
          lg:grid-cols-3
          gap-10
          mt-14
          "
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">
            {/* DESCRIPTION */}
            <div
              className="
              bg-white
              rounded-[35px]
              p-8
              shadow-lg
              border
              border-slate-100
              "
            >
              <p
                className="
                text-slate-600
                text-lg
                leading-relaxed
                "
              >
                {dept.description}
              </p>
            </div>

            {/* FACILITIES */}
            <div
              className="
              bg-white
              rounded-[35px]
              p-8
              shadow-lg
              border
              border-slate-100
              mt-8
              "
            >
              <h2
                className="
                text-3xl
                font-black
                text-slate-900
                mb-8
                "
              >
                Department Facilities
              </h2>

              <div
                className="
                grid
                md:grid-cols-2
                gap-5
                "
              >
                {dept.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="
                    flex
                    items-start
                    gap-3
                    bg-slate-50
                    p-5
                    rounded-2xl
                    border
                    border-slate-100
                    hover:bg-cyan-50
                    transition-all
                    duration-300
                    "
                  >
                    <CheckCircle2
                      className="
                      text-cyan-600
                      mt-0.5
                      flex-shrink-0
                      "
                      size={20}
                    />
                    <p
                      className="
                      text-slate-700
                      font-medium
                      "
                    >
                      {facility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Card */}
          <div>
            <div
              className="
              bg-white
              rounded-[35px]
              p-8
              shadow-lg
              border
              border-slate-100
              sticky
              top-28
              "
            >
              <p
                className="
                text-xs
                uppercase
                tracking-[4px]
                text-cyan-600
                font-bold
                "
              >
                Specialist Doctor
              </p>

              <h3
                className="
                mt-4
                text-3xl
                font-black
                text-slate-900
                "
              >
                {dept.doctor_name}
              </h3>

              {/* CONTACT */}
              <div
                className="
                mt-8
                bg-cyan-50
                border
                border-cyan-100
                rounded-3xl
                p-5
                "
              >
                <div className="flex items-center gap-3">
                  <Phone className="text-cyan-600" />
                  <div>
                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-500
                      font-semibold
                      "
                    >
                      Contact Number
                    </p>
                    <p
                      className="
                      text-xl
                      font-black
                      text-slate-900
                      mt-1
                      "
                    >
                      +91 {dept.contact_number}
                    </p>
                  </div>
                </div>
              </div>

              {/* CALL BUTTON */}
              <a
                href={`tel:+91${dept.contact_number}`}
                className="
                mt-8
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-700
                hover:from-cyan-400
                hover:to-blue-600
                text-white
                py-4
                rounded-2xl
                font-bold
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                "
              >
                <Phone size={18} />
                Call Department
              </a>

              {/* EMERGENCY BOX */}
              {dept.is_emergency_dept && (
                <div
                  className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  bg-red-50
                  border
                  border-red-100
                  p-5
                  "
                >
                  <ShieldAlert
                    className="
                    text-red-500
                    flex-shrink-0
                    mt-0.5
                    "
                  />
                  <p
                    className="
                    text-sm
                    text-red-700
                    leading-relaxed
                    font-medium
                    "
                  >
                    This department provides emergency medical support
                    and remains operational 24×7.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}