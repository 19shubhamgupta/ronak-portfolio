"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    images: string[];
    viewProject: string;
    viewRepo: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const dur = Math.random() * 2000 + 3000;
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length,
      );
    }, dur);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="flex flex-col ">
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <div
        className="relative w-full h-60 rounded-lg overflow-hidden group cursor-pointer"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        {/* Images with crossfade transition */}
        {project.images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-1000 group-hover:scale-110 ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Overlay that appears on hover (desktop) or tap (mobile) */}
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-300 flex flex-col justify-between p-4 z-20 ${
            showOverlay ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
          }`}
        >
          <div className="overflow-y-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-white text-xs rounded-md border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
              {project.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-3">
            <a
              href={project.viewProject}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 border border-white text-white text-center text-sm rounded hover:bg-white hover:text-black transition-colors duration-200"
            >
              View project
            </a>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
