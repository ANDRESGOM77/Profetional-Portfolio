import React, { useState } from "react";
import logo from "../assets/logo.png";
import CV from "../assets/CV Andres Gomez v2.pdf";

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
        <div className="flex items-center relative bg-white w-[90%] md:w-4/5 p-3 justify-between rounded-3xl">
          <div className="text-3xl font-bold flex">
            <img src={logo} alt="LOGO" className="w-20 h-20 ml-4" />
          </div>
          <div className="md:hidden z-30">
            <button
              type="button"
              className="block focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <span className="text-5xl">
                  <img
                    src="http://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
                    alt="Close"
                    width={50}
                    height={50}
                  />
                </span>
              ) : (
                <span className="text-5xl">
                  <img
                    src="http://img.icons8.com/ios-filled/100/menu--v6.png"
                    alt="Close"
                    width={50}
                    height={50}
                  />
                </span>
              )}
            </button>
          </div>
          <div
            className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:space-x-5 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 font-medium">
              {Menu.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-2xl text-white md:text-black"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href={CV} download>
              <button className="hidden md:block bg-primary2 font-bold py-2 px-12 border border-b-4 border-black rounded-3xl hover:text-primary hover:border-primary2">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
