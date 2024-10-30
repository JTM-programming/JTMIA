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
		<section className="py-[80px] md:py-[100px]">
			<div className="jtm-container">
				<h2 className="jtm-title mb-8">Profesionales que eligieron bien</h2>
				<Swiper
					modules={[Navigation]}
					spaceBetween={16}
					navigation
					className="mySwiper"
					breakpoints={{
						320: { slidesPerView: 1 },
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
				<CustomButton customClasses="mx-auto mt-8" />
			</div>
		</section>
	);
};

export default Testimony;
