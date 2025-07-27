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
    <div className="relative h-full w-full">
      {/* Swiper Background */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#f9627d",
            "--swiper-pagination-color": "#f9627d",
          } as React.CSSProperties
        }
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src={Ca1Image}
            alt="Slide 1"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Ca2Image}
            alt="Slide 2"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Ca3Image}
            alt="Slide 3"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Glassmorphism Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-none bg-white/10 backdrop-blur-xl" />
    </div>
  );
};

export default Carousel;
