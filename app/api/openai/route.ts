import next from "next";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest){
    
    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    }); 

    // Tomamos los datos que enviamos desde el form
	const { 
        businessName,
        businessDescription,
        landingGoal,
        targetAudience,
        beneficts,
        email,
        story,
        current_plan
     } = await request.json();


    //  console.log("PASA LA DEFINICION");

    try {
        // console.log("ENTRA AL TRY");
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Sos un experto en Copywriting, Landing Pages, y conversión con mas de 20 años de experiencia." },
                {
                    role: "user",
                    content: `
                        Crea los copys para una Landing Page para mi negocio “${businessName}”, (${businessDescription}) que incluya los siguientes campos, utilizando tecnicas de copywritting y apoyandote en referentes del ambito. 
                        
                        Mi nicho es: ${targetAudience}
    
                        Mi historia es: ${story}
                        
                        Los 4 principales beneficios que obtienen mis clientes son ${beneficts}
    
                        Es OBLIGATORIO que respetes la estructura del JSON y sea valido, y la respuesta no incluya NADA más que este, ya que va a ser convertido a un objeto JS.
    
                        {
                        "CTA": "Texto de llamada a la acción claro y directo que invite al usuario a ${landingGoal}. Orientado en primera persona (3/4 palabras como maximo)",
                        "Hero": {
                            "Titulo": "Gran resultado que le consigo a mis clientes",
                            "Descripcion": "Descripción breve que refuerce el valor, explicando como les consigo ese resultados"
                        },
                        "Beneficios": {
                            "Titulo": "Titulo para presentar los beneficios",
                            "Lista": [
                        (4 Beneficios)
                            {
                                "Titulo": "Título corto que describa un beneficio específico",
                                "Desc": "Descripción detallada del beneficio"
                            },
                            ]
                        },
                        "Testimonios": {
                            "Titulo": "Lo que dicen nuestros clientes",
                            "Lista": [
                        (5 Testimonios)
                            {
                                "Texto": "Comentario positivo sobre el negocio que aproveche para manejar posibles objeciones.",
                                "Nombre": "Nombre del cliente"
                            },
                            {
                                "Texto": "Otro comentario positivo.",
                                "Desc": "Más detalles sobre lo que les gustó.",
                                "Nombre": "Otro cliente"
                            }
                            ]
                        },
                        "Copy": {
                            "Titulo": "Eslogan o mensaje clave",
                            "Texto": "Texto que resuma la misión o visión del modelo de negocio. Apoyandose en mi historia y usando stroytelling."
                        },
                        "SeccionCTA": "Texto de llamada a la acción adicional al final.",
                        "Preguntas": {
                            "Titulo": "Preguntas frecuentes",
                            "Lista": [
                        (4 Preguntas)
                            {
                                "Pregunta": "Posible objecion del usuario manejada en forma de pregunta.",
                                "Respuesta": "Respuesta a la pregunta."
                            },
                            ]
                        }
                        }
                    `,
                },
            ],
        });
    
        // console.log(completion.choices[0].message);
        return NextResponse.json(completion.choices[0].message);

    } catch {
        console.log("ENTRA AL CATCH");
        return NextResponse.json("Ocurrio un error");
    }

}