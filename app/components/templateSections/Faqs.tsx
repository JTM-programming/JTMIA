'use client'
import { useState } from "react";

type Pregunta = {
  Pregunta: string;
  Respuesta: string;
};

type FaqsProps = {
  titulo: string;
  preguntas: Pregunta[];
};

export default function Faqs({ titulo, preguntas }: FaqsProps) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (pregunta: string) => {
    setOpen(open === pregunta ? null : pregunta);
  };

  return (
    <div className="max-w-[900px] px-4 mx-auto py-[60px] md:py-[80px]">
      <h2 className="text-[40px] text-center mb-[40px] font-extrabold luta-text-color leading-[110%] tracking-[-.5px] max-w-[990px] mx-auto text-balance capitalize">
        {titulo}
      </h2>
      {preguntas.map((item) => (
        <div
          key={item.Pregunta}
          onClick={() => toggle(item.Pregunta)}
          className="tc-accordion-item w-full cursor-pointer p-[20px] border-b last:border-none border-[#031221]/50 mb-[10px]"
        >
          <h3 className="text-[16px] md:text-[18px] luta-text-color lg:text-[20px] flex justify-between items-center">
            {item.Pregunta}
            <svg
              className={`${
                open === item.Pregunta ? 'rotate-45' : ''
              } min-w-[20px] size-[20px] transition-all duration-300`}
              fill="#031221"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
            </svg>
          </h3>
          <div
            className={`overflow-hidden duration-500 transition-all ${
              open === item.Pregunta ? 'max-h-[2000px]' : 'max-h-0'
            }`}
          >
            <p className="luta-text-color text-[16px] pt-[10px] whitespace-pre-wrap">
              {item.Respuesta}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
