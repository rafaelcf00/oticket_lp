"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";
import Button from "./Button";

export default function Strategic({ imgSrc = "/images/strategic.png" }: { imgSrc?: string }) {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#023324] text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 items-center">
        <motion.div
          className="flex flex-col justify-center max-w-2xl w-full text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight uppercase">
            Para quem fatura acima de R$ 100.000, a escolha do parceiro é estratégica.
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-xl">
            É por isso que oferecemos mais do que uma plataforma: oferecemos a visão de
            quem vive o universo dos eventos e a segurança de quem entende o seu negócio.
          </p>
          <motion.div
            className="mt-8 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <Button href="#contato" variant="white" size="md">
              FALAR COM UM ESPECIALISTA
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full h-full min-h-[200px] flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </section>
  );
}
