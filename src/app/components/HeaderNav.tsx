"use client";
import { usePathname } from "next/navigation";
import { FC } from "react";

import Link from "next/link";

export interface HeaderNavProps {
  label: string;
  href: string;
}

interface NavLinks {
  navLinks: HeaderNavProps[];
}

export const HeaderNav: FC<NavLinks> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? "text-rose-600" : "text-black"}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};
