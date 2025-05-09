import React from 'react'
import BeyondCode from './BeyondCode';
import CodeFile from './CodeFile';
import TechStack from './TechStack';
import ProjectsIntro from './ProjectsIntro';

const IntroSection = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 grid-rows-4 max-sm:gap-3 gap-4 max-md:h-[80vh] max-sm:h-[900px] max-xl:h-[550px] xl:h-[700px] md:grid-cols-4 md:grid-rows-2">
        <BeyondCode/>
        <CodeFile/>
        <TechStack/>
        <ProjectsIntro/>
    </div>
  );
}

export default IntroSection