"use client";
import React, { useEffect, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiApachekafka,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const skillsData = [
  // Programming Languages
  { name: "JavaScript", icon: SiJavascript, percentage: 95, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, percentage: 80, color: "#007396" },
  { name: "C++", icon: TbBrandCpp, percentage: 80, color: "#00599C" },
  { name: "Python", icon: SiPython, percentage: 80, color: "#3776AB" },
  // Frontend
  { name: "React", icon: SiReact, percentage: 95, color: "#61DAFB" },
  { name: "HTML", icon: SiHtml5, percentage: 95, color: "#E34F26" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    percentage: 95,
    color: "#06B6D4",
  },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, percentage: 85, color: "#339933" },
  { name: "Express.js", icon: SiExpress, percentage: 85, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, percentage: 85, color: "#47A248" },
  
];

const SkillBar = ({
  skill,
  index,
}: {
  skill: (typeof skillsData)[0];
  index: number;
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setWidth(skill.percentage);
      },
      100 + index * 100,
    );

    return () => clearTimeout(timer);
  }, [skill.percentage, index]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400 ml-auto text-sm">
          {skill.percentage}%
        </span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-8 pb-32"
    >
      <div className="flex flex-col items-start w-full gap-12 max-w-7xl">
        <h2 className="text-4xl font-bold my-text-2">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {skillsData.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
