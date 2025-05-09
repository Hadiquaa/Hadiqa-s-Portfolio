import React from 'react'
import { FaCode } from "react-icons/fa6";
import projectsImg from "../assets/images/projects-portfolio-Photoroom.png";
const ProjectsIntro = () => {
  return (
    <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-r from-mint-300 dark:from-mint-600 to-mint-50 dark:to-mint-200/5 p-[.2rem] hover:to-mint-300/30 dark:hover:to-mint-600/30 md:col-start-1 md:row-start-1">
      <div className="group relative flex h-full flex-col justify-start overflow-hidden rounded-2xl bg-gradient-to-br from-riptide-100 to-white dark:from-mint-950 dark:to-zinc-950 p-8 transition-all hover:shadow-[0_20px_50px_rgba(13,_188,_130,_0.4)] max-md:p-6 dark:before:[background-image:radial-gradient(circle,_rgba(13,188,130)_0,_rgba(1,45,34)_100%)] before:[background-image:radial-gradient(circle,_rgba(95,255,202)_0,_rgba(144,253,210)_100%)] before:absolute before:left-1/2 before:bottom-30 before:h-[30%] before:aspect-square before:rounded-full before:blur-3xl before:opacity-70 before:transition before:-z-0 hover:before:animate-pulse xl:before:bottom-2/5">
        <a href="#projects" className='absolute left-0 top-0 z-50 h-full w-full bg-transparent'></a>
        <div className='flex items-center gap-4 max-md:gap-2'>
            <FaCode className="text-3xl dark:text-white text-mint-500 max-md:text-2xl max-sm:text-xl"/>
            <h3 className='font-extrabold text-4xl max-xl:text-3xl max-md:text-xl  dark:text-white text-blacktext'>Projects</h3>
        </div>
        <p className='z-2 my-6 text-lg font-semibold leading-6 dark:text-gray-200 text-blacktext max-xl:text-base max-w-[90%] max-md:max-w-[85%]'>I love <span className='bg-gradient-to-r from-riptide-500 to-mint-500 bg-clip-text font-black text-transparent  dark:from-riptide-300 dark:to-mint-200'>turning ideas into real projects</span> <br /> Here I will show you some of the <span className='bg-gradient-to-r from-riptide-500 to-mint-500 bg-clip-text font-black text-transparent  dark:from-riptide-300 dark:to-mint-200'>developments</span> i've worked on, applying technology, design, and lots of creativity. <span className='bg-gradient-to-r from-riptide-500 to-mint-500 bg-clip-text font-black text-transparent  dark:from-riptide-300 dark:to-mint-200'> Check them out!</span></p>
        <img src={projectsImg} className='relative left-0 z-0 mt-8 w-full object-cover transition-all ease-in-out duration-500 group-hover:rotate-2 group-hover:scale-185 max-xl:mt-8 max-lg:mt-8 max-sm:mt-0 max-md:scale-100 max-sm:scale-125 scale-180 max-md:group-hover:scale-105 before:[background-image:radial-gradient(circle,_rgba(13,188,130)_0,_rgba(1,45,34)_100%)] before:absolute before:left-30 before:-bottom-0 before:h-[80%] before:aspect-square before:rounded-full before:blur-3xl before:opacity-80 before:-z-10 before:transition ' alt="" />
      </div>
    </div>
  );
}

export default ProjectsIntro