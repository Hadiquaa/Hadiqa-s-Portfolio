import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import Logo from '../assets/Logo';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] =useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });
  const [activeLink, setActiveLink] =useState('home');
  const location = useLocation();
  const navItems = [
    {id: "home", label: "Home" , href: "#home", route:"/"},
    {id: "experience", label: "Experience" , href: "#experience"},
    {id: "projects", label: "Projects" , href: "#projects"},
    {id: "about-me", label: "About Me" , href: "#about", route:"/about"},
    
  ]

  const filteredNavItems =
    location.pathname === "/about"
      ? navItems.filter((item) => !["experience", "projects"].includes(item.id))
      : navItems;

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  }
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else
      document.documentElement.classList.remove('dark');
  },[darkMode])

  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveLink("about-me");
    } else if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight * 0.3;
        let current = 'home';
        for (let item of navItems) {
          if (item.href) {
            const section = document.querySelector(item.href);
            if (section && section.offsetTop <= scrollPos) {
              current = item.id;
            }
          }
        }
        setActiveLink(current);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);


  const renderNavItem = (item) => {
    const isActive = activeLink === item.id;
    const baseClasses =
      "px-2 py-2 max-md:mx-auto max-md:w-full max-md:px-6 max-md:py-2 transition-all italic hover:text-mint-300 dark:hover:text-mint-300";
    const activeClasses = isActive
      ? "text-mint-400 dark:text-mint-400 font-bold"
      : "text-blacktext dark:text-zinc-300";
    const classes = `${baseClasses} ${activeClasses}`;

    return item.route ? (
      <Link
        key={item.id}
        to={item.route}
        onClick={() => handleNavClick(item.id)}
        className={classes}
      >
        {item.label}
      </Link>
    ) : (
      <a
        key={item.id}
        href={item.href}
        onClick={() => handleNavClick(item.id)}
        className={classes}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full p-3 font-medium text-blacktext dark:text-zinc-300 dark:bg-[#0E0E11]/80 dark:border-b-1 dark:border-zinc-800 bg-white/90 backdrop-blur-xs dark:backdrop-blur-xs max-md:z-50 max-md:px-0 transition-all duration-500 ease-in-out">
      <div className="relative mx-auto flex max-w-7xl flex-row items-center justify-between max-xl:px-6">
        <div className="w-44 sm:w-56 md:w-72 lg:w-80 xl:w-[22rem] cursor-pointer">
          <a href="/">
            <Logo className="w-full h-auto" />
          </a>
        </div>
        <nav className="hidden md:flex justify-center gap-6 w-full max-md:gap-3 max-md:py-6">
          {filteredNavItems.map(renderNavItem)}
        </nav>
        <div className="flex items-center gap-5 text-xl">
          <div className="max-md:hidden flex items-center justify-center gap-5">
            <a
              className="hover:text-mint-300 hover:scale-150 transition-all"
              href="https://github.com/Hadiquaa"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hadiqa-taiba-319602169/"
              target="_blank"
              className="hover:text-mint-300 hover:scale-150 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex items-center gap-5 text-xl md:pl-5">
            <button
              className="hover:cursor-pointer hover:text-mint-400 transition-all"
              onClick={() => {
                const newMode = !darkMode;
                setDarkMode(newMode);
                localStorage.setItem("theme", newMode ? "dark" : "light");
              }}
            >
              {darkMode ? <MdLightMode /> : <BsMoonStars />}
            </button>
            {/* Here will be the hamburger menu */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiOutlineX className="hover:text-red-400" />
              ) : (
                <HiOutlineMenu />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0E0E11] border-t border-zinc-800 flex flex-col items-center gap-4 py-4 shadow-lg z-40 transition-all duration-300">
          {filteredNavItems.map(renderNavItem)}
        </div>
      )}
    </header>
  );
}

export default Header