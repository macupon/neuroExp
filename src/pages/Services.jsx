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
          <div className="absolute -z-10 bg-sky-200 w-12 h-16 md:w-16 md:h-20 lg:w-22 lg:h-26 rounded-sm" />
          <h1 className="p-3 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            OUR
            <br />
            SERVICES
          </h1>
        </div>
        <div>
          <p className="font-light text-base leading-7">
            On this page you can find all the services offered:{" "}
            <span className="bg-sky-200 font-medium">
              Individual Speech and Language Therapy
            </span>{" "}
            and{" "}
            <span className="bg-sky-200 font-medium">
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
          <span className="bg-sky-200">Speech &amp; Language</span> Services
        </h2>
        <div className="mt-8 space-y-6">
          {speechServices.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-56 lg:w-64 h-48 md:h-52 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-lg md:text-xl">
                    {service.title}
                  </h3>
                  {service.price ? (
                    <Link
                      to="/contactus"
                      className="inline-flex flex-col items-center bg-indigo-200 hover:bg-indigo-300 rounded-full px-5 py-2 text-sm font-semibold transition-colors shrink-0"
                    >
                      {service.price}
                      <span className="text-xs font-normal">Contact us</span>
                    </Link>
                  ) : (
                    <Link
                      to="/contactus"
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
                        className="font-light text-sm leading-6 text-gray-600"
                      >
                        <span className="font-semibold">{step.label}:</span>{" "}
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
                        className="font-light text-sm leading-6 text-gray-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {service.description && (
                  <p className="font-light text-sm leading-7 mt-3 text-gray-600">
                    {service.description}
                  </p>
                )}

                {service.cta && (
                  <p className="font-light text-sm leading-6 mt-2 text-gray-500 italic">
                    {service.cta}
                  </p>
                )}

                {service.note && (
                  <p className="font-light text-xs leading-5 mt-3 text-gray-400">
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
          <span className="bg-sky-200">Hometraining</span> Program
        </h2>
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="font-light text-sm leading-7 text-gray-600">
            {homeTrainingText.intro}
          </p>
          <p className="font-medium text-sm leading-7 mt-3 text-gray-700">
            {homeTrainingText.highlight}
          </p>
          <div className="mt-6">
            <iframe
              src="/HomeTraining.pdf"
              title="Hometraining Program PDF"
              className="w-full h-96 rounded-lg border border-gray-200"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="mt-12 lg:mt-20">
        <h2 className="font-bold text-2xl md:text-3xl">
          Our <span className="bg-sky-200">Collaborations</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {collaborations.map((collab) => (
            <div
              key={collab.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <h3 className="font-semibold text-base">{collab.name}</h3>
              <p className="font-light text-sm leading-6 mt-1 text-gray-600">
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
