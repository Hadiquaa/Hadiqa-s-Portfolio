import React from "react";
import { FaCat, FaGlobe, FaMusic, FaKeyboard } from "react-icons/fa";

const funFacts = [
  {
    icon: <FaCat className="text-2xl text-mint-500 dark:text-riptide-400" />,
    title: "Cat Person",
    description:
      "I have a cat named Muffy, and he can play fetch!",
  },
  {
    icon: <FaGlobe className="text-2xl text-mint-500 dark:text-riptide-400" />,
    title: "Globetrotter",
    description:
      "I've lived on two continents and love learning about new cultures.",
  },
  {
    icon: <FaMusic className="text-2xl text-mint-500 dark:text-riptide-400" />,
    title: "Music Lover",
    description:
      "My playlists are filled with lo-fi, Bollywood, and everything in between.",
  },
  {
    icon: (
      <FaKeyboard className="text-2xl text-mint-500 dark:text-riptide-400" />
    ),
    title: "Fast Typer",
    description: "I type at over 100 WPM—coding or chatting, I'm fast!",
  },
];

const FunFactsSection = () => {
  return (
    <section className="">
      <div>
        <h2 className="text-xl font-bold text-mint-700 dark:text-riptide-300 text-left">
          Fun Facts
        </h2>
        <div className="h-1 w-10 bg-mint-500 dark:bg-riptide-400 rounded-full mt-2 mb-6 "></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-white/90 dark:bg-mint-900 backdrop-blur-md hover:shadow-lg hover:shadow-mint-200 dark:hover:shadow-mint-700 transition-all hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div>{fact.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blacktext dark:text-white">
                  {fact.title}
                </h3>
                <p className="text-sm text-mint-800 dark:text-mint-200 mt-1">
                  {fact.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFactsSection;
