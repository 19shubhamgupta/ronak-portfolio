"use client";
import React from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "Schooling",
    institution: "C.B Sankhe English Medium High School",
    years: "2009-2021",
    icon: School,
  },
  {
    id: 2,
    title: "Higher Secondary",
    institution: "Shri Yashwant Rao Patil, Solankur",
    years: "2021-2023",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "B.Tech",
    institution: "Tatyasaheb Kore Institute of Engineering & Technology",
    years: "2023-2027",
    icon: GraduationCap,
  },
];

const Education = () => {
  return (
    <section id="education" className="flex justify-center px-4 md:px-8 pb-32">
      <div className="flex flex-col items-start w-full gap-8 md:gap-12 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold my-text-2">Education</h2>

        {/* Timeline container */}
        <div className="w-full">
          {/* Mobile: Vertical Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className="flex gap-4 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Icon circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-gray-900">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-1">
                    {item.institution}
                  </p>
                  {item.years && (
                    <p className="text-gray-400 text-xs font-semibold mt-2 bg-gray-700/50 rounded-full py-1 px-3 inline-block">
                      {item.years}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:flex items-start justify-between min-w-[700px] relative px-4">
            {/* Horizontal line connecting icons */}
            <div className="absolute top-10 left-[calc(16.67%)] right-[calc(16.67%)] h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full" />

            {educationData.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center flex-1 relative group animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30 border-4 border-gray-900">
                  <item.icon className="w-9 h-9 text-white" />
                </div>

                {/* Vertical connector */}
                <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-transparent" />

                {/* Content card */}
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 w-80 group-hover:-translate-y-1 shadow-lg">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-1">
                    {item.institution}
                  </p>
                  {item.years && (
                    <p className="text-gray-400 text-xs font-semibold mt-2 bg-gray-700/50 rounded-full py-1 px-3 inline-block">
                      {item.years}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Education;
