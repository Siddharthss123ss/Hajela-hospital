/src
  /app
    /api
      /auth
        /[...nextauth]
          - route.ts
      /doctors
        - route.ts
        /[id]
          - route.ts
      /departments
        - route.ts
      /appointments
        - route.ts
      /enquiry
        - route.ts
      /gallery
        - route.ts
      /admin
        /stats
          - route.ts
        /setup
          - route.ts
  /lib
    - db.ts
    - cloudinary.ts
    - validation.ts
    - auth.ts
  /models
    - user.ts
    - doctor.ts
    - department.ts
    - appointment.ts
    - enquiry.ts
    - review.ts
    - service.ts
    - gallery.ts
  - middleware.ts  <-- Ye hai wo "proxy" logic jo routes protect karega