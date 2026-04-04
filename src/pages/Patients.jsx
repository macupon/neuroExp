import { Brain, Sprout, Puzzle, Ear, BookOpen } from "lucide-react";
import { diagnosisCategories } from "../text/patients";

const iconMap = { Brain, Sprout, Puzzle, Ear, BookOpen };

export default function Patients() {
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
        <div className="heading-h1-wrap shrink-0">
          <div className="heading-h1-accent" />
          <h1 className="heading-h1">
            OUR
            <br />
            PATIENTS
          </h1>
        </div>
        <div>
          <p className="font-light text-base leading-7">
            <span className="bg-title-highlight dark:bg-title-highlight-dark font-medium text-lg">
              Early Stimulation
            </span>{" "}
            or{" "}
            <span className="bg-title-highlight dark:bg-title-highlight-dark font-medium text-lg">
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
        <h2 className="heading-h2">
          What types of <span className="bg-title-highlight dark:bg-title-highlight-dark">diagnosis</span> do we
          work with?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {diagnosisCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={cat.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6"
              >
                <Icon className="w-7 h-7 text-content-icon mb-3" />
                <h3 className="card-title">{cat.title}</h3>
                {cat.description && (
                  <p className="card-text">
                    {cat.description}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5 list-disc list-inside marker:text-sky-400">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="card-text"
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
