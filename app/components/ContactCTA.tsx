"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";
import Button from "./Button";

export default function ContactCTA({ imgSrc = "/images/foto_palco.png" }: { imgSrc?: string }) {
  return (
    <section className="py-6 md:py-20 bg-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-16 items-center">
        <motion.div
          className="w-full md:max-w-xl text-center md:text-left "
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h3 className="text-2xl lg:text-4xl text-[#023324] font-bold mb-4 md:mb-6">OTICKET ENTREGA PRESENÇA, PROXIMIDADE E PARCERIA REAL.</h3>

          <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-[#023324]/90 list-none text-sm sm:text-base md:text-lg lg:text-xl">
            <li className="flex items-start gap-3">
            <Image src="/images/otti_black.png" alt="plus" width={30} height={30} className="object-cover shrink-0 mt-0.5" />
              <span className="text-[#023324]/90">Time comercial presente e acessível</span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/images/otti_black.png" alt="plus" width={30} height={30} className="object-cover shrink-0 mt-0.5" />
              <span className="text-[#023324]/90">Operação alinhada do planejamento à execução</span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/images/otti_black.png" alt="plus" width={30} height={30} className="object-cover shrink-0 mt-0.5" />
              <span className="text-[#023324]/90">Suporte técnico dedicado e especializado</span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/images/otti_black.png" alt="plus" width={30} height={30} className="object-cover shrink-0 mt-0.5" />
              <span className="text-[#023324]/90">Parceria real no pré, durante e pós-evento</span>
            </li>
          </ul>

          <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
            <Button href="#contato" variant="primary" size="md">
              FALAR COM UM COMERCIAL AGORA
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-end relative  w-full"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-full  rounded-2xl ">
            <Image src={imgSrc} alt="laptop" width={420} height={320} className="object-cover w-full h-full rounded-3xl" />
          </div>

        
        </motion.div>
      </div>
{/* 
      <motion.div
        className="mt-16 text-center flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#023324] text-center max-w-5xl px-4">PRONTO PARA OPERAR COM A PLATAFORMA QUE REALMENTE ENTREGA?</h4>
      </motion.div> */}
    </section>
  );
}
