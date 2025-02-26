import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";

const videos = [
  {
    thumbnail: "/sneakpeak/1.png",
    videoUrl:
      "https://media.istockphoto.com/id/1782594228/video/drone-flight-along-the-strip-in-las-vegas-at-night.mp4?s=mp4-640x640-is&k=20&c=1ReYKmPddsTtYLT-16C4D0Wc24bJmgJT9qA8DAKWoVo=",
  },
  {
    thumbnail: "/sneakpeak/2.png",
    videoUrl:
      "https://media.istockphoto.com/id/1782594228/video/drone-flight-along-the-strip-in-las-vegas-at-night.mp4?s=mp4-640x640-is&k=20&c=1ReYKmPddsTtYLT-16C4D0Wc24bJmgJT9qA8DAKWoVo=",
  },
  {
    thumbnail: "/sneakpeak/3.png",
    videoUrl:
      "https://media.istockphoto.com/id/1782594228/video/drone-flight-along-the-strip-in-las-vegas-at-night.mp4?s=mp4-640x640-is&k=20&c=1ReYKmPddsTtYLT-16C4D0Wc24bJmgJT9qA8DAKWoVo=",
  },
];

const VideoCard = ({ thumbnail, videoUrl }: { thumbnail: string; videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log(isPaused);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <div className="w-full aspect-[16/9] rounded-lg cursor-pointer">
      <div className="relative w-full h-full border-[1px] border-[var(--primary)] rounded-lg overflow-hidden">
        {isPlaying ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              onClick={handleVideoClick}
              onEnded={() => setIsPlaying(false)}
            />
            {/* {isPaused && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="border-l-8 border-l-[var(--primary)] h-8 ml-1" />
                    <div className="border-l-8 border-l-[var(--primary)] h-8" />
                  </div>
                </div>
              </div>
            )} */}
          </div>
        ) : (
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
            onClick={handleThumbnailClick}
          />
        )}
      </div>
    </div>
  );
};

export default function VideoSwiper() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={200}
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
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 100,
        },
        1024: {
          spaceBetween: 200,
        },
      }}
      className="mySwiper"
    >
      {videos.map((item, index) => (
        <SwiperSlide key={index} className="slide">
          <VideoCard thumbnail={item.thumbnail} videoUrl={item.videoUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
