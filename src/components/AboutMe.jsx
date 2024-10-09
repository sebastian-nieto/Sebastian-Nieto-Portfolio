import { useState, useEffect } from "react";
import hiking from "../assets/images/hiking.jpg";
import linked from "../assets/images/linked.jpg";
import waterfall from "../assets/images/waterfall.jpg";
import { motion } from "framer-motion";

//CAROUSEL!
const ImageCarousel = () => {
  const images = [linked, hiking, waterfall]; //array to cycle
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // track image index
  const [slideDirection, setSlideDirection] = useState("right"); // slide direction

  useEffect(() => {
    const intervalId = setInterval(() => {
      //change image and direction
      setSlideDirection("right");
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); //loop back to start
    }, 7000); //image duration

    return () => clearInterval(intervalId); // reset
  }, [images.length]);

  return (
    <motion.div
    whileInView = {{ opacity: 1, x: 0}}
    initial= {{ opacity: 0, x: -100}}
    transition = {{ duration: 1}}
     className="w-full h-[35rem] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
              currentImageIndex === index
                ? "translate-x-0"
                : slideDirection === "right"
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

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
        <div className="w-full lg:w-2/5 mr-8">
          <ImageCarousel />
        </div>

        {/* right side text*/}
        <motion.div 
            whileInView = {{ opacity: 1, x: 0}}
            initial= {{ opacity: 0, x: 100}}
            transition = {{ duration: 2}}
            className="w-full lg:w-4/5 text-center lg:text-left">
          <p className="text-lg mx-auto lg:mx-0 text-center max-w-4xl">
            Outside of school, I’m currently developing an exciting full-stack application focused on La Liga players. This project, built with{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">Spring Boot</span>, utilizes web-scraped data to create a{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">PostgreSQL database</span>, enabling dynamic data display online. Throughout my studies and free time, I've worked on a variety of projects, including a{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">handheld video game console</span> built from scratch using{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">C++</span> and designed in{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">Fusion 360</span>, as well as an{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">E-Commerce platform</span> developed with{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">React</span>,{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">Flask</span>, and{" "}
            <span className="bg-gradient-to-r from-green-200 to-lime-200 bg-clip-text text-transparent font-bold">JavaScript</span>. I've also completed smaller projects, like this portfolio website, as well as a self-sustaining mini-garden, among others.
            When I’m not coding, I enjoy hiking, rock climbing, and playing soccer whenever I can.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
