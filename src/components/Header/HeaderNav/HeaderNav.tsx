'use client';
import { FC, useCallback, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import { useWindowSize } from '@/hooks/useWindowSize';
import { CloseButton } from '@/components/Buttons/CloseButton';
import { MessageIds } from '../../../types/i18n';
import Logo from '@/public/icons/logo.svg';
import styles from './styles.module.scss';

export interface HeaderNavProps {
  label: string;
  href: string;
}

interface NavLinks {
  navLinks: HeaderNavProps[];
}

export const HeaderNav: FC<NavLinks> = ({ navLinks }) => {
  const pathname = usePathname();
  const intl = useIntl();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const toggleBurger = useCallback(() => setIsMenuOpened((prev) => !prev), []);

  const { isMatchWith: windowReachedBreakpoint } = useWindowSize({
    matchWith: 800,
  });

  useEffect(() => {
    setIsMenuOpened(false);
  }, [windowReachedBreakpoint]);

  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/" className="cursor-pointer">
          <Image className="h-20 w-20 lg:h-24 lg:w-24" src={Logo} alt="logo" />
        </Link>

        <nav className={isMenuOpened ? styles.mobileMenu : styles.menu}>
          <CloseButton className="absolute right-3 top-3 md:hidden" onClick={toggleBurger} />

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                className={`${
                  isActive ? styles.activeLink : styles.link
                } border-b border-zinc-500 p-4 md:border-0 md:p-0`}
                href={link.href}
              >
                {intl.formatMessage({ id: `navigation.${link.label}` as MessageIds })}
              </Link>
            );
          })}
        </nav>
        <DefaultButton className="hidden md:block" messageId="button.enter" variant="nav" />
        <div className="block md:hidden">
          <Hamburger toggled={false} onToggle={toggleBurger} color="var(--main-gradient)" />
        </div>
      </div>
      {isMenuOpened && <div onClick={toggleBurger} className={styles.overlay} />}
    </>
  );
};
