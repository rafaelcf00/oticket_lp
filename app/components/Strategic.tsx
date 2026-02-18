"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";
import Button from "./Button";
import Image from "next/image";

export default function Strategic({ imgSrc = "/images/mockupdash.png" }: { imgSrc?: string }) {
  return (
    <section className=" bg-[#023324] text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:pl-16 xl:pl-32 lg:pr-0 flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-2 items-center">
        <motion.div
          className="flex flex-col justify-center max-w-2xl w-full text-center lg:text-left py-8 lg:py-12"
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
          className="w-full h-full  "
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image src="/images/mockupdash.png" alt="Recepção OTicket" width={1920} height={1080} className="object-cover w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[700px]" />
        </motion.div>
      </div>
    </section>
  );
}
