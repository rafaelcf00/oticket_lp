"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../utils/animations";
import Button from "./Button";

export default function FooterContact() {
  return (
    <footer id="contato" className="relative bg-[#063D2B] text-white pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
        <Image
          src="/images/otti_black.png"
          alt="Oticket watermark"
          width={700}
          height={700}
        />
      </div>

      <motion.div
        className="relative px-4 sm:px-6 md:px-12 lg:px-0 xl:px-0 max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap w-full justify-between gap-8 md:gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="w-full md:w-auto min-w-0 ">
          <h4 className="font-bold mb-4 text-xl sm:text-2xl">CONTATO</h4>
          <div className="text-sm text-white/80">
            <div>
              <p className="text-lg">(16) 9 9999-9999</p>
            </div>
            <div className="mt-2">
              <p className="text-lg">e-mail@oticket.com.br</p>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <h5 className="font-bold mb-3 text-xl sm:text-2xl">PRECISA DE AJUDA?</h5>
            <Button variant="white" size="md">
              TIRE SUAS DÚVIDAS
            </Button>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="">
          <h4 className="font-bold text-xl sm:text-2xl mb-4">
            FAÇA O DOWNLOAD DO NOSSO APLICATIVO!
          </h4>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Image src="/images/appstore.png" alt="App Store" width={120} height={40} className="h-10 w-auto" />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Image src="/images/googleplay.png" alt="Google Play" width={120} height={40} className="h-10 w-auto" />
            </motion.a>
          </div>
        </motion.div>

         <motion.div variants={fadeInUp} className="flex flex-col w-full md:w-auto">
          <h4 className="font-bold text-xl sm:text-2xl mb-4">REDES SOCIAIS</h4>
          <div className="flex gap-4 mb-8">
            <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <FaInstagram className="text-3xl text-white" />
            </motion.a>
            <motion.a href="#" aria-label="TikTok" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <FaTiktok className="text-3xl text-white" />
            </motion.a>
            <motion.a href="#" aria-label="YouTube" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <FaYoutube className="text-3xl text-white" />
            </motion.a>
            <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <FaLinkedin className="text-3xl text-white" />
            </motion.a>
          </div>
        </motion.div>

      

       

      
      </motion.div>

      <motion.div
        className="flex justify-center px-4 sm:px-6 pb-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md border border-white/30 rounded-2xl p-4 sm:p-6 bg-white/5 backdrop-blur shadow-xl">
          <h4 className="text-center font-bold mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl">
            QUERO LEVAR A OTICKET PARA MEU EVENTO
          </h4>

          <form className="space-y-4">
            <input
              className="w-full rounded-full px-4 py-3 text-[#023324] bg-white placeholder:text-[#023324]/70 border-0 focus:ring-2 focus:ring-white/50 transition-shadow"
              placeholder="Nome"
            />
            <input
              className="w-full rounded-full px-4 py-3 text-[#023324] bg-white placeholder:text-[#023324]/70 border-0 focus:ring-2 focus:ring-white/50 transition-shadow"
              placeholder="Instagram da sua empresa"
            />
            <input
              className="w-full rounded-full px-4 py-3 text-[#023324] bg-white placeholder:text-[#023324]/70 border-0 focus:ring-2 focus:ring-white/50 transition-shadow"
              placeholder="Whatsapp para contato"
            />

            <div className="flex justify-center pt-2">
              <Button variant="white" size="md">
                COMEÇAR AGORA
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </footer>
  );
}
