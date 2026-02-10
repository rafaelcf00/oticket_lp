"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { viewportOnce } from "../utils/animations";

export default function Mission() {
  return (
    <section className="bg-white">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="pl-32 pb-12">
          {/* NOSSA MISSÃO */}
          <div className="flex flex-col items-start ">
            <div className="flex items-center ">
            <div className="shrink-0 mt-1 w-32 h-32  flex items-center justify-center   overflow-hidden">
              <Image
                src="/images/MISSÃO.png"
                alt=""
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />

            </div>
            <div>
            <h4 className="text-2xl text-[#023324] mb-3 font-bold">NOSSA MISSÃO</h4>
            </div>
            </div>
            <div className="-mt-4">
              <p className="text-[#023324]/95 leading-relaxed max-w-md text-lg ml-6">
              Ser o parceiro confiável dos produtores de eventos, com soluções completas e inovadoras, dados confiáveis e foco em uma experiência excepcional do início ao fim.
              </p>
              <div className="mt-4 ml-6 w-64 h-0.5 bg-[#023324]" />
            </div>
          </div>

          {/* NOSSA VISÃO */}
          <div className="flex flex-col items-start ">
            <div className="flex items-center ">
            <div className="shrink-0 mt-1 w-32 h-32  flex items-center justify-center   overflow-hidden">
              <Image
                src="/images/VISÃO.png"
                alt=""
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />

            </div>
            <div>
            <h4 className="text-2xl text-[#023324] mb-3 font-bold">NOSSA VISÃO</h4>
            </div>
            </div>
            <div className="-mt-4">
              <p className="text-[#023324]/95 leading-relaxed max-w-md text-lg ml-6">
              Ser reconhecida nacionalmente como a solução completa em gestão de eventos, com excelência no atendimento, inovação contínua e experiências memoráveis.
              </p>
              <div className="mt-4 ml-6 w-64 h-0.5 bg-[#023324]" />
            </div>
          </div>

          {/* NOSSOS VALORES */}
          <div className="flex flex-col items-start ">
            <div className="flex items-center ">
            <div className="shrink-0 mt-1 w-32 h-32  flex items-center justify-center   overflow-hidden">
              <Image
                src="/images/VALORES.png"
                alt=""
                width={128}
                height={128}
                className="object-contain w-full h-full"
              />

            </div>
            <div>
            <h4 className="text-2xl text-[#023324] mb-3 font-bold">NOSSOS VALORES</h4>
            </div>
            </div>
            <div className="-mt-4">
              <p className="text-[#023324]/95 leading-relaxed max-w-md text-lg ml-6">
              Priorizar a satisfação do cliente com excelência no atendimento, qualidade, parceria, inovação constante e compromisso com o sucesso de cada evento.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna direita: fundo #023324 + círculos + imagem RECEPÇÃO */}
        <div className="relative bg-[#023324] w-full h-full flex items-center justify-center">
          {/* <div className="absolute left-0 top-8 -translate-x-1/2 flex flex-col items-center gap-12 z-10">
            <div className="w-10 h-10 bg-white rounded-full border-2 border-[#023324] flex items-center justify-center">
              <div className="w-5 h-5 bg-[#023324] rounded-full" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full border-2 border-[#023324] flex items-center justify-center">
              <div className="w-5 h-5 bg-[#023324] rounded-full" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full border-2 border-[#023324] flex items-center justify-center">
              <div className="w-5 h-5 bg-[#023324] rounded-full" />
            </div>
          </div> */}

          <div className="ml-12 md:ml-24 bg-[#023324] rounded-l-3xl rounded-tr-3xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/RECEPÇÃO .jpeg"
                alt="Recepção OTicket"
                width={420}
                height={420}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
