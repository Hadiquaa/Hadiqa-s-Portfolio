import React from 'react'
import AboutMeContent from '../sections/AboutMeContent'
import AboutMeSidebar from '../components/AboutMeSidebar';

const AboutMe = () => {
 return (
   <main className="flex  px-4 md:px-10">
     <div className="flex flex-col md:flex-row md:gap-6 gap-10 w-full max-w-7xl mx-auto">
       {/* Sidebar */}
       <div className="w-full md:w-auto md:flex-shrink-0 -mt-20 md:-mt-4">
         <AboutMeSidebar />
       </div>

       {/* Content fills remaining space */}
       <div className="w-full mt-8 md:mt-4">
         <AboutMeContent />
       </div>
     </div>
   </main>
 );

}

export default AboutMe