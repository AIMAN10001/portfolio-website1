import React, { useState } from "react";
import Modal from "react-modal";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoIosCloseCircle } from "react-icons/io";
import { FaReact, FaEthereum } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiSolana } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHardHat } from "react-icons/fa";
import { GiUnicorn } from "react-icons/gi";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNpmjsFill } from "react-icons/ri";
import { SiAlchemy } from "react-icons/si";
import { BiSolidPolygon } from "react-icons/bi";
import { RiRemixiconFill } from "react-icons/ri";
import { FaAnchor } from "react-icons/fa6";
import { HiCommandLine } from "react-icons/hi2";
import { CgDisplayGrid } from "react-icons/cg";
import { FaHillAvalanche } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";

import blc from "../assets/images/blc.png";
import {
  cryptobot,
  fx,
  nftcardgame,
  nftimage,
  senzu,
  solanai,
  solanastaking,
  swap,
  swapspot,
} from "../assets/images";

const sections = [
  {
    title: "Full-Stack NFT Marketplace",
    time: "110 Liked",
    shortDescription:
      "YCrypto NFT Marketplace designed and developed from scratch, Using...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          YCrypto NFT Marketplace designed and developed from scratch, Using a
          wide range of technologies and frameworks. HTML, CSS, and JavaScript
          for the frontend, along with React and Next.js for building dynamic
          and responsive user interfaces, Considering to make the platform
          perfect for users to interact with.
          <br className="mb-3" />
          In web3 space the most important part is Smart Contract. I've written
          and tested advanced and secure smart contracts using Remix IDE and
          Hardhat, ensuring proper error handling and event logging. These
          contracts control all functionality on the Ethereum blockchain. Also
          on the backend, Used the power of Node.js and MongoDB to build a
          advance server-side architecture, ensuring seamless data management,
          user authentication, and API integrations.
          <br className="mb-3" />
          Development in web3 should have very carefull planning and strategic
          thinking at the forefront of the approach. From conceptualizing the
          project requirements to designing the database schema, implementing
          frontend features, writing secure smart contracts and deploying the
          application, This project got all the attention in details.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>
          <span className="flex items-center gap-2">
            <RiNextjsFill className="text-cyan-500" /> Next.js
          </span>
          <span className="flex items-center gap-2">
            <IoLogoCss3 className="text-cyan-500" /> Custom CSS
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <DiMongodb className="text-cyan-500" /> MongoDB
          </span>
          <span className="flex items-center gap-2">
            <FaEthereum className="text-cyan-500" /> Ethereum
          </span>

          <span className="flex items-center gap-2">
            <SiSolidity className="text-cyan-500" /> Solidity
          </span>
          <span className="flex items-center gap-2">
            <RiRemixiconFill className="text-cyan-500" /> RemixID
          </span>
          <span className="flex items-center gap-2">
            <FaHardHat className="text-cyan-500" /> Hardhat
          </span>
          <span className="flex items-center gap-2">
            <BiSolidPolygon className="text-cyan-500" /> Polygon Mumbai
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className=" text-gray-300">
              User Registration and Authentication:
            </strong>{" "}
            <br />
            Account creation and secure login (e.g., two-factor authentication).
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Wallet Integration:</strong>{" "}
            <br />
            Support for popular wallets like MetaMask and Coinbase Wallet.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">NFT Minting:</strong>
            <br /> Tools for creating NFTs with metadata.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Listing and Auctioning:</strong>{" "}
            <br />
            Fixed price sales and auction features.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Search and Filter Options:
            </strong>{" "}
            <br />
            Advanced search and filters (price, popularity, etc.).
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              User Profiles and Collections:
            </strong>{" "}
            <br />
            Profile pages and custom collections management.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Payment Gateway:</strong>
            <br /> Support for cryptocurrencies and fiat payments.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Royalties and Fees:</strong>{" "}
            <br />
            Automated royalty payments and marketplace fees.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Smart Contract Integration:
            </strong>{" "}
            <br />
            Custom smart contracts and compatibility with standards like
            ERC-721.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Analytics and Reporting:</strong>{" "}
            <br />
            Sales data and user activity insights.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Community Features:</strong>{" "}
            <br />
            Social sharing, comments, and reviews.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Security Features:</strong> <br />
            Blockchain security and fraud detection.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Customer Support:</strong>
            <br /> Help center and live support.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Cross-Chain Compatibility:
            </strong>{" "}
            <br />
            Trading NFTs across different blockchains.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Mobile App:</strong> <br />
            Mobile-friendly interface.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Buy and Sell NFTs:</strong>
            <br /> Users can seamlessly buy and sell NFTs directly within the
            marketplace.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Financial Transactions:</strong>{" "}
            <br />
            Users can transfer and swap their funds.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://connectingcontract-opit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: nftimage,
    bigImage: nftimage,
  },

  {
    title: "Decentralized Exchange: Coin Swap",
    time: "85 Liked",
    shortDescription:
      "A decentralized token marketplace enabling token swaps using the Uniswap protocol...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          This project is a decentralized token marketplace built using Next.js,
          Hardhat, ethers.js, and Solidity. The marketplace allows users to swap
          different tokens using the Uniswap decentralized exchange protocol on
          the Ethereum blockchain.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>
          <span className="flex items-center gap-2">
            <RiNextjsFill className="text-cyan-500" /> Next.js
          </span>
          <span className="flex items-center gap-2">
            <IoLogoCss3 className="text-cyan-500" /> Custom CSS
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <DiMongodb className="text-cyan-500" /> MongoDB
          </span>
          <span className="flex items-center gap-2">
            <FaEthereum className="text-cyan-500" /> Ethereum
          </span>
          <span className="flex items-center gap-2">
            <SiSolidity className="text-cyan-500" /> Solidity
          </span>
          <span className="flex items-center gap-2">
            <GiUnicorn className="text-cyan-500" /> Uniswap Protocol
          </span>
          <span className="flex items-center gap-2">
            <FaHardHat className="text-cyan-500" /> Hardhat
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineSettingsEthernet className="text-cyan-500" /> Ethers.js
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className=" text-gray-300">Swap Different Tokens:</strong>
            <br />
            Users can swap various tokens using the Uniswap protocol.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Trade Custom Tokens:</strong>
            <br />
            Enables trading of custom tokens.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">User-Friendly Interface:</strong>
            <br />
            Built with Next.js for a seamless user experience.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Real-Time Updates:</strong>
            <br />
            Live transaction updates using ethers.js.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Smart Contract Development:
            </strong>
            <br />
            Developed and tested smart contracts with Solidity and Hardhat.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://uniswap-token-marketplace-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: swap,
    bigImage: swap,
  },

  {
    title: "Fullstack DeFi Token Staking DApp",
    time: "120 Liked",
    shortDescription:
      "Decentralized application for token staking and earning rewards...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          This repository contains a Decentralized Finance (DeFi) Token Staking
          Decentralized Application (DApp). The DApp allows users to stake their
          tokens and earn rewards based on the staked amount and duration. Built
          with the latest technologies, it offers a seamless and secure user
          experience.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaEthereum className="text-cyan-500" /> Ethereum
          </span>
          <span className="flex items-center gap-2">
            <SiSolidity className="text-cyan-500" /> Solidity
          </span>
          <span className="flex items-center gap-2">
            <RiNextjsFill className="text-cyan-500" /> Next.js
          </span>
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>

          <span className="flex items-center gap-2">
            <RiTailwindCssFill className="text-cyan-500" /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <RiNpmjsFill className="text-cyan-500" /> NPM
          </span>
          <span className="flex items-center gap-2">
            <SiAlchemy className="text-cyan-500" /> Alchemy
          </span>
          <span className="flex items-center gap-2">
            <RiRemixiconFill className="text-cyan-500" /> RemixID
          </span>
          <span className="flex items-center gap-2">
            <BiSolidPolygon className="text-cyan-500" /> Polygon Mumbai
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">Token Staking:</strong>
            <br />
            Users can stake their tokens into the smart contract.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Reward Mechanism:</strong>
            <br />
            Users earn rewards for staking their tokens over a period.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">User Dashboard:</strong>
            <br />
            Provides a dashboard for users to track their staked amount, rewards
            earned, and other relevant information.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Smart Contract:</strong>
            <br />
            Implements the staking logic using Solidity smart contracts.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Frontend Interface:</strong>
            <br />
            Includes a user-friendly frontend interface built with Next.js.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://fullstack-defi-token-stacking-dapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),

    image: fx,
    bigImage: fx,
  },
  {
    title: "The Solana Token Creator DApp",
    time: "83 Liked",
    shortDescription:
      "Revolutionizing the way to interact with blockchain technology on the Solana network...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          The Solana Token Creator DApp is here to revolutionize the way to
          interact with blockchain technology. Built with the latest
          technologies including React.js, TypeScript, Tailwind CSS, and Solana
          blockchain integration, our DApp offers unparalleled performance and
          user experience.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>
          <span className="flex items-center gap-2">
            <BiLogoTypescript className="text-cyan-500" /> TypeScript
          </span>
          <span className="flex items-center gap-2">
            <RiTailwindCssFill className="text-cyan-500" /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <SiSolana className="text-cyan-500" /> Solana
          </span>
          <span className="flex items-center gap-2">
            <FaRust className="text-cyan-500" /> Rust
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">Create Tokens:</strong>
            <br />
            Seamlessly create custom tokens on the lightning-fast Solana
            blockchain. Define token details like name, symbol, and metadata
            with ease.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Manage Metadata:</strong>
            <br />
            Take control of your token's metadata effortlessly. Update token
            information, descriptions, and images in just a few clicks.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Receive Airdrops:</strong>
            <br />
            Get ready to receive airdrops directly to your wallet! Our DApp
            simplifies the process of distributing tokens to multiple
            recipients.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Transfer Funds:</strong>
            <br />
            Swiftly transfer funds between wallets on the Solana blockchain.
            Send tokens securely and instantly to any address.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://solana-token-creator-dapp-sdnx.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: solanai,
    bigImage: solanai,
  },
  {
    title: "Solana Token Staking DApp",
    time: "96 Liked",
    shortDescription:
      "Decentralized application for staking $SYNCS tokens on the Solana blockchain...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          The Solana Token Staking DApp is a decentralized application (DApp)
          built on the Solana blockchain. It allows $SYNCS token holders to
          stake their tokens and earn rewards through a staking mechanism. This
          project provides an overview of the staking features, setup
          instructions, and usage guidelines.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <IoLogoJavascript className="text-cyan-500" /> JavaScript
          </span>
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <RiTailwindCssFill className="text-cyan-500" /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <SiSolana className="text-cyan-500" /> Solana
          </span>
          <span className="flex items-center gap-2">
            <FaRust className="text-cyan-500" /> Rust
          </span>

          <span className="flex items-center gap-2">
            <FaAnchor className="text-cyan-500" /> Anchor
          </span>
          <span className="flex items-center gap-2">
            <HiCommandLine className="text-cyan-500" /> Solana CLI
          </span>
          <span className="flex items-center gap-2">
            <SiAlchemy className="text-cyan-500" /> Alchemy RPC URL
          </span>
          <span className="flex items-center gap-2">
            <CgDisplayGrid className="text-cyan-500" /> Solana Playground
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">Staking Platform:</strong>
            <br />
            Users can connect their wallets and stake $SYNCS tokens.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Integration with Token Contract:
            </strong>
            <br />
            The DApp integrates with the $SYNCS token contract.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Transfer Fee Mechanism:</strong>
            <br />A 5% transfer fee is applied to staking and unstaking
            transactions, with fees collected in a treasury wallet.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Reward Distribution:</strong>
            <br />
            Rewards are distributed weekly to stakers.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Referral System:</strong>
            <br />
            Users can benefit from a 15% rebate through a referral program.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">APY Cap:</strong>
            <br />
            The APY is capped at 100% to ensure sustainable growth.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Frontend:</strong>
            <br />A user-friendly interface displays staking information and
            allows for easy interaction.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Error Handling and Logging:
            </strong>
            <br />
            Proper error handling, input validation, and event logging ensure
            the reliability and security of the DApp.
          </li>
        </ul>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Usage:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">Connect your wallet to the DApp.</li>
          <li className="mb-2">
            Stake $SYNCS tokens using the provided interface.
          </li>
          <li className="mb-2">
            Monitor staking performance and rewards earned.
          </li>
          <li className="mb-2">
            Refer others to the platform to earn additional rewards.
          </li>
          <li className="mb-2">
            Withdraw staked tokens and rewards as needed.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://liveprojectlink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: solanastaking,
    bigImage: solanastaking,
  },

  {
    title: "ERC20 Token Creation DApp!",
    time: "62 Liked",
    shortDescription:
      "Platform that allows users to create their own ERC20 tokens securely and efficiently...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          With the rise of decentralized finance (DeFi), we're excited to
          introduce a platform that allows users to create their own ERC20
          tokens securely and efficiently. Built with Next.js, Hardhat,
          Ethereum, JavaScript, Node.js, and Bootstrap, this application
          simplifies the process of token creation and management on the
          Ethereum blockchain.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaEthereum className="text-cyan-500" /> Ethereum
          </span>
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>
          <span className="flex items-center gap-2">
            <RiNextjsFill className="text-cyan-500" /> Next.js
          </span>
          <span className="flex items-center gap-2">
            <SiSolidity className="text-cyan-500" /> Solidity
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <IoLogoJavascript className="text-cyan-500" /> JavaScript
          </span>
          <span className="flex items-center gap-2">
            <FaBootstrap className="text-cyan-500" /> Bootstrap
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">Seamless Token Creation:</strong>
            <br />
            Easily create your own ERC20 tokens with just a few clicks, no
            technical expertise required.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Trustless Security:</strong>
            <br />
            Built on robust blockchain technology, ensuring the highest level of
            security and transparency.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Token Management:</strong>
            <br />
            Manage your token supply, transfers, and more with a user-friendly
            interface.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Community Governance:</strong>
            <br />
            Empowering users to participate in decision-making through
            decentralized governance mechanisms.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://saas-plateform.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: senzu,
    bigImage: senzu,
  },

  {
    title: "DeFi Multi-Blockchain SaaS DApps!",
    time: "44 Liked",
    shortDescription:
      "Build your own Decentralized Uniswap pool and liquidity finder tool...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          SwapSpot allows users to effortlessly build their own Decentralized
          Uniswap pool and liquidity finder web3 tool. With seamless navigation
          across multiple blockchains, users can explore Uniswap pools and
          liquidity details with ease. This tool is designed to offer a secure
          and reliable experience for users, providing comprehensive insights
          and functionalities.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaEthereum className="text-cyan-500" /> Ethereum
          </span>
          <span className="flex items-center gap-2">
            <FaReact className="text-cyan-500" /> React
          </span>
          <span className="flex items-center gap-2">
            <IoLogoJavascript className="text-cyan-500" /> JavaScript
          </span>
          <span className="flex items-center gap-2">
            <BiLogoTypescript className="text-cyan-500" /> TypeScript
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <RiTailwindCssFill className="text-cyan-500" /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <SiSolidity className="text-cyan-500" /> Solidity
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">Multi-Blockchain Support:</strong>
            <br />
            Seamless navigation and functionality across multiple blockchains.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Decentralized Uniswap Pool Creation:
            </strong>
            <br />
            Allows users to create their own decentralized Uniswap pools.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Liquidity Finder:</strong>
            <br />
            Tool for exploring and finding liquidity pools easily.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Pool History:</strong>
            <br />
            Track the history of various pools.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Liquidity History:</strong>
            <br />
            Detailed history of liquidity across different pools.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">User-Friendly Interface:</strong>
            <br />
            Intuitive and easy-to-use interface for all users.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Secure and Reliable:</strong>
            <br />
            Ensures user data and transactions are secure and trustworthy.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://defi-multi-blockchain-sass.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: swapspot,
    bigImage: swapspot,
  },
  {
    title: "Web3.0 Blockchain Battle Card Game",
    time: "75 Liked",
    shortDescription:
      "A battle card game with stunning design and real-time gameplay...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          AvaxGods introduces players to the world of blockchain gaming,
          offering an immersive experience with stunning design, interactive
          gameplay, and live interaction with smart contracts. Players can
          connect their regular React.js applications to the blockchain, pair it
          with their wallets, and engage in battles with other players in
          real-time.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaHtml5 className="text-cyan-500" /> HTML
          </span>
          <span className="flex items-center gap-2">
            <RiTailwindCssFill className="text-cyan-500" /> CSS
          </span>
          <span className="flex items-center gap-2">
            <IoLogoJavascript className="text-cyan-500" /> JavaScript
          </span>
          <span className="flex items-center gap-2">
            <BiLogoTypescript className="text-cyan-500" /> TypeScript
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <SiExpress className="text-cyan-500" /> Express.js
          </span>
          <span className="flex items-center gap-2">
            <DiMongodb className="text-cyan-500" /> MongoDB
          </span>

          <span className="flex items-center gap-2">
            <SiSolidity className="text-cyan-500" /> Solidity
          </span>
          <span className="flex items-center gap-2">
            <FaHillAvalanche className="text-cyan-500" /> Avalanche
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">
              Create and Customize Characters:
            </strong>
            <br />
            Design unique characters for battles.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Join Live Battles:</strong>
            <br />
            Engage in real-time battles and choose your battleground.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Wallet Pairing:</strong>
            <br />
            Pair your wallet for secure transactions and smart contract
            interactions.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Real-Time Gameplay:</strong>
            <br />
            Battle other players in real-time with interactive gameplay.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Stunning Design:</strong>
            <br />
            Enjoy a visually stunning design that enhances the gaming
            experience.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://liveprojectlink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: nftcardgame,
    bigImage: nftcardgame,
  },
  {
    title: "Powerful Full-Stack Crypto Bot",
    time: "105 Liked",
    shortDescription:
      "A comprehensive full-stack crypto bot leveraging NodeJS, NextJs, CSS, MongoDB, and JavaScript for automated trading...",
    fullDescription: (handleLike, likes) => (
      <div className="text-gray-400 text-base mb-4 px-5">
        <p>
          Cryptocurrency trading, automation is the key to staying ahead of the
          game. Built using a robust stack of technologies including NodeJS,
          NextJs, CSS, MongoDB, and JavaScript, this bot offers seamless and
          efficient trading experiences. Whether you are a beginner or an
          experienced trader, this bot caters to all your trading needs.
        </p>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Technologies Used:</h5>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="flex items-center gap-2">
            <FaHtml5 className="text-cyan-500" /> HTML
          </span>
          <span className="flex items-center gap-2">
            <RiTailwindCssFill className="text-cyan-500" /> CSS
          </span>
          <span className="flex items-center gap-2">
            <RiNextjsFill className="text-cyan-500" /> Next.js
          </span>
          <span className="flex items-center gap-2">
            <TbBrandNodejs className="text-cyan-500" /> Node.js
          </span>
          <span className="flex items-center gap-2">
            <IoLogoJavascript className="text-cyan-500" /> JavaScript
          </span>

          <span className="flex items-center gap-2">
            <DiMongodb className="text-cyan-500" /> MongoDB
          </span>

          <span className="flex items-center gap-2">
            <GiUnicorn className="text-cyan-500" /> Uniswap
          </span>
          <span className="flex items-center gap-2">
            <SiHiveBlockchain className="text-cyan-500" /> DeFi
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineSettingsEthernet className="text-cyan-500" /> Ethers.js
          </span>
        </div>

        <h5 className="text-[#098484] text-xl mt-6 mb-2">Key Features:</h5>
        <ul className="text-gray-400 list-disc list-inside mb-4">
          <li className="mb-2">
            <strong className="text-gray-300">Automated Trading:</strong>
            <br />
            Execute trades automatically based on predefined strategies.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">
              Real-Time Market Analysis:
            </strong>
            <br />
            Analyze market trends and data in real-time.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">User-Friendly Interface:</strong>
            <br />
            Intuitive and easy-to-use interface for managing trading settings.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Customizable Strategies:</strong>
            <br />
            Create and implement your own trading strategies.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Secure and Reliable:</strong>
            <br />
            Built with robust security measures to protect user data and
            transactions.
          </li>
          <li className="mb-2">
            <strong className="text-gray-300">Performance Tracking:</strong>
            <br />
            Track the performance of your trading strategies with detailed
            analytics.
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:justify-center md:space-x-6 md:space-y-0">
          <a
            href="https://liveprojectlink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            View Live Project
          </a>

          <button
            onClick={handleLike}
            className="px-6 py-2 bg-[#008080] bg-transparent hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] border border-[#008080] font-semibold rounded-full hover:custom-shadow2 transition duration-300"
          >
            Like this Project ({likes})
          </button>
        </div>
      </div>
    ),
    image: cryptobot,
    bigImage: cryptobot,
  },
];

