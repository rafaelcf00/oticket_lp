"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast, viewportOnce } from "../utils/animations";

const team = [
  { name: "JOSÉ PEDRO", img: "/images/comerciais/jose.png" },
  { name: "PAULLA ZARATINI", img: "/images/comerciais/paulla.png" },
  { name: "JEFFERSON QUEIROZ", img: "/images/comerciais/jeff.png" },
  { name: "LÁZARO BORGES", img: "/images/comerciais/lazaro.png" },
  // { name: "EVANDRO MOTTA", img: "/images/comerciais/evandro.png" },
];

export default function OpsTeam() {
  return (
    <section className="py-20 bg-[#023324] text-white">
      <div className=" px-32">
        <motion.h3
          className="text-5xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          SEU GERENTE DE OPERAÇÕES DEDICADO. NÃO APENAS UM SUPORTE.
        </motion.h3>

        <div className=" w-full flex items-center justify-center ">
          <div className="w-full">
            <motion.div
              className="flex gap-8 flex-wrap "
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainerFast}
            >
              {team.map((m, i) => (
                <motion.div key={i} variants={fadeInUp} className="w-64 text-center">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden p-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image src={m.img} alt={m.name} width={260} height={260} className="object-cover rounded-xl" />
                  </motion.div>
                  {/* <div className="mt-3 font-semibold text-sm">{m.name}</div> */}
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 flex items-center gap-8 ">
              <div className="w-64 text-center">
              <div className="relative rounded-2xl overflow-hidden  p-2">
                  <Image src={"/images/comerciais/evandro.png"} alt="Evandro Motta" width={260} height={260} className="object-cover rounded-xl" />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-white/90 text-2xl">Produtores de alto nível não precisam de um call center. Precisam de um ponto focal que entenda a estratégia, o set-up e a complexidade de cada operação.</p>
                <div className="mt-6">
                  <a className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold">FALE COM UM COMERCIAL</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
