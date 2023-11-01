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
            key={link.label}
            className={
              isActive
                ? "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
                : "text-amber-400 hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text"
            }
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};
