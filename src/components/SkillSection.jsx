const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Git & GitHub", level: 75 },
  { name: "Responsive Design", level: 90 },
  { name: "TypeScript", level: 70 },
  { name: "Redux", level: 65 },
  { name: "Next.js", level: 60 },
  { name: "Figma to Code", level: 85 },
];

const SkillsSection = () => {
  return (
    <section className="mt-12">
      <header>
        <h2 className="text-xl font-bold text-mint-700 dark:text-riptide-300">
          Skills
        </h2>
        <div className="h-1 w-10 bg-mint-500 dark:bg-riptide-400 rounded-full mt-2 mb-6"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-sm text-mint-900 dark:text-riptide-300">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-mint-100 dark:bg-zinc-700 rounded-full h-3">
              <div
                className="bg-mint-300 dark:bg-riptide-600 h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
