'use client';

import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

import { advantages } from './data';

export const Advantages = () => {
  return (
    <section className="pt-16 text-purple">
      <h2 className="mb-14 text-center uppercase">
        <FormattedMessage id="advantages.why-us" />
      </h2>
      <div className="container grid grid-cols-2 justify-items-center gap-y-4 md:grid-cols-4 md:gap-y-10">
        {advantages.map(({ imageSrc, description }, id) => (
          <div className="flex max-w-[221px] flex-col items-center justify-center gap-5 text-center">
            <Image key={id} src={imageSrc} alt="" />
            <p className="leading-5 md:leading-8">
              <FormattedMessage id={description} />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
