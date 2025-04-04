"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] xl:w-[498px] xl:h-[498px]"
        >
          <Image
            src={"/assets/my-photo.jpg"}
            alt="My Photo"
            className="object-contain rounded-full"
            fill
            priority
            quality={100}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
