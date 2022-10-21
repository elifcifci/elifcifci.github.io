import React, { useState } from "react";
import { useCycle } from "framer-motion";

//Components
import Card from "./Card";
import OpenedCard from "./OpenedCard";
import BackDrop from "../../Components/Backdrop";

import { Container } from "./styles";
import { projectConstant } from "../../Constants/projectConstant";

function Project() {
  const [openedCardKnowledge, setOpenedCardKnowledge] = useState({
    title: "",
    img: "",
    details: "",
  });
  const [open, toggleOpen] = useCycle(false, true);
  const [selectedCardId, setSelectedCardId] = useState();

  const handleClick = (event) => {
    toggleOpen();
    createConstantForOpenCardComponent(event.target.id);
    setSelectedCardId(event.target.id);
  };

  const createConstantForOpenCardComponent = (eventId) => {
    projectConstant.map((constant) => {
      if (constant.id == eventId) {
        setOpenedCardKnowledge({
          title: constant.title,
          img: constant.imgLink,
          details: constant.details,
        });
      }
    });
  };

  const isOnClickPossible = () => {
    open && toggleOpen();
  };

  return (
    <Container id="project-page" onClick={isOnClickPossible}>
      <BackDrop isOpenBackDrop={open} isForProjectPage={true} />
      <h1 className="page-heading">My Projects</h1>
      <section className="card-container">
        {projectConstant.map((constant) => (
          <Card key={constant.id} {...constant} handleClick={handleClick} />
        ))}
      </section>

      {selectedCardId !== undefined && (
        <OpenedCard
          isOpen={open}
          toggleOpen={toggleOpen}
          openedCardKnowledge={openedCardKnowledge}
        />
      )}
    </Container>
  );
}
export default Project;
