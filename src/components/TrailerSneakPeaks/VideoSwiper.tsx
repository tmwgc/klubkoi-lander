import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

export default function VideoSwiper() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={200} // Increase spacing between slides
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      initialSlide={1}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      {[...Array(5)].map((_, index) => (
        <SwiperSlide key={index} className="slide">
          <div className="w-full aspect-[16/9] rounded-lg ">
            <div className="relative w-full h-full border-[1px] border-[#CFFF55] rounded-lg">
              <Image src="/images/sneak1.png" alt="" fill />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
