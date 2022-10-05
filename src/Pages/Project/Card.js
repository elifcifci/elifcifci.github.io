import React from "react";
import { CardItem } from "./styles";

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
        <a
          className="link-items preview-link-option"
          href={previewLink}
          target="_blank"
        >
          Preview
        </a>
        <a
          className=" link-items code-link-option"
          href={codeLink}
          target="_blank"
        >
          Code
        </a>
        <span
          className="link-items detail-link-option"
          id={id}
          onClick={handleClick}
        >
          Detail
        </span>
      </section>
    </CardItem>
  );
}

export default Card;
