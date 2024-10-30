'use client'
import { useState } from "react";

export default function Faqs() {

	const [open, setOpen] = useState<string | null>(null);
	
	const Preguntas = [
		{
			pregunta: "¿En qué caso deberia tener una Página de Aterrizaje?",
			respuesta: "Si vendes un producto o prestas un servicio de forma online una Landing Page es fundamental para plantarte como autoridad y demostrarle a las personas que te necesitan a vos, a tu servicio o a tu producto."
		},
		{
			pregunta: "¿Cuanto tiempo tengo que esparar para tener mi Landing?",
			respuesta: "Solo tomamos 2 proyectos por mes lo que nos permite entregarte tu Página en solo 14 Dias desde confirmado el primer pago."
		},
		{
			pregunta: "¿Como es la forma de pago?",
			respuesta: "El pago se divide en tres partes, una reserva del 10% para reservar una fecha, 40% para dar inicio al proyecto y un 50% en el lanzamiento del mismo."
		},
		{
			pregunta: "¿Cuánto tiempo tomará ver resultados?",
			respuesta: "Tan pronto como Lancemos el sitio."
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
							<p className="text-[#031221]/80 text-[16px] pt-[10px]">{item.respuesta}</p>
						</div>
					</div>
				))
			}
		</div>
	)
}