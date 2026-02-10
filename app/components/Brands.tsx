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
    <section className="py-16 bg-white">
      <div className="mx-auto pl-32 pr-24">
        <motion.h3
          className="text-3xl md:text-4xl text-[#023324] mb-8 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          MARCAS QUE CONFIAM NO NOSSO TRABALHO
        </motion.h3>

        <div className="relative bg-white rounded-full overflow-hidden w-full">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainerFast}
          >
            {logos.map((src, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center justify-center w-32 h-32">
                <Image src={src} alt={`marca-${i}`} width={160} height={160} className="object-contain w-full h-full" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
