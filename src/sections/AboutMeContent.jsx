import React, { useState } from "react";
import AboutMeNav from "./AboutMeNav";
import ResumeSection from "./ResumeSection";
import FunFactsSection from "./FunFactsSection";
import CertificationsSection from "./CertificationsSection";
import AboutSection from "./AboutSection";

const AboutMeContent = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "resume":
        return <ResumeSection />;
      case "funfacts":
        return <FunFactsSection />;
      case "certifications":
        return <CertificationsSection />;
      case "about":
      default:
        return <AboutSection />;
    }
  };
  return (
    <article className="relative flex flex-col gap-8 w-full max-md:w-full pb-10 max-sm:mt-0 max-md:px-10 max-sm:px-6 dark:bg-transparent dark:border-0  dark:border-mint-700 rounded-2xl bg-gradient-to-bl from-mint-50 dark:from-mint-900 to-white dark:to-black">
      <div className="sticky top-0 z-10 flex justify-end">
        <AboutMeNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      <div className="pt-4 px-8">{renderSection()}</div>
    </article>
  );
};

export default AboutMeContent;
