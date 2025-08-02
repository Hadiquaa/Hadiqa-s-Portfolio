import React from "react";
import { FaGraduationCap, FaDownload } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import ExperienceCard from "../components/ExperienceCard";
import { experienceList } from "../assets/helper";

const Resume = () => {
  const educationList = [
    {
      id: 1,
      degree: "BTech in Computer Science Engineering (Hons. in Artificial Intelligence & Machine Learning)",
      institution: "BPUT Odisha",
      time: "2018 - 2022",
      summary:
        "Graduated with a GPA of 8.13, focused on web development, data structures, and software engineering.",
    },
  ];

  return (
    <section id="resume" className=" max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="flex  justify-between items-center mb-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-mint-700 dark:text-white">
            Resume
          </h2>
          <div className="w-16 h-1 bg-mint-400 dark:bg-riptide-400 rounded-full mt-2"></div>
        </div>

        <a
          href="/Hadiqua-CV-2025.pdf"
          download
          className="flex items-center gap-2 md:px-4 py-1 px-2 text-sm font-semibold bg-mint-500 text-white rounded-full shadow hover:bg-mint-400 transition"
        >
          <FaDownload /> Download PDF
        </a>
      </div>

      {/* Education */}
      <div className="mb-12">
        <div className="flex gap-3 items-center mb-6">
          <FaGraduationCap className="text-2xl text-mint-600 dark:text-mint-600" />
          <h3 className="text-xl font-bold text-blacktext dark:text-white">
            Education
          </h3>
        </div>
        <ol className="relative border-l border-black/20 dark:border-white/15 ml-5">
          {educationList.map((edu) => (
            <li key={edu.id} className="mb-10 ml-4">
              <span className="absolute -left-2 text-4xl text-mint-400 drop-shadow-[0_0_8px_rgba(0,_255,_94,_1)]">
                •
              </span>
              <h4 className="text-lg font-semibold text-mint-600 dark:text-riptide-500">
                {edu.degree}
              </h4>
              <h5 className="text-md text-zinc-600 dark:text-white">
                {edu.institution}
              </h5>
              <span className="text-sm text-zinc-600/80 dark:text-white/80">
                {edu.time}
              </span>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                {edu.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Work Experience */}
      <div>
        <div className="flex gap-3 items-center mb-6">
          <FaBriefcase className="text-2xl text-mint-600 dark:text-mint-600" />
          <h3 className="text-xl font-bold text-blacktext dark:text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-riptide-500 to-mint-400 text-transparent bg-clip-text">
              Experience
            </span>
          </h3>
        </div>
        <ol className="relative mt-10">
          {experienceList.map((item) => (
            <ExperienceCard
              key={item.id}
              role={item.role}
              company={item.company}
              time={item.time}
              summary={item.summary}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Resume;
