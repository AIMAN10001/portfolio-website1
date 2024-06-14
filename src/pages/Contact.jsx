import { BiLogoUpwork } from "react-icons/bi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import {
  FaCcVisa,
  FaCcMastercard,
  FaBitcoin,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { SiWise } from "react-icons/si";
const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    feedback:
      "Aiman is an excellent developer who delivered our project on time and exceeded our expectations.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    feedback:
      "Working with Aiman was a fantastic experience. He is very professional and highly skilled.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Mike Johnson",
    feedback:
      "I highly recommend Aiman for any blockchain-related projects. His expertise is unparalleled.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    feedback:
      "Aiman is a top-notch developer. His attention to detail and commitment to quality are impressive.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Chris Brown",
    feedback:
      "Aiman was great to work with. He communicated effectively and delivered an outstanding product.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sarah Wilson",
    feedback:
      "Aiman's expertise in blockchain technology is remarkable. He delivered exactly what we needed.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Lee",
    feedback:
      "Aiman exceeded our expectations with his high-quality work and professional attitude.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sophia Martinez",
    feedback:
      "Aiman's work ethic and skill set are truly exceptional. I highly recommend him for any project.",
  },
];

const Contact = () => {
  return (
    <section className="relative flex flex-col max-container">
      <div className="bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] custom-shadow py-12 px-8 mt-4 mb-10 rounded-lg">
        <h1 className="head-text">
          Ready to{" "}
          <span className="text-black-500 drop-shadow font-semibold">
            Collaborate?
          </span>
        </h1>

        <p className="text-slate-800 mt-2 leading-relaxed">
          Let's bring your ideas to life! Whether it's blockchain solutions,
          smart contract audit, or dApps, I'm here to help. With expertise in
          web3.0 and experience of high-quality projects, I'm ready to complete
          your challenges.
        </p>
      </div>

      <div className="flex flex-col space-y-10">
        {/* Address Section */}
        <div className="flex-1 min-w-[50%] flex flex-col custom-shadow px-8 py-8 rounded-lg custom-shadow bg-[#161a1e] border-x-2 border-[#008080]">
          <div className="mt-8 p-8 custom-shadow  hover:custom-shadow transition duration-300 hoverScale rounded-lg">
            <h3 className="text-slate-200 text-3xl sm:text-4xl sm:leading-snug">
              Address.🗺
            </h3>
            <p className="text-slate-300 text-2xl mt-4">
              Road # 02, Block # B, Section # 02, Rupnagar, Rupnagar-MIRPUR,
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="mt-10 p-8 custom-shadow2 hover:custom-shadow2 transition duration-300 hoverScale rounded-lg">
            <h2 className="text-slate-200 text-3xl sm:text-4xl sm:leading-snug">
              Sign A Contract Via.
            </h2>
            <div className="flex gap-6 py-2 text-[#05a2a2c8] rounded-full bg-transparent text-[#008080] justify-center custom-shadow items-center text-4xl mt-8">
              <a
                href="https://www.fiverr.com/mdaiman321?source=gig_page"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-transparent p-2 hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] transition duration-300 justify-center hover:custom-shadow2 items-center border border-[#008080]"
              >
                <TbBrandFiverr />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01b5c940aaed9a0c78"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-transparent p-2 hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] transition duration-300 justify-center hover:custom-shadow2 items-center border border-[#008080]"
              >
                <BiLogoUpwork />
              </a>
              <a
                href="https://www.freelancer.com/u/mdaiman10328"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-transparent p-2 hover:bg-[#008080] text-[#008080] hover:text-[#0E1013] transition duration-300 justify-center hover:custom-shadow2 items-center border border-[#008080]"
              >
                <SiFreelancer />
              </a>
            </div>
          </div>

          <div className="mt-10 p-8 custom-shadow  hover:custom-shadow transition duration-300 hoverScale rounded-lg">
            <h3 className="text-slate-200 text-3xl font-semibold mb-4">
              Payment Methods
            </h3>
            <div className="flex flex-wrap gap-6 text-slate-300 text-2xl">
              <div className="flex items-center gap-2">
                <FaCcVisa className="text-slate-300 text-4xl" />
                <span>Visa</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCcMastercard className="text-slate-300 text-4xl" />
                <span>MasterCard</span>
              </div>
              <div className="flex items-center gap-2">
                <SiPayoneer className="text-slate-300 text-4xl" />
                <span>Payoneer</span>
              </div>
              <div className="flex items-center gap-2">
                <SiWise className="text-slate-300 text-4xl" />
                <span>Wise</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBitcoin className="text-slate-300 text-4xl" />
                <span>Crypto</span>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-8 p-8 custom-shadow rounded-lg hover:custom-shadow transition duration-300 hoverScale">
            <h3 className="text-slate-200 text-3xl font-semibold mb-4">
              Business Hours
            </h3>
            <p className="text-slate-300 text-2xl">
              Mon - Thu: 8 AM - 6 PM
              <span className="hidden md:inline text-[#008080] font-extrabold">
                {" "}
                |{" "}
              </span>
              <span className="block md:hidden">
                <br />
              </span>
              Fri: 10 AM - 4 PM
              <span className="hidden md:inline text-[#008080] font-extrabold">
                {" "}
                |{" "}
              </span>
              <span className="block md:hidden">
                <br />
              </span>
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <iframe
            className="w-full h-96 rounded-lg custom-shadow"
            title="Google Map Location"
            frameBorder="0"
            style={{ borderColor: "#008080" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7294.11436700108!2d90.36900855604562!3d23.808330684157504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b931dbf1d437%3A0xb88a6e74a1a6b18b!2sMirpur%202!5e0!3m2!1sen!2sbd!4v1648281362282!5m2!1sen!2sbd"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full mt-16 p-8 rounded-lg custom-shadow bg-[#161a1e] border-x-2 border-[#008080]">
        <h3 className="text-slate-200 flex mt-2 mb-8 text-3xl font-semibold">
          Some Professionals' Opinion
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex bg-[#191d22] flex-col items-center border border-[#00808032] custom-shadow p-6 rounded-lg hover:custom-shadow2 transition duration-300 hoverScale"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h4 className="text-xl text-slate-200 font-semibold mb-2">
                {testimonial.name}
              </h4>
              <p className="text-slate-400 text-center">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr
        className="border-slate-200 border mt-8"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <section className="cta bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] py-16 px-8 rounded-lg">
        <p className="cta-text flex items-center justify-center ">
          Dreaming to connect this era with the real world of Web3.
        </p>
      </section>
      <hr
        className="border-slate-200 border"
        style={{ borderColor: "var(--icons-color)" }}
      />
    </section>
  );
};

export default Contact;
