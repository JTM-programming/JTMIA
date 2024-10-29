import React from "react";
import CardTestimony from "../CardTestimony";
import CustomButton from "../CustomButton";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const Testimony = () => {
  const testimonios = [
    {
      titulo: "Testimonio 1",
      contenido:
        "Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla",
      usuario: "Nombre usuario",
      puntuacion: 5,
    },
    {
      titulo: "Testimonio 1",
      contenido:
        "Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla",
      usuario: "Nombre usuario",
      puntuacion: 5,
    },
    {
      titulo: "Testimonio 1",
      contenido:
        "Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla",
      usuario: "Nombre usuario",
      puntuacion: 5,
    },
    {
      titulo: "Testimonio 1",
      contenido:
        "Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla",
      usuario: "Nombre usuario",
      puntuacion: 5,
    },
    {
      titulo: "Testimonio 1",
      contenido:
        "Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla Lorem ipsum dolor blabal balabla",
      usuario: "Nombre usuario",
      puntuacion: 5,
    },
  ];
  return (
    <>
      <div className="jtm-container flex flex-col gap-4 items-center">
        <h6 className="jtm-title">Seccion testimonios</h6>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="swiper-container"
        >
          {testimonios.map((el, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <CardTestimony testimonio={el} />
            </SwiperSlide>
          ))}
        </Swiper>
        <CustomButton />
      </div>
    </>
  );
};

export default Testimony;
