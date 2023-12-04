'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import MATRIX from '@/public/images/matrix.svg';
import { DefaultState } from '@/store/rootReducer';
import { coordinates } from './data';

export const Matrix = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { combinations } = useSelector((state: DefaultState) => state.calculation);

  const result = Object.keys(combinations ?? {}).map((key) => ({
    position: combinations?.[key as keyof typeof combinations],
    coordinates: coordinates[key as keyof typeof coordinates],
  }));

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full max-w-[900px]">
      <Image src={MATRIX} alt="matrix" onLoad={handleImageLoad} />
      {imageLoaded &&
        result.map((el) => (
          <div
            className={`translate- absolute flex items-center justify-center text-black ${el.coordinates}`}
          >
            {el.position}
          </div>
        ))}
    </div>
  );
};
