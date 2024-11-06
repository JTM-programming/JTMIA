
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Aumento de productividad","Desc":"Nuestros métodos optimizados te ayudarán a maximizar tu tiempo y recursos, permitiéndote lograr más en menos tiempo."},{"Titulo":"Desarrollo personal","Desc":"Te guiamos en un viaje de autoconocimiento que te permitirá crecer y superar tus límites, convirtiéndote en la mejor versión de ti mismo."},{"Titulo":"Red de apoyo","Desc":"Formarás parte de una comunidad motivadora que te impulsará a seguir adelante y alcanzar tus metas junto a otros que comparten tu visión."},{"Titulo":"Resultados medibles","Desc":"Te proporcionamos herramientas y métricas para que puedas visualizar tu progreso y los resultados de tus esfuerzos."}];
  const testimoniosData = [{"Texto":"Gracias a este programa, he logrado un cambio radical en mi vida.","Nombre":"Lucía G."},{"Texto":"La metodología es increíble, realmente funciona.","Nombre":"Martín R."},{"Texto":"Nunca pensé que podría alcanzar mis objetivos tan rápido.","Nombre":"Sofía T."},{"Texto":"El apoyo de la comunidad es invaluable.","Nombre":"Andrés P."},{"Texto":"Me siento más motivado y enfocado que nunca.","Nombre":"Claudia S."}];
  const preguntasData = [{"Pregunta":"¿Este programa es adecuado para mí?","Respuesta":"Sí, nuestro programa está diseñado para adaptarse a diferentes niveles y necesidades, ayudando a todos a alcanzar sus objetivos."},{"Pregunta":"¿Cuánto tiempo debo invertir?","Respuesta":"Recomendamos dedicar al menos una hora a la semana para obtener los mejores resultados, pero puedes avanzar a tu propio ritmo."},{"Pregunta":"¿Hay algún compromiso a largo plazo?","Respuesta":"Ofrecemos diferentes planes y no imposibilitamos a los clientes a compromisos más allá de lo que se sientan cómodos."},{"Pregunta":"¿Qué resultados puedo esperar?","Respuesta":"Los resultados varían según el esfuerzo personal, pero muchos de nuestros clientes reportan cambios significativos en semanas."}];

  return (
    <>
      <Header />
      <Hero titulo="Transforma tu vida con nuestro programa" descripcion="Ayudamos a las personas a alcanzar sus metas a través de una metodología probada que genera resultados tangibles." proyecto="prueba-4" />
      <MovingSpan span="prueba-4" />
      <Beneficios titulo="Beneficios de trabajar con nosotros" beneficios={beneficiosData} proyecto="prueba-4" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="No esperes más, ¡regístrate hoy mismo!" />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©prueba-4 2024. Todos los derechos reservados
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
      `}</style>
    </>
  );
}
