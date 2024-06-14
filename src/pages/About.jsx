import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import {
  aiman,
  aiman1,
  aiman2,
  aiman3,
  aiman4,
  aiman5,
  aiman6,
  aiman7,
  aiman8,
  aiman9,
  aiman10,
  aiman11,
  aiman12,
  aiman13,
  aiman14,
  aimancp2,
  aimancp3,
  aimancp4,
  aimancp5,
  aimancp6,
  aimancp7,
} from "../assets/images";

import "react-vertical-timeline-component/style.min.css";
import Blog from "../components/Blog";
import Skills from "../components/Skills";

const About = () => {
  return (
    <section className="max-container">
      <div className="bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] custom-shadow py-12  px-8 rounded-lg">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="text-black-500 font-semibold drop-shadow">
            {" "}
            Aiman
          </span>{" "}
          👨🏻‍💻
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-800">
          <p>
            A software engineer specializing in Web3, I have expertise in
            Ethereum and Solana development. I do smart contract security
            research and auditing, and build full-stack decentralized
            applications (DApp) on different blockchain networks. Core
            technologies include EVM | SVM, JavaScript, Solidity, Rust, MERN
            stack, and Next.js. I also offer consulting services to help
            businesses understand and use blockchain technology
          </p>
        </div>
      </div>

      <Skills />

      <div className="py-16 custom-shadow bg-[#161a1e] border-x-2 border-[#008080] rounded-lg px-8 my-12">
        <h3 className="subhead-text">Skills at a glance.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            From an early age, I've harbored curiosity for diverse technologies,
            continuously honing my skills and knowledge by exploration of
            various cutting-edge technologies. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "var(--box-shadow)",
                  backgroundColor: "transparent",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid var(--icons-color)`,
                }}
                dateClassName="text-slate-300"
              >
                <div>
                  <h3 className="text-white text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-slate-300 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-slate-300 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* New Section */}

      <div className="p-10 mb-8 rounded-lg custom-shadow bg-[#161a1e] border-x-2 border-[#008080]">
        <div className="picture-container">
          {[
            aiman,
            aimancp7,
            aiman8,

            aiman3,

            aiman4,
            aiman7,

            aiman9,
            aiman5,

            aiman10,
            aiman11,
            aiman12,
            aiman13,
            aiman14,
            aimancp2,
            aiman2,

            aimancp3,
            aimancp4,
            aimancp5,
            aimancp6,
            aiman6,

            aiman1,
          ].map((image, index) => (
            <div className="picture-item" key={index}>
              <img
                src={image}
                alt={`Picture ${index + 1}`}
                className="picture object-cover custom-shadow"
              />
            </div>
          ))}
        </div>
      </div>

      <hr
        className="border-slate-200 border mt-2"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <CTA />
      <hr
        className="border-slate-200 border"
        style={{ borderColor: "var(--icons-color)" }}
      />
    </section>
  );
};

export default About;
