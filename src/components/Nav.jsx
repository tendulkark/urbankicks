import React from "react";
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 gap-16  items-center justify-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-slate-gray text-lg leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden w-8">
          <img src={hamburger} alt="hamburger" />
        </div>
        <div className="max-lg:hidden">
          <p className="font-bold tracking-tight">Sign In / Sign Up</p>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
