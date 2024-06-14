import { Link } from "react-router-dom";

import Projectc from "../components/Projectc";
const Projects = () => {
  return (
    <section className="max-container ">
      <div className="bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] custom-shadow py-12 px-8 mt-4 rounded-lg">
        <h1 className="head-text">
          Explore My{" "}
          <span className="text-black-500 drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-800 mt-2 leading-relaxed">
          Explore my diverse range of projects, showcasing my expertise in
          web3.0 development, decentralized applications (dApps), and blockchain
          technology. Each project highlights innovative solutions and practical
          implementations of advanced technologies. From smart contracts on
          Ethereum and Solana to full-stack dApp development, search into my
          work to see how I bring ideas to life in the digital space.
        </p>
      </div>

      <Projectc />
      <hr
        className="border-slate-200 border mt-8"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <section className="cta bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] py-16 px-8 rounded-lg">
        <p className="cta-text">
          Ready to bring your project to life? <br className="" />
          <p className="text-lg text-slate-200 ">
            Let me simplify the journey by understanding your needs, making the
            process effortless!
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

export default Projects;
