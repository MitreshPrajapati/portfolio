import React from "react";
import "./projects.css";
import img from "../../assets/Profile.jpg";
import { projects } from "../../utils/data";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {projects?.map((project, index) => (
          <article className="project__item" key={project?.id}>
            <div className="project__item-image">
              <img src={project.image || img} alt="project" />
            </div>
            <h3>{project?.title}</h3>
            <p className="multiline-truncate">
              {project.description ||
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, recusandae"}
            </p>
            <div className="project__item-tech">
              {project?.tech?.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </div>
            <div className="project__item-cta">
              {project.show_git_url && (
                <a href={project.github} target="_blank" className="btn">
                  Github
                </a>
              )}
              {project.show_live_url && (
                <a
                  href={project.live}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Link
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
