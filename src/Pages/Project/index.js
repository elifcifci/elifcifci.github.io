import React from "react";
import Card from "./Card";
import { projectConstant } from "../../Constants/projectConstant";
import { Container, CardContainer } from "./style";

function Project({ selectedId }) {
  return (
    <Container>
      <h1 className="project-heading">My Projects</h1>
      <CardContainer>
        {projectConstant.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </CardContainer>
    </Container>
  );
}
export default Project;
