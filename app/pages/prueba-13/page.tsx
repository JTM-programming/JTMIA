
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Crecimiento personal acelerado","Desc":"Vas a experimentar un desarrollo emocional y personal que te permitirá superar barreras y alcanzar tus metas más ambiciosas."},{"Titulo":"Herramientas prácticas","Desc":"Te ofrezco técnicas y herramientas fáciles de implementar que podrás utilizar en tu día a día para mejorar tu bienestar."},{"Titulo":"Soporte emocional constante","Desc":"Contarás con un acompañamiento personalizado que te mantendrá motivado y en el camino correcto hacia tus objetivos."},{"Titulo":"Red de apoyo","Desc":"Te integrarás a una comunidad de personas que, como tú, buscan el crecimiento personal y emocional, compartiendo experiencias y aprendizajes."}];
  const testimoniosData = [{"Texto":"¡Gracias a prueba 13 he podido superar mis miedos y enfrentar desafíos que antes veía imposibles!","Nombre":"Lucía G."},{"Texto":"La metodología es increíble, nunca había sentido un cambio tan profundo en tan poco tiempo.","Nombre":"Carlos M."},{"Texto":"Prueba 13 realmente me dio las herramientas que necesitaba para volver a ser yo mismo.","Nombre":"Ana P."},{"Texto":"La comunidad creada es un plus. Nunca me sentí tan apoyado en mi proceso.","Nombre":"Javier L."},{"Texto":"El acompañamiento fue fundamental. Me siento más fuerte y capaz que nunca.","Nombre":"Marta R."}];
  const preguntasData = [{"Pregunta":"¿Cómo funciona el proceso de acompañamiento?","Respuesta":"Nuestro proceso es personalizado. Después de una evaluación inicial, diseñamos un plan adaptado a tus necesidades y objetivos."},{"Pregunta":"¿Es necesario tener experiencia previa?","Respuesta":"No necesitas experiencia previa. Nuestra metodología está diseñada para acompañar a todos, sin importar su punto de partida."},{"Pregunta":"¿Cuánto tiempo toma ver resultados?","Respuesta":"El tiempo varía según cada persona, pero muchos de nuestros clientes empiezan a notar cambios significativos en las primeras semanas."},{"Pregunta":"¿Puedo acceder a sesiones online?","Respuesta":"Sí, ofrecemos sesiones online para que puedas participar desde la comodidad de tu hogar."}];

  return (
    <>
      <Header />
      <Hero titulo="Transformo tu vida emocional" descripcion="A través de mi metodología única, te ayudo a reconectar contigo mismo y encontrar el equilibrio que anhelas." proyecto="prueba-13" />
      <MovingSpan span="prueba-13" />
      <Beneficios titulo="Los beneficios que obtendrás" beneficios={beneficiosData} proyecto="prueba-13" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="No esperes más, toma el control de tu vida hoy mismo." />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80 capitalize">
        ©prueba 13 2024. Todos los derechos reservados
      </p>
      <style>{`
        .luta-text-color {
          color: #000000;
        }
        .luta-bg-color {
          background-color: #e66465;
        }
        .highlightBorder {
          border-color: #e66465 !important;
        }
        .luta-btn-color {
          background-color: #cc0000;
        }
        .luta-foreground-color {
          background-color: #fdf2f2;
        }
        .arrow-left svg path,
        .arrow-right svg path {
          stroke: #e66465;
        }
      `}</style>
    </>
  );
}
