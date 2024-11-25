"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>React</li>
        <li>Next</li>
        <li>Figma</li>
        <li>PhotoShop</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ITB Stikom Bali</li>
        <li>Aplikasi Web dengan React Dicoding ID</li>
        <li>Devhandal ReactJS CodePolitan</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>BNN Provinsi Bali as IT Support</li>
        <li>JAS IT staff at I Gusti Ngurah Rai International Airport</li>
        <li>
          JAS Ground Handling staff & Admin at I Gusti Ngurah Rai International
          Airport
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-24">
        <Image
          alt="about"
          src={"/images/about.JPG"}
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            Hi, I’m Made Pande Deva Anugrah Wijaya. I am 24 years old. I have
            background in Information System at ITB STIKOM Bali.
            <br />I am passionate about coding and learning new things. I will
            be able to operate computer well and do some coding, fixing bugs on
            web. Besides that, I am a person who can work either independently
            or as part of team. I am also initiative, hardworking, and eager to
            learn.
          </p>
          <div className="flex flex-row mt-8 space-x-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-5">
            {/* cari id dari TAB_DATA yang sama dengan tab */}
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
