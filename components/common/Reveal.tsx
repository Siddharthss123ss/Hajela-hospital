// components/common/Reveal.tsx

"use client";

import { motion } from "framer-motion";

export default function Reveal({

  children,

  delay = 0,

}: {

  children: React.ReactNode;

  delay?: number;

}) {

  return (

    <motion.div

      initial={{

        opacity: 0,

        y: 35,

        scale: 0.98,

      }}

      whileInView={{

        opacity: 1,

        y: 0,

        scale: 1,

      }}

      viewport={{

        once: true,

        amount: 0.12,

      }}

      transition={{

        duration: 0.38,

        delay,

        ease: [0.22, 1, 0.36, 1],

      }}

      style={{

        willChange:
          "transform, opacity",

        transform:
          "translateZ(0)",

      }}

    >

      {children}

    </motion.div>

  );

}