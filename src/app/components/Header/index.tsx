import { HeaderNav, HeaderNavProps } from '@/app/components/Header/HeaderNav/HeaderNav';

const navlinks: HeaderNavProps[] = [
  { href: '/calculation', label: 'calculation' },
  { href: '/сonformity', label: 'сonformity' },
  { href: '/about', label: 'AboutTheMethod' },
  { href: '/blog', label: 'blog' },
  { href: '/buy', label: 'buy' },
];

export const Header = (): JSX.Element => {
  return (
    <header className="bg-purple border-solid rounded-full max-w-headerWidth w-4/5 m-auto flex gap-4 items-center px-5">
      <HeaderNav navLinks={navlinks} />
    </header>
  );
};
