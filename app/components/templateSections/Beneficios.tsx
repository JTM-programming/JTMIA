type Beneficio = {
	Titulo: string;
	Desc: string;
};

type BeneficiosProps = {
	titulo: string;
	beneficios: Beneficio[];
};

export default function Beneficios({ titulo, beneficios }: BeneficiosProps) {
	return (
		<section className="py-[60px] md:py-[80px] overflow-clip">
			<div className="jtm-container">
				<h2 className="jtm-title md:mb-[32px]">{titulo}</h2>
				<div className="w-[950px] max-w-full mx-auto relative">
					<div className="relative md:absolute flex items-center justify-center h-[450px] md:w-full md:h-full">
						<img className="absolute z-50 h-[305px] w-auto" src="/images/luta-beneficios.webp" alt="" />
						<div className="absolute size-[332px] highlightBg rounded-full"></div>
						<div className="scan-animation --1 absolute highlightBorder rounded-full"></div>
						<div className="scan-animation --2 absolute highlightBorder rounded-full"></div>
					</div>
					<div className="relative flex flex-wrap justify-between gap-y-4 md:gap-y-8">
						{beneficios.map((beneficio, index) => (
							<div key={index} className="rounded-[8px] w-full md:w-[372px] foreground p-[32px]">
								<img className="size-[24px]" src={`/images/`} alt={beneficio.Titulo} />
								<h3 className="text-[22px] font-bold my-[16px]">{beneficio.Titulo}</h3>
								<p className="font-normal text-[16px]">{beneficio.Desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
