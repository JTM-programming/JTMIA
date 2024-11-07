
"use client";
import Banner from "@/app/utils/generating-landing/components/templateSections/Banner";
import Beneficios from "@/app/utils/generating-landing/components/templateSections/Beneficios";
import Header from "@/app/utils/generating-landing/components/templateSections/Header";
import Hero from "@/app/utils/generating-landing/components/templateSections/Hero";
import MovingSpan from "@/app/utils/generating-landing/components/templateSections/MovingSpan";
import Testimony from "@/app/utils/generating-landing/components/templateSections/Testimony";
import Faqs from "@/app/utils/generating-landing/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Claridad financiera","Desc":"Te ayudaré a entender tus finanzas, permitiéndote tomar decisiones informadas y estratégicas."},{"Titulo":"Plan de acción personalizado","Desc":"Diseñaré un plan adaptado a tus necesidades y objetivos, para que avances con confianza hacia tu futuro."},{"Titulo":"Ahorros significativos","Desc":"Implementarás estrategias efectivas que te permitirán reducir gastos y maximizar tu ahorro mensual."},{"Titulo":"Crecimiento constante","Desc":"Te guiaré para que tus inversiones crezcan de manera segura, aumentando tu patrimonio a largo plazo."}];
  const testimoniosData = [{"Texto":"Gracias a prueba 7, comprendí mis finanzas y ahora tengo un plan claro.","Nombre":"Laura G."},{"Texto":"Nunca pensé que podría ahorrar tanto. ¡Me siento en control de mi dinero!","Nombre":"Carlos M."},{"Texto":"El asesoramiento fue invaluable. Ahora veo el futuro con optimismo.","Nombre":"Sofia T."},{"Texto":"Mi inversión ha crecido desde que seguí los consejos de prueba 7. ¡Altamente recomendable!","Nombre":"Eduardo Z."},{"Texto":"Lo que más aprecio es la atención personalizada. No hay comparación.","Nombre":"María J."}];
  const preguntasData = [{"Pregunta":"¿Qué pasa si no tengo conocimientos previos sobre finanzas?","Respuesta":"No te preocupes, mis servicios están diseñados para principiantes y te enseñaré desde lo más básico."},{"Pregunta":"¿Cuánto tiempo tomará ver resultados?","Respuesta":"Los resultados varían, pero muchos de mis clientes comienzan a notar cambios en los primeros 3 meses."},{"Pregunta":"¿Es necesario hacer una inversión inicial?","Respuesta":"Dependiendo de los servicios que elijas, algunos requieren una inversión, pero siempre te informaré de antemano."},{"Pregunta":"¿Puedo cancelar el servicio en cualquier momento?","Respuesta":"Sí, puedes cancelar cuando desees, siempre priorizamos tu comodidad y satisfacción."}];

  return (
    <>
      <Header />
      <Hero titulo="Transformo tu vida financiera" descripcion="A través de mis consejos personalizados, lograrás alcanzar tus metas económicas y vivir con tranquilidad." proyecto="prueba-7" />
      <MovingSpan span="prueba-7" />
      <Beneficios titulo="Los beneficios que obtendrás" beneficios={beneficiosData} proyecto="prueba-7" />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="¡Actúa ahora y transforma tu futuro financiero!" />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80 capitalize">
        ©prueba 7 2024. Todos los derechos reservados
      </p>
      <style>{`
        .luta-text-color {
          color: #180c27;
        }
        .luta-bg-color {
          background-color: #7b65e6;
        }
        .highlightBorder {
          border-color: #7b65e6 !important;
        }
        .luta-btn-color {
          background-color: #5103b0;
        }
        .luta-foreground-color {
          background-color: #ffffff;
        }
        .arrow-left svg path,
        .arrow-right svg path {
          stroke: #7b65e6;
        }
      `}</style>
    </>
  );
}
