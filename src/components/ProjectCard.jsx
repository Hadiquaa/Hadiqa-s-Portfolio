import React from 'react'

const ProjectCard = (props) => {
    const {name,summary,techStack,img,href} =props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className='w-full h-full hover:scale-105  transition-all duration-300 ease-in-out rounded-3xl bg-gradient-to-br from-mint-200 to-mint-400/80 dark:from-zinc-800 dark:to-mint-800/10'>
        <article className='group h-full  gap-4 p-4  max-md:p-6 flex flex-col justify-start items-center cursor-pointer transition-all duration-200 ease-in-out rounded-3xl bg-transparent backdrop-blur-lg hover:backdrop-blur-none  overflow-hidden  hover:shadow-[0_10px_10px_rgba(0,_0,_0,_0.05)] dark:border-0 dark:hover:shadow-[0_10px_10px_rgba(13,_188,_130,_0.05)] before:absolute before:size-36 before:aspect-square before:rounded-full before:blur-3xl dark:before:blur-3xl dark:before:opacity-20 before:opacity-5   before:transition before:-z-1 before:left-7/12 before:bottom-50 xl:before:-bottom-0 before:[background-image:radial-gradient(circle,_rgba(71,255,194)_0,_rgba(0,255,191)_100%)] dark:before:[background-image:radial-gradient(circle,_rgba(7,255,173)_0,_rgba(1,45,34)_100%)] after:absolute after:size-40 after:aspect-square after:rounded-full dark:after:blur-2xl after:blur-3xl dark:after:opacity-20 after:opacity-10 after:transition after:-z-1 after:-left-10 after:top-1/2 after:[background-image:radial-gradient(circle,_rgba(0,255,217)_0,_rgba(121,249,255,65%)_70%)] dark:after:[background-image:radial-gradient(circle,_rgba(0,255,218)_0,_rgba(2,181,190,65%)_70%)]'>
            <div className='overflow-hidden rounded-xl'>
                <img src={img} className='h-auto rounded-xl transition-all duration-300 ease-in-out group-hover:scale-105' alt="" />
            </div>
            <div className='flex flex-col p-2'>
                <div className='flex flex-col gap-3 w-full'>
                    <h2 className='text-3xl font-bold text-blacktext dark:text-mint-50'>{name}</h2>
                    <div className='flex flex-wrap gap-3'>
                        {techStack.map((tech)=>(
                        <span className='flex items-center text-[0.8rem] w-fit pl-2 pr-2 py-0.5 gap-1 text-sm font-semibold leading-3 bg-white shadow rounded-full transition-all duration-400 ease-in-out hover:bg-zinc-800 hover:text-white max-sm:pl-1 max-sm:pr-1.5 max-sm:text-xs max-sm:gap-0.5 text-base cursor-default dark:text-blacktext dark:hover:text-white'>
                            <div className='flex items-center justify-center aspect-square bg-black rounded-full p-1 size-5 max-lg:size-6 max-sm:size-5 '>
                                {tech.icon}
                            </div>
                            {tech.label}
                        </span>
                        ))}
                    </div>
                    <p className='text-lg max-xl:text-base w-full max-md:max-w-[85%] my-2 leading-6 font-medium text-blacktext dark:text-gray-200'>{summary}</p>
                </div>
            </div>
        </article>
    </a>
  )
}

export default ProjectCard