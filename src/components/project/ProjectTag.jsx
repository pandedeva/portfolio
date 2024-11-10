import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "border-primary-500"
    : "text-slate-500 border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyle} transition-all duration-300 rounded-full border-2 py-3 px-6 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
