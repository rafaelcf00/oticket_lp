"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { to: "nossos-numeros", label: "Nossos Números" },
  { to: "eventos", label: "Eventos" },
  { to: "sobre", label: "Sobre nós" },
  { to: "produtos", label: "Produtos" },
  { to: "tecnologia", label: "Tecnologia" },
];

export default function HeroPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className="relative min-h-screen bg-center bg-cover flex justify-center"
      style={{
        backgroundImage: "url('/images/BANNER%20FULL.png')",
      }}
    >
      <motion.nav
        className="fixed top-4 md:top-8 left-1/2 z-[99999] -translate-x-1/2 bg-[#141f2a]/80 backdrop-blur-md rounded-full w-[92%] sm:w-[90%] max-w-6xl flex items-center justify-between px-4 sm:px-6 py-2.5 border border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ScrollLink to="nossos-numeros" smooth duration={400} offset={0} className="flex items-center gap-2 sm:gap-3 text-white cursor-pointer" onClick={closeMenu}>
          <Image
            src="/images/logo_header.webp"
            alt="oticket logo"
            width={150}
            height={150}
            className="object-contain h-10 w-auto sm:h-12 md:h-14"
          />
        </ScrollLink>

        <ul className="hidden md:flex gap-4 lg:gap-8 text-white/90 text-base lg:text-xl font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <ScrollLink
                to={item.to}
                smooth
                duration={400}
                offset={-80}
                className="hover:text-white transition-colors cursor-pointer"
                spy
                activeClass="text-white font-semibold"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <ScrollLink
            to="contato"
            smooth
            duration={400}
            offset={0}
            className="inline-block rounded-full font-semibold transition-colors bg-[#023324] text-white hover:bg-[#034a38] shadow-lg shadow-[#023324]/25 px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#023324]/50 hover:scale-105 active:scale-95"
          >
            Fale com um comercial
          </ScrollLink>
        </div>

        {/* Botão hamburger - só no mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </motion.nav>

      {/* Overlay + menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              className="fixed top-20 left-4 right-4 z-[99999] md:hidden bg-[#141f2a]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl py-4 px-4"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <ScrollLink
                      to={item.to}
                      smooth
                      duration={400}
                      offset={-80}
                      className="block py-3 px-4 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors text-base font-medium"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
                <li className="mt-2 pt-2 border-t border-white/20">
                  <ScrollLink
                    to="contato"
                    smooth
                    duration={400}
                    offset={0}
                    className="block py-3 px-4 rounded-xl bg-[#023324] text-white text-center font-semibold hover:bg-[#034a38] transition-colors"
                    onClick={closeMenu}
                  >
                    Fale com um comercial
                  </ScrollLink>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] md:min-h-screen pt-14">
        <motion.div
          className="text-center px-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
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
          <motion.div
            className="mt-6 md:mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ScrollLink
              to="nossos-numeros"
              smooth
              duration={400}
              offset={-80}
              className="inline-block rounded-full font-semibold transition-transform bg-[#023324] text-white hover:bg-[#034a38] shadow-lg shadow-[#023324]/25 px-6 py-2.5 md:px-8 md:py-3 text-lg md:text-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              SAIBA MAIS
            </ScrollLink>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
