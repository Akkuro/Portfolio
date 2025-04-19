"use client";

import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: "Description of Project One",
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of Project Two",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of Project Three",
    link: "#",
  },
];

export const ProjectsList: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
