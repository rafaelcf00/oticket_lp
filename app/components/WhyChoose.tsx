"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function WhyChoose() {
  return (
    <section id="eventos" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute -left-16 md:-left-24 top-0 z-10 hidden sm:block opacity-60 md:opacity-100">
              <Image
                src="/images/ottidescendo.png"
                alt=""
                width={96}
                height={96}
                className="object-contain drop-shadow-md w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
              />
            </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl lg:text-4xl xl:text-4xl text-[#023324] font-bold text-center mb-4 md:mb-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          POR QUE PRODUTORES DE ALTO NÍVEL ESCOLHEM
          <br />
          A OTICKET?
        </motion.h2>

        <motion.p
          className="text-center text-[#023324]/90 max-w-3xl text-base  md:text-xl mx-auto mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          A OTicket foi concebida para ser a extensão da sua visão, garantindo que cada
          detalhe da operação eleve a experiência do seu público e proteja a sua reputação.
        </motion.p>


        {/* Grid 2x2 com bordas sólidas no estilo jogo da velha */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="p-0 pb-4 lg:pb-0  md:p-8 lg:p-12 border-b-2 md:border-r-2 border-[#023324]">
            <h3 className="text-center text-xl  md:text-xl lg:text-2xl uppercase text-[#023324] font-bold">A AGILIDADE FINANCEIRA QUE SUA OPERAÇÃO EXIGE</h3>
            <p className="mt-2 sm:mt-3 md:mt-4 text-[#023324]/90 max-w-lg text-base md:text-lg lg:text-xl text-center mx-auto">Com o Repasse em D+1, garantimos uma Gestão de Fluxo de Caixa Otimizada.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-4 sm:p-6 md:p-8 lg:p-12 border-b-2 md:border-b-2 border-[#023324]">
            <h3 className="text-center text-xl md:text-xl lg:text-2xl uppercase text-[#023324] font-bold">INTELIGÊNCIA OPERACIONAL EM TEMPO REAL</h3>
            <p className="mt-2 md:mt-4 text-[#023324]/90 max-w-lg text-base  md:text-lg lg:text-xl text-center">Tenha o controle absoluto na palma da sua mão. Com dados completos da operação, você acessa informações cruciais sobre estoque, consumo, público e margem.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-4 sm:p-6 md:p-8 lg:p-12 border-b-2 md:border-b-2 border-[#023324] lg:border-b-0  md:border-r-2 border-[#023324]">
            <h3 className="text-center text-xl md:text-xl lg:text-2xl uppercase text-[#023324] font-bold">ASSESSORIA PERSONALIZADA E PROATIVA</h3>
            <p className="mt-2  md:mt-4 text-[#023324]/90 lg:max-w-lg text-base lg:text-xl text-center mx-auto">Esqueça o suporte genérico. Nossos Assessores Exclusivos são mais do que gerentes de conta; são consultores estratégicos que compreendem a complexidade do seu evento.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-4 sm:p-6 md:p-8 lg:p-12 ">
            <h3 className="text-center text-xl  lg:text-2xl uppercase text-[#023324] font-bold">INFRAESTRUTURA ROBUSTA E CONTROLE TOTAL</h3>
            <p className="mt-2  md:mt-4 text-[#023324]/90 lg:max-w-lg text-base md:text-lg lg:text-xl text-center mx-auto">Nossa infraestrutura AWS oferece a escalabilidade, segurança e estabilidade de nível enterprise que seu evento de grande porte demanda.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
