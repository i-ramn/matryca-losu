'use client';
import Logo from '@/public/icons/footer-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { DefaultButton } from '../Buttons/DefaultButton';
import { footerNav, siteMap, socialMedias } from './data';

export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="container flex h-full">
        <div className="z-10 min-h-[200px] w-3/4 bg-footer-left bg-contain bg-no-repeat pl-[10%] pt-[7%] md:pl-[5%] lg:min-h-[300px] lg:pt-[5%] xl:pb-24 xl:pl-20">
          <div className="flex gap-5">
            <div>
              <Image
                className="h-auto w-[76px] lg:w-[120px] xl:h-min xl:w-auto"
                src={Logo}
                alt="logo"
              />
              <div className="hidden justify-around lg:flex">
                {socialMedias.map(({ imageSrc, href }) => (
                  <Link href={href}>
                    <Image src={imageSrc} alt="social medial link" />
                  </Link>
                ))}
              </div>
            </div>
            <ul className="hidden flex-col justify-around font-inter font-normal text-white last:mb-2 lg:flex">
              {siteMap.map(({ href, title }) => (
                <li>
                  <Link className="hover:text-purple" href={href}>
                    <FormattedMessage id={title} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="-ml-14 flex w-3/4 flex-col items-center gap-0 bg-footer-right bg-contain bg-no-repeat pr-20 pt-[5%] text-end font-inter font-normal text-purple lg:items-end lg:gap-7 xl:pt-16">
          <DefaultButton
            className="hidden xl:block"
            messageId="button.enter"
            size="sm"
            variant="nav"
          />
          <ul className="flex flex-col justify-between text-xs md:text-base lg:pt-16 lg:text-2xl xl:gap-2">
            {footerNav.map(({ title, href }) => (
              <li>
                <Link href={href}>
                  <FormattedMessage id={title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
