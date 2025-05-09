import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaReact, FaNodeJs,  } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiMongodb, SiFirebase,  } from "react-icons/si";
import BingeBoxPng from "../assets/images/BingeBox.png"
import OctavionPng from "../assets/images/Octavion.png"
import ProjectCard from '../components/ProjectCard';
const ProjectsSection = () => {
    const projects = [
        {id:"binge-box", name:"BingeBox",href:"https://binge-box-tmdb.vercel.app/", techStack:[
       { label: "React", icon: <FaReact className="text-cyan-500 w-full" /> },
      { label: "Redux", icon: <SiRedux className="text-purple-500 w-full" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-sky-400 w-full" /> },
      { label: "TMDB API", icon: <FaReact className="text-green-400 w-full" /> },
    ], summary:"BingeBox is a sleek React-based movie and TV show discovery app that fetches real-time data from TMDB, offering users a visually rich browsing and watchlist experience.", img:BingeBoxPng},

        {id:"octavion", name:"Octavion",href:"https://octavion.vercel.app/app/dashboard/home", techStack: [
     { label: "React", icon: <FaReact className="text-cyan-500" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { label: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { label: "NodeJS", icon: <FaNodeJs className="text-lime-500" /> },
    ], summary:"Octavion is a full-featured petrol pump management system built to streamline operations, track fuel inventory, and manage daily transactions efficiently.", img:OctavionPng}]
  return (
    <section className='bg-gradient-to-t dark:from-[#0e0e10] from-[#fff] from-50% to-transparent to-100% scroll-m-16' id='projects'>
        <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
            <div className='relative pt-8 pb-32 max-2xl:px-8 max-md:pt-4'>
                <div className='mx-auto max-w-7xl py-8'>
                    <div className='flex gap-4 items-center justify-center text-center'>
                        <FaCode className='text-3xl dark:text-white text-blacktext'/>
                        <h2 className='font-bold text-3xl max-xl:text-3xl max-md:text-2xl  dark:text-white text-blacktext'>Projects <b className='bg-gradient-to-r from-riptide-500 to-mint-400 dark:from-riptide-500 dark:to-mint-500 text-transparent bg-clip-text'>Completed</b></h2>
                    </div>
                    <p className='z-2 text-center mx-auto text-lg max-xl:text-base max-w-2xl dark:text-gray-200 text-blacktext my-6 leading-6 font-medium'>I love <b className=' bg-gradient-to-r  from-riptide-500 to-mint-500 dark:from-riptide-300 dark:to-mint-200 text-transparent bg-clip-text'>turning ideas into real projects.</b> <br /> Here I show you some of the <b className=' bg-gradient-to-r  from-riptide-500 to-mint-500 dark:from-riptide-300 dark:to-mint-200 text-transparent bg-clip-text'>developments</b> that I've worked on, applying technology, design, and lots of creativity. <b className=' bg-gradient-to-r  from-riptide-500 to-mint-500 dark:from-riptide-300 dark:to-mint-200 text-transparent bg-clip-text'>Check them out!</b></p>
                </div>
                <div className='mx-auto max-w-7xl grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 p-2 py-4 max-h-[150vh] overflow-hidden transition-[max-height] duration-500 ease-in-out'>
                    {projects.map((item)=>(
                        <ProjectCard key={item.id} name={item.name} summary={item.summary} techStack={item.techStack} img={item.img} href={item.href}/>
                    ))}
                </div>
                <div className='absolute bottom-0 left-0 w-full flex justify-center text-center bg-gradient-to-t from-[#FBFEFD] dark:from-[#0e0e10] from-55% to-transparent to-100% pb-30 pt-52 hidden'></div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection