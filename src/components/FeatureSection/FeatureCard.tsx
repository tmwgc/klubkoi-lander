import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col relative feature-card max-md:max-w-full">
      <div className="flex gap-7 self-start">
        <Image
          loading="lazy"
          src={icon}
          width={40}
          height={40}
          className="object-contain shrink-0 self-start mt-2.5 w-10 aspect-square"
          alt=""
        />
        <div className="flex flex-col grow shrink-0 justify-center basis-0 w-fit">
          <h2 className="text-2xl font-semibold tracking-wide leading-10 text-white">{title}</h2>
          <p className="mt-2.5 text-lg font-medium tracking-wide leading-6 text-neutral-200">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
