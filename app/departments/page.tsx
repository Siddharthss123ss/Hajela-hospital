const services = [
  "Hospital",
  "Ambulance Service",
  "Anesthesiology",
  "Cardiology",
  "Diagnostic Imaging",
  "Emergency Care",
  "Gastroenterology",
  "General Checkups",
  "General Surgery",
  "Hospice Care",
  "Laboratory Services",
  "Maternity Care",
  "Mental Health Care",
  "Neurology",
  "Nursing Services",
  "Orthopedics",
  "Outpatient Services",
  "Pediatrics",
  "Pharmacy Services",
  "Physical Therapy",
  "Psychiatry",
  "Psychology",
  "X-ray & Radiology Services",
  "Orthopedic & Joint Replacement Surgery",
  "ENT Specialist",
  "Infertility Specialist",
  "NICU for New Born & Paediatrics",
  "Paediatrician",
  "General Medicine",
  "ICU & CCU",
  "Trauma Centre",
  "Imaging Centre",
  "NABH Hospital in Bhopal",
  "Gynecologist",
  "Child Birth through Normal & Caesarean Procedure",
  "IVF & Infertility Clinic",
  "Ultrasound",
  "Otolaryngology Clinic",
  "ENT Specialist for Ear, Nose & Throat Diseases",
];

export default function DepartmentsPage() {
  return (
    <main className="pt-32 pb-24 bg-slate-50 min-h-screen overflow-hidden">

      <div className="container-custom">

        {/* HEADING */}

        <div className="text-center mb-16">

          <p className="text-cyan-600 font-semibold text-lg">
            Hajela Hospital
          </p>

          <h1
            className="
            mt-4
            text-4xl
            lg:text-5xl
            font-bold
            text-slate-900
            "
          >
            All Medical Services
          </h1>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Advanced healthcare services with experienced doctors
            and modern medical technology.
          </p>

        </div>

        {/* GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              group
              bg-white
              rounded-[22px]
              p-6
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              border
              border-slate-100
              hover:bg-gradient-to-r
              hover:from-blue-900
              hover:to-cyan-600
              cursor-pointer
              "
            >

              {/* ICON */}

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-cyan-100
                flex
                items-center
                justify-center
                text-cyan-600
                text-xl
                font-bold
                group-hover:bg-white/20
                group-hover:text-white
                transition-all
                duration-500
                "
              >
                +
              </div>

              {/* TITLE */}

              <h2
                className="
                mt-5
                text-lg
                lg:text-xl
                font-bold
                text-slate-900
                leading-snug
                group-hover:text-white
                transition-all
                duration-500
                "
              >
                {service}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}