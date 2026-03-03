"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { viewportOnce } from "../utils/animations";
const logos = [
  "/images/marcas/SANTO GOLE.png",
  "/images/marcas/VIRA COPOS.png",
  "/images/marcas/carnavalsurreal.png",
  "/images/marcas/festivalgastron.png",
  "/images/marcas/rodeioolimpia.png",
  "/images/marcas/HOSPITAL DE AMOR.png",
  "/images/marcas/TED.png",
  "/images/marcas/HALLEL.png",
  "/images/marcas/TOATOA.png",
  "/images/marcas/AMAZON SOUL.png",
];

// detection moved inside LogoSet component so hooks can be used in component scope
function LogoSet() {
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(".brand-img"));
    if (!imgs.length) return;

    const analyze = (img: HTMLImageElement) => {
      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return;

        const maxDim = 100;
        const cw = Math.min(w, maxDim);
        const ch = Math.round((h / w) * cw) || cw;

        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, cw, ch);
        const data = ctx.getImageData(0, 0, cw, ch).data;

        let sum = 0;
        let count = 0;
        const step = 4 * 6; // sample every 6th pixel
        for (let i = 0; i < data.length; i += step) {
          const alpha = data[i + 3];
          if (alpha < 16) continue;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          sum += lum;
          count++;
          if (count > 800) break;
        }

        const avg = count ? sum / count : 0;
        if (avg > 240) img.classList.add("invert");
      } catch (e) {
        // ignore
      }
    };

    imgs.forEach((img) => {
      if (img.complete) analyze(img);
      else img.addEventListener("load", () => analyze(img), { once: true });
    });
  }, []);

  return (
    <div className="flex shrink-0 items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-12 px-4">
      {logos.map((src, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-24 h-24  md:w-24 md:h-24 lg:w-32 lg:h-32 shrink-0"
        >
          <Image
            src={src}
            alt={`marca-${i}`}
            width={200}
            height={200}
            className="brand-img object-contain w-full h-full opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
}

export default function Brands() {
  return (
    <section className="py-2 md:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <motion.h3
          className="text-3xl lg:text-4xl text-[#023324] mb-6 md:mb-8 font-bold text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          MARCAS QUE CONFIAM NO NOSSO TRABALHO
        </motion.h3>

        <div className="relative w-full overflow-hidden">
          {/* Gradiente esquerda: branco → transparente */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            <LogoSet />
            <LogoSet />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
