import React from "react";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    id: 1,
    title: "MERN Stack Developer Certification",
    organization: "CodeHelp",
    year: 2024,
    link: "https://drive.google.com/file/d/1SPxliHEMLVHTBOdtXdwMmhDbmGGl2ca6/view",
  },
  {
    id: 2,
    title: "Software Engineering Virtual Experience Program",
    organization: "Goldman Sachs",
    year: 2023,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_cc5jCLCegsQJWkbpE_1674931019638_completion_certificate.pdf",
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    year: 2023,
    link: "https://www.freecodecamp.org/certification/javascript-algorithms-and-data-structures",
  },
  {
    id: 4,
    title: "AI and Machine Learning Specialization",
    organization: "Coursera - Stanford University",
    year: 2023,
    link: "https://www.coursera.org/specializations/machine-learning-ai",
  },
  {
    id: 5,
    title: "Responsive Web Design Certification",
    organization: "freeCodeCamp",
    year: 2023,
    link: "https://www.freecodecamp.org/certification/responsive-web-design",
  },
];

const CertificationsSection = () => {
  return (
    <section className="">
      <div>
        <h2 className="text-xl font-bold text-mint-700 dark:text-riptide-300 ">
          Certifications
        </h2>
        <div className="h-1 w-10 bg-mint-500 dark:bg-riptide-400 rounded-full mt-2 mb-6 "></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-5 rounded-xl bg-white/90 dark:bg-riptide-900 backdrop-blur-md hover:shadow-lg hover:shadow-mint-200 dark:hover:shadow-mint-700 transition-all hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <FaCertificate className="text-3xl text-mint-500 dark:text-riptide-400" />
              <div>
                <h3 className="text-lg font-semibold text-blacktext dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-mint-800 dark:text-mint-200 mt-1">
                  {cert.organization} - {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mint-500 hover:text-mint-700 dark:text-riptide-400 dark:hover:text-riptide-600 mt-2 inline-block"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
