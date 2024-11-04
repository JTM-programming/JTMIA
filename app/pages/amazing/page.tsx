
"use client";
import Banner from "@/app/components/templateSections/Banner";
import Beneficios from "@/app/components/templateSections/Beneficios";
import Header from "@/app/components/templateSections/Header";
import Hero from "@/app/components/templateSections/Hero";
import MovingSpan from "@/app/components/templateSections/MovingSpan";
import Testimony from "@/app/components/templateSections/Testimony";
import Faqs from "@/app/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Resultados Medibles","Desc":"Obtén datos concretos y saber cómo avanzas en tu camino hacia el éxito, con métricas que reflejan tus logros."},{"Titulo":"Asesoramiento Personalizado","Desc":"Disfruta de un enfoque único para ti, adaptando nuestras estrategias a tus necesidades y sueños específicos."},{"Titulo":"Soporte Continuo","Desc":"No estás solo en este viaje. Te acompañamos en cada paso, asegurándonos de que siempre tengas el apoyo que necesitas."},{"Titulo":"Comunidad Inspiradora","Desc":"Forma parte de una red de personas con ideas afines, compartiendo experiencias y motivación mutua para alcanzar tus objetivos."}];
  const testimoniosData = [{"Texto":"Amazing cambió mi perspectiva de la vida. Nunca pensé que podría lograr tanto en tan poco tiempo.","Nombre":"Clara Rodríguez"},{"Texto":"El apoyo y la orientación constante que recibí fueron invaluables. ¡Recomiendo Amazing al 100%!","Nombre":"Juan Pérez"},{"Texto":"Me encanta formar parte de esta comunidad. He crecido no solo personalmente, sino también profesionalmente.","Nombre":"María Gómez"},{"Texto":"Los resultados son sorprendentes. Nunca había sido tan productivo y motivado.","Nombre":"Luis Martínez"},{"Texto":"Llegué con dudas y ahora tengo claridad y dirección en mi vida. Thank you, Amazing!","Nombre":"Sofia Torres"}];
  const preguntasData = [{"Pregunta":"¿Realmente puedo obtener resultados en poco tiempo?","Respuesta":"Sí, muchos de nuestros clientes ven resultados significativos en las primeras semanas si se comprometen al proceso."},{"Pregunta":"¿Necesito experiencia previa para unirme?","Respuesta":"No, nuestros programas están diseñados para ayudar a personas de todos los niveles, desde principiantes hasta expertos."},{"Pregunta":"¿Cómo sé si esto es para mí?","Respuesta":"Si buscas un cambio positivo y estás dispuesto a trabajar en tu desarrollo personal, Amazing es para ti."},{"Pregunta":"¿Qué pasa si no estoy satisfecho?","Respuesta":"Tu satisfacción es nuestra prioridad. Ofrecemos una garantía de reembolso si no estás completamente satisfecho en los primeros 30 días."}];

  return (
    <>
      <Header />
      <Hero titulo="Transforma tu vida con Amazing" descripcion="En Amazing, te ayudo a alcanzar tus metas de manera eficiente y efectiva, ofreciendo soluciones personalizadas que se adaptan a ti." />
      <MovingSpan />
      <Beneficios titulo="Beneficios de elegir Amazing" beneficios={beneficiosData} />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="Únete a nosotros y comienza tu transformación hoy mismo." />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
