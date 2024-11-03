"use client";

import CardTestimony from "@/app/components/CardTestimony";
import Banner from "@/app/components/sections/Banner";
import Beneficios from "@/app/components/sections/Beneficios";
import Header from "@/app/components/sections/Header";
import Hero from "@/app/components/sections/Hero";
import MovingSpan from "@/app/components/sections/MovingSpan";
import Testimony from "@/app/components/sections/Testimony";
import Faqs from '@/app/components/sections/Faqs';
import axios from "axios";

export default function Home() {
  const handleSubmit = async () => {
    try {
      const respuesta = await axios.get("/api/openai");
      console.log(respuesta);
    } catch (error) {
      console.log("Ocurrió un error en el proceso", error);
    }
  };

  handleSubmit();

  return (
    <>
      <Header />
      <Hero />
      <MovingSpan />
      <Beneficios />
      <Testimony />
      <Banner />
      <Faqs/>
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
