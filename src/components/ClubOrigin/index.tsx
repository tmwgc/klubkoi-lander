import Image from "next/image";
import React from "react";

const ClubOrigin: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full">
      <div className="flex relative flex-col grow shrink-0 items-center px-20 pl-[calc(theme(spacing.20)+40px)] pt-36 pb-20 basis-0 min-h-[972px] w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/images/origin-bg.png"
          className="object-cover absolute inset-0 size-full"
          alt=""
          fill
        />
        <Image
          loading="lazy"
          src="/images/origin.png"
          width={950}
          height={390}
          className="object-contain relative w-full rounded-md aspect-[2.42] max-w-[950px] max-md:max-w-full"
          alt="Klub Koi main visual"
        />
        <div className="flex relative flex-wrap gap-3.5 items-center mt-7 max-md:mr-2.5">
          <div className="flex flex-col self-stretch my-auto text-7xl min-w-[240px] max-w-[372px] max-md:w-full max-md:min-w-unset max-md:text-4xl">
            <Image
              loading="lazy"
              src="/images/track.svg"
              width={340}
              height={51}
              className="object-contain self-center max-w-full aspect-[6.67] max-w-[340px] w-full max-w-auto"
              alt="Klub Koi logo"
            />
            <div className="flex flex-col justify-between w-full text-6xl">
              <div className="font-black text-white tracking-[7.99px] max-md:text-3xl">
                KLUB KOI
              </div>
              <div className="font-semibold tracking-tighter text-lime-300 max-md:text-3xl">
                THE ORIGIN
              </div>
            </div>
          </div>
          <div className="self-stretch my-auto text-base text-white max-w-[555px] w-full max-md:max-w-full">
            Newer headsets like the Meta Quest 2 and Pico 4 are significantly lighter than earlier
            models, reducing neck strain and fatigue during longer sessions. Adjustable head straps,
            facial interfaces, and weight distribution techniques make VR headsets fit snugly and
            comfortably on a wider range of head shapes and sizes. Some headsets incorporate
            built-in fans or removable faceplates to improve airflow and prevent sweating, making
            them more hygienic for shared use. Standalone headsets like the Quest 2 eliminate the
            need for tethered connections to PCs, offering greater freedom of movement and reducing
            cable snags. Advancements in haptic technology are bringing touch sensations to VR
            experiences, adding to immersion and potentially reducing reliance on visual cues for
            interaction. Systems using external sensors or specialized suits are enabling full-body
            movement tracking in VR, opening up possibilities for more natural and immersive
            interactions. Some headsets are blurring the lines between VR and AR, offering the
            ability to overlay virtual elements onto the real world, potentially improving
            wearability and comfort by not completely blocking your surroundings. Overall, VR
            wearability is improving along
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubOrigin;
