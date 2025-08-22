import React from "react";
import { FaAward } from "react-icons/fa";
import "./about.css";
import ME from "../../assets/profile.jpg";

const AboutMe = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="me" className="about__me-image" />
          {/* <div className="about__me-image">
          </div> */}
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projets</h5>
              <small>20+ compleated</small>
            </article>
          </div>
          <p>
            Passionate <strong>MERN Stack Developer</strong> with{" "}
            <strong>2+ years of hands-on experience</strong> working on
            <strong> production-level applications</strong>. Proficient in
            developing <strong>scalable</strong> and{" "}
            <strong>responsive web applications</strong> using MongoDB,
            Express.js, <strong>React.js</strong>, and <strong>Node.js</strong>.
            Experienced in{" "}
            <strong>building and integrating RESTful APIs</strong>, state
            management (Redux) and advanced styling with CSS3, Tailwind CSS, and
            SCSS. Familiar with <strong>Next.js</strong> for server-side
            rendering and <strong>NestJS </strong>for backend development.
            Knowledge of <strong>Docker</strong> for containerization and{" "}
            <strong>Git</strong> for version control. Strong team collaborator
            with a focus on clean code, best practices, and performance
            optimization.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;