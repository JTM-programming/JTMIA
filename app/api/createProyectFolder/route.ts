import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { folderName } = await req.json();
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
    const fileContent = `import React from 'react';

export default function Page() {
  return (
    <div>
      <h1>Bienvenido a ${folderName}</h1>
      <p>Esta es una página generada dinámicamente.</p>
    </div>
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
