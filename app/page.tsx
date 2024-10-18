'use client'

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import axios from "axios";

export default function Home() {
  const handleSubmit = async () => {
    try {
      const respuesta = await axios.get("/api/openai");
      console.log(respuesta);
    } catch (error) {
      console.log("Ocurrió un error en el proceso", error);
    }
  }
  
  handleSubmit();
  

  return (
    <>
		<Header/>
		<Hero/>
    </>
  );
}
