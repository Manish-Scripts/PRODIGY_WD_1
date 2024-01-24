import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Explore Our Home
            </h1>
            <p className="text-xl" data-aos="fade-up" data-aos-delay="300">
            Let's go on an exciting adventure to uncover the amazing sights and wonders of our home, Earth. From stunning landscapes to the incredible variety of living things, join us in exploring the beauty and diversity that makes our planet so special!
            </p>
            <button data-aos="fade-up" data-aos-delay="500" className="primary-button">Learn More</button>
          </div>
          <div></div>
        </div>
      </div>
      {/* surface section */}
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      {/* bottom gradient */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
