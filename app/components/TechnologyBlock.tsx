"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";

export default function TechnologyBlock() {
  return (
    <>
      <motion.div
        id="tecnologia"
        className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-x-12 relative"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <div className="absolute top-0 right-0 md:-right-16 z-10 md:w-[180px] md:h-[180px] opacity-80 md:opacity-100">
          <Image src="/images/ottisubindo.png" alt="Oticket Tecnologia" width={180} height={180} className="object-contain w-full h-full" />
        </div>
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#023324] uppercase max-w-lg font-bold">
            A tecnologia QUE sustenta mais DE <span className="font-extrabold">10 mil eventos</span> pelo Brasil
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#023324]/90 mt-2 sm:mt-3">
            Robusta, escalável, integrada à AWS, segura e criada para eventos de alto volume.
          </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#023324]/90 max-w-md">
            A OTicket não é apenas uma ticketeira. É o motor da sua operação.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#023324]/90 max-w-md mt-2 sm:mt-3">
            Do online ao presencial, da entrada ao consumo, da venda ao repasse.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7 }}
      >
        <Image
          className="w-full h-full object-cover"
          src="/images/TECNOLOGIA.png"
          alt="Oticket Tecnologia"
          width={1920}
          height={1080}
        />
      </motion.div>
    </>
  );
}
