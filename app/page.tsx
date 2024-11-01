"use client";

import CardTestimony from "@/app/components/CardTestimony";
import Banner from "@/app/components/sections/Banner";
import Beneficios from "@/app/components/sections/Beneficios";
import Header from "@/app/components/sections/Header";
import Hero from "@/app/components/sections/Hero";
import MovingSpan from "@/app/components/sections/MovingSpan";
import Plans from "@/app/components/sections/Plans";
import Testimony from "@/app/components/sections/Testimony";
import axios from "axios";
import Faqs from '@/app/components/sections/faqs';

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
    </>
  );
}
