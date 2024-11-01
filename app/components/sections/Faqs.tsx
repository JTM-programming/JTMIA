'use client'
import { useState } from "react";

export default function Faqs() {

	const [open, setOpen] = useState<string | null>(null);
	
	const Preguntas = [
		{
			pregunta: "¿Qué pasa si no sé nada de tecnología?",
			respuesta: "No se necesita ningún tipo de conocimiento para crear tu Landing Page con LUTA. Solo hay que llenar un formulario con los datos de tu negocio y listo. En 2 minutos tendrás tu página lista."
		  },
		  {
			pregunta: '¿Por qué me conviene LUTA antes que contratar a un "profesional"?',
			respuesta: `
Veo constantemente en mi Instagram publicidades de "profesionales" o "agencias" que promocionan sus páginas, y cuando las veo, no puedo creer que haya gente que les compre. 

Da bronca porque la gente compra desde el desconocimiento. Es igual que si yo fuera a comprar un auto, y el vendedor es bueno, podría venderme cualquier porquería porque no sé nada de autos, pero el auto por lo menos lo puedo ver, sentir el motor, probarlo, etc...

El problema es que la mayoría de las personas todavía no están listas para invertir 600 o 1.000 USD en una página web. 

Por eso se me ocurrió crear LUTA para que quien necesite una página pueda tener una muy bien hecha, por un precio muy accesible. Y si, también es una "plantilla", si no, te estaria regalando mi trabajo.

La diferencia es que está planeada y diseñada para un rubro específico, desarrollada como se debe, con textos generados por una IA entrenada y con actualizaciones constantes.`
		  },
		  {
			pregunta: "¿Cómo puede estar lista en 2 minutos, ser barata y ser tan buena?",
			respuesta: 
			  `
Es simple... La verdad es que para que tu página rinda bien no hacen falta muchas cosas (aun así, la mayoría lo hace mal). 

- Los títulos tienen que ser fáciles de entender. 
- Los colores y espacios tienen que ser los adecuados. 
- Tiene que funcionar rápido. 
- La estructura debe guiar al usuario a tomar accion.
- Las imágenes tienen que estar bien ubicadas y transmitir algo. 

Esas son las únicas cosas que NECESITA una Landing Page para funcionar excelentemente. Y yo no sé esto solo por los 4 años que llevo haciéndolo (la mayoría lleva mucho más y ni les preguntes). 
Lo sé porque me obsesiona este mundo, y esa obsesión es lo que hace que me moleste ver cómo venden porquerías. 

Ahora... poniéndonos un poco más técnicos, lo que hace el sistema es usar secciones diseñadas por mí, pensadas para profesionales de la salud, y juntarlas con textos generados con inteligencia artificial según la información que colocaste en el formulario. Eso es lo que hace la diferencia.`
		  },		  
	]

	const toggle = (pregunta: string) => {
		if (open === pregunta) {
			setOpen(null)
		} else {
			setOpen(pregunta)
		}
	}

	return (
		<div className="max-w-[900px] px-4 mx-auto py-[60px] md:py-[80px]">
			<h2 className="text-[40px] text-center mb-[40px] font-extrabold text-[#031221] leading-[110%] tracking-[-.5px] max-w-[990px] mx-auto text-balance capitalize">Preguntas Frecuentes</h2>
			{
				Preguntas.map((item) => (
					<div 
						key={item.pregunta}
						onClick={() => {toggle(item.pregunta)}}
						className="tc-accordion-item w-full cursor-pointer p-[20px] border-b last:border-none border-[#031221]/50 mb-[10px]"
					>
						<h3 className="text-[16px] md:text-[18px] text-[#031221] lg:text-[20px] flex justify-between items-center">{item.pregunta}<svg className={`${open === item.pregunta ? 'rotate-45' : ''} min-w-[20px] size-[20px] transition-all duration-300`} fill="#031221" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></h3>
						<div className={`overflow-hidden duration-500 transition-all ${open === item.pregunta  ? 'max-h-[2000px]' : 'max-h-0'}`}>
							<p className="text-[#031221]/80 text-[16px] pt-[10px] whitespace-pre-wrap">{item.respuesta}</p>
						</div>
					</div>
				))
			}
		</div>
	)
}