import React from 'react'

const ExperienceCard = (props) => {
    const {key,role,company,time,summary}=props;
  return (
    <li>
        <article>
            <div className='flex flex-col gap-2  text-zinc-00 dark:text-zinc-300 md:col-span-3'>
                <div className="relative mx-12 pb-12 grid md:grid-cols-5 md:gap-10 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-['']">
                    <div className='pb-12 md:col-span-2'>
                        <div className='sticky top-0'>
                            <span className='absolute -left-[42px] text-5xl text-mint-400 rounded-full drop-shadow-[0px_0px_8px_rgba(0,_255,_94,_1)]'>•</span>
                            <h3 className='text-xl font-bold text-mint-600 dark:text-riptide-500'>{role}</h3>
                            <h4 className='text-lg font-semibold text-zinc-600 dark:text-white'>{company}</h4>
                            <span className='text-sm text-zinc-600/80 dark:text-white/80'>{time}</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 pb-4 text-zinc-00 dark:text-zinc-300 md:col-span-3'>{summary}</div>
                </div>
                
            </div>
        </article>
    </li>
  )
}

export default ExperienceCard