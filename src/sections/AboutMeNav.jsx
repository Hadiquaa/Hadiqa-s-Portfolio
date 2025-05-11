import React from "react";

const AboutMeNav = ({ activeSection, setActiveSection }) => {
  const navList = [
    { id: "about", label: "About Me", href: "#about" },
    { id: "resume", label: "Resume", href: "#resume" },
    { id: "certifications", label: "Certifications", href: "#certifications" },
    { id: "funfacts", label: "Fun Facts", href: "#fun-facts" },
  ];

  return (
    <ul className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 bg-white/40 dark:bg-zinc-800/30 px-2 sm:px-4 py-2 rounded-xl shadow-sm w-full overflow-hidden text-xs md:text-md">
      {navList.map((item) => (
        <li key={item.id} className="flex-1 text-center sm:flex-none">
          <button
            onClick={() => setActiveSection(item.id)}
            className={`w-full truncate rounded-md px-2 py-1 font-medium transition-colors duration-200 ${
              activeSection === item.id
                ? "text-riptide-600 dark:text-riptide-300"
                : "text-mint-500 hover:text-riptide-700 dark:text-riptide-500 dark:hover:text-riptide-400"
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AboutMeNav;
