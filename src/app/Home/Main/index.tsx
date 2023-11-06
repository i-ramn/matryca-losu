'use client';
import { DefaultButton } from '@/app/components/Buttons/DefaultButton';
import Link from 'next/link';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { buttonsData } from './buttonsData';
import Image from 'next/image';
import Back from '../../../../public/images/background.png';

export const TopSection: FC = () => {
  return (
    <>
      <section className="relative flex max-h-[800px] flex-col justify-between lg:h-[90vh] xl:min-h-[800px]">
        <Image
          src={Back}
          alt="bg image"
          className="absolute top-8 -z-10 h-[40%] sm:h-[60%] md:top-0 md:h-full"
        />
        <div className="container flex flex-col items-center pt-7 md:items-start lg:pt-24">
          <h1 className="mb-44 max-w-[80%] text-center text-purple md:mb-14 md:max-w-xl md:text-left">
            <FormattedMessage id="home.calculation" />
          </h1>
          <div className="mb-7 flex flex-col gap-10 md:mb-0 md:gap-5">
            {buttonsData.map((button) => (
              <Link key={button.id} href={button.href} className="w-fit">
                <DefaultButton messageId={button.id} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="container flex justify-end">
        <article className="hidden w-2/3 self-end text-end text-sm text-purple md:flex lg:text-2xl">
          <FormattedMessage id="home.article" />
          <FormattedMessage id="home.article.p2" />
        </article>
        <article className="flex text-sm text-purple md:hidden">
          <FormattedMessage id="home.article.p2" />
        </article>
      </div>
    </>
  );
};
