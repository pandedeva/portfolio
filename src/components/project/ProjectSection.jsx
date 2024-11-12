"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // ! PREVIEW IMAGE BELUM BISA <3
  {
    id: 1,
    title: "Website Online Store",
    description: "Only using grid and flexbox for layout",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pandedeva/website-clothing-brand",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Anime List App",
    description: "Web app for searching animes",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pandedeva/anime-list",
    previewUrl: "/",
  },
  // {
  //   id: 3,
  //   title: "UI E-commerce Application",
  //   description: "Slicing design from figma",
  //   image: "/images/projects/project3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 4,
    title: "Recipe App",
    description: "Web app for searching recipes",
    image: "/images/projects/project1.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/pandedeva/recipe-app-vite",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Slicing Landing Page",
    description: "Slicing design from figma and responsive",
    image: "/images/projects/project2.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/pandedeva/slicing-page",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Slicing Landing Page 2",
    description: "Slicing design from figma and responsive",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pandedeva/epictetus",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardMotion = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref}>
      <h1 className="text-center text-4xl font-bold my-4">My Projects</h1>
      <div className="flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag
          isSelected={tag === "All"}
          onClick={handleTagChange}
          name={"All"}
        />
        <ProjectTag
          isSelected={tag === "Web"}
          onClick={handleTagChange}
          name={"Web"}
        />
        <ProjectTag
          isSelected={tag === "Mobile"}
          onClick={handleTagChange}
          name={"Mobile"}
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardMotion}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              description={project.description}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
