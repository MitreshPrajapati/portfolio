import React from "react";
import resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;
