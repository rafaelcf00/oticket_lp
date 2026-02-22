"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "../utils/animations";
import Button from "./Button";

export default function Products() {
  return (
    <section
      id="produtos"
      className="py-12 pb-0 lg:pb-12 md:py-20 bg-[#023324] text-white overflow-hidden"
    >
      <div className="px-4 sm:px-6 md:px-12 lg:mx-64 lg:px-6">

        {/* TÍTULO */}
        <motion.h2
          className="text-3xl  md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          PRODUTOS
        </motion.h2>

        <div className="w-[200px] h-0.5 bg-white/90 mt-2" />

        {/* BLOCO 1 */}
        <motion.div
          className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-x-44 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >

          {/* TEXTO */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-y-4 w-full">
            <div>
              <h1 className="text-white text-2xl lg:text-4xl font-bold mb-3">
                GESTÃO DE BAR 360°
              </h1>

              <motion.div
                className="bg-[#055440] p-4 sm:p-6 text-center"
                variants={fadeInUp}
              >
                <p className="text-white text-base sm:text-lg lg:text-xl">
                  TICKETS PRODUTOS PRESENCIAL
                </p>
                <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                  CAIXAS MÓVEIS E FIXOS
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="bg-[#055440] p-4 sm:p-6 text-center">
              <p className="text-white text-base sm:text-lg lg:text-xl">
                CASHLESS PRODUTOS
              </p>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                CAIXAS MÓVEIS E FIXOS
              </p>
            </motion.div>
          </motion.div>

          {/* IMAGEM COM LOGO FUNDO - apenas desktop */}
          <motion.div
            variants={fadeInRight}
            className="hidden lg:block relative w-[600px] h-[500px] overflow-visible"
          >
            <Image
              src="/images/logo_icon.png"
              alt=""
              fill
              className="object-contain opacity-[0.06] scale-[5]"
              aria-hidden
            />
            <Image
              src="/images/produtos/maquinas.png"
              alt="Máquinas"
              fill
              className="object-contain z-10 scale-[3]"
            />
            <Image
              src="/images/produtos/cashless.png"
              alt="Bar"
              fill
              className="object-contain z-0 scale-[2.2] -mt-28 rotate-420 -ml-52"
            />
          </motion.div>
        </motion.div>

        {/* BLOCO 2 */}
        <motion.div
          className="mt-12 lg:mt-24 flex flex-col lg:flex-row gap-8 lg:gap-x-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >

          {/* IMAGEM COM LOGO FUNDO - apenas desktop */}
          <motion.div
            variants={fadeInLeft}
            className="hidden lg:block relative w-[600px] h-[500px] overflow-visible"
          >
            <Image
              src="/images/logo_icon.png"
              alt=""
              fill
              className="object-contain opacity-[0.06] scale-[5]"
              aria-hidden
            />
            <Image
              src="/images/produtos/maquinas.png"
              alt="Bar"
              fill
              className="object-contain z-10 scale-[3]"
            />
            <Image
              src="/images/produtos/tickets.png"
              alt="Bar"
              fill
              className="object-contain z-0 scale-[1] -rotate-28 -ml-52"
            />
          </motion.div>

          {/* TEXTO */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-y-4 w-full">
            <div>
              <h1 className="text-white text-xl lg:text-2xl mb-2">
                TICKETS PRESENCIAL
              </h1>

              <h1 className="text-white text-2xl lg:text-4xl font-bold mb-3">
                PONTO DE VENDA E APP
              </h1>

              <motion.div variants={fadeInUp} className="bg-[#055440] p-4 sm:p-6 text-center">
                <p className="text-white text-base sm:text-lg lg:text-xl">
                  VALIDAÇÃO DE INGRESSOS: CONTROLE DE ACESSO VIA APP OU CATRACA
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* BLOCO 3 */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-x-44 items-center mt-12 lg:mt-24 mb-12 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >

          {/* TEXTO */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-y-4 w-full">
            <div>
              <motion.h1
                variants={fadeInUp}
                className="text-white text-right text-xl sm:text-2xl lg:text-3xl font-bold mb-3"
              >
                + SOLUÇÕES
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 text-right"
              >
                PULSEIRAS
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-white text-right text-lg sm:text-xl lg:text-2xl font-bold mb-3"
              >
                TYVEK E TECIDO
              </motion.p>

              {/* BOTÃO */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-end mt-4 lg:mt-6"
              >
                <Button href="#contato" variant="dark" size="md">
                  QUERO OS PRODUTOS NO MEU EVENTO
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* IMAGEM */}
          <motion.div
            variants={fadeInRight}
            className="relative w-full h-[220px] sm:h-[280px] lg:w-[700px] lg:h-[350px] overflow-hidden lg:overflow-visible rounded-3xl lg:rounded-none"
          >
            <Image
              src="/images/produtos/produto3.webp"
              alt="Pulseiras"
              fill
              className="object-cover rounded-3xl z-10 lg:scale-[1.4]"
            />
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
