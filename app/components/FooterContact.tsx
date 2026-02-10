import Image from "next/image";

export default function FooterContact() {
  return (
    <footer className="bg-emerald-900 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <h4 className="font-semibold mb-4">CONTATO</h4>
          <div className="text-sm text-emerald-100/90">
            <div>(16) 9 9999-9999</div>
            <div className="mt-2">e-mail: oticket@oticket.com.br</div>
          </div>

          <div className="mt-8">
            <h5 className="font-semibold mb-2">PRECISA DE AJUDA?</h5>
            <a className="inline-block bg-white text-emerald-900 px-4 py-2 rounded-full font-medium">TIRE SUAS DÚVIDAS</a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-4">REDES SOCIAIS</h4>
          <div className="flex gap-4 text-white/90 mb-6">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">IG</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">TT</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">YT</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">IN</div>
          </div>

          <h4 className="font-semibold mb-3">FAÇA O DOWNLOAD DO NOSSO APLICATIVO!</h4>
          <div className="flex gap-3">
            <div className="w-[120px] h-10 bg-white/10 rounded flex items-center justify-center">AppStore</div>
            <div className="w-[120px] h-10 bg-white/10 rounded flex items-center justify-center">Google Play</div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md border rounded-lg p-6 bg-emerald-800/60">
            <h4 className="text-center font-semibold mb-4">QUERO LEVAR A OTICKET PARA MEU EVENTO</h4>

            <form className="space-y-4">
              <input className="w-full rounded-full px-4 py-2 text-emerald-900" placeholder="Nome" />
              <input className="w-full rounded-full px-4 py-2 text-emerald-900" placeholder="Instagram da sua empresa" />
              <div className="text-xs text-emerald-100/80">Exemplo: @oticket</div>
              <input className="w-full rounded-full px-4 py-2 text-emerald-900" placeholder="Whatsapp para contato" />
              <div className="text-xs text-emerald-100/80">Exemplo: (xx) x xxxx-xxxx</div>

              <div className="flex justify-center">
                <button type="button" className="bg-white text-emerald-900 px-6 py-2 rounded-full font-semibold">COMEÇAR AGORA</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute right-8 bottom-36">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-emerald-900 shadow-lg">WA</div>
      </div>
    </footer>
  );
}
