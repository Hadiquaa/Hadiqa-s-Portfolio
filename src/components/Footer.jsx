import React from 'react'
import Logo from '../assets/Logo'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    icon: <FaGithub className="hover:text-mint-400" />,
    url: "https://github.com/Hadiquaa",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: <FaLinkedin className="hover:text-mint-400" />,
    url: "https://www.linkedin.com/in/hadiqa-taiba-319602169/",
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: <FaXTwitter className=" hover:text-mint-400" />,
    url: "https://x.com/Hadiqaaaa24_",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: <FaInstagram className=" hover:text-mint-400" />,
    url: "https://instagram.com/hadiqaaaa24",
  },
  {
    id: "gmail",
    label: "Email",
    icon: <SiGmail className=" hover:text-mint-400" />,
    url: "mailto:hadiqua350@example.com",
  },
];
  return (
   <footer className='relative bottom-0 w-full px-4 py-8 font-medium text-blacktext dark:bg-transparent dark:border-b-2 dark:border-zinc-800 dark:text-zinc-300 max-lg:mt-3'>
    <nav className='mx-auto flex max-w-7xl flex-row items-center justify-between gap-4 text-xl max-xl:px-6 max-sm:flex-col'>
      <a href="/">
         <div className='relative h-8 w-24 cursor-pointer flex items-center justify-center'>
            <Logo className="w-full h-full"/>
        </div>
      </a>
       
        <div className='flex items-center justify-center gap-5'>
            {socialLinks.map((social)=>(
                <a href={social.url} key={social.id} target="_blank" aria-label={social.label} className="hover:text-mint-300 hover:scale-150 transition-all dark:text-zinc-300 text-blacktext">{social.icon}</a>
            ))}
        </div>
    </nav>
   </footer>
  )
}

export default Footer