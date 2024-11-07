import React from "react";
import ClientsButton from '@/app/utils/generating-landing/components/ClientsButton';
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type Testimonio = {
	Texto: string;
  	Nombre: string;
//   img: string;
};

type TestimonyProps = {
	titulo: string;
	testimonios: Testimonio[];
};

const Testimony = ({ titulo, testimonios }: TestimonyProps) => {
  return (
    <section className="py-[60px] md:py-[80px]">
      <div className="jtm-container">
        <h2 className="jtm-title mb-8">{titulo}</h2>
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
            {testimonios.map((testimonio, index) => (
              <SwiperSlide key={index}>
                <div className="py-[60px] h-[380px] px-[40px] rounded-[8px] bg-[#FFF] highlightBorder">
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-4 text-[#111]">"{testimonio.Texto}"</p>
                    <div className="flex gap-2">
                      <img
                        className="border-[2px] highlightBorder size-[55px] rounded-full"
                        src={testimonio.Nombre}
                        alt={`${testimonio.Nombre} - Tomas Costa LP`}
                      />
                      <div>
                        <h5 className="text-[14px] mb-2 font-semibold">{testimonio.Nombre}</h5>
                        <img className="h-4" src="/images/luta-stars.webp" alt="5 estrellas" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="hidden md:block arrow-left absolute top-[calc(50%-22.5px)] -left-12 disabled:opacity-50">
            <svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 2L3 22.5L23 43" stroke="#2C6FFF" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="hidden md:block arrow-right absolute top-[calc(50%-22.5px)] -right-12 disabled:opacity-50">
            <svg className="rotate-180" width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 2L3 22.5L23 43" stroke="#2C6FFF" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <ClientsButton customClasses="mx-auto mt-8" />
      </div>
    </section>
  );
};

export default Testimony;
