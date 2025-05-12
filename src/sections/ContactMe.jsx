import React from "react";
import { FaRegPaperPlane } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <section>
      <div className="w-full border-b bg-gradient-to-b from-mint-100 to-transparent dark:from-mint-800 dark:border-mint-950 border-mint-100">
        <div className="mx-auto max-w-7xl px-8 py-12 max-sm:py-12">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-8 max-md:text-center">
            <div className="max-w-lg">
              <h2 className="font-extrabold text-3xl max-xl:text-2xl max-md:text-3xl  dark:text-white text-blacktext">
                Ready to take your idea to the next level?{" "}
                <b className="bg-gradient-to-r from-riptide-500 to-mint-400 dark:from-riptide-500 dark:to-mint-500 text-transparent bg-clip-text">
                  Let's work together.
                </b>
              </h2>
            </div>

            {/* Subtle scale effect */}
            <div className="transition-transform duration-300 hover:scale-[1.03]">
              <div className="w-fit h-fit from-transparent via-riptide-300 to-transparent dark:from-transparent dark:via-mint-500 dark:to-transparent animate-rotate-border bg-conic/[from_var(--border-angle)] p-px hover:shadow-lg hover:shadow-mint-500/30 rounded-full">
                <a
                  href="mailto:hadiqua350@gmail.com"
                  className="
                    z-2 
                    text-center 
                    cursor-pointer 
                    leading-none 
                    w-fit 
                    font-medium 
                    flex 
                    gap-3 
                    transition-all 
                    ease-in-out 
                    justify-center 
                    items-center 
                    rounded-full
                    text-blacktext 
                    dark:text-mint-50 
                    dark:hover:text-white 
                    px-8 
                    max-sm:py-3 
                    py-5 
                    max-xl:px-6 
                    max-sm:px-3 
                    text-xl 
                    max-xl:text-xl 
                    max-sm:text-lg 
                    hover:bg-gradient-to-l 
                    bg-gradient-to-r 
                    from-riptide-200 
                    to-mint-200 
                    dark:from-riptide-500 
                    dark:to-mint-500
                    
                  "
                >
                  <FaRegPaperPlane size={14} />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
