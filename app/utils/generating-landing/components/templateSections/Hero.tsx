import React from "react";
import ClientsButton from '@/app/utils/generating-landing/components/ClientsButton'

interface HeroProps {
  titulo: string, 
  descripcion: string, 
  proyecto: string
}

const Hero = ({titulo, descripcion, proyecto}: HeroProps) => {

  const businessName = proyecto
					.replace(/-/g, ' ') || ' ';

  return (
    <section className="py-[60px] pt-[20px] md:pb-[60px]">
      <div className="jtm-container">
        <div className="flex items-center flex-col-reverse md:flex-row gap-[32px]">
          <div className="max-w-full w-[700px]">
            <h2 className="font-bold luta-text-color text-[18px] uppercase">{businessName}</h2>
            <h1 className="font-bold mt-[16px] text-[28px] leading-[110%]">
              {titulo}
            </h1>
            <p className="mt-[16px] mb-[32px] text-[16px] mx-auto luta-text-color">
              {descripcion}
            </p>
            <ClientsButton customClasses="text-white" />
          </div>
          {false ? ( // Si el usuario marco que quiere un VSL
            <div className="bg-gray-300 max-w-full w-[900px] aspect-video mx-auto"></div>
          ) : (
            // Si el usuario no marco
            <div className="max-w-full flex items-center justify-center size-full md:w-[900px] aspect-square mx-auto object-contain h-full">
              <img className="block" src={`https://yvixjgsliwyzmngtcsra.supabase.co/storage/v1/object/public/landings/${proyecto}/image1.jpg`} alt="NOMBRE NEGOCIO" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
