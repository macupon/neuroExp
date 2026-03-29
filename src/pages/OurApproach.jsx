import {
  playTherapyCard,
  naturalLanguageCard,
  sensoryIntegrationCard,
  authenticAACCard,
} from "../text/ourApproachText";

const cards = [
  playTherapyCard,
  naturalLanguageCard,
  sensoryIntegrationCard,
  authenticAACCard,
];

export default function OurApproach() {
  return (
    <div className="py-8">
      {/* Cover image */}
      <img
        src="/cover2_files/babyblocks.webp"
        alt="Child during a therapy session"
        className="w-full max-h-72 object-cover rounded-xl"
      />

      {/* Title with blue square */}
      <section className="mt-8 flex flex-col md:flex-row gap-3 md:gap-8">
        <div className="relative shrink-0">
          <div className="absolute -z-10 bg-sky-200 dark:bg-sky-900 w-12 h-16 md:w-16 md:h-20 lg:w-22 lg:h-26 rounded-sm" />
          <h1 className="p-3 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            OUR
            <br />
            APPROACH
          </h1>
        </div>
        <p className="font-light text-base leading-7 md:pt-3">
          At NeuroExp, we combine{" "}
          <span className="bg-sky-200 dark:bg-sky-900">evidence-based</span> methods with a{" "}
          <span className="bg-sky-200 dark:bg-sky-900">child-led, play-based</span> philosophy.
          Every session is tailored to the unique needs of each child and family.
        </p>
      </section>

      {/* Approach cards */}
      <section className="mt-10 lg:mt-16 space-y-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            <img
              src={`/${card.srcImg}`}
              alt={card.title}
              className="w-full md:w-64 lg:w-80 h-48 md:h-52 rounded-xl object-cover shrink-0"
            />
            <div>
              <h2 className="font-semibold text-lg md:text-xl">{card.title}</h2>
              {card.subtitle && (
                <p className="text-gray-500 dark:text-gray-400 text-sm italic mt-0.5">
                  {card.subtitle}
                </p>
              )}
              <p className="font-light text-sm leading-7 mt-3 text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
