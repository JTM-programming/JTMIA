
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Aumento de confianza","Desc":"Desarrolla una seguridad inquebrantable que te permitirá enfrentar cualquier desafío."},{"Titulo":"Metas claras y alcanzables","Desc":"Te ayudaré a definir y alcanzar tus metas de forma estructurada y efectiva."},{"Titulo":"Red de apoyo constante","Desc":"Formarás parte de una comunidad que te motiva y acompaña en tu viaje hacia el éxito."},{"Titulo":"Resultados medibles","Desc":"Podrás monitorizar tu progreso a través de indicadores claros y tus logros alcanzados."}];
  const testimoniosData = [{"Texto":"Desde que comencé con 'prueba 11', he visto un cambio radical en mi vida.","Nombre":"Carla P."},{"Texto":"Me sorprendió lo rápido que logré avances significativos en mi carrera.","Nombre":"Juan M."},{"Texto":"La comunidad de apoyo ha sido esencial. Nunca me sentí sola en este proceso.","Nombre":"Ana R."},{"Texto":"Los resultados son concretos. Mis metas ya no son solo sueños.","Nombre":"Luis T."},{"Texto":"El enfoque personalizado es lo mejor. Siento que realmente entienden mis necesidades.","Nombre":"Sofía L."}];
  const preguntasData = [{"Pregunta":"¿Qué tipo de resultados puedo esperar?","Respuesta":"Puedes esperar un aumento en tu confianza y claridad en tus objetivos, además de una mejora palpable en tus resultados."},{"Pregunta":"¿Cómo se adapta a mis necesidades específicas?","Respuesta":"Cada programa es personalizado, tendrás una evaluación inicial para adaptar el plan a tus objetivos."},{"Pregunta":"¿Hay algún compromiso a largo plazo?","Respuesta":"No, ofrecemos opciones flexibles que se adaptan a tu disponibilidad y compromiso."},{"Pregunta":"¿Puedo unirme en cualquier momento?","Respuesta":"Sí, nuestras inscripciones son continuas y puedes comenzar en el momento que desees."}];

  return (
    <>
      <Header />
      <Hero titulo="Impulsa tu éxito personal y profesional" descripcion="A través de un enfoque personalizado, te ayudo a alcanzar tus metas, superando las barreras que te detienen." proyecto="prueba-11" />
      <MovingSpan span="prueba-11" />
      <Beneficios titulo="Lo que ganarás con nosotros" beneficios={beneficiosData} proyecto="prueba-11" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="¡Únete a nosotros y empieza hoy mismo!" />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80 capitalize">
        ©prueba 11 2024. Todos los derechos reservados
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
