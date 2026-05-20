import {

  Ear,
  Baby,
  Activity,
  Microscope,
  ShieldPlus,
  Stethoscope,
  ScanHeart,
  HeartHandshake,
  Bone,
  HeartPulse,
  Ambulance,

} from "lucide-react";

export const departments = [

  {
    slug: "ent-voice-disorders",

    title: "ENT & Voice Disorders",

    icon: Ear,

    image: "/hospital/ents.jpeg",

    short:
      "Advanced ENT care for ear, nose, throat and professional voice disorders.",

    description:
      "The ENT & Voice Disorders Department at Hajela Hospital provides advanced diagnosis and treatment for sinus problems, ear infections, hearing disorders, allergies, throat diseases and professional voice complications. Equipped with modern ENT technology and experienced specialists, the department ensures personalized treatment with surgical and non-surgical solutions.",

    services: [

      "Sinus Treatment",
      "Voice Therapy",
      "Ear Surgery",
      "Hearing Assessment",
      "Allergy Care",
      "Microscopic Ear Surgery",

    ],

  },

  {
    slug: "cochlear-implant-centre",

    title: "Cochlear Implant Centre",

    icon: HeartHandshake,

    image: "/departments/cochlear.PNG",

    short:
      "Advanced hearing restoration and cochlear implant surgery.",

    description:
      "Our Cochlear Implant Centre specializes in restoring hearing abilities for children and adults with severe hearing loss. The department offers advanced cochlear implant procedures, speech rehabilitation, audiology support and post-surgery hearing recovery programs with expert ENT surgeons.",

    services: [

      "Cochlear Implant",
      "Speech Therapy",
      "Audiology Testing",
      "Hearing Rehabilitation",
      "Advanced Hearing Care",

    ],

  },

  {
    slug: "orthopaedics-joint-replacement",

    title: "Orthopaedics & Joint Replacement",

    icon: Bone,

    image: "/departments/robotic1.png",

    short:
      "Comprehensive orthopedic and trauma treatment solutions.",

    description:
      "The Orthopaedics Department provides advanced bone, joint and spine treatments including fracture management, arthritis care, sports injury treatment and robotic joint replacement surgeries. Our specialists focus on faster recovery, mobility restoration and long-term patient care.",

    services: [

      "Knee Replacement",
      "Hip Replacement",
      "Fracture Treatment",
      "Spine Care",
      "Sports Injury Treatment",
      "Trauma Surgery",

    ],

  },

  {
    slug: "ivf-infertility-centre",

    title: "IVF & Infertility Centre",

    icon: HeartPulse,

    image: "/departments/ivf.PNG",

    short:
      "Advanced fertility and reproductive healthcare services.",

    description:
      "Hajela Hospital offers modern fertility treatments including IVF, ICSI, infertility diagnosis and reproductive health consultation. Our fertility specialists provide personalized treatment plans using advanced reproductive technologies with compassionate patient care.",

    services: [

      "IVF",
      "ICSI",
      "Fertility Consultation",
      "Pregnancy Support",
      "Infertility Treatment",

    ],

  },

  {
    slug: "pediatrics-nicu",

    title: "Pediatrics & NICU",

    icon: Baby,

    image: "/departments/nicu.jpeg",

    short:
      "Advanced child healthcare and neonatal intensive care services.",

    description:
      "The Pediatrics & NICU Department delivers complete healthcare services for newborns, infants and children. Equipped with advanced NICU support systems and experienced pediatricians, the department focuses on child wellness, emergency care and neonatal monitoring.",

    services: [

      "Newborn Care",
      "NICU Support",
      "Child Vaccination",
      "Pediatric Consultation",
      "Emergency Child Care",

    ],

  },

  {
    slug: "emergency-trauma-care",

    title: "Emergency & Trauma Care",

    icon: Activity,

    image: "/departments/emergency.jpeg",

    short:
      "24/7 emergency response and trauma management services.",

    description:
      "Our Emergency & Trauma Care unit operates around the clock with rapid response medical teams, ambulance support, ICU backup and emergency specialists. The department is designed to handle accidents, trauma injuries and critical medical emergencies efficiently.",

    services: [

      "24/7 Emergency",
      "Trauma Management",
      "Critical Care",
      "Ambulance Service",
      "Rapid Emergency Response",

    ],

  },

  {
    slug: "radiology-imaging",

    title: "Radiology & Imaging",

    icon: ScanHeart,

    image: "/departments/radiology.jpeg",

    short:
      "Modern imaging and radiology diagnostic services.",

    description:
      "The Radiology & Imaging Department provides advanced diagnostic imaging facilities including digital X-rays, ultrasound scanning and precision radiology evaluations. Our imaging systems support accurate diagnosis and treatment planning.",

    services: [

      "Ultrasound",
      "Digital X-Ray",
      "Diagnostic Imaging",
      "Radiology Consultation",
      "Scanning Services",

    ],

  },

  {
  slug: "sonology-imaging-services",

  title: "Sonology & Imaging Services",

  icon: ScanHeart,

  image: "/departments/Sono.PNG",

  short:
    "Advanced sonology, ultrasound and modern imaging diagnostic services.",

  description:
    "The Sonology & Imaging Services Department at Hajela Hospital provides advanced ultrasound scanning, pregnancy sonography, abdominal imaging and diagnostic radiology support with modern imaging systems and expert specialists for accurate medical diagnosis.",

  services: [

    "Pregnancy Sonography",
    "Ultrasound Scanning",
    "Abdominal Imaging",
    "Diagnostic Sonology",
    "Color Doppler",
    "Advanced Imaging Services",

  ],

},

  {
    slug: "advanced-diagnostics",

    title: "Pathology",

    icon: Microscope,

    image: "/departments/pathology.jpeg",

    short:
      "Advanced pathology and laboratory diagnostic facilities.",

    description:
      "The Advanced Diagnostics Department provides fast and accurate pathology testing, laboratory services and modern diagnostic evaluations. Equipped with advanced technology, the department ensures reliable medical reporting for patients and doctors.",

    services: [

      "Pathology",
      "Blood Testing",
      "Laboratory Services",
      "Diagnostic Evaluation",
      "Medical Reporting",

    ],

  },

  {
    slug: "general-medicine",

    title: "General Medicine",

    icon: Stethoscope,

    image: "/departments/medicine.PNG",

    short:
      "Comprehensive consultation and preventive healthcare solutions.",

    description:
      "The General Medicine Department focuses on preventive care, chronic disease management, infections, fever treatment and routine healthcare consultations. Our physicians provide personalized medical guidance for long-term wellness.",

    services: [

      "Preventive Healthcare",
      "Fever Treatment",
      "Chronic Disease Care",
      "General Consultation",
      "Health Monitoring",

    ],

  },

  {
    slug: "icu-critical-care",

    title: "ICCU & Critical Care",

    icon: ShieldPlus,

    image: "/hospital/ICCU.jpeg",

    short:
      "Advanced ICU and intensive critical care support.",

    description:
      "The ICU & Critical Care Department provides round-the-clock monitoring, ventilator support and emergency intensive care management. Our experienced intensivists ensure critical patients receive immediate and specialized attention.",

    services: [

      "ICU Monitoring",
      "Ventilator Support",
      "Critical Patient Care",
      "CCU Facilities",
      "Emergency Intensive Care",

    ],

  },

  {
    slug: "maternity-women-care",

    title: "Maternity & Women Care",

    icon: HeartHandshake,

    image: "/departments/maternity.JPEG",

    short:
      "Specialized gynecology and maternity healthcare services.",

    description:
      "Our Maternity & Women Care Department provides complete women healthcare solutions including pregnancy care, normal delivery, cesarean procedures and gynecological treatments with modern medical support.",

    services: [

      "Pregnancy Care",
      "Normal Delivery",
      "Cesarean Procedure",
      "Gynecology Consultation",
      "Women Wellness Care",

    ],

  },


  {
    slug: "hospital-ambulance-services",

    title: "Hospital & Ambulance Services",

    icon: Ambulance,

    image: "/departments/Ambulance.jpeg",

    short:
      "Comprehensive hospital care with emergency ambulance support.",

    description:
      "Hajela Hospital offers complete healthcare infrastructure with emergency ambulance facilities, patient assistance services and advanced medical support systems ensuring safe and reliable patient care.",

    services: [

      "Ambulance Support",
      "Patient Transport",
      "Emergency Assistance",
      "24/7 Hospital Care",
      "Medical Support Services",

    ],
    

  },

];