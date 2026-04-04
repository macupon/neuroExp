import { Link } from "react-router";
import { ExternalLink } from "lucide-react";
import {
  speechServices,
  homeTrainingText,
  collaborations,
} from "../text/servicesText";

export default function Services() {
  return (
    <div className="py-8">
      {/* Cover image */}
      <img
        src="/cover2_files/wood blocks.jpg"
        alt="Wooden building blocks"
        className="w-full max-h-72 object-cover rounded-xl"
      />

      {/* Title */}
      <section className="mt-8 flex flex-col md:flex-row gap-3 md:gap-8">
        <div className="relative shrink-0">
          <div className="absolute -z-10 bg-title-highlight dark:bg-title-highlight-dark w-12 h-16 md:w-16 md:h-20 lg:w-22 lg:h-26 rounded-sm" />
          <h1 className="p-3 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            OUR
            <br />
            SERVICES
          </h1>
        </div>
        <div>
          <p className="font-light text-base leading-7">
            On this page you can find all the services offered:{" "}
            <span className="bg-title-highlight dark:bg-title-highlight-dark font-medium">
              Individual Speech and Language Therapy
            </span>{" "}
            and{" "}
            <span className="bg-title-highlight dark:bg-title-highlight-dark font-medium">
              Multidisciplinary Treatment
            </span>{" "}
            in a team with other professionals.
          </p>
          <p className="mt-3 font-light text-base leading-7">
            Whatever language the child uses to communicate, the therapy will be
            adapted to the needs of the child and the family. Our interest is to
            enhance all the interactive, communicative and linguistic skills of
            the child.
          </p>
        </div>
      </section>

      {/* Speech & Language Services */}
      <section className="mt-12 lg:mt-20">
        <h2 className="font-bold text-2xl md:text-3xl">
          <span className="bg-title-highlight dark:bg-title-highlight-dark">Speech &amp; Language</span> Services
        </h2>
        <div className="mt-8 space-y-6">
          {speechServices.map((service) => (
            <div
              key={service.title}
              className="card-style p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-56 lg:w-64 h-48 md:h-52 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="card-title">
                    {service.title}
                  </h2>
                  {service.price ? (
                    <Link
                      to="/contactus"
                      aria-label={`${service.price} — contact us about ${service.title}`}
                      className="inline-flex flex-col items-center bg-indigo-200 hover:bg-indigo-300 dark:bg-indigo-200 dark:hover:bg-indigo-300 dark:text-gray-700 rounded-full px-5 py-2 text-sm font-semibold transition-colors shrink-0"
                    >
                      {service.price}
                      <span className="text-xs font-normal">Contact us</span>
                    </Link>
                  ) : (
                    <Link
                      to="/contactus"
                      aria-label={`Contact us about ${service.title}`}
                      className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white rounded-full px-5 py-2.5 text-sm font-semibold transition-colors shrink-0"
                    >
                      Contact Us
                    </Link>
                  )}
                </div>

                {service.steps && (
                  <ol className="mt-3 space-y-2 list-decimal list-inside">
                    {service.steps.map((step) => (
                      <li
                        key={step.label}
                        className="card-text"
                      >
                        <span className="font-semibold dark:font-extrabold dark:text-white">{step.label}:</span>{" "}
                        {step.text}
                      </li>
                    ))}
                  </ol>
                )}

                {service.includes && (
                  <ul className="mt-3 space-y-1.5 list-disc list-inside marker:text-sky-400">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="card-text"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {service.description && (
                  <p className="card-text">
                    {service.description}
                  </p>
                )}

                {service.cta && (
                  <p className="card-text italic">
                    {service.cta}
                  </p>
                )}

                {service.note && (
                  <p className="card-text text-xs">
                    {service.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hometraining Program */}
      <section className="mt-12 lg:mt-20">
        <h2 className="font-bold text-2xl md:text-3xl">
          <span className="bg-title-highlight dark:bg-title-highlight-dark">Hometraining</span> Program
        </h2>
        <div className="card-style mt-8">
          <p className="card-text">
            {homeTrainingText.intro}
          </p>
          <p className="card-text font-bold mt-3">
            {homeTrainingText.highlight}
          </p>
          <div className="mt-6">
            <iframe
              src="/HomeTraining.pdf"
              title="Hometraining Program PDF"
              className="w-full h-96 rounded-lg border border-gray-200 dark:border-gray-700"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="mt-12 lg:mt-20">
        <h2 className="font-bold text-2xl md:text-3xl">
          Our <span className="bg-title-highlight dark:bg-title-highlight-dark">Collaborations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {collaborations.map((collab) => (
            <div
              key={collab.name}
              className="card-style p-6"
            >
              <h2 className="card-title">{collab.name}</h2>
              <p className="card-text">
                {collab.contact}
              </p>
              {collab.email && (
                <a
                  href={`mailto:${collab.email}`}
                  className="inline-flex items-center gap-1 text-sm text-sky-600 mt-2 hover:underline"
                >
                  {collab.email}
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {collab.url && (
                <a
                  href={collab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${collab.name} website (opens in new tab)`}
                  className="inline-flex items-center gap-1 text-sm text-sky-600 mt-2 hover:underline"
                >
                  Visit website
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
