import Image from "next/image";

export default function Strategic({ imgSrc = "/images/strategic.png" }: { imgSrc?: string }) {
  return (
    <section className="py-20 md:py-28 bg-[#023324] text-white">
      <div className="  px-32 flex justify-between  gap-12 md:gap-16 items-center w-full h-full ">
        {/* Coluna esquerda: título e texto */}
        <div className="flex flex-col justify-center max-w-xl ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight uppercase">
            Para quem fatura acima de R$ 100.000, a escolha do parceiro é estratégica.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/95 leading-relaxed max-w-lg">
            É por isso que oferecemos mais do que uma plataforma: oferecemos a visão de
            quem vive o universo dos eventos e a segurança de quem entende o seu negócio.
          </p>
        </div>

        <div className=" w-full h-full  ">
          {/* <div className="relative z-10 w-full h-full  rounded-2xl   border border-red-900"
               >
            <Image
              src={imgSrc}
              alt="Dashboard estratégico OTicket"
              width={700}
              height={700}
              className="object-cover w-full h-full"
            />
          </div> */}

          {/* Logo otti (contorno branco) atrás do dashboard, canto inferior direito */}
          {/* <div
            className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-0 w-24 h-24 md:w-32 md:h-32 opacity-90"
            aria-hidden
          >
            <Image
              src="/images/otti_white.png"
              alt=""
              width={128}
              height={128}
              className="object-contain w-full h-full"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
