"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast, viewportOnce } from "../utils/animations";

const directors = [
  { name: "LEONARDO TAVEIRA", role: "DIRETOR COMERCIAL", img: "/images/diretores/leo.png" },
  { name: "CAIRO FREITAS", role: "DIRETOR FINANCEIRO", img: "/images/diretores/cairo.png" },
  { name: "JOÃO PEDRO ARANTES", role: "DIRETOR ESTRATÉGICO", img: "/images/diretores/joao.png" },
  { name: "RICARDO SOUZA", role: "DIRETOR DE TECNOLOGIA", img: "/images/diretores/ricardo.png" },
];

export default function Directors() {
  return (
    <section className="py-12 md:py-20 bg-[#023324] text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        <motion.div
          className="md:col-span-1 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 text-white font-bold">DIRETORES</h3>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl">À frente da OTicket, diretores com experiência prática e visão de mercado, onde não há espaço para margem de erro.</p>
        </motion.div>

        <motion.div
          className="md:col-span-2 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 md:ml-8 lg:ml-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerFast}
        >
          {directors.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-col items-center text-center shrink-0"
            >
              <motion.div
                className="relative rounded-2xl  p-2 md:p-3  "
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Image src={d.img} alt={d.name} width={260} height={260} className="object-contain rounded-xl w-[400px] h-[400px] " />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
