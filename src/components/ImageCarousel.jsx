import { useState, useEffect } from "react";
import hiking from "../assets/images/hikin.jpg";
import linked from "../assets/images/linke.jpg";
import waterfall from "../assets/images/waterfal.jpg";

// Preload images
const preloadImages = (images) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

// CAROUSEL!
const ImageCarousel = () => {
  const images = [linked, hiking, waterfall]; // array to cycle
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // track image index
  const [slideDirection, setSlideDirection] = useState("right"); // slide direction

  useEffect(() => {
    // Preload the images when the component mounts
    preloadImages(images);

    const intervalId = setInterval(() => {
      // change image and direction
      setSlideDirection("right");
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // loop back to start
    }, 7000); // image duration

    return () => clearInterval(intervalId); // reset
  }, [images.length]);

  return (
    <div className="w-full h-[35rem] flex items-center justify-center relative overflow-hidden">
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
    </div>
  );
};

export default ImageCarousel;
