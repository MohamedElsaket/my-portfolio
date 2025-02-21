"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pahtname = usePathname();

  return (
    <AnimatePresence>
      <div key={pahtname}>
        {/* <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 0.4, duration: 0.6 } }}
          className="fixed top-0 h-screen w-screen bg-primary pointer-events-none"
        /> */}
        <div>{children}</div>
      </div>
    </AnimatePresence>
  );
}

// The border of the page
// className="border border-accent rounded-xl mx-auto container py-4 px-8"
