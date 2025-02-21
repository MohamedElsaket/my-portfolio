"use client";

import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    // <header className="py-8 xl-py:12 text-white">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link href={"/"}>
    //       <h1 className="text-4xl font-semibold">
    //         Mohamed
    //         <span className="text-accent">.</span>
    //       </h1>
    //     </Link>

    //     <div className="hidden xl:flex items-center gap-8">
    //       <Nav />
    //       <Link href={"/contact"}>
    //         <Button>Hire Me</Button>
    //       </Link>
    //     </div>

    //     <div className="xl:hidden">
    //       <MobileNav />
    //     </div>
    //   </div>
    // </header>

    //====================================================>>
    <header className="sticky w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-8 items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Mohamed
            <span className="text-accent">.</span>
          </h1>
        </Link>
        <Tabs value={pathname}>
          <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            {navItems.map((item) => (
              <TabsTrigger
                key={item.path}
                value={item.path}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                asChild
              >
                <Link href={item.path}>{item.name}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="hidden xl:flex items-center gap-8">
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
