import React from "react";
import { StyledAboutPageContainer } from "./styles";

import { imagesConstants } from "../../Constants/aboutPageImagesConstants";
import { contactConstants } from "../../Constants/contactConstants";

const About = () => {
  return (
    <StyledAboutPageContainer id="about-page">
      <h1 className="page-heading">Who am I?</h1>

      <section className="about-page-imgs">
        {imagesConstants.map((image) => {
          return (
            <img
              key={image.className}
              className={`about-page_img ${image.className}`}
              src={image.src}
              alt={image.alt}
            />
          );
        })}
      </section>

      <section className="about-me-texts">
        <p className="about-me_text">
        I'm Elif Çiftçi, a Frontend Developer with 1 year and 3 months of experience at <a href="https://teklifimgelsin.com/" target="_blank">Teklifimgelsin</a>. 
         <br />
        Proficient in Next.js, HTML, CSS, JavaScript, and Ant Design with Sass. 
        <br />
        Additionally, I made web application projects using React.js, Framer Motion, and Styled Components.

        </p>
      </section>

      <section className="about-page-contacts">
        {contactConstants.map((contactConstant, index) => {
          return (
            <a
              key={index}
              className="about-page_link"
              href={contactConstant.contactLink}
              target="_blank"
            >
              <svg className="about-page-svg" viewBox={contactConstant.viewBox}>
                <path d={contactConstant.path} />
              </svg>
            </a>
          );
        })}
      </section>
    </StyledAboutPageContainer>
  );
};

export default About;
