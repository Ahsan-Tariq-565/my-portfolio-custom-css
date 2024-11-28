import React from "react";
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">

        {/*First Colum: Heading and Paragraph*/}
        <div data-aos="zoom-in-down" className="skils-left">
          <h2 className="skills-heading">Tecnologies I work with</h2>
          <p className="skills-text">
            I have a soild foundation in web development, specially in HTML,
            CSS, and TypeScript. I also have experience in React, Next.js, and
            Tailwind CSS to create dynamic and user-friendly application I stay
            updated on on the latest technologies to enhance my skills and
            contibute effectively to projects
          </p>
        </div>

        {/* Second Colum: skills*/}
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
              <h2 data-aos="zoom-in-down">TypeScrit</h2>
              <h2 data-aos="zoom-in-down" >React.js</h2>
              <h2 data-aos="zoom-in-down">Next.js</h2>
            </div>
            <div className="skills-space">
              <h2 data-aos="zoom-in-down">Tailwind</h2>
              <h2 data-aos="zoom-in-down" >CSS</h2>
              <h2 data-aos="zoom-in-down" >Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
