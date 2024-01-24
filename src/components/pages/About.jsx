import React from "react";
import aboutBg1 from "../../assets/about_bg1.png";

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-[100vh]  overflow-auto">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-aboutBg bg-cover bg-center bg-no-repeat transform scale-x-[-1]`}  
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* About Us Content */}
      <div className="p-8 md:ml-[2rem] space-y-4 rounded-md text-white">
        <h1 className="text-5xl font-bold uppercase" data-aos="fade-up">
          What This About?
        </h1>
        <p className="text-lg md:max-w-[50%]" data-aos="fade-up" data-aos-delay="300">
          Hi! I'm diving into React and Tailwind CSS on an internship at Prodigy Infotech. Learning a ton, working on interesting projects, and staying updated on the latest web dev trends. Excited about building dynamic interfaces with React and loving the efficiency of Tailwind CSS. Eager to tackle more challenges and grow as a developer. 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
