/* eslint-disable react/no-unescaped-entities */
import {
  playTherapyCard,
  naturalLanguageCard,
  sensoryIntegrationCard,
  authenticAACCard,
} from "../text/ourApproachText";

import CardOurApproach from "@/components/ui/CardOurApproach.jsx";

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
        <h2
          className="
              bg-sky-200 text-left font-bold w-10 mb-4 text-4xl
              md:h-24 md:mr-16 md:mb-5 md:mt-0 md:w-12 md:text-5xl
              lg:ml-12 lg:mt-0 lg:text-5xl
        "
        >
          Our Approach
        </h2>

        {cards &&
          cards.map((card, index) => (
            <CardOurApproach
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
