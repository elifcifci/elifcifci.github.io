import React from "react";
import { CardItem, LinkItems } from "./styles";

function Card({ id, title, imgLink, previewLink, codeLink, handleClick }) {
  return (
    <CardItem id={`card-${id}`}>
      <section className="card-image-container">
        <img className="card_img" src={imgLink} alt="" />
      </section>

      <section className="title-container">
        <h2 className="card_title">{title}</h2>
      </section>

      <section className="project-links">
        <LinkItems
          className="link-items preview-link-option"
          href={previewLink}
          target="_blank"
          isClickable={title === "My Personal Portfolio" ? false : true}
        >
          Preview
        </LinkItems>
        <LinkItems
          className=" link-items code-link-option"
          href={codeLink}
          target="_blank"
        >
          Code
        </LinkItems>
        <span className="detail-option" id={id} onClick={handleClick}>
          Detail
        </span>
      </section>
    </CardItem>
  );
}

export default Card;
