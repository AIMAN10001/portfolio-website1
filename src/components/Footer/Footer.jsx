import React from "react";
import { aimancp } from "../../assets/images";
import { NavLink } from "react-router-dom";

import { TbBrandGithubFilled } from "react-icons/tb";
import { TiArrowUpThick } from "react-icons/ti";

import { ImStackoverflow } from "react-icons/im";
const Footer = () => {
  const footerMenu = [
    { name: "About Me", link: "/about" },
    { name: "WEB3 Blogs", link: "/blog" },
    { name: "My Projects", link: "/projects" },
    { name: "Sign a Contract", link: "/contact" },
  ];

  const footerMenu2 = [
    {
      name: "Fiverr",
      link: "https://www.fiverr.com/mdaiman321?source=gig_page",
    },
    {
      name: "Upwork",
      link: "https://www.upwork.com/freelancers/~01b5c940aaed9a0c78",
    },
    { name: "Freelancer", link: "https://www.freelancer.com/u/mdaiman10328" },
    { name: "PeoplePerHour", link: "https://www.peopleperhour.com" },
  ];

  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/AIMAN10001",
      icon: <TbBrandGithubFilled />,
    },
    // {
    //   name: "StackOverflow",
    //   link: "https://stackoverflow.com/users/123456/aiman",
    //   icon: <ImStackoverflow />,
    // },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0e1013] max-w-5xl mx-auto mb-0  sm:mb-6 custom-shadow rounded-t-2xl text-gray-100 pt-10">
      <div className="container  justify-center mx-auto flex flex-col items-center space-y-8 lg:flex-row lg:justify-evenly gap-0 lg:gap-20 lg:space-y-0 px-4">
        <div className="flex flex-row items-center lg:w-1/3 pl-0 lg:pl-0 gap-6">
          <NavLink
            to="/"
            className="flex items-center gap-2 space-x-3 no-click"
          >
            <div className="h-12 w-12 rounded-full bg-[#008080] custom-shadow2">
              <img
                src={aimancp}
                alt="logo"
                className=" object-cover w-full h-full rounded-full click"
              />
            </div>
            <span
              className="text-2xl font-semibold text-gray-300 cursor-text"
              onClick={(e) => e.preventDefault()}
            >
              Aiman Ibn Ubayd
            </span>
          </NavLink>

          <div className="flex rounded-full bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] transition duration-300 h-7 w-7 justify-center hover:custom-shadow2 items-center border border-[#008080]">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-20 justify-center ">
          <div className="space-y-3">
            <h3 className="font-semibold uppercase text-[#008080] text-lg">
              Pages
            </h3>
            <ul className="space-y-1 text-gray-300">
              {footerMenu.map((menu, i) => (
                <li key={i + 1}>
                  <NavLink
                    to={menu.link}
                    className="hover:text-[#008080] underline1 transition duration-300"
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold uppercase text-[#008080] text-lg">
              Marketplace
            </h3>
            <ul className="space-y-1 text-gray-300">
              {footerMenu2.map((menu, i) => (
                <li key={i + 1}>
                  <a
                    href={menu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#008080] underline1 transition duration-300"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 py-6 text-sm text-center border-t border-gray-700 text-gray-400">
        &copy; 2023 All rights reserved by the author.
      </div>
      <button
        onClick={scrollToTop}
        className=" animate-bounce fixed bottom-4 right-4 bg-[#1c2027] text-[#008080] p-2 rounded-full custom-shadow transition duration-300 hover:bg-[#008080] hover:custom-shadow2 hover:text-[#0E1013] "
      >
        <TiArrowUpThick className="text-2xl" />
      </button>
    </footer>
  );
};

export default Footer;
