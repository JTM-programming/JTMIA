import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { folderName, copies } = await req.json();

    console.log("nombre de carpeta recibido en createProyectFOlder", folderName)
    console.log("copies recividos en createProyectFOlder", copies)

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
      ${copies}
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
`;

    // Escribe el archivo `page.tsx` con el contenido
    fs.writeFileSync(filePath, fileContent, 'utf8');

    return NextResponse.json({ message: `Carpeta y archivo page.tsx creados en app/pages/${folderName}` });
  } catch (error) {
    return NextResponse.json({ message: 'Error al crear la carpeta o el archivo', error }, { status: 500 });
  }
}
