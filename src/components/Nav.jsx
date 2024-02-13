import React, { useState } from "react";
import { navLinks } from "../constants";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleNav = () => {
    setOpenModal(!openModal);
  };
  return (
    <header className="padding-x  absolute w-full z-10">
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
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleNav}
          />
        </div>

        <div className="hidden lg:block">
          <p className="font-bold tracking-tight">Sign In / Sign Up</p>
        </div>
      </nav>
      <div
        className={` ${
          openModal ? "flex" : "hidden"
        } items-center fixed justify-center h-screen w-screen left-0 top-0 z-40 text-white bg-white`}
      >
        {openModal && (
          <ul className="relative z-50">
            {navLinks.map((item) => (
              <li key={item.label} className="mb-4">
                <a
                  href={item.href}
                  className="font-montserrat text-slate-gray text-lg leading-normal"
                  onClick={toggleNav}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Nav;
