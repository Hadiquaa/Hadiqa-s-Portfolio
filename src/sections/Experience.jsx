import React from 'react'
import { FaBriefcase } from "react-icons/fa6";
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
    const experienceList = [
        {id:"1", role:"Web Development Fellowship", company:"Web Dev Open",time:"Oct 2024 - Jan 2025", summary:"Completed a project-based fellowship where I built responsive, accessible web applications using modern front-end technologies like HTML, CSS, JavaScript, and React. Collaborated with mentors in weekly sprints, improved my skills in UI design and Git workflows, and gained real-world experience bringing digital ideas to life."},
        {id:"2", role:"Web Developer Intern", company:"Brainwave Matrix Solution",time:"June 2024 - Sept 2024", summary:"Built responsive interfaces with React and Tailwind, integrating AI-powered features for enhanced UX. Contributed to modular component design, performance optimization, and agile team collaboration to ship scalable web solutions."},
        {id:"3", role:"Software Intern", company:"Rourkela Steel Plant",time:"Nov 2023-April 2024", summary:"Worked on modernizing legacy .NET infrastructure by migrating internal tools to React. Built an interactive dashboard using React, Chart.js, and REST APIs to display real-time plant metrics, improving data accessibility and operational efficiency."},
    ] 
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