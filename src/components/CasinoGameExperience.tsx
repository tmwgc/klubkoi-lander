import Image from "next/image";
import React from "react";

const gameCards = [
  {
    imageSrc: "/game/card1.png",
  },
  {
    imageSrc: "/game/card2.png",
  },
  {
    imageSrc: "/game/card3.png",
  },
  {
    imageSrc: "/game/card2.png",
  },
];

export const CasinoGamesExperience: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full px-5">
      <div className="flex flex-wrap gap-9 self-center mt-10 mb-10 w-full">
        <h2 className="flex-auto text-3xl font-black tracking-tighter leading-8 text-white w-[310px]">
          EXPERIENCE <span className="gradient-text">CASINO GAMES</span> IN A NEW MODE
        </h2>
        <p className="flex-auto self-start text-base leading-5 text-stone-300 w-[616px] max-md:max-w-full">
          Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac
          ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac.
          Interdum tortor
        </p>
      </div>
      <div className="grid grid-cols-4">
        {gameCards.map((card, index) => (
          <div key={index} className="relative aspect-[0.8]">
            <Image src={card.imageSrc} alt="" fill />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasinoGamesExperience;
