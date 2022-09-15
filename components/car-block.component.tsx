import { StaticImageData } from 'next/image';
import { FC } from 'react';
import Image from 'next/image';

interface CarBlockProps {
  title: string;
  image: StaticImageData;
}

export const CarBlock: FC<CarBlockProps> = ({ title, image }) => {
  return (
    <div className="info-block">
      <span className="text-white text-lg font-bold block text-center">
        {title}
      </span>
      <div className="h-52 relative w-auto">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};
