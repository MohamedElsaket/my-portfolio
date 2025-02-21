"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact Me",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
