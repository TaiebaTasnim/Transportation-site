

import { Mail, PhoneCall } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
//import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Address Section */}
      <div className="bg-white py-6 px-6 flex flex-col items-center md:flex-row md:justify-between max-w-6xl mx-auto">
        {/* Location */}
        <div className="flex items-center space-x-3 text-gray-700">
          <MdLocationOn className="text-3xl text-[#B59C78]" />
          <p className="text-2xl font-medium">1066 Epalinges, Switzerland</p>
        </div>

        {/* Phone & Email */}
        <div className="mt-6 flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <PhoneCall className="text-[#deba91] text-2xl" />
              <p className="text-gray-800 text-2xl">Phone: +41 79 576 39 79</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-[#deba91] text-3xl" />
              <p className="text-gray-800 text-2xl">Email: montransfert4@gmail.com</p>
            </div>
          </div>
        {/* <div className="flex items-center space-x-3 text-gray-700">
          <FaPhoneAlt className="text-xl text-[#B59C78]" />
          <p className="text-3xl font-medium">
            Phone: <span className="text-black font-semibold">+41 79 576 39 79</span>;
          </p>
          <MdEmail className="text-xl text-[#B59C78]" />
          <p className="text-3xl font-medium">
            Email: <span className="text-black font-semibold">montransfert4@gmail.com</span>
          </p>
        </div> */}

        {/* Open Hours */}
        <div className="flex items-center space-x-3 text-gray-700">
          <MdAccessTime className="text-xl text-[#B59C78]" />
          <p className="text-2xl font-medium">Every day 7/7 - 24/24!</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black py-6 px-6 text-white mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Footer Text */}
          <p className="text-sm">© 2025 Solar-ICT, All Rights Reserved</p>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
