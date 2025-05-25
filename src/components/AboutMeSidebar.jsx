import React, { useState } from "react";
import Hadiqa from "../assets/images/Hadiqa.jpg";
import { FaChevronDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

const AboutMeSidebar = () => {
  const contacts = [
    
    {
      id: "email",
      name: "email",
      value: "hadiqua350@gmail.com",
      icon: <IoMailOutline />,
    },
    {
      id: "location",
      name: "location",
      value: "Toronto, Canada",
      icon: <IoLocationOutline />,
    },
    {
      id: "social",
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/hadiqa-taiba-319602169/",
      icon: <IoLogoLinkedin />,
    },
  ];
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className="bg-white dark:bg-transparent md:sticky md:w-72 w-full mt-8 rounded-2xl dark:border-0 border border-neutral-100 top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-8 pb-12 bg-gradient-to-tr from-mint-50 dark:from-mint-700 to-white dark:to-black hover:to-mint-300/30 dark:hover:to-mint-600/30 p-[.2rem] max-md:h-auto relative">
      <div className="sidebar-info flex md:flex-col gap-8 items-center ">
        <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full md:mx-auto group">
          {/* Spinning gradient border */}
          <div className="absolute inset-0 rounded-full p-[2px] bg-conic/[from_var(--border-angle)] from-transparent via-riptide-300 to-mint-300 animate-rotate-border"></div>

          {/* Inner circle with photo */}
          <div className="relative w-full h-full rounded-full bg-mint-900 overflow-hidden">
            <img
              src={Hadiqa}
              alt="Hadiqa Taiba"
              className="w-full h-full object-cover object-[45%_30%] rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-start md:items-center mt-2 gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-blacktext dark:text-white tracking-tight">
            Hadiqua Taiba
          </h1>
          <span className="text-xs text-center sm:text-sm md:text-md font-medium px-2 py-1 rounded-full bg-mint-400 dark:bg-mint-700 text-white border border-transparent shadow-sm">
            Front End Developer
          </span>
        </div>

        <button
          onClick={() => setShowContacts(!showContacts)}
          className="md:hidden mt-4 flex items-center gap-2 text-xs font-semibold dark:text-white text-riptide-700 hover:underline uppercase absolute top-0 right-4"
        >
          {showContacts ? "Hide Contacts" : "Show Contacts"}{" "}
          <FaChevronDown
            className={`transition-transform duration-300 ${
              showContacts ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`sidebar-contacts mt-6 ${
          showContacts ? "block" : "hidden"
        } md:block transition-all duration-500 ease-in-out`}
      >
        <div className="seperator border-t border-mint-300 dark:border-mint-600 my-6"></div>
        <ul className="grid grid-cols-2 md:flex md:flex-col gap-3 mt-6">
          {contacts.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 p-3 rounded-xl bg-mint-100/60 dark:bg-mint-800/40 hover:shadow-md hover:shadow-mint-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center text-xl text-mint-700 dark:text-riptide-300 bg-mint-200 dark:bg-mint-900 rounded-lg">
                {item.icon}
              </div>
              <div className="text-sm w-full overflow-hidden">
                <p className="font-semibold uppercase text-blacktext dark:text-white">
                  {item.name}
                </p>
                {["email",  "social"].includes(item.id) ? (
                  <a
                    href={
                      item.id === "email"
                        ? `mailto:${item.value}`
                        :  item.value // LinkedIn
                    }
                    target={item.id === "social" ? "_blank" : undefined}
                    rel={
                      item.id === "social" ? "noopener noreferrer" : undefined
                    }
                    className="text-mint-700 dark:text-riptide-300 hover:underline break-all truncate block max-w-[10rem] sm:max-w-[14rem] md:max-w-full"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-mint-700 dark:text-riptide-300 break-all truncate block max-w-[10rem] sm:max-w-[14rem] md:max-w-full">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AboutMeSidebar;
