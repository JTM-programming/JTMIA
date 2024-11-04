import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { folderName, copies } = await req.json();

    console.log("Nombre de carpeta recibido en createProyectFolder:", folderName);
    console.log("Copies recibidos en createProyectFolder:", copies);

    const folderPath = path.join(process.cwd(), 'app/pages', folderName || 'nueva_carpeta');

    // Crea la carpeta si no existe
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    } else {
      return NextResponse.json({ message: 'La carpeta ya existe' }, { status: 400 });
    }

    // Define la ruta para el archivo `page.tsx`
    const filePath = path.join(folderPath, 'page.tsx');

    // Contenido para el archivo `page.tsx`
    const fileContent = `
"use client";
import Banner from "@/app/components/templateSections/Banner";
import Beneficios from "@/app/components/templateSections/Beneficios";
import Header from "@/app/components/templateSections/Header";
import Hero from "@/app/components/templateSections/Hero";
import MovingSpan from "@/app/components/templateSections/MovingSpan";
import Testimony from "@/app/components/templateSections/Testimony";
import Faqs from "@/app/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = ${JSON.stringify(copies.Beneficios.Lista)};
  const testimoniosData = ${JSON.stringify(copies.Testimonios.Lista)};
  const preguntasData = ${JSON.stringify(copies.Preguntas.Lista)};

  return (
    <>
      <Header />
      <Hero titulo="${copies.Hero.Titulo}" descripcion="${copies.Hero.Descripcion}" />
      <MovingSpan span="${folderName}" />
      <Beneficios titulo="${copies.Beneficios.Titulo}" beneficios={beneficiosData} />
      <Testimony titulo="${copies.Testimonios.Titulo}" testimonios={testimoniosData} />
      <Banner text="${copies.SeccionCTA}" />
      <Faqs titulo="${copies.Preguntas.Titulo}" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
`;

    // Escribe el archivo `page.tsx` con el contenido
    fs.writeFileSync(filePath, fileContent, 'utf8');

    return NextResponse.json({ message: `Carpeta y archivo page.tsx creados en app/pages/${folderName}` });
  } catch (error) {
    return NextResponse.json({ message: 'Error al crear la carpeta o el archivo', error }, { status: 500 });
  }
}
