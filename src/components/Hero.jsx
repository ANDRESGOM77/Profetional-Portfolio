import React from "react";
import CV from "../assets/CV Andres Gomez v2.pdf";
import imagePortfolio from "../assets/photo profile.jpg";

const Hero = () => {
  return (
    <section className="relative w-full" data-aos="zoom-in">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-lg mx-auto relative">
        <div className="grid lg:grid-cols-2 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <div className="lg:py-6 md:mt-5">
            <h1 className="text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-[5.5rem]/[0.9]">
              Hi, I'm a Web Developer
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quod deleniti corrupti nihil architecto tempora iste, est facere
              quasi nulla alias. Vero ipsa beatae recusandae perferendis fuga,
              explicabo iusto vitae!
            </p>
            <div className="flex items-center gap-3 pt-9 flex-col sm:w-max sm:mx-auto lg:mx-0">
              <button className="md:block w-48 bg-primary2 p-4 font-bold border border-b-4 border-black rounded-3xl hover:text-primary hover:border-primary2">
                Hire Me
              </button>
              <button className="md:block bg-primary p-4 font-bold border border-b-4 border-black rounded-3xl text-white">
                <a
                  href={CV}
                  download
                  className="flex justify-between hover:scale-105 transition-all ease-in-out"
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className="lg:h-full md:flex">
            <div className="flex w-full h-full min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full relative md:justify-end">
              <img
                src={imagePortfolio}
                alt="Photo Portfolio"               
                loading="lazy"
                className="w-[600px] h-600 lg:w-[400px] lg:h-auto"
              />
              <div className="absolute top-96 left-20 flex items-center justify-center">
                <div className="relative inline-block text-white text-3xl font-bold px-4 py-2">
                  <span className="block w-60 text-center bg-black text-white text-2xl font-bold skew-y-3 py-1 shadow-lg">
                    Andres
                  </span>
                  <span className="block w-60 text-center bg-black text-white text-2xl font-bold skew-y-3 py-1 shadow-lg">
                    Gomez
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
