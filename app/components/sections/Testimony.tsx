import React from "react";
import CustomButton from '@/app/components/CustomButton'
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimony = () => {

	const TESTIMONIOS = [
		{
			nombre: "Matias Sanchez Sorondo",
			texto: "El salto de calidad que tuve en el diseño y rendimiento de mi Landing Page con Tomi fue increíble. Me puso algo completamente nuevo y superior sobre la mesa.",
			img: "/images/foto-mati.webp"
		},
		{
			nombre: "Alexis Mois Corona",
			texto: "La dedicación, el orden y el cuidado por los detalles hacen del trabajo de Tomás que sea una excelente opcion para trabajar con nuestra agencia.",
			img: "/images/foto-alex.webp"
		},
		{
			nombre: "Vicente Calderon",
			texto: 'Un gustazo trabajar con Tomas, la gran combinación de calidad y rapidez, en 7 días logro crear exactamente la idea que tenía en mi mente de mi página web.',
			img: "/images/foto-vicente.png"
		},
		{
			nombre: "Vicente Calderon",
			texto: 'Un gustazo trabajar con Tomas, la gran combinación de calidad y rapidez, en 7 días logro crear exactamente la idea que tenía en mi mente de mi página web.',
			img: "/images/foto-vicente.png"
		},
		{
			nombre: "Vicente Calderon",
			texto: 'Un gustazo trabajar con Tomas, la gran combinación de calidad y rapidez, en 7 días logro crear exactamente la idea que tenía en mi mente de mi página web.',
			img: "/images/foto-vicente.png"
		},
	]

	return (
		<section className="py-[60px] md:py-[80px]">
			<div className="jtm-container">
				<h2 className="jtm-title mb-8">Profesionales que eligieron bien</h2>
				<div className="relative">
					<Swiper
						modules={[Navigation]}
						spaceBetween={16}
						navigation={{
							prevEl: '.arrow-left',
							nextEl: '.arrow-right',
						}}
						className="mySwiper"
						breakpoints={{
							320: { slidesPerView: 1.2 },
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
					>
						{
							TESTIMONIOS.map((testimonio) => {
								return (
									<SwiperSlide>
										<div className="py-[60px] px-[40px] rounded-[8px] bg-[#FFF] highlightBorder">
											<p className="text-4 text-[#111]">"{testimonio.texto}"</p>
											<div className="flex gap-2 mt-4">
												<img className="bg-red-500 size-12 rounded-full" src={testimonio.img} alt={testimonio.nombre + " - Tomas Costa LP"} />
												<div>
													<span>stars aca</span>
													<h5 className="text-4">{testimonio.nombre}</h5>
												</div>
											</div>
										</div>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
					<button className="hidden md:block arrow-left absolute top-[calc(50%-22.5px)] -left-12 disabled:opacity-50">
						<svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23 2L3 22.5L23 43" stroke="#2C6FFF" stroke-width="4" stroke-linecap="round"/>
						</svg>
					</button>
					<button className="hidden md:block arrow-right absolute top-[calc(50%-22.5px)] -right-12 disabled:opacity-50">
						<svg className="rotate-180" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23 2L3 22.5L23 43" stroke="#2C6FFF" stroke-width="4" stroke-linecap="round"/>
						</svg>
					</button>
				</div>
				<CustomButton customClasses="mx-auto mt-8" />
			</div>
		</section>
	);
};

export default Testimony;
