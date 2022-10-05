import React from "react";
import Card from "./Card";
import { projectConstant } from "../../Constants/projectConstant";
import { Container, CardContainer } from "./style";

function Project({ selectedId }) {
  return (
    <Container id="project-page">
      <h1 className="page-heading">My Projects</h1>
      <CardContainer>
        {projectConstant.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </CardContainer>
    </Container>
  );
}
export default Project;
