"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <div
      className="relative min-h-screen bg-center bg-cover flex justify-center"
      style={{
        backgroundImage: "url('/images/BANNER%20FULL.png')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/65" /> */}

      <nav className="fixed top-8 bg-[#141f2a]/70 rounded-full z-10   w-[90%] flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3 text-white">
          <Image
            src="/images/logo_header.webp"
            alt="oticket logo"
            width={150}
            height={150}
            className="object-contain "
          />
        </div>

        <ul className="hidden md:flex gap-8 text-white/90 text-xl font-medium">
          <li>Nossos Números</li>
          <li>Eventos</li>
          <li>Sobre nós</li>
          <li>Produtos</li>
          <li>Tecnologia</li>
        </ul>

        <div className="hidden md:flex">
          <a className="bg-[#023324] text-xl  text-white px-4 py-2 rounded-full font-medium">
            Fale com um comercial
          </a>
        </div>
      </nav>

      <main className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            SOLIDEZ DE MERCADO,
            <br />
            VISÃO DE QUEM PRODUZ.
          </h1>
          <motion.p
            className="mt-6 text-white/90 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Certas coisas não têm margem de erro. A parceira certa para proteger o
            patrimônio e a reputação do seu evento é uma delas.
          </motion.p>
          <motion.a
            href="#nossos-numeros"
            className="inline-block mt-8 bg-[#023324] text-2xl font-bold text-white px-8 py-3 rounded-full hover:bg-[#034a38] transition-colors"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            SAIBA MAIS
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
