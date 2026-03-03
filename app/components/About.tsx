"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "../utils/animations";

export default function About() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const scheduleHide = (delay = 2000) => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
      hideTimeoutRef.current = null;
    }, delay);
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let player: any = playerRef.current;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          try {
            // create Vimeo player if not created yet
            // @ts-ignore
            if (!player && (window as any).Vimeo) {
              player = new (window as any).Vimeo.Player(iframe);
              playerRef.current = player;
            }
            if (player) {
              // attempt to play with sound (may be blocked by browser)
              player.setVolume?.(1).catch(() => {});
              player.play?.()
                .then(() => {
                  setIsPlaying(true);
                  setShowOverlay(true);
                  scheduleHide();
                })
                .catch(() => setIsPlaying(false));
            }
          } catch (e) {
            // ignore errors
          }
        } else {
          try {
            player?.pause?.();
            setIsPlaying(false);
            setShowOverlay(true);
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
          } catch (e) {}
        }
      });
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    io.observe(iframe);

    return () => {
      io.disconnect();
      try {
        player?.unload?.();
      } catch (e) {}
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    let player = playerRef.current;
    // create player if missing
    // @ts-ignore
    if (!player && (window as any).Vimeo) {
      // @ts-ignore
      player = new (window as any).Vimeo.Player(iframe);
      playerRef.current = player;
    }

    if (!player) return;

    try {
      if (isPlaying) {
        await player.pause();
        setIsPlaying(false);
        setShowOverlay(true);
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
      } else {
        await player.setVolume(1);
        await player.play();
        setIsPlaying(true);
        setShowOverlay(true);
        scheduleHide();
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="sobre" className="py-4 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl text-[#023324] mb-4 md:mb-6 font-bold">SOBRE NÓS</h2>

          <p className="text-[#023324]/95 max-w-lg leading-relaxed text-lg md:text-lg">
            A OTicket não é uma empresa de tecnologia que atende eventos. Nascemos da
            produção de eventos para criamos a solução que gostaríamos de ter. Nossa
            plataforma foi pensada para que a sua única preocupação seja a arte de produzir.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative w-full max-w-full md:max-w-[680px] bg-zinc-900 rounded-2xl overflow-visible shadow-lg">
            <div
              className="rounded-full "
              style={{ padding: '75% 0 0 0', position: 'relative' }}
              onMouseEnter={() => {
                if (hideTimeoutRef.current) {
                  clearTimeout(hideTimeoutRef.current);
                  hideTimeoutRef.current = null;
                }
                setShowOverlay(true);
              }}
              onMouseLeave={() => {
                if (isPlaying) scheduleHide();
              }}
            >
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1169730963?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&controls=0&playsinline=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="OTicket"
                className="rounded-2xl"
                allowFullScreen
              />
              {/* central play button overlay */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar vídeo' : 'Tocar vídeo'}
                className={`absolute inset-0 z-20 flex items-center justify-center focus:outline-none transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/90 shadow-lg flex items-center justify-center ${isPlaying ? 'opacity-40' : 'opacity-100'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#023324" width="36" height="36">
                    {isPlaying ? (
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    ) : (
                      <path d="M8 5v14l11-7z" />
                    )}
                  </svg>
                </div>
              </button>
            </div>
            {/* Otti subindo na parte direita do vídeo (rotacionado, “escalando”) */}
            <div
              className="absolute right-0 md:-right-18 top-[40%] z-10 w-16 h-16 md:w-24 md:h-24 hidden sm:block"
            >
              <Image
                src="/images/ottidescendo.png"
                alt=""
                width={96}
                height={96}
                className="object-contain drop-shadow-md"
              />
            </div>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        </motion.div>
      </div>
    </section>
  );
}
