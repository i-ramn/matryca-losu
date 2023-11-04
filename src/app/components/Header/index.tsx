import { HeaderNav, HeaderNavProps } from '@/app/components/Header/HeaderNav/HeaderNav';
import styles from './styles.module.scss';

const navlinks: HeaderNavProps[] = [
  { href: '/calculation', label: 'calculation' },
  { href: '/сonformity', label: 'сonformity' },
  { href: '/about', label: 'AboutTheMethod' },
  { href: '/blog', label: 'blog' },
  { href: '/buy', label: 'buy' },
];

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <HeaderNav navLinks={navlinks} />
    </header>
  );
};
