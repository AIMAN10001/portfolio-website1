import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="py-16 px-8 rounded-lg flex flex-col custom-shadow bg-[#161a1e] border-x-2 border-[#008080] my-12">
      <h1 className="flex text-3xl font-medium text-gray-200">
        Languages & Technologies
      </h1>

      <div className="mt-16 flex flex-wrap gap-16">
        {skills.map((skill) => (
          <div
            className="relative block-container w-10 h-10 sm:h-20 sm:w-20"
            key={skill.name}
          >
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-9/12 h-9/12 object-contain"
              />
            </div>
            <div className="tooltip">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
