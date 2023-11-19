'use client';
import Image from 'next/image';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

interface SocialMediaLabelProps {
  imageSrc: string;
  socialMedia: string;
}

export const SocialMediaLabel: FC<SocialMediaLabelProps> = ({ imageSrc, socialMedia }) => {
  return (
    <div className="border-lightGray2 flex justify-between gap-[10px] rounded-[20px] border-4 bg-white px-[10px] py-1 leading-5">
      <Image src={imageSrc} alt="" />
      <p>
        <FormattedMessage id="ours" />
        <br />
        {socialMedia}
      </p>
    </div>
  );
};
