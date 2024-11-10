import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 bg-cover bg-center rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute gap-6 items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={"/"}
            className="h-14 w-14 border-2 relative rounded-full border-slate-500 hover:border-white group/link"
          >
            <CodeBracketIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ABD7] cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link
            href={"/"}
            className="h-14 w-14 border-2 relative rounded-full border-slate-500 hover:border-white group/link"
          >
            <EyeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ABD7] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
