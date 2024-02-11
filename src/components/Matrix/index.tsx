'use client';
import Image from 'next/image';
import { useState } from 'react';

import MATRIX from '@/public/images/matrix.svg';
import { DefaultState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';
import { coordinates } from './data';

export const Matrix = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { combinations } = useSelector((state: DefaultState) => state.calculation);

  const intermediateCoordinates =
    combinations && Object.keys(combinations).filter((el) => Object.keys(coordinates).includes(el));

  const result = intermediateCoordinates?.map((key) => ({
    position: combinations?.[key as keyof typeof combinations],
    coordinates: coordinates[key as keyof typeof coordinates],
  }));

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative h-max w-full max-w-[900px]">
      <Image draggable={false} unoptimized src={MATRIX} alt="matrix" onLoad={handleImageLoad} />
      {imageLoaded &&
        result?.map((el, id) => (
          <div
            key={id}
            className={`translate- absolute flex items-center justify-center text-black ${el.coordinates} cursor-default`}
          >
            <span>{el.position}</span>
          </div>
        ))}
    </div>
  );
};
