"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white relative">
        <div
              className="absolute -left-24 top-0 z-10  "
            >
              <Image
                src="/images/ottidescendo.png"
                alt=""
                width={96}
                height={96}
                className="object-contain drop-shadow-md w-64 h-64"
              />
            </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-[#023324] font-bold text-center mb-6"
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
          className="text-center text-[#023324]/90 max-w-3xl text-xl mx-auto mb-12"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="p-8 md:p-12 border-b-2 md:border-r-2 border-[#023324]">
            <h3 className="text-center md:text-center text-xl md:text-2xl uppercase text-[#023324] font-bold">A AGILIDADE FINANCEIRA QUE SUA OPERAÇÃO EXIGE</h3>
            <p className="mt-4 text-[#023324]/90 max-w-lg text-lg md:text-xl text-center mx-auto">Com o Repasse em D+1, garantimos uma Gestão de Fluxo de Caixa Otimizada.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-8 md:p-12 border-b-2 md:border-b-2 border-[#023324]">
            <h3 className="text-center md:text-center text-xl md:text-2xl uppercase text-[#023324] font-bold">INTELIGÊNCIA OPERACIONAL EM TEMPO REAL</h3>
            <p className="mt-4 text-[#023324]/90 max-w-lg text-lg md:text-xl md:text-center">Tenha o controle absoluto na palma da sua mão. Com dados completos da operação, você acessa informações cruciais sobre estoque, consumo, público e margem.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-8 md:p-12 md:border-r-2 border-[#023324]">
            <h3 className="text-center md:text-center text-xl md:text-2xl uppercase text-[#023324] font-bold">ASSESSORIA PERSONALIZADA E PROATIVA</h3>
            <p className="mt-4 text-[#023324]/90 max-w-lg text-lg md:text-xl md:text-center">Esqueça o suporte genérico. Nossos Assessores Exclusivos são mais do que gerentes de conta; são consultores estratégicos que compreendem a complexidade do seu evento.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-8 md:p-12">
            <h3 className="text-center md:text-center text-xl md:text-2xl uppercase text-[#023324] font-bold">INFRAESTRUTURA ROBUSTA E CONTROLE TOTAL</h3>
            <p className="mt-4 text-[#023324]/90 max-w-lg text-lg md:text-xl md:text-center">Nossa infraestrutura AWS oferece a escalabilidade, segurança e estabilidade de nível enterprise que seu evento de grande porte demanda.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
