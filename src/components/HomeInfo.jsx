import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
// import { RiKakaoTalkFill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-slate-300 mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-slate-200">Aiman</span>
        👋
        <br />A Full-Stack WEB3.0 Apps Developer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Curious about Blockchain or DApps ?<br /> take a look at blockchain
          explanation.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <FaTruckArrowRight className="ml-2" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Successfully led multiple projects over the years. <br /> Wondering
          about the outcomes?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Explore Projects
          <FaMagnifyingGlassArrowRight className="ml-2" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <MdPhoneInTalk className="ml-2" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
