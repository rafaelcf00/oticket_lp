"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast, viewportOnce } from "../utils/animations";

const products = [
  { title: "TICKETS", desc: "O ingresso OTicket garante acesso seguro ao evento, sendo a base do controle.", img: "/images/produtos/tickets.png" },
  { title: "MÁQUINAS", desc: "Máquinas próprias de vendas garantem agilidade e eficiência.", img: "/images/produtos/maquinas.png" },
  { title: "CASHLESS", desc: "Sistema cashless com caixas fixos e móveis impulsiona a faturação do evento.", img: "/images/produtos/cashless.png" },
  { title: "PULSEIRAS", desc: "A pulseira OTicket conecta o público ao evento com rapidez e segurança.", img: "/images/produtos/pulseiras.png" },
  { title: "TOTEM", desc: "O totem OTicket agiliza e organiza a experiência do público com operação simples e intuitiva.", img: "/images/produtos/totem.png" },
];

export default function Products() {
  return (
    <section className="py-20 bg-[#023324] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          PRODUTOS OTICKET
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerFast}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border-2 border-white/90 p-4 md:p-5 bg-white/5 flex flex-col min-h-0"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {/* Área da imagem: bem alta (min-h) + proporção, imagem preenche tudo (object-cover) */}
              <div className="relative w-full aspect-4/3 min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[250px] shrink-0 rounded-xl overflow-hidden bg-white/5">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 md:mt-5 text-base md:text-lg font-bold tracking-wide uppercase">{p.title}</h3>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="#"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#023324] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            QUERO OS PRODUTOS NO MEU EVENTO
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
