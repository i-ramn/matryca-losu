'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useIntl } from 'react-intl';

import { DefaultButton } from '@/components/Buttons/DefaultButton';
import styles from './styles.module.scss';
import { MessageIds } from '../../../../../i18n';
import Logo from '../../../../../public/logo.svg';

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

  return (
    <>
      <Link href="/" className="cursor-pointer">
        <Image width={100} height={100} src={Logo} alt="logo" />
      </Link>
      <nav className={styles.navigation}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              className={isActive ? styles.activeLink : styles.link}
              href={link.href}
            >
              {intl.formatMessage({ id: `navigation.${link.label}` as MessageIds })}
            </Link>
          );
        })}
      </nav>
      <DefaultButton messageId="navigation.calculation" />
    </>
  );
};
