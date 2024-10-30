export default function Beneficios() {
	const BENEFICIOS = [
		{
			titulo: "Ahorro de tiempo",
			descripcion: "descripcion",
		},
		{
			titulo: "Ahorro de tiempo 2",
			descripcion: "descripcion",
		},
		{
			titulo: "Ahorro de tiempo 3",
			descripcion: "descripcion",
		},
		{
			titulo: "Ahorro de tiempo 4",
			descripcion: "descripcion",
		},
	]
	return (
		<section className='py-[60px] md:py-[80px] overflow-clip'>
			<div className="jtm-container">
				<h2 className="jtm-title mb-[32px]">Beneficios</h2>
				<div className="w-[950px] max-w-full mx-auto relative">
					<div className="absolute flex items-center justify-center w-full h-full">
						<div className="absolute size-[332px] highlightBg rounded-full"></div>
						<div className="scan-animation --1 absolute highlightBorder rounded-full"></div>
						<div className="scan-animation --2 absolute highlightBorder rounded-full"></div>
					</div>
					<div className="relative flex flex-wrap justify-between gap-y-4 md:gap-y-8">
						{
							BENEFICIOS.map((beneficio) => { 
								return(
									<div className="rounded-[8px] w-full md:w-[372px] foreground p-[32px]">
										<img className="size-[24px] bg-red-500" src="/" alt="" />
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