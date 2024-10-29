import React from "react";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <section className="py-[80px] md:pt-[20px] md:pb-[100px]">
      <div className="jtm-container">
        <div className="flex items-center md:gap-[64px]">
          <div className="max-w-full w-[700px]">
            <h2 className="font-bold text-[#2C6FFF] text-[18px]">LUTA</h2>
            <h1 className="font-bold mt-[16px] text-[28px] leading-[110%]">
              Tu Landing Page perfecta, con solo unos clics. Más rapido, mejor y
              más barato.
            </h1>
            <p className="mt-[16px] mb-[32px] text-[16px] mx-auto text-[#111]/80">
              Lanza tu sitio web profesional en 2 minutos y sin complicaciones.
              Diseñado específicamente para profesionales de la salud, nuestra
              herramienta te permite crear una landing page atractiva y
              funcional a <strong>1/3 del precio de mercado</strong> y{" "}
              <strong>3 veces más efectiva</strong>.
            </p>
            <CustomButton customClasses="text-white" />
            <div className="mt-[8px] h-[40px]">
              <img src="/images/luta-review-hero.webp" alt="" />
            </div>
          </div>
          {false ? ( // Si el usuario marco que quiere un VSL
            <div className="bg-gray-300 max-w-full w-[900px] aspect-video mx-auto"></div>
          ) : (
            // Si el usuario no marco
            <div className="max-w-full w-[900px] aspect-square mx-auto">
              <img src="/images/luta-hero.webp" alt="Luta Landing Pages" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
