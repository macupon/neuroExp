/* eslint-disable react/no-unescaped-entities */
import {
  playTherapyCard,
  naturalLanguageCard,
  sensoryIntegrationCard,
  authenticAACCard,
} from "../text/ourApproachText";

// import Card from "@/components/ui/Card";
import Card from "../components/ui/Card";

export default function OurApproach() {
  const cards = [
    playTherapyCard,
    naturalLanguageCard,
    sensoryIntegrationCard,
    authenticAACCard,
  ];

  return (
    <>
      <div className="flex flex-wrap p-6 px-14 lg:px-24">
        <h2 className="ml-5 mt-12 lg:mt-24 flex justify-center font-bold text-3xl md:text-5xl">
          Our Approach
        </h2>

        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle ? card.subtitle : ""}
              description={card.description}
              srcImg={card.srcImg}
            />
          ))}
      </div>
    </>
  );
}
