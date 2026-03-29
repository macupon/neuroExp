import {
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
  ExternalLink,
} from "lucide-react";
import { florencia, teamMembers, collaborators } from "../text/aboutUsText";

const iconMap = {
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
};

export default function AboutUs() {
  return (
    <div className="py-8">
      {/* Florencia intro */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={florencia.image}
          alt={florencia.name}
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shrink-0"
        />
        <div>
          <h1 className="bg-sky-200 dark:bg-sky-900 inline font-bold text-3xl md:text-4xl lg:text-5xl">
            Hello everyone!
          </h1>
          <p className="mt-4 font-light text-base leading-7">
            I&apos;m{" "}
            <span className="font-semibold text-lg text-cyan-600 dark:text-cyan-400">
              {florencia.name}
            </span>{" "}
            {florencia.intro}
          </p>
        </div>
      </section>

      {/* Florencia highlight cards */}
      <section className="mt-10">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100">
          {florencia.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">{florencia.role}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {florencia.highlights.map((h) => {
            const Icon = iconMap[h.icon];
            return (
              <div
                key={h.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5"
              >
                <Icon className="w-6 h-6 text-sky-500 mb-3" />
                <h3 className="font-semibold text-sm">{h.title}</h3>
                <p className="font-light text-sm leading-6 mt-2 text-gray-600 dark:text-gray-300">
                  {h.text}
                </p>
                {h.link && (
                  <a
                    href={h.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${h.link.label} (opens in new tab)`}
                    className="inline-flex items-center gap-1 text-xs text-sky-600 mt-2 hover:underline"
                  >
                    {h.link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {h.foundations && (
                  <ul className="mt-2 space-y-1">
                    {h.foundations.map((f) => (
                      <li key={f.url} className="text-sm text-gray-600 dark:text-gray-300 font-light">
                        <a
                          href={f.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${f.label} (opens in new tab)`}
                          className="inline-flex items-center gap-1 text-sky-600 font-medium hover:underline"
                        >
                          {f.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        {" "}&mdash; {f.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Team members */}
      <section className="mt-12">
        <h2 className="bg-sky-200 dark:bg-sky-900 inline font-bold text-2xl md:text-3xl">
          Our team
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="flex flex-col items-center shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mt-3">
                  {member.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{member.role}</p>
              </div>
              <div>
                {member.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-light text-sm leading-7 mt-3 text-gray-600 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborators */}
      <section className="mt-12">
        <h2 className="bg-sky-200 dark:bg-sky-900 inline font-bold text-2xl md:text-3xl">
          Collaborations
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
          We collaborate with different professionals through the Hometraining
          Program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {collaborators.map((collab) => (
            <div
              key={collab.name}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col items-center text-center"
            >
              <img
                src={collab.image}
                alt={collab.name}
                className="w-28 h-28 rounded-full object-cover"
              />
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mt-4">
                {collab.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{collab.role}</p>
              <p className="font-light text-sm leading-6 mt-3 text-gray-600 dark:text-gray-300">
                {collab.description}
              </p>
              <a
                href={collab.contact.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${collab.contact.label} (opens in new tab)`}
                className="inline-flex items-center gap-1 text-sm text-sky-600 mt-3 hover:underline"
              >
                {collab.contact.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