const Projectc = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const openModal = (section) => {
    setActiveSection(section);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveSection(null);
  };

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="py-16 rounded-lg custom-shadow bg-[#161a1e] border-x-2 border-[#008080] mt-8 ">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-[#00808032] custom-shadow  p-6 rounded-lg hover:custom-shadow2 transition duration-300 hoverScale cursor-all-scroll"
              onClick={() => openModal(section)}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full custom-shadow hoverScale object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between mb-4 items-center">
                <h4 className="text-sm text-[#008080] rounded font-semibold">
                  {section.title}
                </h4>
                <span className=" text-slate-500 flex text-xs items-center gap-1">
                  <FcLikePlaceholder className="text-[#008080]" />
                  {section.time}
                </span>
              </div>

              <p className="text-slate-500 text-justify">
                {section.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      {activeSection && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Section Detail"
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <button onClick={closeModal} className="close-button">
            <IoIosCloseCircle className="text-[#008080]" />
          </button>
          <div className="flex flex-col items-center">
            <img
              src={activeSection.bigImage}
              alt={activeSection.title}
              className="w-full h-full object-cover custom-shadow rounded-lg mb-4"
            />
            <h4 className="text-2xl font-semibold text-slate-200 mb-4">
              {activeSection.title}
            </h4>
            <div className="text-slate-400 text-justify">
              {activeSection.fullDescription(handleLike, likes)}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projectc;
