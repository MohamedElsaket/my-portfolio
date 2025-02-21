"use client";

import { Button } from "@/components/ui/button";

import Info from "@/components/Info";
import Logo from "@/components/Logo";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { goTop } from "@/services/goTop";
import Link from "next/link";

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
            <Link href={"/contact"}>
              <Button className="text-sm">Hire Me</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <TabsContent id="scrollTopButton" value="home">
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

// <section className="h-full">
//   <div className="container mx-auto h-full">
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
//       className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-12"
//     >
//       <div className="text-center xl:text-left order-2 xl:order-none">
//         <span className="text-xl">Software Developer</span>
//         <h1 className="h1 mb-6">
//           Hello I'm <br /> <span className="text-accent">Mohamed </span>
//         </h1>
//         <p className="max-w-[500px] mb-9 text-white/80">
//           I excel at crafting elegant and efficient code solutions, with a
//           passion for continuous learning and improvement.
//         </p>

//         <div className="flex flex-col xl:flex-row items-center gap-8">
//           <Button
//             size="lg"
//             variant="outline"
//             className="uppercase flex items-center gap-2"
//           >
//             <span>Download CV</span>
//             <FiDownload className="text-xl" />
//           </Button>
//           <div className="mb-8 xl:mb-0">
//             <Social
//               containerStyles="flex gap-6"
//               iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="order-1 xl:order-none mb-8 xl:mb-0">
//         <Photo />
//       </div>
//     </motion.div>
//   </div>

//   <Stats />
// </section>
