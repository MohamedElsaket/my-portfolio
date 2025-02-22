"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Info from "@/components/Info";
import Logo from "@/components/Logo";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import { goTop } from "@/services/goTop";

const navItems = [
  { name: "Home", value: "home" },
  { name: "Resume", value: "resume" },
  { name: "Services", value: "services" },
  { name: "Projects", value: "projects" },
];

export default function Home() {
  return (
    <div className="container flex py-6 items-center justify-between w-full">
      <Tabs defaultValue={"home"} className="w-full mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <TabsList className="hidden xl:inline-flex items-center justify-center gap-3">
            {navItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                asChild
                onClick={goTop}
              >
                <p className="cursor-pointer">{item.name}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsList className="fixed left-0 bottom-0 w-full text-center py-4 bg-black/50 backdrop-blur-md rounded-t-xl inline-flex xl:hidden items-center justify-center gap-2 z-40">
            {navItems.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                asChild
                className="text-sm"
                onClick={goTop}
              >
                <p className="cursor-pointer">{item.name}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex items-center gap-8">
            <Link href={"https://wa.me/+201030848281"} target="_blank">
              <Button className="text-sm">Hire Me</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <TabsContent value="home">
            <Info />
          </TabsContent>
          <TabsContent value="services">
            <Services />
          </TabsContent>
          <TabsContent value="resume">
            <Resume />
          </TabsContent>
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
