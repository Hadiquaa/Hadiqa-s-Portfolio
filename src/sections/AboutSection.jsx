import React from "react";
import WhatIDoSection from "../components/WhatIDoSection";
import SkillsSection from "../components/SkillSection";

const AboutSection = () => {
  return (
    <section className="space-y-6 text-blacktext dark:text-white">
      <header>
        <h2 className="text-2xl font-bold text-mint-700 dark:text-riptide-300">
          About Me
        </h2>
        <div className="w-16 h-1 bg-mint-400 dark:bg-riptide-400 rounded-full mt-2"></div>
      </header>

      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Hey there! I'm{" "}
          <span className="font-semibold text-mint-600 dark:text-riptide-300">
            Hadiqa
          </span>{" "}
          — a code-slinging, bug-zapping, design-loving web developer with a
          knack for turning coffee and chaotic ideas into sleek, responsive
          websites. Whether I'm building pixel-perfect React apps or dancing
          with Tailwind classes like a front-end DJ, I'm all about crafting
          smooth user experiences with a little extra sparkle ✨.
        </p>
        <p>
          When I'm not in dev mode, you'll find me daydreaming about UI
          animations, sending way too many cat memes (shoutout to my fur-baby{" "}
          <span className="italic text-mint-600 dark:text-riptide-300">
            Muffy 🐱
          </span>
          ), or plotting my next side project that may or may not break the
          internet. Fueled by curiosity and aesthetic choices 💚, I'm on a
          mission to make the web not just functional—but fabulous. Let's build
          something awesome (and weird) together!
        </p>
      </div>
      <WhatIDoSection />
      <SkillsSection />
    </section>
  );
};

export default AboutSection;
