
"use client";
import Banner from "@/app/components/sections/Banner";
import Beneficios from "@/app/components/sections/Beneficios";
import Header from "@/app/components/sections/Header";
import Hero from "@/app/components/sections/Hero";
import MovingSpan from "@/app/components/sections/MovingSpan";
import Testimony from "@/app/components/sections/Testimony";
import Faqs from '@/app/components/sections/Faqs';

export default function Home() {

  return (
    <>
      <Header />
      <Hero texts="[object Object]" />
      <MovingSpan />
      <Beneficios />
      <Testimony />
      <Banner />
      <Faqs />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
