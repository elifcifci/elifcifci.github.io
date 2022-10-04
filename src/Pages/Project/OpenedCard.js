import { AnimatePresence } from "framer-motion";
import { projectConstant } from "../../Constants/projectConstant";
import { useParams } from "react-router-dom";
import ProjectPage from "./index";

import {
  DetailCloseContainer,
  OpenedCardContainer,
  OpenedCardContent,
  OpenedCardImageContainer,
  OpenedTitleContainer,
  Content,
} from "./style";

function OpenedCard() {
  let params = useParams();
  const imageHasLoaded = true;
  let selectedProject = projectConstant.filter((project) => {
    return project.id == params.id;
  });

  let { id, title, explanation, imgLink } = selectedProject[0];
  return (
    <>
      <ProjectPage selectedId={params.id} />
      {/* AnimatePresence allows components to animate out when they're removed from the React tree. */}
      <AnimatePresence>
        {params.id && imageHasLoaded && (
          <>
            <DetailCloseContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{ pointerEvents: "auto" }}
            >
              <a className="detail-close-link" to="/project-page" />
            </DetailCloseContainer>

            <OpenedCardContainer>
              <OpenedCardContent layoutId={`card-container-${id}`}>
                <OpenedCardImageContainer
                  layoutId={`card-image-container-${id}`}
                >
                  <img className="card-img" src={imgLink} alt="" />
                </OpenedCardImageContainer>

                <OpenedTitleContainer layoutId={`title-container-${id}`}>
                  <h2 className="opened-card-title">{title}</h2>
                </OpenedTitleContainer>

                <Content animate>
                  <p className="opened-card-description">
                    <span>{explanation}</span>
                  </p>
                </Content>
              </OpenedCardContent>
            </OpenedCardContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default OpenedCard;
