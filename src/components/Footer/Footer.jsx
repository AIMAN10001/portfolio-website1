import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { BiLogoUpwork } from "react-icons/bi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaStackOverflow } from "react-icons/fa6";
import Style from "./Footer.module.css";
import React, { useState } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <footer className="footer font-poppins">
      <hr
        className="border-slate-200 border"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <div className="footer-container">
        <p>
          © 2023... <strong>Aiman Ibn Ubayd</strong>. All rights reserved.
        </p>

        <div className={Style.footer_social}>
          <a
            href="https://stackoverflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/aiman-ibn-ubayd-851216291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a> */}
          <a
            href="https://www.upwork.com/freelancers/~01b5c940aaed9a0c78"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoUpwork />
          </a>
          <a
            href="https://www.fiverr.com/mdaiman321/develop-blockchain-decentralized-applications-smart-contract?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=1lzx24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandFiverr />
          </a>
          <a
            href="https://github.com/AIMAN10001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          {showScroll && (
            <div
              className={`${Style.scroll_up} ${Style.footer_social}`}
              onClick={scrollTop}
            >
              <FaArrowUp />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
