'use client';
import Link from 'next/link';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { buttonsData } from './buttonsData';

export const TopSection: FC = () => {
  return (
    <>
      <section className="flex w-full bg-home-people bg-contain bg-no-repeat md:bg-cover md:bg-center xl:min-h-[800px]">
        <div className="container flex flex-col items-center pt-7 md:items-start lg:pt-24">
          <h1 className="mb-44 max-w-[80%] text-center text-purple md:mb-14 md:max-w-xl md:text-left">
            <FormattedMessage id="home.calculation" />
          </h1>
          <div className="mb-7 flex flex-col gap-10 md:mb-0 md:gap-5">
            {buttonsData.map((button) => (
              <Link key={button.id} href={button.href} className="w-fit">
                <DefaultButton size="lg" messageId={button.id} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="container flex justify-end">
        <article className="hidden w-2/3 self-end text-end text-sm text-purple md:flex md:text-lg lg:text-2xl">
          <FormattedMessage id="home.article" />
          <FormattedMessage id="home.article.p2" />
        </article>
        <article className="flex text-sm text-purple md:hidden lg:text-lg">
          <FormattedMessage id="home.article.p2" />
        </article>
      </div>
    </>
  );
};
