import React from "react";
import NavLink from "./NavLink";

// ! MASIH BELUM BISA UNTUK ANIMASI AGAR SMOOTH
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col space-y-10 items-center min-h-screen">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
