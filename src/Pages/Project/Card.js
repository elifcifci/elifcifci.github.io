import {
  CardItem,
  CardContentContainer,
  CardContent,
  CardImageContainer,
  TitleContainer,
  ContentDetailOption,
  CardOpenLink,
} from "./style";

function Card({ id, title, imgLink, previewLink, codeLink }) {
  return (
    <CardItem>
      <CardContentContainer>
        <CardContent layoutId={`card-container-${id}`}>
          <CardImageContainer
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <CardOpenLink to={`/project-page/${id}`}>
              <img className="card-img" src={imgLink} alt="" />
            </CardOpenLink>
          </CardImageContainer>

          <TitleContainer layoutId={`title-container-${id}`}>
            <h2 className="card-title">{title}</h2>
          </TitleContainer>

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
            <ContentDetailOption id={id}>
              <CardOpenLink
                className="link-items detail-link-option"
                to={`/project-page/${id}`}
              >
                Detail
              </CardOpenLink>
            </ContentDetailOption>
          </section>
        </CardContent>
      </CardContentContainer>
    </CardItem>
  );
}

export default Card;
