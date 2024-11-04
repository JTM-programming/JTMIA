
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
      <Hero titulo="Transformación personal garantizada" descripcion="Te ayudo a descubrir tu verdadero potencial y a alcanzar tus metas, dejando atrás las limitaciones." />
      <MovingSpan />
      <Beneficios texts="[object Object]" />
      <Testimony texts="[object Object]" />
      <Banner texts="¡Inicia tu viaje de transformación ahora mismo!" />
      <Faqs texts="[object Object]" />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
