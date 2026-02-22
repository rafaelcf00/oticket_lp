"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";

export default function About() {
  return (
    <section id="sobre" className="py-4 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl text-[#023324] mb-4 md:mb-6 font-bold">SOBRE NÓS</h2>

          <p className="text-[#023324]/95 max-w-lg leading-relaxed text-lg md:text-lg">
            A OTicket não é uma empresa de tecnologia que atende eventos. Nascemos da
            produção de eventos para criamos a solução que gostaríamos de ter. Nossa
            plataforma foi pensada para que a sua única preocupação seja a arte de produzir.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full max-w-full md:max-w-[680px] aspect-video bg-zinc-900 rounded-2xl overflow-visible shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl overflow-hidden z-0">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="48" fill="rgba(0,0,0,0.6)" />
                <path d="M40 32L64 48L40 64V32Z" fill="white" />
              </svg>
            </div>
            {/* Otti subindo na parte direita do vídeo (rotacionado, “escalando”) */}
            <div
              className="absolute right-0 md:-right-18 top-[40%] z-10 w-16 h-16 md:w-24 md:h-24 hidden sm:block"
            >
              <Image
                src="/images/ottidescendo.png"
                alt=""
                width={96}
                height={96}
                className="object-contain drop-shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
