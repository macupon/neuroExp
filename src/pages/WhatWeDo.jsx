import { Brain, Sprout, Puzzle, Ear, BookOpen } from "lucide-react";
import { diagnosisCategories } from "../text/whatWeDoText";

const iconMap = { Brain, Sprout, Puzzle, Ear, BookOpen };

export default function WhatWeDo() {
  return (
    <div className="py-8">
      {/* Cover image */}
      <img
        src="/neuro-img-1.webp"
        alt="Children during a therapy session"
        className="w-full max-h-72 object-cover rounded-xl"
      />

      {/* Intro */}
      <section className="mt-8 flex flex-col md:flex-row gap-3 md:gap-8">
        <div className="relative shrink-0">
          <div className="absolute -z-10 bg-sky-200 w-12 h-16 md:w-16 md:h-20 lg:w-22 lg:h-26 rounded-sm" />
          <h1 className="p-3 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            OUR
            <br />
            PATIENTS
          </h1>
        </div>
        <div>
          <p className="font-light text-base leading-7">
            <span className="bg-sky-200 font-medium text-lg">
              Early Stimulation
            </span>{" "}
            or{" "}
            <span className="bg-sky-200 font-medium text-lg">
              Early Intervention
            </span>{" "}
            consists of providing the baby and the child with the best
            opportunities for physical, intellectual and social development so
            that their abilities and skills find their greatest potential in an
            environment full of stimuli.
          </p>
          <p className="mt-3 font-light text-base leading-7">
            On this page you will find all the services offered, both in Speech
            Therapy and Neurodevelopmental Therapy, individually and in groups.
            No matter what language the child uses to communicate, therapy will
            be tailored to the needs of the child and families.
          </p>
        </div>
      </section>

      {/* Diagnosis cards */}
      <section className="mt-12 lg:mt-20">
        <h2 className="font-bold text-2xl md:text-3xl">
          What types of <span className="bg-sky-200">diagnosis</span> do we
          work with?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {diagnosisCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={cat.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <Icon className="w-7 h-7 text-sky-500 mb-3" />
                <h3 className="font-semibold text-base">{cat.title}</h3>
                {cat.description && (
                  <p className="font-light text-sm leading-6 mt-1 text-gray-500">
                    {cat.description}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5 list-disc list-inside marker:text-sky-400">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-light text-sm leading-6 text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
