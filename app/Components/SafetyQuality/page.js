"use client";
import React from "react";
//import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import dynamic from "next/dynamic";
 import { FaCheck } from "react-icons/fa";
 import "react-circular-progressbar/dist/styles.css";



 const CircularProgressbar = dynamic(
      () => import("react-circular-progressbar").then((mod) => mod.CircularProgressbar),
      { ssr: false }
    );
    const buildStyles = dynamic(
      () => import("react-circular-progressbar").then((mod) => mod.buildStyles),
      { ssr: false }
    );

const SafetyQuality = () => {
      
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-semibold text-black">Safety & Quality</h2>
          <p className="text-sm tracking-widest text-gray-500 mt-1">MAY THE BEST<span role="img" aria-label="emoji">😊</span></p>
          <p className="text-lg text-gray-700 mt-4">
            At Monttransfert Sàrl, we offer reliable services with a high level of security and quality. We guarantee:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center"><FaCheck className="text-black mr-2" /> Excellence & Reliability</li>
            <li className="flex items-center"><FaCheck className="text-black mr-2" /> Compliance with security standards</li>
            <li className="flex items-center"><FaCheck className="text-black mr-2" /> Guaranteed customer satisfaction</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">Trust us for safe and efficient services! 🚀</p>
          {/* See More Button */}
          <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group ">
  {/* "+" transforms into a circle */}
  <span className="relative z-10 flex items-center gap-2">
    {/* "+" by default, transforms into a circle on hover */}
    <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
    <span className="absolute  opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
    <span className="text-lg">SEE MORE</span>
  </span>
</button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28">
              <CircularProgressbar 
                value={99} 
                text={`99%`} 
                styles={buildStyles({
                  textSize: "20px",
                  pathColor: "#000",
                  textColor: "#000",
                  trailColor: "#deba91",
                })}
              />
            </div>
            <p className="mt-2 text-gray-700 text-lg">Customer satisfaction</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28">
              <CircularProgressbar 
                value={90} 
                text={`90%`} 
                styles={buildStyles({
                  textSize: "20px",
                  pathColor: "#000",
                  textColor: "#000",
                  trailColor: "#deba91",
                })}
              />
            </div>
            <p className="mt-2 text-gray-700 text-lg">Ecological</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyQuality;
