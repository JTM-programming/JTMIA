
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Crecimiento Personal Acelerado","Desc":"Obtén resultados visibles en menos tiempo con programas diseñados específicamente para tus necesidades."},{"Titulo":"Apoyo Continuo","Desc":"Acceso a una comunidad que te motiva y a recursos exclusivos para asegurar tu éxito a largo plazo."},{"Titulo":"Técnicas Comprobadas","Desc":"Utilizo métodos respaldados por investigación y experiencias anteriores que garantizan un cambio real."},{"Titulo":"Flexibilidad y Comodidad","Desc":"Entrenamientos adaptables a tu horario y estilo de vida, porque entiendo que cada persona es única."}];
  const testimoniosData = [{"Texto":"Gracias a este programa, he logrado cambiar mi perspectiva y mejorar mi calidad de vida.","Nombre":"Ana López"},{"Texto":"La atención personalizada que recibí fue clave para alcanzar mis metas. ¡Totalmente recomendado!","Nombre":"Juan Pérez"},{"Texto":"No solo encontré una guía, sino también un apoyo incondicional. He aprendido a superar mis límites.","Nombre":"María Gómez"},{"Texto":"Al principio dudaba, pero ahora puedo decir que ha sido una de las mejores decisiones de mi vida.","Nombre":"Carlos Ruiz"},{"Texto":"Me encantó la comunidad que formamos. El apoyo mutuo marcó la diferencia en mi proceso.","Nombre":"Lucía Rodríguez"}];
  const preguntasData = [{"Pregunta":"¿Este programa es adecuado para mí?","Respuesta":"Este enfoque es personalizado y se adapta a las necesidades de cada individuo, sin importar su experiencia previa."},{"Pregunta":"¿Cuánto tiempo necesito invertir?","Respuesta":"Dependerá de tus objetivos, pero ofrecemos opciones flexibles que se ajustan a cualquier horario."},{"Pregunta":"¿Qué sucede si no veo resultados?","Respuesta":"Estamos comprometidos con tu éxito. Si no estás satisfecho en las primeras etapas, ofrecemos garantias para tu tranquilidad."},{"Pregunta":"¿Puedo acceder a la comunidad después del programa?","Respuesta":"Sí, la comunidad permanece activa para todos los graduados, brindando apoyo y recursos continuos."}];

  return (
    <>
      <Header />
      <Hero titulo="Transformo vidas, uno a la vez" descripcion="Impulso a mis clientes hacia su mejor versión a través de un enfoque personalizado y estrategias efectivas." />
      <MovingSpan span="prueba-1" />
      <Beneficios titulo="Descubre lo que puedo hacer por ti" beneficios={beneficiosData} />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="¿Listo para transformarte? ¡Únete hoy!" />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
      <style>{`
        .luta-text-color {
          color: #000; //
        }
        .luta-bg-color {
          background-color: #e66465; //0
        }
        .highlightBorder {
          border-color: #e66465 !important; //0
        }
        .luta-btn-color {
          background-color: #cc0000;
        }
      `}</style>
    </>
  );
}
