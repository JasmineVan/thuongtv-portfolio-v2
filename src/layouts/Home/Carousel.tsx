import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Ca1Image from "../../assets/Home/ca1.jpg";
import Ca2Image from "../../assets/Home/ca2.jpg";
import Ca3Image from "../../assets/Home/ca3.jpg";

const Carousel = () => {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#f9627d",
          "--swiper-pagination-color": "#f9627d",
        } as React.CSSProperties
      }
      modules={[Autoplay, Navigation, Pagination]}
      //   navigation
      pagination={{ clickable: true }}
      loop
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          src={Ca1Image}
          alt="Slide 1"
          className="w-full h-auto max-h-[800px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Ca2Image}
          alt="Slide 2"
          className="w-full h-auto max-h-[800px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Ca3Image}
          alt="Slide 3"
          className="w-full h-auto max-h-[800px] object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
