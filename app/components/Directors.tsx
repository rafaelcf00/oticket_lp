import Image from "next/image";

const directors = [
  { name: "LEONARDO TAVEIRA", role: "DIRETOR COMERCIAL", img: "/images/diretores/leo.png" },
  { name: "CAIRO FREITAS", role: "DIRETOR FINANCEIRO", img: "/images/diretores/cairo.png" },
  { name: "JOÃO PEDRO ARANTES", role: "DIRETOR ESTRATÉGICO", img: "/images/diretores/joao.png" },
  { name: "RICARDO SOUZA", role: "DIRETOR DE TECNOLOGIA", img: "/images/diretores/ricardo.png" },
];

export default function Directors() {
  return (
    <section className="py-20 bg-[#023324] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <h3 className="text-5xl mb-4 text-white font-bold">DIRETORES</h3>
          <p className="text-white/90 text-xl">À frente da OTicket, diretores com experiência prática e visão de mercado, onde não há espaço para margem de erro.</p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          {directors.map((d, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative rounded-2xl overflow-hidden  p-3">
                <Image src={d.img} alt={d.name} width={260} height={260} className="object-cover rounded-xl" />
              </div>
              {/* <div className="mt-4">
                <div className="font-semibold">{d.name}</div>
                <div className="text-sm text-emerald-100/80">{d.role}</div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
