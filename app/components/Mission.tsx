"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Mission() {
  return (
    <section className="bg-white overflow-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start pl-4 sm:pl-6 md:pl-12 lg:pl-24 xl:pl-32 py-8 md:py-0"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="pb-8">
          {/* NOSSA MISSÃO */}
          <motion.div variants={fadeInUp} className="flex flex-col items-start">
            <div className="flex items-center">
            <div className="shrink-0 mt-1 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/MISSÃO.png"
                alt=""
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />

            </div>
            <div>
            <h4 className="text-xl sm:text-2xl text-[#023324] mb-2 md:mb-3 font-bold">NOSSA MISSÃO</h4>
            </div>
            </div>
            <div className="-mt-4">
              <p className="text-[#023324]/95 leading-relaxed max-w-md text-sm sm:text-base md:text-lg ml-4 md:ml-6">
              Ser o parceiro confiável dos produtores de eventos, com soluções completas e inovadoras, dados confiáveis e foco em uma experiência excepcional do início ao fim.
              </p>
              <div className="mt-4 ml-4 md:ml-6 w-48 md:w-64 h-0.5 bg-[#023324]" />
            </div>
          </motion.div>

          {/* NOSSA VISÃO */}
          <motion.div variants={fadeInUp} className="flex flex-col items-start">
            <div className="flex items-center">
            <div className="shrink-0 mt-1 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/VISÃO.png"
                alt=""
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />

            </div>
            <div>
            <h4 className="text-xl sm:text-2xl text-[#023324] mb-2 md:mb-3 font-bold">NOSSA VISÃO</h4>
            </div>
            </div>
            <div className="-mt-4">
              <p className="text-[#023324]/95 leading-relaxed max-w-md text-sm sm:text-base md:text-lg ml-4 md:ml-6">
              Ser reconhecida nacionalmente como a solução completa em gestão de eventos, com excelência no atendimento, inovação contínua e experiências memoráveis.
              </p>
              <div className="mt-4 ml-4 md:ml-6 w-48 md:w-64 h-0.5 bg-[#023324]" />
            </div>
          </motion.div>

          {/* NOSSOS VALORES */}
          <motion.div variants={fadeInUp} className="flex flex-col items-start">
            <div className="flex items-center">
            <div className="shrink-0 mt-1 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/VALORES.png"
                alt=""
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />

            </div>
            <div>
            <h4 className="text-xl sm:text-2xl text-[#023324] mb-2 md:mb-3 font-bold">NOSSOS VALORES</h4>
            </div>
            </div>
            <div className="-mt-4">
              <p className="text-[#023324]/95 leading-relaxed max-w-md text-sm sm:text-base md:text-lg ml-4 md:ml-6">
              Priorizar a satisfação do cliente com excelência no atendimento, qualidade, parceria, inovação constante e compromisso com o sucesso de cada evento.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Coluna direita: fundo #023324 + imagem RECEPÇÃO */}
        <motion.div
          variants={fadeInUp}
          className="relative bg-[#023324] w-full h-full min-h-[280px] md:min-h-[360px] flex items-center justify-center py-8 md:py-0"
        >
          {/* <div className="absolute left-0 top-8 -translate-x-1/2 flex flex-col items-center gap-12 z-10">
            <div className="w-10 h-10 bg-white rounded-full border-2 border-[#023324] flex items-center justify-center">
              <div className="w-5 h-5 bg-[#023324] rounded-full" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full border-2 border-[#023324] flex items-center justify-center">
              <div className="w-5 h-5 bg-[#023324] rounded-full" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full border-2 border-[#023324] flex items-center justify-center">
              <div className="w-5 h-5 bg-[#023324] rounded-full" />
            </div>
          </div> */}

          <div className="mx-4 sm:mx-6 md:mx-8 md:ml-16 lg:ml-24 bg-[#023324] rounded-2xl md:rounded-l-3xl md:rounded-tr-3xl p-4 sm:p-6 md:p-8 min-h-[220px] sm:min-h-[260px] md:min-h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[420px] rounded-2xl overflow-hidden shadow-xl mx-auto md:mx-0">
              <Image
                src="/images/RECEPÇÃO .jpeg"
                alt="Recepção OTicket"
                width={420}
                height={420}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
