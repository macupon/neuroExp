/* eslint-disable react/no-unescaped-entities */
// import babyblocks from "../../public/cover2_files/babyblocks.webp";
// import babybear from "../../public/cover2_files/babybear.webp";
// import speechtep from "../../public/cover2_files/speechtep.webp";
// import babydough from "../../public/cover2_files/babydough.webp";
// import speechterap from "../../public/cover2_files/speechterap.webp";
import { useNavigate } from "react-router-dom";

export default function WhatWeOffer() {
  const navigate = useNavigate();

  const navigateToContactUs = () => {
    navigate("/contactus"); // Replace '/about' with the route you want to navigate to
  };

  return (
    <>
      <div className="flex flex-wrap p-6 md:p-8  md:items-center">
        <div className="flex flex-col md:flex-row p-4 md:p-8 rounded-xl justify-center  md:leading-10">
          <h1 className="bg-sky-200 text-left font-bold w-10  md:h-24 md:mr-16  mb-6 md:mb-5 md:mt-0 md:w-24 md:ml-12 text-4xl md:text-6xl">
            WHAT WE OFFER
          </h1>
          <div className="mb-5 leading-7 md:leading-2 md:ml-20">
            <p>
              On this page you can find all the services offered:
              <ul className="list-disc list-inside pl-5">
                <li>
                  <b>Individual Speech and Language Therapy</b>
                </li>
                <li>
                  <b>
                    Multidisciplinary Treatment in a team with other
                    professionals.
                  </b>
                </li>
              </ul>
            </p>

            <p className="mt-4 mb-4">
              Whatever language the child uses to communicate, the therapy will
              be adapted to the needs of the child and the family. Our interest
              is to enhance all the interactive, communicative and linguistic
              skills of the child.
            </p>

            <h4 className="mb-0 ">NeuroExp collaborates with:</h4>
            <ul className="list-disc list-inside pl-5 mt-0">
              <li>
                Center for Neurodiversitet - CN: Arely Alvarado, cand. psych -
                arealv@neurodiversitet.net
              </li>
              <li>
                <u>
                  <a href="http://www.ludika.dk/en/about-ludika/behind-ludika/">
                    Ludika Center
                  </a>
                </u>
                : Paula Martinez, Specialized in the motor development and early
                stimulation.
              </li>
            </ul>
          </div>
        </div>

        <img
          src="/cover2_files/babyblocks.webp"
          alt=""
          className="m-2 rounded-xl md:w-[100%] md:h-[400px]"
        />

        <div className="flex flex-col md:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md">
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-top">
            <img
              src="/cover2_files/babybear.webp"
              alt=""
              className="h-[300px] w-[300px] md:mt-2 rounded-lg"
            />
            <div className="md:ml-10">
              <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Neurodevelopmental evaluation
              </h2>
              <p className="mt-3 mb-4">
                The evaluation process begins with an interview with the family
                about the child's development and then the general and specific
                evaluations will be performed.
              </p>
              <ol className="list-decimal list-inside md:mt-5 space-y-4 leading-2 md:text-md text-gray-700 pl-5">
                <li>
                  <b>Admission interview:</b> You will get a questionnaire on
                  the child's neurodevelopment to be completed. If needed, I'll
                  be able to deepen specific aspects that are of interest for
                  the diagnosis.
                </li>
                <li>
                  <b>Evaluation:</b> The child will be evaluated during a
                  one-hour session in the office.
                </li>
              </ol>
              <p className="mt-6">
                Reports are not included in the price of the evaluation. Reports
                will be charged as an hourly session.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-5 md:flex md:justify-end mr-10">
            <button className="flex flex-col mt-[-20px] rounded-full bg-indigo-200 w-[120px] h-[60px] justify-center align-center items-center">
              1800 Dkk
              <span className="text-xs">Contact us</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md">
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-top">
            <img
              src="/cover2_files/babydough.webp"
              alt=""
              className="h-[300px] w-[300px] md:mt-2 rounded-lg"
            />
            <div className="md:ml-10">
              <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Speech and Language Evaluation
              </h2>
              <p className="md:mt-5 leading-7 md:leading-7 md:text-md text-gray-700">
                <ol className="list-decimal list-inside md:mt-5 space-y-4 leading-2 md:text-md text-gray-700 pl-5 md:w-3/4">
                  <li>
                    <b>Admission interview:</b> You will be given a
                    questionnaire about the child's speech and language
                    development to be completed.
                  </li>
                  <li>
                    <b>Evaluation:</b> I will evaluate taking into account the
                    chronological age of the child. There will be considered all
                    aspects related to communication (neurolinguistic,
                    articulatory, respiratory and phonatory).
                  </li>
                </ol>
                Reports are not included in the price of the evaluation. Reports
                will be charged as an hourly session.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-5 md:flex md:justify-end mr-10">
            <button className="flex flex-col mt-[-20px] rounded-full bg-indigo-200 w-[120px] h-[60px] justify-center align-center items-center">
              1800 Dkk
              <span className="text-xs">Contact us</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md">
          <div className="mt-4 md:mt-0  flex flex-col md:flex-row items-top">
            <img
              src="/cover2_files/speechtep.webp"
              alt=""
              className="h-[300px] w-[300px] md:mt-2 rounded-lg"
            />
            <div className="md:ml-10">
              <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Initial Consultation
              </h2>
              <p className="md:mt-5 leading-7 md:leading-7 md:text-md text-gray-700">
                This service is for those families who are interested in a
                professional consultation and get suggestions that can help with
                their child's speech and language development. This service
                includes:
                <ul className="list-disc list-inside pl-5 mt-2 md:w-3/4">
                  <li>
                    Initial phone call for 20 minutes: where the case is
                    superficially disclosed.
                  </li>
                  <li>
                    Language development and general development questionnaire
                    to be completed by parents.
                  </li>
                  <li>
                    One hour face-to-face session where the professional will
                    evaluate the child's communication, language and learning
                    skills.
                  </li>
                  <li>
                    Personalized handbook with guidelines and activities that
                    parents can carry out at home to promote the child's
                    linguistic development.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-5 md:flex md:justify-end mr-10">
            <button
              className="flex flex-col mt-[-20px] rounded-full bg-indigo-200 w-[120px] h-[60px] justify-center align-center items-center"
              onClick={navigateToContactUs}
            >
              1200 Dkk
              <span className="text-xs">Contact us</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md">
          <div className="flex flex-col md:flex-row items-top">
            <img
              src="/cover2_files/speechterap.webp"
              alt=""
              className="h-[300px] w-[300px] md:mt-2 rounded-lg"
            />
            <div className="mt-4 md:mt-0 md:ml-10">
              <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Language Therapy
              </h2>
              <p className="md:mt-5 leading-7 md:leading-6 md:text-md text-gray-700 md:w-3/4">
                We offer one hour session in which all aspects of communication
                through play will be explored. At the end of the session,
                parents will be advised on how to continue with the activities
                at home, trying to generalize all the learning in the different
                environments where the child develops.
              </p>
              <p className="mt-4 md:w-3/4 text-gray-700">
                Write to us privately detailing what you are looking for and we will send you a tailored budget!
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-5 md:flex md:justify-end mr-10">
            <button
              className="mt-[-20px] rounded-full bg-indigo-200 w-[120px] h-[60px] align-center items-center"
              onClick={navigateToContactUs}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
