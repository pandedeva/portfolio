import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block relative group py-2 pl-3 pr-4 text-slate-600 sm:text-base md:p-0 hover:text-white"
    >
      {title}
      <div className="absolute w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
    </Link>
  );
};

export default NavLink;
