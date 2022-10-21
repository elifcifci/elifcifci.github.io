import React from "react";
import { contactConstants } from "../../Constants/contactConstants";
import { StyledAboutPageContainer } from "./styles";

const About = () => {
  return (
    <StyledAboutPageContainer id="about-page">
      <h1 className="page-heading">Who am I?</h1>

      <section className="about-page-imgs">
        <img
          className="about-page_img about-page_flower-img"
          src="./img/flowerAndBook.jpg"
        />
        <img
          className="about-page_img about-page_opposite-flower-img"
          src="./img/oppositeFlowerAndBook.jpg"
        />
        <img
          className="about-page_img about-page_profile-img          "
          src="./img/profile.jpg"
        />
      </section>

      <section className="about-me-texts">
        <p className="about-me_text">
          I'm Elif Çiftçi. I have been developing myself in the front-end field
          for 1 year.
          <br />
          I made projects using HTML, CSS, JavaScript, React JS, framer motion
          and styled component technologies.
          <br />I continue to improve myself every day.
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
