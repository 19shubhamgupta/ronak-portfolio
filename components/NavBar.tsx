"use client";

import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "education", "contact"];

      // Find which section is in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some offset for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId: string): void => {
    //console.log(`Navigating to ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  const aboutItem = {
    id: "about",
    label: "Ronak.Dev",
  };

  return (
    <div className="hidden md:block fixed top-0 left-0 ml-8 md:ml-0 md:right-0 z-100 bg-transparent w-full">
      <div className="w-full flex justify-center py-3   ">
        <div className="flex items-center justify-between border-zinc-700 rounded-full py-4 px-6 md:p-4 border-3 w-[90%] max-w-4xl bg-gray-900/20 backdrop-blur-md">
          <button
            onClick={() => handleNavigation(aboutItem.id)}
            className={`px-2 hover:scale-105 transition-all duration-300 hover:bg-opacity-20 rounded-lg ${activeSection === aboutItem.id ? "my-text-2" : "text-white"}`}
          >
            <span className="font-bold text-2xl rubik-font">
              {aboutItem.label}   
            </span>
          </button>
          <div className="flex items-center justify-center  gap-4 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-2 hover:scale-105 transition-all duration-300 hover:bg-opacity-20 rounded-lg ${activeSection === item.id ? "my-text-gradient" : "text-white"}`}
              >
                <span className="font-medium text-xl rubik-font">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
