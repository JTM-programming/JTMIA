
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Resultados garantizados","Desc":"Con técnicas probadas y un enfoque individualizado, obtendrás resultados que te sorprenderán en tiempo récord."},{"Titulo":"Apoyo constante","Desc":"Estaré contigo en cada paso del camino, brindándote la motivación y el apoyo que necesitas para no rendirte."},{"Titulo":"Flexibilidad adaptada a ti","Desc":"Diseño soluciones que se adaptan a tu estilo de vida, asegurando que cada estrategia sea cómoda y efectiva para ti."},{"Titulo":"Comunidad inspiradora","Desc":"Al unirte a PRUEBA 2, te conviertes en parte de una comunidad que comparte tus objetivos y te impulsa a alcanzar tus sueños."}];
  const testimoniosData = [{"Texto":"¡Increíble! Nunca pensé que podría lograr tanto en tan poco tiempo.","Nombre":"Laura G."},{"Texto":"El apoyo que recibí fue fundamental para mi éxito.","Nombre":"Carlos M."},{"Texto":"Me encantó la flexibilidad del programa, se ajustó a mi vida diaria.","Nombre":"Sofía R."},{"Texto":"La comunidad me motivó a seguir adelante, no quiero dejarlo.","Nombre":"Javier T."},{"Texto":"Cada paso fue acompañado de estrategias claras y alcanzables.","Nombre":"Patricia L."}];
  const preguntasData = [{"Pregunta":"¿Este programa es adecuado para mí?","Respuesta":"Sí, el programa está diseñado para adaptarse a personas de diferentes niveles y antecedentes."},{"Pregunta":"¿Cuánto tiempo necesitaré dedicar?","Respuesta":"La flexibilidad es clave; podrás adaptarlo a tu horario personal y compromiso."},{"Pregunta":"¿Qué pasa si no veo resultados?","Respuesta":"Estamos comprometidos con tu éxito y adaptaremos el enfoque hasta que logres tus metas."},{"Pregunta":"¿Cómo se asegura el apoyo constante?","Respuesta":"Ofrezco seguimiento regular y acceso a una comunidad activa para mantenerte motivado."}];

  return (
    <>
      <Header />
      <Hero titulo="Transforma tu vida con PRUEBA 2" descripcion="A través de un enfoque personalizado, ayudo a mis clientes a alcanzar resultados extraordinarios que nunca pensaron que eran posibles." />
      <MovingSpan span="prueba-2" />
      <Beneficios titulo="Descubre cómo puedo ayudarte" beneficios={beneficiosData} />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="Únete y transforma tu vida hoy mismo." />
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
          background-color: #FFFFFF;
        }
      `}</style>
    </>
  );
}
