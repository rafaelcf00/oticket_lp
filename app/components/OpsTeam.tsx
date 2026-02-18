"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainerFast, viewportOnce } from "../utils/animations";
import Button from "./Button";

const team = [
  { name: "JOSÉ PEDRO", img: "/images/comerciais/jose.png" },
  { name: "PAULLA ZARATINI", img: "/images/comerciais/paulla.png" },
  { name: "JEFFERSON QUEIROZ", img: "/images/comerciais/jeff.png" },
  { name: "LÁZARO BORGES", img: "/images/comerciais/lazaro.png" },
  // { name: "EVANDRO MOTTA", img: "/images/comerciais/evandro.png" },
];

export default function OpsTeam() {
  return (
    <section className="py-12 md:py-20 bg-[#023324] text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-32 ">
        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 text-center md:text-left max-w-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          SEU GERENTE DE OPERAÇÕES DEDICADO. NÃO APENAS UM SUPORTE.
        </motion.h3>

        <div className="w-full flex flex-col items-center ">
          <div className="w-full mt-6">
            <motion.div
              className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainerFast}
            >
              {team.map((m, i) => (
                <motion.div key={i} variants={fadeInUp} className=" text-center shrink-0">
                  <motion.div
                    className="relative rounded-2xl  p-1 sm:p-2 w-full "
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image src={m.img} alt={m.name} width={260} height={260} className="" />
                  </motion.div>
                  {/* <div className="mt-3 font-semibold text-sm">{m.name}</div> */}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.div
                variants={fadeInLeft}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center shrink-0 relative"
              >
                <div className="relative rounded-2xl p-2">
                  <div className="absolute top-0 -right-8 sm:-right-12 md:-right-21 z-10">
                    <Image src="/images/ottidescendo.png" alt="Oticket Tecnologia" width={100} height={100} className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-36 md:h-36" />
                  </div>
                  <Image src={"/images/comerciais/evandro.png"} alt="Evandro Motta" width={260} height={260} className=" " />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-1 text-center md:text-left max-w-2xl mt-4 md:mt-6 md:ml-12 lg:ml-24 px-2 sm:px-0"
              >
                <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Produtores de alto nível não precisam de um call center. Precisam de um ponto focal que entenda a estratégia, o set-up e a complexidade de cada operação.</p>
                <motion.div
                  className="mt-6 flex justify-center md:justify-start"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Button href="#contato" variant="dark" size="md">
                    FALE COM NOSSO TIME
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
