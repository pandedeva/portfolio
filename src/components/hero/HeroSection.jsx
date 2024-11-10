"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const AnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={["Deva", 1000, "Web Developer", 1000, "Web Designer", 1000]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
  );
};

const HeroSection = () => {
  return (
    <section className="lg:py-12 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Hello, I&apos;m
            </span>{" "}
            <br />
            <AnimationComponent />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Hope you enjoy my portfolio ❤️
          </p>

          <div>
            {/* <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200">
              Hire Me
            </button> */}
            <button className="px-1 py-1 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-black via-primary-500 to-secondary-500 mt-3">
              <span className="block bg-[#121212] hover:opacity-80 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-6 lg:mt-0"
        >
          <div className="rounded-full bg-[#6e1b1b] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.png"
              alt={"hero"}
              width={300}
              height={300}
              className={
                "absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 lg:top-2/4 left-1/2 lg:w-full w-5/6"
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
