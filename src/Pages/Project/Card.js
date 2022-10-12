import React from "react";
<<<<<<< HEAD
import { CardItem, LinkItems } from "./styles";
=======
import { CardItem } from "./styles";
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c

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
<<<<<<< HEAD
        <LinkItems
          className="link-items preview-link-option"
          href={previewLink}
          target="_blank"
          isClickable={title === "My Personal Portfolio" ? false : true}
        >
          Preview
        </LinkItems>
        <LinkItems
=======
        <a
          className="link-items preview-link-option"
          href={previewLink}
          target="_blank"
        >
          Preview
        </a>
        <a
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
          className=" link-items code-link-option"
          href={codeLink}
          target="_blank"
        >
          Code
<<<<<<< HEAD
        </LinkItems>
        <span className="detail-option" id={id} onClick={handleClick}>
=======
        </a>
        <span
          className="link-items detail-link-option"
          id={id}
          onClick={handleClick}
        >
>>>>>>> 7378fcb2148bb13e9114f439773ace9924b29e7c
          Detail
        </span>
      </section>
    </CardItem>
  );
}

export default Card;
