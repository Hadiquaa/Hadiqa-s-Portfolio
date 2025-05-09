import React from 'react'
import { FaGithub } from 'react-icons/fa';

const CodeFile = () => {
  return (
    <div className="col-start-1 row-start-2 rounded-2xl bg-gradient-to-r from-mint-300 dark:from-mint-600 to-mint-50 dark:to-mint-200/5 hover:to-mint-300/30 dark:hover:to-mint-600/30 p-[.2rem] transition-all ease-in duration-150 hover:scale-105 hover:shadow-[0_20px_50px_rgba(13,_188,_130,_0.4)] z-40 md:col-start-3">
      <div className="h-full w-full overflow-hidden rounded-2xl dark:bg-zinc-900">
        <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-gradient-to-tr from-riptide-100 to-white dark:from-transparent dark:bg-gradient-to-bl dark:to-transparent ">
          <a href="" target="_blank" aria-label="view code in github">
            <div className="relative flex h-full flex-col gap-8 p-8 dark:before:[background-image:radial-gradient(circle,_rgba(13,188,130)_0,_rgba(1,45,34)_100%)] before:[background-image:radial-gradient(circle,_rgba(95,255,202)_0,_rgba(144,253,210)_100%)] before:absolute before:left-30 before:bottom-30 before:h-[30%] before:aspect-square before:rounded-full before:blur-3xl before:opacity-90 before:transition before:z-0 max-xl:p-5 max-md:p-4 xl:before:bottom-10">
              <div className="z-2">
                <h3 className="font-extrabold text-4xl max-xl:text-3xl max-md:text-xl  dark:text-white text-blacktext">
                  Do you like this site design?
                </h3>
              </div>
              <FaGithub
                className="absolute -bottom-10 left-30 size-[200px] text-mint-500 opacity-20 group-hover:animate-pulse ease-in-out 
             max-sm:left-10 max-md:left-30 xl:size-[250px] xl:-bottom-5 xl:-right-24 right-[-6rem] dark:"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CodeFile