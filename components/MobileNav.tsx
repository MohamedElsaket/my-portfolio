"use client";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const navItems = [
  { name: "Home", value: "home" },
  { name: "Resume", value: "resume" },
  { name: "Services", value: "services" },
  { name: "Contact", value: "contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Tabs defaultValue="home" className="fixed bottom-0 w-full py-10">
      <TabsList className="inline-flex xl:hidden items-center justify-center gap-3 rounded-md text-white">
        {navItems.map((item) => (
          <TabsTrigger key={item.value} value={item.value} asChild>
            <p className="cursor-pointer">{item.name}</p>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
