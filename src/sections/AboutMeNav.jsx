import React from "react";

const AboutMeNav = ({ activeSection, setActiveSection }) => {
  const navList = [
    { id: "about", label: "About Me", href: "#about" },
    { id: "resume", label: "Resume", href: "#resume" },

    { id: "certifications", label: "Certifications", href: "#certifications" },
    { id: "funfacts", label: "Fun Facts", href: "#fun-facts" },
  ];
  return (
    <ul className="flex gap-4 flex-wrap bg-white/40 dark:bg-zinc-800/30 px-4 py-2 rounded-xl shadow-sm w-full md:w-auto md:flex-row md:justify-end">
      {navList.map((item) => (
        <li key={item.id} className="w-full sm:w-auto">
          <button
            onClick={() => setActiveSection(item.id)}
            className={`px-3 py-1 text-sm font-semibold ${
              activeSection === item.id
                ? "text-riptide-600 dark:text-riptide-300"
                : "text-mint-500 hover:text-riptide-700 dark:text-riptide-500 dark:hover:text-riptide-400"
            } w-full text-center sm:text-left`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AboutMeNav;
