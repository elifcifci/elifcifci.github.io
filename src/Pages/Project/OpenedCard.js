import { useEffect } from "react";
import { OpenedCardContainer } from "./styles";

function OpenedCard({
  openedCardKnowledge,
  isOpen,
  toggleOpen,
  selectedCardId,
}) {
  const selectedCard = document.getElementById(`card-${selectedCardId}`);

  //openedCard is  in the middle of project page. When it opened, the screen will scroll to the location of the openedCard.
  useEffect(() => {
    const innerHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const mainAndAboutPageTotalHeight = innerHeight * 2;
    const halfOfProjectPageHeight = (documentHeight - innerHeight * 2) / 2;
    const halfOfCardHeight = 400;
    const selectedCardLocation = selectedCard.offsetTop;

    //openedCard seems middle of project page, so the page should automatically scrolled to location of openedCard.
    // When the user close the openedCard the user should see the card that selected, so we should scroll the page first location again.
    if (isOpen) {
      window.scrollTo({
        top:
          mainAndAboutPageTotalHeight +
          halfOfProjectPageHeight -
          halfOfCardHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: mainAndAboutPageTotalHeight + selectedCardLocation - 100,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

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
