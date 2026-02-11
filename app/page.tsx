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
import Scrolling from "./components/Scrolling";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
// import TechnologyBlock from "./components/TechnologyBlock";

export default function Home() {
  return (
    <>
       <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
                <Link
                  target="_blank"
                  href={`https://wa.me/5516999924716`}
                  className="block"
                  aria-label="Contato WhatsApp"
                >
                  <div className="rounded-full bg-[#25D366] w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer hover:bg-opacity-90 shadow-lg active:scale-95 transition-transform">
                    <FaWhatsapp color="#fff" size={44} />
                  </div>
                </Link>
              </div>
      <HeroPage />
      <div className="relative">
        <div
          className="absolute right-0 top-0 bottom-0 z-0 w-0 md:w-[35%] md:min-w-[200px] lg:min-w-[280px] md:max-w-[280px] bg-[#023324] overflow-hidden -bottom-[200px] md:-bottom-[240px] hidden md:block"
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
      <Scrolling />

      <Products />
      {/* <TechnologyBlock /> */}
      <Directors />
      <OpsTeam />
      <ContactCTA />
      <FooterContact />
    </>
  );
}
