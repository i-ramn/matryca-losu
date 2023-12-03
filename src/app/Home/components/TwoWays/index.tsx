'use client';
import Image from 'next/image';
import { useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { useWindowSize } from '@/hooks/useWindowSize';
import Fun from '@/public/icons/fun-mask.svg';
import Sadness from '@/public/icons/sad-mask.svg';
import ArrowStart from '@/public/icons/arrow-ways-start-lg.svg';
import ArrowEnd from '@/public/icons/arrow-ways-end-lg.svg';
import ArrowStartSm from '@/public/icons/arrow-ways-start-sm.svg';
import ArrowEndSm from '@/public/icons/arrow-ways-end-sm.svg';

export const TwoWays = () => {
  const { isMatchWith: windowReachedBreakpoint } = useWindowSize({
    matchWith: 768,
  });

  const displayIcons = useMemo(() => {
    const renderLeft = windowReachedBreakpoint ? ArrowStartSm : ArrowStart;
    const renderRight = windowReachedBreakpoint ? ArrowEndSm : ArrowEnd;

    return { renderLeft, renderRight };
  }, [windowReachedBreakpoint]);

  return (
    <section className="pt-24 text-purple">
      <div className="container text-center md:text-start">
        <h2 className="md:mb-14">
          <FormattedMessage id="ways.title" />
        </h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-5 sm:gap-12">
        <Image
          className="h-min w-min self-end justify-self-end"
          src={displayIcons.renderLeft}
          alt=""
        />
        <Image src={Sadness} className="self-end justify-self-end" alt="" />
        <Image src={Fun} className="self-end" alt="" />
        <Image
          src={displayIcons.renderRight}
          className="col-start-4 row-start-2 row-end-4 -mt-[66%] h-min w-min justify-self-start md:-mt-[60%] lg:-mt-[45%]"
          alt=""
        />
        <p className="col-start-1 col-end-3 max-w-[80%] justify-self-end text-end sm:col-start-2 sm:max-w-full">
          <FormattedMessage id="ways.first-way" />
        </p>
        <p className="col-start-3 col-end-5 row-start-2 max-w-[75%] sm:col-start-3 sm:col-end-4 sm:max-w-full">
          <FormattedMessage id="ways.second-way" />
        </p>
      </div>
    </section>
  );
};
