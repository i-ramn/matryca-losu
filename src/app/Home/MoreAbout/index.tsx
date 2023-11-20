'use client';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

import Trajectory from '@/public/icons/trajectory.svg';
import { moreAboutData } from './data';

export const MoreAbout = () => {
  return (
    <section className="bg-more-about-background bg-contain  bg-no-repeat pt-5 [background-position-x:-35vw] md:mb-16 md:[background-position-x:0px] md:[background-position-y:5vh]">
      <h2 className="text-center uppercase text-purple">
        <FormattedMessage id="more.about.itle" />
      </h2>
      <div className="flex justify-end p-10 md:container">
        <div className="flex w-full flex-col gap-12 lg:w-3/4">
          {moreAboutData.map((el, index) => (
            <div key={index} className={`flex max-w-sm gap-5 md:max-w-full ${el.containerStyle}`}>
              <Image className={`${el.imgstyle} -mt-20 md:mt-0`} src={Trajectory} alt="" />
              <div>
                <h4>
                  <FormattedMessage id={el.subtitle} />
                </h4>
                <p className="text-sm md:text-lg">
                  <FormattedMessage id={el.text} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
