import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Menu = [
    { name: "Skills", link: "#Skills" },
    { name: "Services", link: "#Services" },
    { name: "About Me", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="z-20">
      <nav className="flex justify-center">
        <div className="flex item-center relative bg-white w-[90%] md:w-4/5 p-3 justify-between rounded-3xl">
          <div className="text-3xl font-bold flex">
            <img src="" alt="LOGO" className="w-2 h-3 ml-2" />
          </div>

          <div className="md:hidden z-30">
            <button
              type="button"
              className="block focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <span className="text-5xl">
                  <IoCloseOutline alt="Close" width={50} height={50} />
                </span>
              ) : (
                <span className="text-5xl">
                  <GiHamburgerMenu width={50} height={50} />
                </span>
              )}
            </button>
            <div
              className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-green-500 md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium">
                {Menu.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block transition hover:text-green-500 ease-linear text-2xl md:text-sm lg:text-lg text-white md:text-black"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="hidden md:block bg-primary2 font-bold py-2 px-4 border border-b-4 border-black rounded-3xl hover:text-primary hover:border-primary2">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
