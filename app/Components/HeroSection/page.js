'use client';

import { useEffect, useState } from "react";
import Image from "next/image";


const images = [
      "/images/forList.jpg",
      "/images/slide1.jpg",
      "/images/teslaY1.jpg",
      "/images/ToyotaTaxi.jpeg",
      "/images/Mercedes_ClassV22.jpg",
     
    ];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
     <div className="bg-white">
       <div className="relative w-full container mx-auto h-[500px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={600}
            unoptimized
            priority={index === 0}
            className={`absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out 
              ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0   bg-opacity-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mt-2 text-lg md:text-2xl">TRANSPORT & LOGISTICS</h1>
        <p className=" text-4xl md:text-6xl font-bold">MONTRANSFERT SARL</p>
      </div>
    </div>
     </div>
//     <div className="relative w-full h-screen overflow-hidden ">
//       {/* Background images with fade effect */}
//       <div className="absolute w-full h-full">
//         {images.map((src, index) => (
//           <Image
//             key={index}
//             src={src}
//             alt={`Slide ${index + 1}`}
//             width={1920}
//             height={1080}
//             unoptimized
//             className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//                   index === currentIndex ? "opacity-100" : "opacity-0"
//                 }`}
//           />
//         ))}
//       </div>
      
//       {/* Overlay */}
//       <div className="absolute inset-0  bg-opacity-90"></div>
      
//       {/* Title and Subtitle */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//         <h1 className="text-4xl md:text-6xl font-bold">Your Trusted Transport Partner</h1>
//         <p className="mt-2 text-lg md:text-2xl">Reliable, Fast, and Comfortable Travel Solutions</p>
//       </div>
//     </div>
  );
}
