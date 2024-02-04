import { HeaderNav, HeaderNavProps } from '@/components/Header/HeaderNav/HeaderNav';
import styles from './styles.module.scss';
import { RoutesEnum } from '@/types/routes';

const navlinks: HeaderNavProps[] = [
  { href: RoutesEnum.Calculation, label: 'calculation' },
  { href: RoutesEnum.Conformity, label: 'сonformity' },
  { href: RoutesEnum.About, label: 'AboutTheMethod' },
  // { href: RoutesEnum.Blog, label: 'blog' },
  { href: RoutesEnum.Buy, label: 'buy' },
];

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <HeaderNav navLinks={navlinks} />
    </header>
  );
};
