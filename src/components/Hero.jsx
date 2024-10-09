import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-6"> 
        <div className="text-left">
          <motion.span initial = {{ x: -100, opacity: 0}}
          animate = {{ x: 0, opacity: 1}}
          transition = {{ duration: 1, delay: 0}}
           className="text-sm lg:text-base block ml-2">Hey! My name is</motion.span>
          <motion.h1 
          initial = {{ x: -100, opacity: 0}}
          animate = {{ x: 0, opacity: 1}}
          transition = {{ duration: 1, delay: 1}}className="text-6xl tracking-tight lg:text-8xl mb-2"> 
            <span className="block">Sebastian</span>
            <span className="block">Nieto</span>
          </motion.h1>
        </div>

        <motion.span 
        initial = {{ x: 100, opacity: 0}}
        animate = {{ x: 0, opacity: 1}}
        transition = {{ duration: 1, delay: 2}}
          className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent
          my-2 max-w-xl text-center tracking-tighter lg:max-w-2xl lg:py-0 lg:mt-4 mt-4 ml-4
          leading-snug bg-[length:200%_200%] bg-top"
          style={{ paddingBottom: '0.2em' }}> 
          {HERO_CONTENT}
        </motion.span>
      </div>
    </div>
  );
};

export default Hero;
