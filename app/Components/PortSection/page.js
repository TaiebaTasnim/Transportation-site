

import Image from "next/image";
import port1 from '@/public/images/port1.jpg'
import port2 from '@/public/images/port2.jpg'

const TransportSection = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image 1 */}
        <div className="relative w-full h-72">
          <Image 
            src={port1} 
            alt="Transport 1" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-x-0 bottom-5 flex flex-col items-center text-white">
            <h2 className="text-2xl font-bold">Fast & Reliable Transport</h2>
            <p className="text-lg">Ensuring secure & efficient delivery</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-72">
          <Image 
            src={port2} 
            alt="Transport 2" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
           <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-x-0 bottom-5 flex flex-col items-center text-white">
            <h2 className="text-2xl font-bold">Eco-Friendly Solutions</h2>
            <p className="text-lg">Sustainable & Green Transportation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
