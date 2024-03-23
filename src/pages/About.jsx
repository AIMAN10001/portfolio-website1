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
} from "../assets/images";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Aiman
        </span>{" "}
        👨🏻‍💻
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Experienced web3.0 developer adept at crafting decentralized
          applications (dApps) and smart contracts using Ethereum, Solana, and
          Polkadot. Skilled in Full-stack DApps development, DeFi integration
          and committed to delivering innovative blockchain solutions.
        </p>
      </div>

      {/* New Section */}
      <div className="py-16 rounded-lg ">
        <h3 className="text-4xl font-semibold text-center text-gray-200 mb-8">
          What/Why
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Blockchain
          </span>{" "}
          and
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            DApps
          </span>{" "}
        </h3>
        <p className=" pb-4 text-center text-slate-500">
          Here's a brief explanation of some key concepts in blockchain and
          decentralized applications:
        </p>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#008080] p-6 rounded-lg hoverScale">
              <h4 className="text-lg bg-[#008080] rounded text-gray-300 text-center font-semibold mb-4">
                Blockchain
              </h4>
              <p className="text-slate-500 text-justify w-full  ">
                Blockchain is a decentralized digital ledger technology where
                transactions are recorded in blocks and linked together in a
                chain. It's secure, transparent, and tamper-proof due to its
                decentralized nature and cryptographic techniques. Blockchain's
                apps extend beyond cryptocurrencies to various industries. Work
                path:- Decentralization, immutable ledger, Consensus Mechanism,
                Cryptographic Security, Transparency and Trust.
              </p>
            </div>
            <div className="border border-[#008080] p-6 rounded-lg hoverScale">
              <h4 className="text-lg bg-[#008080] rounded text-gray-300 text-center font-semibold mb-4">
                Decentralized Applications (DApps)
              </h4>
              <p className="text-slate-500 text-justify">
                A decentralized application, often abbreviated as DApp, is a
                type of software application that operates on a decentralized
                network rather than a single central server. In contrast to
                traditional applications, which rely on centralized servers for
                data storage and processing, DApps leverage blockchain
                technology or other peer-to-peer networks to achieve
                decentralization.
              </p>
            </div>
            <div className="border border-[#008080] p-6 rounded-lg hoverScale">
              <h4 className="text-lg bg-[#008080] rounded text-gray-300 text-center font-semibold mb-4">
                Smart Contract
              </h4>
              <p className="text-slate-500 text-justify">
                A smart contract is a self-executing contract with the terms of
                the agreement directly written into code. It automatically
                enforces and executes the terms of the contract when predefined
                conditions are met. Smart contracts run on blockchain platforms
                like Ethereum and are stored on a distributed ledger, ensuring
                transparency and immutability. They eliminate the need for
                intermediaries and increase security.
              </p>
            </div>
            <div className="border border-[#008080] p-6 rounded-lg hoverScale">
              <h4 className="text-lg bg-[#008080] rounded text-gray-300 text-center font-semibold mb-4">
                Decentralized Finance
              </h4>
              <p className="text-slate-500 text-justify ">
                Decentralized finance (DeFi) refers to the ecosystem of
                financial applications and services built on blockchain
                technology. DeFi aims to create an open, permissionless, and
                transparent financial system that operates without traditional
                intermediaries such as banks or brokerages. DeFi applications
                offer a wide range of services, including lending and borrowing,
                decentralized exchanges (DEXs), yield farming, liquidity
                provision, derivatives trading, and more. DeFi protocols are
                governed by smart contracts, enabling trustless and automated
                execution of financial transactions.
              </p>
            </div>
            <div className="border border-[#008080] p-6 rounded-lg hoverScale">
              <h4 className="text-lg bg-[#008080] rounded text-gray-300 text-center font-semibold mb-4">
                DApps vs. CApps
              </h4>
              <ul className="list-disc text-slate-500 text-justify">
                <li>
                  <strong> Decentralized Applications:</strong> Operate on
                  decentralized networks, providing greater security,
                  challenging scalability, transparency, and censorship
                  resistance. Smart contract govern the rules. Users have more
                  control over their data and transactions.
                </li>
                <li>
                  <strong>Centralized Applications: </strong> Operate on
                  centralized servers controlled by a single entity. User must
                  trust central authority, limited transparency. While they may
                  offer convenience and scalability, they are more vulnerable to
                  hacking, censorship, and data breaches.
                </li>
              </ul>
            </div>
            <div className="border border-[#008080] p-6 rounded-lg hoverScale">
              <h4 className="text-lg bg-[#008080] rounded text-gray-300 text-center font-semibold mb-4">
                Why Choose DApps
              </h4>
              <p className="text-slate-500 text-justify">
                Decentralized applications (DApps) offer users greater control,
                transparency, security, and privacy compared to centralized
                applications. Operating on decentralized networks like
                blockchains, DApps eliminate single points of failure, enhancing
                resilience and trust. Transactions on DApps are transparent and
                auditable, fostering accountability. Users retain ownership of
                their data, reducing the risk of unauthorized access or
                manipulation. Through smart contracts, DApps enable trustless
                transactions without intermediaries, increasing efficiency and
                reducing costs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Languages and tools</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
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
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "var(--box-shadow)",
                  backgroundColor: "var(--icons-bg-color)",
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

      <div className="p-10 rounded-lg ">
        {/* <h3 className="text-3xl font-semibold text-center text-gray-200 mb-8">
          Some of my pictures
        </h3> */}
        <div className="picture-container">
          <div className="picture-item">
            <img src={aiman} alt="Picture 1" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman8} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman10} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman6} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman4} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman5} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman3} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman7} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman1} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman9} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman2} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman11} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman12} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman13} alt="Picture 2" className="picture" />
          </div>
          <div className="picture-item">
            <img src={aiman14} alt="Picture 2" className="picture" />
          </div>
        </div>
      </div>

      <hr
        className="border-slate-200 border"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <CTA />
    </section>
  );
};

export default About;
