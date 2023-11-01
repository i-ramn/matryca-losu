import { HeaderNav, HeaderNavProps } from "@/components/Header/HeaderNav";

const navlinks: HeaderNavProps[] = [
  { href: "/", label: "home" },
  { href: "/test", label: "test" },
];

export const Header = (): JSX.Element => {
  return (
    <header className="bg-purple border-solid rounded max-w-headerWidth w-4/5 m-auto flex gap-4">
      <HeaderNav navLinks={navlinks} />
    </header>
  );
};
