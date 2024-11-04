
"use client";
import Banner from "@/app/components/templateSections/Banner";
import Beneficios from "@/app/components/templateSections/Beneficios";
import Header from "@/app/components/templateSections/Header";
import Hero from "@/app/components/templateSections/Hero";
import MovingSpan from "@/app/components/templateSections/MovingSpan";
import Testimony from "@/app/components/templateSections/Testimony";
import Faqs from '@/app/components/templateSections/Faqs';

export default function Home() {

  return (
    <>
      <Header />
      <Hero titulo="Transformo empresas hacia la excelencia" descripcion="Con mi metodología única, ayudo a las empresas a alcanzar niveles de productividad y satisfacción del cliente que jamás imaginaron." />
      <MovingSpan />
      <Beneficios titulo="Beneficios de elegir Excelent">
        <ul>
      <li key={0}>undefined - undefined</li>
    
      <li key={1}>undefined - undefined</li>
    
      <li key={2}>undefined - undefined</li>
    
      <li key={3}>undefined - undefined</li>
    </ul>
      </Beneficios>
      <Testimony titulo="Lo que dicen nuestros clientes">
        <ul>
      <li key={0}>"undefined" - undefined</li>
    
      <li key={1}>"undefined" - undefined</li>
    
      <li key={2}>"undefined" - undefined</li>
    
      <li key={3}>"undefined" - undefined</li>
    
      <li key={4}>"undefined" - undefined</li>
    </ul>
      </Testimony>
      <Banner texts="¡Empieza tu viaje hacia la excelencia hoy mismo!" />
      <Faqs titulo="Preguntas frecuentes">
        <ul>
      <li key={0}><strong>undefined</strong>: undefined</li>
    
      <li key={1}><strong>undefined</strong>: undefined</li>
    
      <li key={2}><strong>undefined</strong>: undefined</li>
    
      <li key={3}><strong>undefined</strong>: undefined</li>
    </ul>
      </Faqs>
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
