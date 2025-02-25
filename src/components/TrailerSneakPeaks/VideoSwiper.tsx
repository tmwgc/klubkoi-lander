import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function VideoSwiper() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={200} // Default space between slides
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      initialSlide={1}
      modules={[EffectCoverflow]}
      breakpoints={{
        320: {
          // Mobile devices
          spaceBetween: 20, // Reduced space for mobile
        },
        768: {
          // Tablet and up
          spaceBetween: 100, // Slightly more space for tablets
        },
        1024: {
          // Desktop and up
          spaceBetween: 200, // Default space for larger screens
        },
      }}
      className="mySwiper"
    >
      {[...Array(5)].map((_, index) => (
        <SwiperSlide key={index} className="slide">
          <div className="w-full aspect-[16/9] rounded-lg ">
            <div className="relative w-full h-full border-[1px] border-[var(--primary)] rounded-lg">
              <Image src="/images/sneak1.png" alt="" fill />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
