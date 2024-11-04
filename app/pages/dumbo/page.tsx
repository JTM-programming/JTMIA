
"use client";
import Banner from "@/app/components/templateSections/Banner";
import Beneficios from "@/app/components/templateSections/Beneficios";
import Header from "@/app/components/templateSections/Header";
import Hero from "@/app/components/templateSections/Hero";
import MovingSpan from "@/app/components/templateSections/MovingSpan";
import Testimony from "@/app/components/templateSections/Testimony";
import Faqs from "@/app/components/templateSections/Faqs";

export default function Home() {
  const beneficiosData = [{"Titulo":"Asesoría Personalizada","Desc":"Recibirás un plan adaptado a tus necesidades específicas, asegurando que cada paso esté alineado con tus objetivos."},{"Titulo":"Resultados Medibles","Desc":"No solo hablamos de cambios; los medimos. Podrás ver tu progreso y ajustar estrategias en tiempo real para maximizar resultados."},{"Titulo":"Acompañamiento Continuo","Desc":"Estaré contigo en cada etapa del proceso, resolviendo tus dudas y motivándote para que nunca te sientas solo en el camino."},{"Titulo":"Comunidad de Apoyo","Desc":"Formarás parte de una red de personas con objetivos similares, creando sinergias y apoyo mutuo que potenciará tu crecimiento."}];
  const testimoniosData = [{"Texto":"DUMBO cambió mi vida. Nunca pensé que podría lograr tanto en tan poco tiempo.","Nombre":"María G."},{"Texto":"La asesoría personalizada fue clave para mis logros. Me sentí escuchado y guiado.","Nombre":"Carlos T."},{"Texto":"Indudablemente una inversión en mí mismo. Los resultados son palpables y motivadores.","Nombre":"Sofía R."},{"Texto":"La comunidad que he encontrado aquí es increíble. El apoyo hace toda la diferencia.","Nombre":"Javier M."},{"Texto":"Nunca había tenido un acompañamiento tan cercano en mis proyectos. ¡Altamente recomendado!","Nombre":"Laura P."}];
  const preguntasData = [{"Pregunta":"¿Qué sucede si no estoy satisfecho con los resultados?","Respuesta":"En DUMBO, garantizamos una revisión continua. Si no estás satisfecho, trabajaremos contigo para ajustar el enfoque hasta lograr los resultados deseados."},{"Pregunta":"¿Necesito experiencia previa para comenzar?","Respuesta":"No, en DUMBO damos la bienvenida a todos, sin importar su nivel de experiencia. Lo importante es tu disposición para aprender y crecer."},{"Pregunta":"¿Cómo puedo medir mi progreso?","Respuesta":"Utilizamos herramientas de seguimiento y evaluaciones periódicas para que puedas visualizar tu evolución y los logros alcanzados."},{"Pregunta":"¿El acompañamiento es individual o grupal?","Respuesta":"Ofrecemos ambos enfoques: sesiones personalizadas y grupos de apoyo, para adaptarnos a tus preferencias y necesidades."}];

  return (
    <>
      <Header />
      <Hero titulo="Transformación Personal y Profesional" descripcion="En DUMBO, te ayudo a alcanzar tus metas y sueños con un enfoque único y personalizado que garantiza resultados tangibles." />
      <MovingSpan span="dumbo" />
      <Beneficios titulo="¿Qué obtendrás con DUMBO?" beneficios={beneficiosData} />
      <Testimony titulo="Lo que dicen nuestros clientes" testimonios={testimoniosData} />
      <Banner text="¡No esperes más! Da el primer paso hoy mismo." />
      <Faqs titulo="Preguntas frecuentes" preguntas={preguntasData} />
      <p className="py-8 text-center text-[#000]/80">
        ©LUTA 2024. Todos los derechos reservados
      </p>
    </>
  );
}
