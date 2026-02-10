import Image from "next/image";
import HeroPage from "./components/Hero";
import Numbers from "./components/Numbers";
import Brands from "./components/Brands";
import About from "./components/About";
import Mission from "./components/Mission";
import Strategic from "./components/Strategic";
import WhyChoose from "./components/WhyChoose";
import Products from "./components/Products";
import Directors from "./components/Directors";
import OpsTeam from "./components/OpsTeam";
import ContactCTA from "./components/ContactCTA";
import FooterContact from "./components/FooterContact";

export default function Home() {
  return (
    <>
      <HeroPage />
      <div className="relative">
        {/* Faixa verde: Numbers + Brands + desce um pouco no About (vídeo fica por cima) */}
        <div
          className="absolute right-0 top-0 bottom-0 z-0 w-[35%] min-w-[280px] max-w-[280px] bg-[#023324] overflow-hidden -bottom-[200px] md:-bottom-[240px]"
          style={{
            backgroundSize: "12px 12px",
            backgroundPosition: "0 0, 6px 0, 6px -6px, -6px 6px",
          }}
        />
        <Numbers />
        <Brands />
      </div>
      <About />
      <Mission />
      <Strategic />
      <WhyChoose />
      <Products />
      {/* <div className="bg-white h-[300px]">
          aa
      </div> */}
      <Directors />
      <OpsTeam />
      {/* <ContactCTA /> */}
      {/* <FooterContact /> */}
    </>
  );
}
