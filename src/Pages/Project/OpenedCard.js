import { OpenedCardContainer } from "./styles";

function OpenedCard({ openedCardKnowledge, isOpen, toggleOpen }) {
  const openedCardConfig = {
    open: {
      display: "initial",
      transition: {
        type: "spring",
        damping: 30,
        delay: 0.4,
      },
    },
    closed: {
      display: "none",
      transition: {
        delay: 1,
        type: "tween",
        damping: 30,
        delay: 0.4,
      },
    },
  };

  return (
    <OpenedCardContainer
      variants={openedCardConfig}
      animate={isOpen ? "open" : "closed"}
      onClick={() => toggleOpen}
    >
      <img className="opened-card_img" src={openedCardKnowledge.img} alt="" />

      <section className="opened-card-title-container">
        <h2 className="opened-card_title">{openedCardKnowledge.title}</h2>
      </section>
      <section className="opened-card-detail-container">
        <p className="opened_description">{openedCardKnowledge.details[0]}</p>
        <p className="opened_description">
          Used technologies: {openedCardKnowledge.details[1]}
        </p>
      </section>
    </OpenedCardContainer>
  );
}

export default OpenedCard;
