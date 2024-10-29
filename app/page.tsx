"use client";

import CardTestimony from "@/components/CardTestimony";
import Banner from "@/components/sections/Banner";
import Beneficios from "@/components/sections/Beneficios";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import Testimony from "@/components/sections/Testimony";
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
      <Beneficios />
      <Testimony />
      <Banner />
      <Plans />
    </>
  );
}
