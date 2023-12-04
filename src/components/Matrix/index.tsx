'use client';
import MATRIX from '@/public/images/matrix.svg';
import { DefaultState } from '@/store/rootReducer';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { coordinates } from './data';

export const Matrix = () => {
  const { combinations } = useSelector((state: DefaultState) => state.calculation);

  const coordinatesKeys: { [key: string]: string } = coordinates;

  const result = Object.keys(combinations)?.map((key) => {
    return { position: combinations[key], coordinates: coordinates[key] };
  });

  console.log('result', result);

  return (
    <div className="relative w-full max-w-[900px]">
      <Image src={MATRIX} alt="matrix" />
      {result.map((el) => (
        <div
          className={`translate- absolute ${el.coordinates} flex h-[8.4%] w-[8.4%] items-center justify-center text-black`}
        >
          {el.position}
        </div>
      ))}
      {/* <div className="translate- absolute left-[45.5%] top-[5.1%] flex h-[8.4%] w-[8.4%] items-center justify-center text-red">
        {combinations?.b}
      </div> */}
    </div>
  );
};
