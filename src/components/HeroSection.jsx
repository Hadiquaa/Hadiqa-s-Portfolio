import React from 'react'
import HadiqaImage from "../assets/images/Hadiqa.jpg";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="waving-on-hover mx-auto mb-4 h-96 w-full max-w-7xl rounded-2xl bg-gradient-to-r from-mint-300 dark:from-mint-600 to-mint-50 dark:to-mint-200/5 hover:to-mint-300/30 dark:hover:to-mint-600/30 p-[.2rem]  max-md:h-auto">
      <div className="group relative z-0 flex h-full items-center justify-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-tr from-riptide-100 to-white p-4 transition-all hover:shadow-[0_10px_50px_rgba(13,_188,_130,_0.2)] dark:bg-gradient-to-r dark:from-mint-950 dark:to-zinc-950 dark:overflow-hidden max-md:w-full max-md:gap-3 max-lg:gap-2 max-sm:flex-col dark:before:[background-image:radial-gradient(circle,_rgba(13,188,130)_0,_rgba(1,45,34)_100%)] before:[background-image:radial-gradient(circle,_rgba(95,255,202)_0,_rgba(144,253,210)_100%)] before:absolute before:left-65 before:top-10 before:h-[40%] before:aspect-square before:rounded-full before:blur-3xl before:opacity-80 before:-z-10 before:transition hover:before:animate-pulse">
        <div className="aspect-square h-4/5 max-md:size-32">
          <div className="group-hover:scale-105 relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-full  dark:p-[1.5px] p-[2px]  transition-all duration-500">
            <div className="absolute inset-0 h-full w-full rounded-fullfrom-transparent  to-riptide-500 dark:from-transparent  f dark:to-mint-300 animate-rotate-border bg-conic/[from_var(--border-angle)] "></div>
            <div className="relative z-20 flex w-full rounded-full bg-mint-900">
              <div
                className="w-full aspect-square rounded-full"
                style={{
                  backgroundImage: `url(${HadiqaImage})`,
                  backgroundPosition: "45% 30%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <a href="#" className="flex h-full w-full"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-7/12 flex-col justify-center gap-4 p-4 max-md:w-full max-md:gap-2">
          <span className="relative inline-flex items-center gap-2 text-xs font-semibold leading-none dark:text-white text-blacktext max-md:font-medium max-sm:justify-center">
            <span className="block h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0px_0px_0px_3px_rgba(34,_197,_94,_0.5)] animate-pulse"></span>
            Available for work
          </span>

          <h1 className="text-4xl font-black leading-none text-blacktext  dark:text-white max-xl:text-3xl max-lg:text-2xl  max-sm:text-center">
            {" "}
            Hadiqua Taiba <span className="waving">👋🏻</span>
          </h1>
          <p className="mb-0 text-lg font-semibold leading-8 text-blacktext dark:text-gray-200 max-xl:text-base max-sm:text-center">
            <span className="bg-gradient-to-r from-riptide-500 to-mint-500 bg-clip-text font-black text-transparent   dark:from-riptide-300 dark:to-mint-200">
              Full Stack Developer
            </span>{" "}
            —crafting sleek, high-performance interfaces fueled by code,
            creativity, and coffee. 🚀☕
          </p>
          <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
            <div
              className="w-fit h-fit from-transparent via-riptide-300 to-transparent dark:from-transparent dark:via-mint-500 dark:to-transparent  from-40% to-60% animate-rotate-border bg-conic/[from_var(--border-angle)] p-px hover:shadow-lg
    hover:shadow-mint-500/30 rounded-full"
            >
              <a
                href="mailto:hadiqua350@gmail.com"
                className="
    z-2 
    text-center 
    cursor-pointer 
    leading-none 
    hover:scale-110 
    w-fit 
    font-medium 
    flex 
    gap-2 
    transition-all 
    ease-in-out 
    justify-center 
    items-center 
    rounded-full
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:hover:bg-none
    disabled:hover:shadow-none
    aria-disabled:opacity-50
    aria-disabled:cursor-not-allowed
    aria-disabled:hover:scale-100
    aria-disabled:hover:bg-none
    aria-disabled:hover:shadow-none
 
        text-blacktext/90 
        dark:text-mint-50 
        dark:hover:text-white 
        px-6 
        py-4 
        max-xl:px-5 
        max-sm:py-2 
        max-sm:px-3 
        text-lg 
        max-xl:text-base 
        max-sm:text-sm 
        hover:bg-gradient-to-l 
        bg-gradient-to-r 
        from-riptide-300 
        to-mint-300 
        dark:from-riptide-500 
        dark:to-mint-500
    "
              >
                <IoMailOutline /> Contact Me
              </a>
            </div>
            <div
              className="w-fit h-fit from-transparent via-riptide-300 to-transparent dark:from-transparent dark:via-mint-500 dark:to-transparent  from-40% to-60% animate-rotate-border bg-conic/[from_var(--border-angle)] p-px hover:shadow-lg
    hover:shadow-mint-500/30 rounded-full"
            >
              <a
                href="/about"
                className="
    z-2 
    text-center 
    cursor-pointer 
    leading-none 
    hover:scale-110 
    w-fit 
    font-medium 
    flex 
    gap-2 
    transition-all 
    ease-in-out 
    justify-center 
    items-center 
    rounded-full
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:hover:bg-none
    disabled:hover:shadow-none
    aria-disabled:opacity-50
    aria-disabled:cursor-not-allowed
    aria-disabled:hover:scale-100
    aria-disabled:hover:bg-none
    aria-disabled:hover:shadow-none
 
        group 
        dark:text-mint-50 
        text-blacktext
        dark:hover:text-white 
        px-6 
        py-4 
        max-xl:px-5 
        max-sm:py-2 
        max-sm:px-3 
        text-lg 
        max-xl:text-base 
        max-sm:text-sm 
        dark:bg-zinc-800 
        bg-white
        dark:hover:bg-mint-500
    "
              >
                <IoPersonOutline /> About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection