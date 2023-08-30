import React from "react";
import "./about.css";
import ME from "../../content/Profile_pic.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
            <div className="circle-spin" ></div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Certificate</h5>
              <small>3+ Working Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>5 completed projects</small>
            </article>
          </div>
          <p>
          Energetic and passionated college student, I have a background in 'Maulana Azad National Institute Of Technology Bhopal' and have proven interpersonal and communication skill.
<br/>I’m good in working in team in a fast-pased evironment.
<br/>I’m seeking the opportunity to use my skills to your 
organization

          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;