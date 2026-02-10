"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";

export default function ContactCTA({ imgSrc = "/images/BANNER%20FULL.png" }: { imgSrc?: string }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl text-[#023324] font-bold mb-6">OTICKET ENTREGA PRESENÇA, PROXIMIDADE E PARCERIA REAL.</h3>

          <ul className="space-y-4 text-[#023324]/90 list-none">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-[#023324]">•</span>
              <span className="text-[#023324]/90">Time comercial presente e acessível</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-[#023324]">•</span>
              <span>Operação alinhada do planejamento à execução</span>
            </li>
            <li className="flex items-start ">
              <Image src="/images/otti_black.png" alt="plus" width={80} height={80} className="object-cover z-[9999] border border-red-900" />
              <span>Suporte técnico dedicado e especializado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-[#023324]">•</span>
              <span>Parceria real no pré, durante e pós-evento</span>
            </li>
          </ul>

          <div className="mt-8">
            <motion.a
              href="#"
              className="inline-block bg-emerald-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              FALAR COM UM COMERCIAL AGORA
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-end relative"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-[300px] md:w-[420px] rounded-2xl overflow-hidden shadow-lg bg-white">
            <Image src={imgSrc} alt="laptop" width={420} height={320} className="object-cover" />
          </div>

          <div className="absolute -left-6 -bottom-6">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="28" fill="#064230" opacity="0.06" />
            </svg>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-2xl md:text-3xl font-bold text-emerald-900">PRONTO PARA OPERAR COM A PLATAFORMA QUE REALMENTE ENTREGA?</h4>
      </motion.div>
    </section>
  );
}
