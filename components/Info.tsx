import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Photo from "./Photo";
import Social from "./Social";
import { Button } from "./ui/button";

export default function Info() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
          className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-12"
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Mohamed </span>
            </h1>
            {/* <p className="max-w-[500px] mb-6 text-white/80">
              I excel at crafting elegant and efficient code solutions, with a
              passion for continuous learning and improvement.
            </p> */}

            <div className="flex flex-col gap-8 items-center lg:items-start">
              <Button
                size="lg"
                variant="outline"
                className="uppercase flex items-center gap-2 w-fit"
              >
                <a href={"/Mohamed Elsaket.pdf"} download>
                  Download CV
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-12 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
