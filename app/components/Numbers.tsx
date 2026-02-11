"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Numbers({ imgSrc = "/images/image_numbers.jpeg" }: { imgSrc?: string }) {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-0 lg:min-h-[600px]" id="nossos-numeros">
      {/* Conteúdo à esquerda - fundo branco; em mobile ocupa toda a largura */}
      <div className="relative z-10 flex-1 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-32 flex items-center bg-white w-full">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl text-[#023324] mb-6 md:mb-8 font-bold">NOSSOS NÚMEROS</motion.h2>

          <div className="relative ">
            {/* Linha centralizada no meio das bolinhas: pl-8 (32px) + metade do círculo (20px) - metade da linha (1px) = 51px */}
            <div className="absolute left-[18px] top-4 bottom-4 w-[3px] bg-[#023324]" />

            <ul className="space-y-8">
              <motion.li variants={fadeInUp} className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#023324] text-white flex items-center justify-center">
                  <Image src="/images/otti_white.png" alt="plus" width={40} height={40} className="object-contain z-[9999] w-5 h-5 sm:w-full sm:h-full" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#023324]">+3.000.000 Tickets Vendidos</div>
                </div>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#023324] text-white flex items-center justify-center">
                  <Image src="/images/otti_white.png" alt="plus" width={40} height={40} className="object-contain z-[9999] w-5 h-5 sm:w-full sm:h-full" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#023324]">+1.500 Produtores Parceiros</div>
                </div>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#023324] text-white flex items-center justify-center">
                  <Image src="/images/otti_white.png" alt="plus" width={40} height={40} className="object-contain z-[9999] w-5 h-5 sm:w-full sm:h-full" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#023324]">+250 Cidades Atendidas</div>
                </div>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#023324] text-white flex items-center justify-center">
                  <Image src="/images/otti_white.png" alt="plus" width={40} height={40} className="object-contain z-[9999] w-5 h-5 sm:w-full sm:h-full" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#023324]">+10.000 Eventos Entregues</div>
                </div>
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#023324] text-white flex items-center justify-center">
                  <Image src="/images/otti_white.png" alt="plus" width={40} height={40} className="object-contain z-[9999] w-5 h-5 sm:w-full sm:h-full" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#023324]">+500.000 Contas Criadas</div>
                </div>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Coluna direita: só em lg+ (faixa verde visível); foto + otti */}
      <motion.div
        className="relative z-10 hidden lg:flex w-[35%] min-w-[280px] max-w-[280px] shrink-0 items-center"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative w-[280px] xl:w-[340px] h-[360px] xl:h-[460px] aspect-square -ml-[200px] xl:-ml-[260px]">
          {/* Otti “escalando” a imagem – rotacionado, em cima à esquerda */}
          <div
            className="absolute -top-4 left-2 md:-left-[74px] z-20 w-32 h-32 md:w-32 md:h-32"
          >
            <Image
              src="/images/ottisubindo.png"
              alt=""
              width={100}
              height={100}
              className="object-contain "
            />
          </div>
          <div className="relative w-full h-full rounded-3xl overflow-hidden  bg-white ">
            <Image
              src={imgSrc}
              alt="Nossos números - leitores de ingressos"
              width={520}
              height={520}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
