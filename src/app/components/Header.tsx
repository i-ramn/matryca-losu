import { HeaderNav, HeaderNavProps } from "./HeaderNav";

const navlinks: HeaderNavProps[] = [
  { href: "/", label: "home" },
  { href: "/test", label: "test" },
];

export const Header = (): JSX.Element => {
  return (
    <header>
      <HeaderNav navLinks={navlinks} />
    </header>
  );
};
