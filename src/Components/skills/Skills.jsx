import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";
import {
  backend_skills,
  devops_tools,
  frontend_skills,
} from "../../utils/data";
const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {frontend_skills?.map((skill, index) => (
              <article key={skill.id} className="skills__details">
                <BsPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {backend_skills?.map((skill, index) => (
              <article key={skill.id} className="skills__details">
                <BsPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="skills__devops">
          <h3>DevOps & Tools</h3>
          <div className="skills__content">
            {devops_tools?.map((skill, index) => (
              <article key={skill.id} className="skills__details">
                <BsPatchCheckFill className="skills__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
