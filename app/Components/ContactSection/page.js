"use client";

import { useState } from "react";
import { Mail, PhoneCall } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black">Do you need a car?</h2>
          <h3 className="text-sm tracking-widest text-[#deba91] mt-2">
            THE BEST CAR RENTAL
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            The best car rental offers quality service, well-maintained vehicles, and competitive rates.
            Whether for a business trip, vacation, or a one-off need, a good rental agency guarantees comfort,
            flexibility, and reliable assistance. With a wide selection of models, from city cars to luxury vehicles,
            it adapts to the needs of each customer for a pleasant and worry-free experience. 🚗✨
          </p>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <PhoneCall className="text-[#deba91]" />
              <p className="text-gray-800 text-lg">Phone: +41 79 576 39 79</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#deba91]" />
              <p className="text-gray-800 text-lg">Email: montransfert4@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-black">Quick Contact:</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
          {["email", "name", "phone", "message"].map((field, index) => (
  <div
    key={index}
    className={`relative ${
      field === "phone" || field === "message" ? "col-span-2" : ""
    }`}
  >
    {field === "message" ? (
      <textarea
        name={field}
        placeholder={`Your ${field}`}
        value={formData[field]}
        onChange={handleChange}
        className="w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 relative 
        bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
      />
  
    ) : (
      <input
        type={field === "email" ? "email" : "text"}
        name={field}
        placeholder={`Your ${field}`}
        value={formData[field]}
        onChange={handleChange}
        className="w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 relative 
        hover:bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
      />
    )}
  </div>
))}






          </div>

          {/* Send Button */}
          <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group ">
  {/* "+" transforms into a circle */}
  <span className="relative z-10 flex items-center gap-2">
    {/* "+" by default, transforms into a circle on hover */}
    <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
    <span className="absolute  opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
    <span className="text-lg">SEND</span>
  </span>
</button>

        </div>
      </div>

      {/* Floating Icons */}
      <div className="fixed bottom-10 left-6 flex flex-col space-y-4">
      <a
              href="https://wa.me/41795763979"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="tel:+41795763979"
              className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-green-800 transition"
            >
              <FaPhoneAlt className="text-xl" />
            </a>
        {/* <div className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-full shadow-lg cursor-pointer">
          🟢
        </div>
        <div className="w-12 h-12 bg-green-700 flex items-center justify-center rounded-full shadow-lg cursor-pointer">
          📞
        </div> */}
      </div>
    </section>
  );
}
