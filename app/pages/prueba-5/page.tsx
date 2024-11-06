
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Aumento de confianza","Desc":"Nuestros métodos probados mejorarás tu autoconfianza, permitiéndote enfrentar desafíos con seguridad."},{"Titulo":"Técnicas personalizadas","Desc":"Ofrecemos estrategias únicas que se adaptan a tus necesidades específicas, asegurando el mejor resultado."},{"Titulo":"Soporte constante","Desc":"Disfruta de asesoría continua y motivación, para garantizar que te mantengas en el camino hacia tu éxito."},{"Titulo":"Resultados medibles","Desc":"Verás avances concretos y podrás medir tu progreso a lo largo del tiempo, lo que te mantendrá motivado."}];
  const testimoniosData = [{"Texto":"Gracias a ‘prueba-5’, he logrado alcanzar mis metas más ambiciosas.","Nombre":"Ana Rodríguez"},{"Texto":"El enfoque personalizado que recibí fue clave para mi transformación.","Nombre":"Javier Pérez"},{"Texto":"Nunca pensé que podría lograr esto. ¡Altamente recomendado!","Nombre":"Lucía Gómez"},{"Texto":"El apoyo constante y la motivación me hicieron sentir que no estaba sola en este viaje.","Nombre":"María Fernández"},{"Texto":"Los resultados son claramente visibles, definitivamente valió la pena.","Nombre":"Carlos Sánchez"}];
  const preguntasData = [{"Pregunta":"¿Esto realmente funciona?","Respuesta":"Sí, nuestros métodos están basados en técnicas probadas que han ayudado a muchos a lograr sus objetivos."},{"Pregunta":"¿Necesito experiencia previa?","Respuesta":"No, nuestros programas son para todos, sin importar el nivel de experiencia previa."},{"Pregunta":"¿Cuál es el compromiso de tiempo requerido?","Respuesta":"Personalizamos las sesiones según tu disponibilidad y ritmo, para hacerte la vida más fácil."},{"Pregunta":"¿Hay alguna garantía?","Respuesta":"Sí, ofrecemos una garantía de satisfacción. Si no estás satisfecho, trabajaremos para solucionarlo."}];

  return (
    <>
      <Header />
      <Hero titulo="Transformación total en tu vida" descripcion="Ayudo a mis clientes a alcanzar sus metas y superar sus límites a través de un enfoque personalizado y efectivo." proyecto="prueba-5" />
      <MovingSpan span="prueba-5" />
      <Beneficios titulo="Beneficios que obtendrás al unirte a nosotros" beneficios={beneficiosData} proyecto="prueba-5" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="Únete hoy y comienza tu transformación." />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©prueba-5 2024. Todos los derechos reservados
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
