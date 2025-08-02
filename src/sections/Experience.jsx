import React from 'react'
import { FaBriefcase } from "react-icons/fa6";
import ExperienceCard from '../components/ExperienceCard';
import { experienceList } from '../assets/helper';

const Experience = () => {
   
  return (
    <section className='py-8 px-8 max-md:py-4 mb-4 scroll-m-16' id='experience'>
        <div className='flex flex-col pt-8 max-w-4xl mx-auto'>
            <div className='flex gap-4 items-center justify-center'>
                <FaBriefcase className='text-3xl dark:text-white text-blacktext'/>
                <h2 className='font-extrabold text-4xl max-xl:text-3xl max-md:text-3xl  dark:text-white text-blacktext'> Work <b className='bg-gradient-to-r from-riptide-500 to-mint-400 dark:from-riptide-500 dark:to-mint-500 text-transparent bg-clip-text'>Experience</b></h2>
            </div>
            <div className='relative max-md:mt-0 mt-8'>
                <ol className='relative mt-10'>
                    {experienceList.map((item)=>(
                        <ExperienceCard key={item.id} role={item.role} company={item.company} time={item.time} summary={item.summary}/>
                    ))}
                </ol>
            </div>
        </div>
    </section>
  )
}

export default Experience