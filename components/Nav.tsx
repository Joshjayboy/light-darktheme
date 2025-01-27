import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center border-b mb-5 py-1 bg-secondary">
      <div className="flex justify-between max-w-6xl w-full">
        <div className="flex items-center gap-5">
          <Link href="/">Dashboard</Link>
          <Link href="/">Users</Link>
          <Link href="/">Tickets</Link>
        </div>
        <div className="w-32 h-20">
          <img src="https://img1.wsimg.com/isteam/ip/fecdfe52-2d5a-48ec-aff8-0eaa6df7b535/logo_squaret.png/:/rs=w:156,h:100,cg:true,m/cr=w:156,h:100/qt=q:95" alt="image" />
        </div>
        <div className="flex items-center gap-5">
          <Link href="/">Theme</Link>
          <ToggleMode />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
