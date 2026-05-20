import { MetadataRoute } from "next";

import { departments } from "@/data/departments";

import { doctors } from "@/data/doctors";

export default function sitemap():
  MetadataRoute.Sitemap {

  const baseUrl =
    "https://hajelahospital.com";

  /* STATIC PAGES */

  const staticPages = [

    "",

    "/about",

    "/departments",

    "/doctors",

    "/gallery",

    "/contact",

    "/appointment",

  ].map((route) => ({

    url: `${baseUrl}${route}`,

    lastModified: new Date(),

    changeFrequency:
      "weekly" as const,

    priority:
      route === "" ? 1 : 0.8,

  }));

  /* DEPARTMENT PAGES */

  const departmentPages =
    departments.map((dept) => ({

      url:
        `${baseUrl}/departments/${dept.slug}`,

      lastModified:
        new Date(),

      changeFrequency:
        "weekly" as const,

      priority: 0.9,

    }));

  /* DOCTOR PAGES */

  const doctorPages =
    doctors.map((doctor) => ({

      url:
        `${baseUrl}/doctors/${doctor.slug}`,

      lastModified:
        new Date(),

      changeFrequency:
        "monthly" as const,

      priority: 0.8,

    }));

  return [

    ...staticPages,

    ...departmentPages,

    ...doctorPages,

  ];

}