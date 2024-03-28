import { NavLink } from "react-router-dom";

import { aiman } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={aiman}
          alt="logo"
          className="logo-img"
          style={{
            width: "32px",
            height: "32px",
            marginBottom: "5px",
            // objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-teal-600" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-teal-600" : "text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-teal-600" : "text-white"
          }
        >
          Location
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
