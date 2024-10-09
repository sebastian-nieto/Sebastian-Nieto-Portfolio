import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
// Main = About Me
export const AboutMe = () => {
  return (
    <div
     className="border-neutral-800 pb-24 mr-40 ml-20">
      <motion.h1
          initial={{ opacity: 0 }}
          whileInView = {{ opacity: 1,}}
          transition={{ duration: 1}} 
           className="text-center text-7xl mb-10">About Me</motion.h1>

      {/* coarosel container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* left side image*/}
        <motion.div
             whileInView = {{ opacity: 1, x: 0}}
             initial= {{ opacity: 0, x: -100}}
             transition = {{ duration: 2, delay:.5}}
                  className="w-full lg:w-2/5 mr-8">
          <ImageCarousel />
        </motion.div>

        {/* right side text*/}
        <motion.div 
            whileInView = {{ opacity: 1, x: 0}}
            initial= {{ opacity: 0, x: 100}}
            transition = {{ duration: 2}}
            className="w-full lg:w-4/5 text-center lg:text-left">
          <p className="text-lg mx-auto lg:mx-0 text-center max-w-4xl">
            Outside of school I like to work on projects. Currently I'm developing a full-stack application focused on La Liga players. This project, built with{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">Spring Boot</span>, utilizes web-scraped data to create a{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">PostgreSQL database</span>, enabling dynamic data display online. Besides that, I've worked on a variety of other projects, ranging from a{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">handheld video game console</span> built from scratch using{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">C++</span> and designed in{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">Fusion 360</span>, to an{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">E-Commerce platform</span> developed with{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">React</span>,{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">Flask</span>, and{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">JavaScript</span>. I've also completed smaller projects, like this portfolio website, as well as a self-sustaining mini-garden, among others.
            When I’m not coding, I enjoy hiking, rock climbing, and playing soccer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
