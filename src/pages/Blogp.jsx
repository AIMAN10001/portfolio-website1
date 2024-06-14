import { Link } from "react-router-dom";

import { CTA } from "../components";

import Blog from "../components/Blog";
const Blogp = () => {
  return (
    <section className="max-container ">
      <div className="custom-shadow py-12 px-8 bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] rounded-lg">
        <h1 className="head-text">
          Explore
          <span className=" text-black-500 font-semibold drop-shadow">
            {" "}
            Blockchain
          </span>{" "}
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-800">
          <p>
            In this blog section, you will gain a comprehensive understanding of
            blockchain technology, decentralized applications (dApps),
            cryptocurrencies, and much more. Dive into the latest trends and
            innovations transforming various industries.
          </p>
        </div>
      </div>

      <Blog />

      <hr
        className="border-slate-200 border mt-8"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <section className="cta bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] py-16 px-8 rounded-lg">
        <p className="cta-text">
          Unlock the potential of Web3. <br className="sm:block hidden" />
          <p className="text-lg text-slate-200">
            Schedule a consultation to plan in web3 universe / to bring your
            unique vision to life !
          </p>
        </p>
        <Link to="/contact" className="btn">
          Contract
        </Link>
      </section>
      <hr
        className="border-slate-200 border"
        style={{ borderColor: "var(--icons-color)" }}
      />
    </section>
  );
};

export default Blogp;
