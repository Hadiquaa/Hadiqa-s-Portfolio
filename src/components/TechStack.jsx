import React from 'react'
import { RxDashboard } from "react-icons/rx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiOpenai,
  SiTensorflow,
  SiNextdotjs,
  SiPython,
  SiLangchain,
} from "react-icons/si";
const TechStack = () => {
    const techList = [
      {
        id: "html",
        label: "HTML 5",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        id: "css",
        label: "CSS 3",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        id: "js",
        label: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      {
        id: "react",
        label: "React",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        id: "tailwind",
        label: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        id: "node",
        label: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        id: "express",
        label: "Express.js",
        icon: <SiExpress className="text-gray-300" />,
      },
      {
        id: "mongodb",
        label: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        id: "vercel",
        label: "Vercel",
        icon: <SiVercel className="text-black dark:text-white" />,
      },
      {
        id: "netlify",
        label: "Netlify",
        icon: <SiNetlify className="text-blue-400" />,
      },
    //   {
    //     id: "azure",
    //     label: "Azure",
    //     icon: <SiAzuredevops className="text-blue-600" />,
    //   },
      {
        id: "github",
        label: "GitHub",
        icon: <FaGithub className="text-white dark:text-zinc-200" />,
      },
      {
        id: "git",
        label: "Git",
        icon: <FaGitAlt className="text-orange-600" />,
      },

      // AI tools
      {
        id: "openai",
        label: "OpenAI",
        icon: <SiOpenai className="text-violet-500" />,
      },
      {
        id: "python",
        label: "Python",
        icon: <SiPython className="text-yellow-400" />,
      },
      {
        id: "nextjs",
        label: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      {
        id: "figma",
        label: "Figma",
        icon: <FaFigma className='text-blue-500 '/>
      }
    ];
  return (
      <div className="col-span-2 col-start-1 row-start-1 rounded-2xl bg-gradient-to-r from-mint-300 dark:from-mint-600 to-mint-50 dark:to-mint-200/5  hover:to-mint-300/30 dark:hover:to-mint-600/30 p-4 md:col-start-3">
        <div className="flex items-center gap-4 max-md:gap-2 mb-4">
          <RxDashboard size={25}/>
          <h3 className="font-extrabold text-4xl max-xl:text-3xl max-md:text-xl  dark:text-white text-blacktext">
            Tech{" "}
            <span className="bg-gradient-to-r from-riptide-500 to-mint-400 dark:from-riptide-500 dark:to-mint-500 text-transparent bg-clip-text font-bold">
              Stack
            </span>
          </h3>
        </div>
        <div className="overflow-y-auto max-h-48">
          <div className="flex flex-wrap gap-4 max-lg:gap-1 grid-flow-row cursor-default">
            {techList.map((item) => (
              <span className="flex items-center w-fit pl-2 pr-2 py-0.5 gap-1 text-sm font-semibold leading-3 bg-white shadow rounded-full transition-all duration-300 ease-in-out dark:hover:text-white hover:bg-zinc-800 hover:text-white max-sm:pl-1 max-sm:pr-1.5 max-sm:text-xs max-sm:gap-0.5 cursor-default dark:text-blacktext">
                <div className="flex items-center justify-center aspect-square bg-black rounded-full p-1 size-7 max-lg:size-6 max-sm:size-5 ">
                  {item.icon}
                </div>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
  );
}

export default TechStack