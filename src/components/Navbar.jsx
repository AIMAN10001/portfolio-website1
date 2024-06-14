import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { aimancp } from "../assets/images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Lock body scroll when menu is open
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [menuOpen]);

  return (
    <header className="header custom-shadow flex items-center justify-between px-4 py-3 md:px-8">
      <NavLink to="/" className="flex items-center gap-4 no-click">
        <div className="h-8 w-8 rounded-full bg-[#008080] custom-shadow2">
          <img
            src={aimancp}
            alt="logo"
            className="w-full h-full object-cover rounded-full click"
          />
        </div>
        <span className="text-lg sm:text-xl font-semibold text-gray-300 cursor-text">
          Aiman Ibn Ubayd
        </span>
        <span
          onClick={(e) => e.preventDefault()}
          className="relative flex h-3 w-3"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#008080]"></span>
        </span>
      </NavLink>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <CiMenuFries className="text-gray-300 text-2xl" />
          ) : (
            <CiMenuBurger className="text-gray-300 text-2xl" />
          )}
        </button>
      </div>

      {/* Navbar Items for Desktop */}
      <nav className="hidden md:flex text-base sm:text-lg gap-5 md:gap-8 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-[#008080] transition duration-300 underline1 ${
              isActive ? "text-teal-600" : "text-gray-300"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `hover:text-[#008080] transition duration-300 underline1 ${
              isActive ? "text-teal-600" : "text-gray-300"
            }`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `hover:text-[#008080] transition duration-300 underline1 ${
              isActive ? "text-teal-600" : "text-gray-300"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-[#008080] transition duration-300 underline1 ${
              isActive ? "text-teal-600" : "text-gray-300"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col text-xl items-end gap-5 font-medium fixed inset-0 top-16  bg-[#0e1013ed] p-10 z-50 overflow-y-auto">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#008080] transition duration-300 underline1 ${
                isActive ? "text-teal-600" : "text-gray-300"
              }`
            }
            onClick={toggleMenu} // Close menu on click
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-[#008080] transition duration-300 underline1 ${
                isActive ? "text-teal-600" : "text-gray-300"
              }`
            }
            onClick={toggleMenu} // Close menu on click
          >
            Blog
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-[#008080] transition duration-300 underline1 ${
                isActive ? "text-teal-600" : "text-gray-300"
              }`
            }
            onClick={toggleMenu} // Close menu on click
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#008080] transition duration-300 underline1 ${
                isActive ? "text-teal-600" : "text-gray-300"
              }`
            }
            onClick={toggleMenu} // Close menu on click
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
