import React from "react";

const WhatIDoSection = () => {
  const services = [
    {
      emoji: "🧑‍💻",
      title: "Web Development",
      description:
        "Crafting responsive, optimized, and scalable web apps using React, Tailwind, and modern tech.",
    },
    {
      emoji: "🎨",
      title: "UI/UX Design",
      description:
        "Designing clean, intuitive, and engaging interfaces with a focus on user experience.",
    },
    {
      emoji: "📱",
      title: "Responsive Design",
      description:
        "Ensuring your site looks stunning and works smoothly across all devices and screen sizes.",
    },
    {
      emoji: "🚀",
      title: "Learning & Exploring",
      description:
        "Continuously experimenting with new tools and frameworks to stay sharp and creative.",
    },
  ];

  return (
    <section className="mt-12">
      <div>
        <h2 className="text-2xl font-bold text-mint-700 dark:text-riptide-300">
          What I'm Doing
        </h2>
        <div className="w-10 h-[2px] bg-mint-500 dark:bg-riptide-400 my-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-[2px] rounded-xl bg-gradient-to-br from-mint-200 to-mint-50 dark:from-zinc-800 dark:to-mint-800/10 hover:from-mint-300 hover:to-mint-100 transition-all"
          >
            <div className="bg-white/90  dark:bg-transparent dark:backdrop-blur-lg  p-5 rounded-xl h-full flex flex-col hover:shadow-md hover:shadow-mint-300 dark:hover:shadow-mint-200 transition-shadow hover:scale-105">
              <div className="text-3xl mb-3">{service.emoji}</div>
              <h3 className="text-lg font-semibold text-blacktext dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-mint-800 dark:text-mint-200 mt-1">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDoSection;
