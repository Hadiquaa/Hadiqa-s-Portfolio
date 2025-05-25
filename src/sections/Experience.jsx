import React from 'react'
import { FaBriefcase } from "react-icons/fa6";
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
    const experienceList = [
      {
        id: "1",
        role: "Full Stack Developer (Contract)",
        company: "Techsphere Solutions LLC – Frisco, TX, USA (Remote)",
        time: "March 2024 - Sept 2024",
        summary: "Built full-stack modules for a healthcare platform using React.js, Node.js, and MongoDB, with JWT-based authentication and third-party APIs (Stripe, Twilio).Collaborated with U.S. teams in Agile sprints and deployed scalable features to AWS EC2.Optimized database queries and React components, boosting app performance by 30%."
      },
      {
        id: "2",
        role: "Freelance Frontend Developer",
        company: "Freelance",
        time: "Jan 2024 - Present",
        summary: "Designed and delivered responsive React.js websites for 5+ clients, enhancing UI/UX and boosting engagement.Built scalable, mobile-first interfaces using Tailwind CSS and Bootstrap with full API integration.Improved project delivery speed by 30% through clean component architecture and optimized performance."     
     },
      {
        id: "3",
        role: "Junior Web Developer",
        company: "Brainwave Matrix Solution",
        time: "Feb 2023 - Dec 2023",
        summary:
          "Built responsive interfaces with React and Tailwind, integrating AI-powered features for enhanced UX. Contributed to modular component design, performance optimization, and agile team collaboration to ship scalable web solutions.",
      },
      {
        id: "4",
        role: "Software Intern",
        company: "Rourkela Steel Plant",
        time: "March 2022 - August 2022",
        summary:
          "Worked on modernizing legacy .NET infrastructure by migrating internal tools to React. Built an interactive dashboard using React, Chart.js, and REST APIs to display real-time plant metrics, improving data accessibility and operational efficiency.",
      },
    ]; 
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