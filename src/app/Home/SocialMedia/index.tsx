'use client';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

import { SocialMediaLabel } from '@/components/SocialMediaLabel';
import { DefaultButton } from '@/components/Buttons/DefaultButton';
import Tiktok from '@/public/icons/tiktok.svg';
import Instagram from '@/public/icons/Instagram.svg';
import Phone from '@/public/images/phone.png';

export const SocialMedia = () => {
  return (
    <section className="container relative flex min-h-min flex-col items-center justify-center pt-10 md:items-end lg:pt-20">
      <Image src={Phone} alt="" className="absolute left-5 top-0 -z-10 w-[90%]" />
      <div className="flex w-full flex-col items-end gap-10 sm:gap-28 md:w-3/4 lg:items-start">
        <h2 className="max-w-[250px] leading-5 text-purple md:max-w-max md:leading-normal">
          <FormattedMessage id="social-media.find-us.title.top" />
          <br />
          <FormattedMessage id="social-media.find-us.title.bottom" />
        </h2>
        <div className="flex w-full flex-col items-center justify-between gap-2 font-bold md:gap-9 lg:items-start">
          <p>
            <FormattedMessage id="subscribe" />
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-5 md:gap-0 lg:flex-row">
            <span className="flex gap-6">
              <SocialMediaLabel socialMedia="Tiktok" imageSrc={Tiktok} />
              <SocialMediaLabel socialMedia="Instagram" imageSrc={Instagram} />
            </span>
            <DefaultButton messageId="contact-with-us" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
};
