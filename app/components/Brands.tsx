"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast, viewportOnce } from "../utils/animations";

export default function Brands() {
  const logos = [
    "/images/marcas/SANTO GOLE.png",
    "/images/marcas/VIRA COPOS.png",

    "/images/marcas/HOSPITAL DE AMOR.png",
    "/images/marcas/TATU BOLA.png",
    "/images/marcas/TED.png",
    "/images/marcas/HALLEL.png",
    "/images/marcas/TOATOA.png",
    "/images/marcas/AMAZON SOUL.png",
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#023324] mb-6 md:mb-8 font-bold text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          MARCAS QUE CONFIAM NO NOSSO TRABALHO
        </motion.h3>

        <div className="relative bg-white rounded-2xl md:rounded-full overflow-hidden w-full">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 items-center justify-items-center gap-2 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainerFast}
          >
            {logos.map((src, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 p-1 sm:p-2"
              >
                <Image src={src} alt={`marca-${i}`} width={160} height={160} className="object-contain w-full h-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
