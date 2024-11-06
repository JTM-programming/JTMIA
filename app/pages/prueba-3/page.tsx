
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Resultados Medibles","Desc":"Te proporciono herramientas y métricas claras para que puedas ver tu progreso cada semana."},{"Titulo":"Acompañamiento Personalizado","Desc":"Cada plan es hecho a medida, adaptándose a tus necesidades y estilo de vida para asegurar tu éxito."},{"Titulo":"Comunidad de Apoyo","Desc":"Formarás parte de un grupo exclusivo donde compartirás experiencias y motivación con personas como tú."},{"Titulo":"Acceso a Recursos Exclusivos","Desc":"Recibirás contenido y materiales diseñados especialmente para ayudarte a avanzar más rápido hacia tus metas."}];
  const testimoniosData = [{"Texto":"Gracias a PRUEBA 3 he alcanzado mis metas más rápido de lo que imaginé.","Nombre":"Ana García"},{"Texto":"El apoyo que recibí fue fundamental. Nunca me sentí sola en este camino.","Nombre":"Carlos López"},{"Texto":"Los recursos son increíbles y el acompañamiento, insuperable. ¡Recomendado al 100%!","Nombre":"María Fernández"},{"Texto":"Siempre tuve dudas, pero PRUEBA 3 me brindó las respuestas que necesitaba.","Nombre":"Luis Martínez"},{"Texto":"La comunidad es muy motivadora. Es como tener un grupo de amigos en el mismo viaje.","Nombre":"Sofía Jiménez"}];
  const preguntasData = [{"Pregunta":"¿Qué pasa si no obtengo resultados?","Respuesta":"Ofrecemos una garantía de satisfacción. Si no ves resultados, trabajaremos juntos hasta que lo logres."},{"Pregunta":"¿Es adecuado para principiantes?","Respuesta":"¡Absolutamente! Nuestro enfoque se adapta a todos los niveles, desde principiantes hasta avanzados."},{"Pregunta":"¿Cuánto tiempo necesito dedicar?","Respuesta":"La dedicación varía conforme a tus objetivos, pero se recomienda al menos 3-5 horas a la semana."},{"Pregunta":"¿Puedo unirme en cualquier momento?","Respuesta":"Sí, nuestros programas son continuos y puedes unirte cuando desees. ¡Siempre estamos listos para ayudarte!"}];

  return (
    <>
      <Header />
      <Hero titulo="Transforma tu vida con PRUEBA 3" descripcion="A través de un acompañamiento personalizado y estrategias efectivas, ayudo a mis clientes a alcanzar resultados sorprendentes en poco tiempo." />
      <MovingSpan span="prueba-3" />
      <Beneficios titulo="Beneficios que obtendrás" beneficios={beneficiosData} />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="¡Comienza tu viaje hoy mismo!" />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
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
