
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Metodología probada","Desc":"Nuestra técnica ha ayudado a cientos de personas a lograr sus metas en solo dos semanas, asegurando un cambio real y sostenible."},{"Titulo":"Soporte continuo","Desc":"Recibirás apoyo durante todo el proceso, desde guías personalizadas hasta sesiones de motivación para que nunca te sientas solo."},{"Titulo":"Resultados medibles","Desc":"Podrás ver los cambios tangibles en tu vida, ya sea en salud, bienestar o productividad, permitiéndote evaluar tu progreso."},{"Titulo":"Comunidad inspiradora","Desc":"Únete a una comunidad de personas con la misma mentalidad, donde podrás compartir experiencias y celebrar tus logros."}];
  const testimoniosData = [{"Texto":"Gracias a 'Prueba 14', he logrado un equilibrio que nunca pensé que podía tener. La comunidad y el soporte son inigualables.","Nombre":"Lucía Pérez"},{"Texto":"El método funciona. En solo 14 días, he notado cambios sorprendentes en mi energía y motivación. ¡100% recomendable!","Nombre":"Javier Gómez"},{"Texto":"Al principio era escéptico, pero 'Prueba 14' me sorprendió. La guía y el apoyo fueron clave para mi éxito.","Nombre":"María Rodríguez"},{"Texto":"Nunca me había sentido tan bien en tan poco tiempo. Creo que todos deberían experimentar esto.","Nombre":"Carlos Mendoza"},{"Texto":"Lo que más me gustó fue la comunidad. Saber que no estás solo hace toda la diferencia.","Nombre":"Ana Torres"}];
  const preguntasData = [{"Pregunta":"¿Es realmente posible ver cambios en solo 14 días?","Respuesta":"Sí, nuestra metodología está diseñada para facilitar cambios significativos y sostenibles en un corto período."},{"Pregunta":"¿Necesito alguna experiencia previa?","Respuesta":"No, 'Prueba 14' está diseñada para cualquier persona, independientemente de su punto de partida."},{"Pregunta":"¿Cómo funciona el soporte durante el programa?","Respuesta":"Proporcionamos acceso a recursos, guías y un grupo de apoyo, asegurando que siempre tengas ayuda cuando la necesites."},{"Pregunta":"¿Puedo unirme si tengo una agenda muy ocupada?","Respuesta":"Sí, el programa se adapta a tu estilo de vida. Puedes avanzar a tu propio ritmo y obtener resultados sin importar tus compromisos."}];

  return (
    <>
      <Header />
      <Hero titulo="Transforma tu vida en 14 días" descripcion="En 'Prueba 14', te guiaré paso a paso para alcanzar un cambio significativo en tu vida, ayudándote a descubrir tu mejor versión." proyecto="prueba-14" />
      <MovingSpan span="prueba-14" />
      <Beneficios titulo="Obtén resultados sorprendentes" beneficios={beneficiosData} proyecto="prueba-14" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="¡Empieza tu transformación hoy!" />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80 capitalize">
        ©prueba 14 2024. Todos los derechos reservados
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
