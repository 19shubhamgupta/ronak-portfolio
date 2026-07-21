/* eslint-disable react/no-unescaped-entities */
"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center min-h-screen pt-30 md:pt-8 pb-20 md:pb-32 overflow-hidden text-white"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:justify-between w-full mx-auto md:px-4 min-h-[60vh]">
        {/* LEFT SIDE */}
        <div className="flex-1 md:flex-1 space-y-4 text-center md:text-left md:pr-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Hello, I'm
          </h2>
          <h1 className="text-xl sm:text-5xl md:text-7xl font-extrabold tracking-tight my-text-2">
            Ronak Patil
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white h-14">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <p className=" md:block text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
            I'm a tech enthusiast who loves crafting seamless, creative, and
            user-centered web applications. I believe in clean code and elegant
            solutions that bring ideas to life.
          </p>
          {/* Buttons */}
          <div className="flex flex-col px-7 md:px-0 sm:flex-row justify-start gap-4 pt-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 text-white rounded-lg font-medium shadow-lg px-8 py-3 text-center transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 hover:scale-105 text-white rounded-lg font-medium shadow-lg px-8 py-3 text-center transition-all duration-300"
            >
              View Projects
            </a>
          </div>
          {/* Socials */}
          <div className="hidden md:flex justify-center md:justify-start gap-6 pt-6">
            <a
              href="https://github.com/ronakpatil96"
              className="text-gray-400 hover:my-text-2 hover:scale-125 transition-all duration-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/ronak-patil-796222329/"
              className="text-gray-400 hover:my-text-2 hover:scale-125 transition-all duration-200"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href=""
              className="text-gray-400 hover:my-text-2 hover:scale-125 transition-all duration-200"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        {/* Right Section - Profile with Animated Circles */}
        <div className="relative hidden mt-15 md:block flex-1 md:flex-1 flex justify-center md:justify-end items-center md:pr-10">
          <div className="relative flex items-center justify-center">
            {/* Outermost Rotating Ring - Dashed */}
            <div className="absolute w-[28rem] h-[28rem] rounded-full border-2 border-dashed border-purple-500/40 animate-spin-slow"></div>

            {/* Second Ring - Solid, Reverse Spin */}
            <div className="absolute w-[26rem] h-[26rem] rounded-full border border-blue-500/30 animate-reverse-spin"></div>

            {/* Third Ring - Gradient Glow */}
            <div className="absolute w-[24rem] h-[24rem] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>

            {/* Inner Glow Ring */}
            <div className="absolute w-[22rem] h-[22rem] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-sm"></div>

            {/* Profile Image Container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gray-700/50 shadow-2xl">
              <Image
                src="/profile-pic.png"
                alt="Ronak Patil"
                width={288}
                height={288}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
