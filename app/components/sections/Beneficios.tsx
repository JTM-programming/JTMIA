import Image from "next/image"

export default function Beneficios() {
	const BENEFICIOS = [
		{
			titulo: "Ahorras tiempo",
			descripcion: "Crea una landing page 3 veces mejor, en minutos. Sin experiencia y sin lidiar con nadie.",
			icon: "luta-icono-tiempo.svg"
		},
		{
			titulo: "Ahorras dinero",
			descripcion: "Crea tu Landing sin necesidad de contratar a un diseñador o programador. Todo con una interfaz intuitiva y fácil de usar.",
			icon: "luta-icono-dinero.svg"
		},
		{
			titulo: "Optimizado para vos",
			descripcion: "Plantilla especializada para psicólogos, nutricionistas, coaches fitness y otros profesionales de la salud, enfocadas en atraer clientes online.",
			icon: "luta-icono-nicho.svg"
		},
		{
			titulo: "Textos con IA",
			descripcion: "Nuestros textos están generados y optimizados por inteligencia artificial, asegurando que cada palabra capte la atención y convierta.",
			icon: "luta-icono-textos.svg"
		},
	]
	return (
		<section className='py-[60px] md:py-[80px] overflow-clip'>
			<div className="jtm-container">
				<h2 className="jtm-title md:mb-[32px]">LUTA te da ventajas que la mayoria no</h2>
				<div className="w-[950px] max-w-full mx-auto relative">
					<div className="relative md:absolute flex items-center justify-center  h-[450px] md:w-full md:h-full">
						<img className="absolute z-50 h-[305px] w-auto" src="/images/luta-beneficios.webp" alt="" />
						<div className="absolute size-[332px] highlightBg rounded-full"></div>
						<div className="scan-animation --1 absolute highlightBorder rounded-full"></div>
						<div className="scan-animation --2 absolute highlightBorder rounded-full"></div>
					</div>
					<div className="relative flex flex-wrap justify-between gap-y-4 md:gap-y-8">
						{
							BENEFICIOS.map((beneficio) => { 
								return(
									<div key={beneficio.titulo} className="rounded-[8px] w-full md:w-[372px] foreground p-[32px]">
										<Image className="size-[24px]" src={`/images/${beneficio.icon}`} alt={beneficio.titulo} />
										<h3 className="text-[22px] font-bold my-[16px]">{beneficio.titulo}</h3>
										<p className="font-normal text-[16px]">{beneficio.descripcion}</p>
									</div>
								)
							 })
						}
					</div>
				</div>
			</div>
		</section>
	)
}