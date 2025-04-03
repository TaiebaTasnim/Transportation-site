

import Image from "next/image";
//import { useState } from "react";
import tourist1 from '@/public/images/tourist1.jpg'
import tourist2 from '@/public/images/tourist2.jpg'
import tourist3 from '@/public/images/tourist3.jpg'
import tourist4 from '@/public/images/tourist4.jpg'

const touristPlaces = [
  {
    title: "Lausanne",
    img: tourist1, // Replace with actual image path
    description: "Vevey, a charming town on the shores of Lake Geneva, is renowned for its peaceful atmosphere and rich cultural heritage. Home to Nestlé and Charlie Chaplin's adopted home, it offers an idyllic setting nestled between vineyards and mountains.",
  },
  {
    title: "Geneva",
    img: tourist2, // Replace with actual image path
    description: "Vevey, a charming town on the shores of Lake Geneva, is renowned for its peaceful atmosphere and rich cultural heritage. Home to Nestlé and Charlie Chaplin's adopted home, it offers an idyllic setting nestled between vineyards and mountains.",
  },
  {
    title: "Vevey",
    img: tourist3, // Replace with actual image path
    description:
      "Vevey, a charming town on the shores of Lake Geneva, is renowned for its peaceful atmosphere and rich cultural heritage. Home to Nestlé and Charlie Chaplin's adopted home, it offers an idyllic setting nestled between vineyards and mountains.",
  },
  {
    title: "Montreux",
    img: tourist4, // Replace with actual image path
    description: "Vevey, a charming town on the shores of Lake Geneva, is renowned for its peaceful atmosphere and rich cultural heritage. Home to Nestlé and Charlie Chaplin's adopted home, it offers an idyllic setting nestled between vineyards and mountains.",
  },
];

const TouristSection = () => {
  return (
   <div className="bg-white"> 
       <div className="container mx-auto py-10 px-6 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-semibold text-[#B59C78] mb-6">
        Tourist places:
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {touristPlaces.map((place, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            {/* Background Image */}
            <Image
              src={place.img}
              alt={place.title}
              width={400}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            {place.description && (
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 text-white flex flex-col justify-center p-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
  <div className="transition-all duration-700 delay-200">
    <h3 className="text-xl font-bold drop-shadow-lg">{place.title}</h3>
    <p className="text-sm mt-2 drop-shadow-md">{place.description}</p>
  </div>
</div>
)}
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="text-center mt-6 text-[#B59C78] font-medium text-sm">
        LAUSANNE | GENEVA | VEVEY | MONTREUX
      </div>
    </div>
   </div>
  );
};

export default TouristSection;
