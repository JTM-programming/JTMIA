export default function MovingSpan({span}: any) {

	const businessName = span
		.replace(/-/g, ' ') || ' ';

	return (
		<>
			<section className="luta-bg-color relative z-40 py-[12px] md:py-[20px] flex gap-[50px] overflow-hidden">
				<div className="marquee">
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
				</div>
				<div className="marquee">
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
					<span className="moving-span-text uppercase">{businessName}</span>
				</div>
			</section>
		</>
	)
}
