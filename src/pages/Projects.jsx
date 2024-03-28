import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Explore a curated collection of my
        most cherished projects, each a testament to creativity and dedication.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex rounded-lg flex-col">
              <h4 className="text-2xl text-slate-300 font-poppins font-semibold">
                {project.name}
              </h4>

              <img
                src={project.image}
                alt="threads"
                className="w-[95%] pt-2 h-1/3 object-contain hoverScale rounded-lg "
              />
              <p className="mt-2 text-slate-500 text-justify">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-300"
                >
                  Live Link
                </Link>
                <BsFillFolderSymlinkFill
                  className="text-icons-color"
                  color="var(--icons-color)"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr
        className="border-slate-200 border"
        style={{ borderColor: "var(--icons-color)" }}
      />

      <CTA />
    </section>
  );
};

export default Projects;
