// import picOne from '../../public/neuro-img-1.webp'
// import neuroEXP from '../../public/neuroexp_video.mp4'

export default function WhatWeDo() {
  return (
    <>
      <div className="flex flex-wrap p-6 md:p-8 md:items-center justify-center">
        <div>
          <video
            src="/neuroexp_video.mp4"
            controls
            loop
            className="rounded-lg h-64 md:h-80 lg:h-96"
          ></video>
        </div>

        <div className="flex flex-col mt-8 md:flex-row p-4 md:p-8 rounded-xl justify-between md:leading-10">
          <h1
            className="
              bg-sky-200 text-left font-bold w-10 mb-6 text-4xl
              md:h-24 md:mr-16 md:mb-5 md:mt-0 md:w-24 md:text-5xl
              lg:ml-12 lg:mt-0 lg:text-6xl"
          >
            OUR PATIENTS
          </h1>
          <section className="mb-5 leading-10 md:leading-8 lg:leading-10 md:ml-10 lg:ml-32 text-xl md:text-base lg:text-xl font-light">
            <p className="mb-4">
              <span className="bg-sky-200 text-2xl md:text-lg lg:text-2xl">
                Early Stimulation
              </span>{" "}
              or{" "}
              <span className="bg-sky-200 text-2xl md:text-lg lg:text-2xl">
                Early Intervention
              </span>{" "}
              consists of providing the baby and the child with the best
              opportunities for physical, intellectual and social development so
              that their abilities and skills find their greatest potential in
              an environment full of stimuli.
            </p>
            <p>
              On this page you will find all the services offered, both in
              Speech Therapy and Neurodevelopmental Therapy, individually and in
              groups. No matter what language the child uses to communicate,
              therapy will be tailored to the needs of the child and families.
            </p>
          </section>
        </div>

        <img src="/neuro-img-1.webp" alt="" className="rounded-lg" />

        <section className="bg-white/50 p-4 md:p-8 mt-8 rounded-xl">
          <h2 className="mt-5 mb-5 font-bold md:ml-0 lg:ml-12 text-2xl lg:text-3xl">
            What types of <span className="bg-sky-200">diagnosis</span> do we
            work with?
          </h2>
          <div className="mb-5 leading-7 md:leading-8 lg:leading-10 md:ml-0 lg:ml-12 text-xl md:text-base lg:text-xl">
            <ul className="list-disc list-inside leading-snug">
              Neurodevelopmental disorders:
              <li className="pl-8 font-light">
                Attention Deficit Hyperactivity Disorder (ADHD)
              </li>
              <li className="pl-8 font-light">Specific learning disorders</li>
              <li className="pl-8 font-light">Communication disorders</li>
              <li className="pl-8 font-light">
                Autism spectrum disorders (ASD)
              </li>
              <li className="pl-8 font-light">
                Developmental language disorders
              </li>
              <li className="pl-8 font-light">Language delay</li>
              <li className="pl-8 font-light">Specific language disorder</li>
            </ul>
            <ul className="mt-8 list-disc list-inside leading-snug">
              Disorders in which language development is delayed or impaired due
              to <span className="bg-sky-200">lack of stimulation</span> or{" "}
              <span className="bg-sky-200">
                adverse environmental conditions
              </span>
              :
              <li className="pl-8 font-light">
                Language disorders due to social deprivation.
              </li>
              <li className="pl-8 font-light">
                Language and speech difficulties associated with multicultural
                contexts and multilingualism.
              </li>
            </ul>
            <ul className="mt-8 list-disc list-inside leading-snug">
              Disorders in which development is delayed or impaired by severe{" "}
              <span className="bg-sky-200">cognitive deficits</span>:
              <li className="pl-8 font-light">
                Language disorders in intellectual disability.
              </li>
              <li className="pl-8 font-light">
                Language and communication disorders in autism and pervasive
                developmental disorders.
              </li>
            </ul>
            <ul className="mt-8 list-disc list-inside leading-snug">
              Disorders in which language development is impaired or impeded by{" "}
              <span className="bg-sky-200">sensory deficits</span>:
              <li className="pl-8 font-light">
                Prelocution and postlocution hearing loss and deafness.
              </li>
              <li className="pl-8 font-light">
                Hearing and language impairment in cochlear implants.
              </li>
            </ul>

            <ul className="mt-8 list-disc list-inside leading-snug">
              Disorders in which{" "}
              <span className="bg-sky-200">learning to read and write</span> is
              delayed or impaired:
              <li className="pl-8 font-light">Dyslexia</li>
              <li className="pl-8 font-light">Dysgraphia</li>
              <li className="pl-8 font-light">Reading delay</li>
              <li className="pl-8 font-light">Dyscalculia</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
