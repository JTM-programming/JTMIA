"use client";

import Banner from "@/components/sections/Banner";
import Beneficios from "@/components/sections/Beneficios";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import MovingSpan from "@/components/sections/MovingSpan";
import Plans from "@/components/sections/Plans";
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
      <MovingSpan/>
      <Beneficios/>
      <Banner/>
      <Plans/>
    </>
  );
}
