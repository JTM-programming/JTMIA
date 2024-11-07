
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Resultados sostenibles","Desc":"Implementamos estrategias que no solo te ofrecen resultados inmediatos, sino que también son sostenibles a largo plazo."},{"Titulo":"Apoyo personalizado","Desc":"Cada cliente recibe un plan adaptado a sus necesidades individuales, asegurando así que cada paso cuenta."},{"Titulo":"Ahorra tiempo y esfuerzo","Desc":"Optimizamos tu camino hacia el éxito, permitiéndote enfocarte en lo que realmente importa."},{"Titulo":"Comunidad de apoyo","Desc":"Te unes a una red de personas que comparten tus objetivos y te motivan a seguir adelante."}];
  const testimoniosData = [{"Texto":"Nunca pensé que podría lograr esto tan rápido. ¡Estoy encantado!","Nombre":"Carlos M."},{"Texto":"El apoyo que recibí fue excepcional. Me sentí acompañado en cada paso.","Nombre":"Lucía P."},{"Texto":"Gracias a prueba-6, he logrado mantener mis resultados.","Nombre":"Andrés R."},{"Texto":"Me encantó la atención personalizada. Recomiendo totalmente sus servicios.","Nombre":"María S."},{"Texto":"Una experiencia transformadora. ¡Gracias, prueba-6!","Nombre":"Jorge T."}];
  const preguntasData = [{"Pregunta":"¿Realmente puedo obtener resultados en 30 días?","Respuesta":"Sí, muchos de nuestros clientes han logrado transformaciones significativas en un mes gracias a nuestro enfoque personalizado."},{"Pregunta":"¿Qué sucede si no me siento cómodo con el plan?","Respuesta":"Podemos ajustarlo hasta que sientas que se adapta a tus necesidades y objetivos."},{"Pregunta":"¿Hay apoyo después del programa?","Respuesta":"Sí, te accederás a nuestra comunidad donde continuarás recibiendo apoyo y motivación."},{"Pregunta":"¿Es este un programa para todos?","Respuesta":"Diseñamos nuestros planes para atender a diversas necesidades y niveles de experiencia. ¡Todos son bienvenidos!"}];

  return (
    <>
      <Header />
      <Hero titulo="Transformo tu vida en 30 días" descripcion="A través de un enfoque personalizado, te ayudo a alcanzar tus metas de manera rápida y efectiva." proyecto="prueba-6" />
      <MovingSpan span="prueba-6" />
      <Beneficios titulo="Beneficios que obtendrás" beneficios={beneficiosData} proyecto="prueba-6" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="No esperes más, transforma tu vida hoy." />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©prueba-6 2024. Todos los derechos reservados
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
          background-color: #ffffff;
        }
        .arrow-left svg path,
        .arrow-right svg path {
          stroke: #e66465;
        }
      `}</style>
    </>
  );
}
