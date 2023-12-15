'use client';
import Image from 'next/image';
import { FC } from 'react';

import FilledArrow from '@/public/icons/accordion-arrow-filled.svg';
import Arrow from '@/public/icons/accordion-arrow.svg';
import FilledLocker from '@/public/icons/locker-filled.svg';
import Locker from '@/public/icons/locker.svg';

export enum ColorEnum {
  primary = 'purple',
  secondary = 'lightGray',
}

interface DropdownProps {
  content?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  isOpened?: boolean;
  bgColor: ColorEnum;
}

export const Dropdown: FC<DropdownProps> = ({ isOpened, content, onClick, disabled, bgColor }) => {
  return (
    <>
      <div
        className={`min-h-6 w-full overflow-hidden border-[2px] border-${bgColor} ${
          isOpened ? 'rounded-t-3xl' : 'rounded-full'
        }`}
      >
        <div
          className={`flex h-full w-full items-center bg-${bgColor} flex justify-between px-10 text-xl uppercase  ${
            bgColor === ColorEnum.secondary ? 'text-purple' : 'text-white'
          }`}
          onClick={disabled ? () => {} : onClick}
        >
          <p>CECHY OSOBOWE</p>
          {disabled ? (
            <Image src={bgColor === ColorEnum.secondary ? FilledLocker : Locker} alt="" />
          ) : (
            <Image
              src={bgColor === ColorEnum.secondary ? FilledArrow : Arrow}
              className={`${isOpened && 'rotate-180'} transition-all duration-75`}
              alt=""
            />
          )}
        </div>
        {isOpened && <>{content}</>}
      </div>
    </>
  );
};
