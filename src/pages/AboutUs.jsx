/* eslint-disable react/no-unescaped-entities */
import florImg from "../../public/florImg.jpeg";
import xafsaImg from "../../public/xafsaImg.jpeg.webp"
import arelyImg from "../../public/arelyImg.webp"
import paulaImg from "../../public/paulaImg.webp"

export default function AboutUs() {
  return (
    <div className="flex flex-wrap p-6 md:p-8  md:items-center lg:items-center">
      <div className="flex flex-col md:flex-row md:justify-center">
        <img
          src={florImg}
          alt="Florencia"
          className="md:w-3/6 md:h-[330px] md:mt-6 lg:mt-2 lg:h-auto lg:w-auto rounded-lg"
        />

        <div className="md:w-1/2">
          <h1 className="bg-sky-200 my-5 w-10 font-bold md:ml-8 lg:ml-12 text-3xl md:text-4xl lg:text-5xl">
            Hello everyone!
          </h1>
          <p className="mb-5 p-2 leading-8 md:leading-8 lg:leading-10 md:ml-8 text-xl md:text-2xl lg:text-3xl ">
            <b>I'm Florencia Guillén</b> and I'm a Speech and Language therapist, founder of
            NeuroExp and Total Communication Supervisor. On this page I will share with you a little bit about my
            story, my journey and my future projects.
            <br />
            <b>Follow me!</b>
          </p>
        </div>
      </div>

      <div className="bg-white/50 mt-8 rounded-xl p-8">
        <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
        Florencia Guillén
        </h2>
        <p className="mt-3 md:text-xl text-gray-700">Speech and Language Pathologist</p>
        <p className="mt-5 leading-7 md:leading-8 lg:leading-10 md:text-md text-gray-700">
          I was born in Vitoria, Spain but was raised in Argentina. There I
          studied <b>Speech Therapy</b> at the{" "}
          <b>
            <u>
              <a href="https://medi.usal.edu.ar/medi_carrera-fonoaudiologia">
                Universidad del Salvador{" "}
              </a>
            </u>
          </b>
          in Buenos Aires. After 5 years of study, I pursued a Postgraduate
          Degree of 3 semesters in Early Intervention and Stimulation.
          <br />
          I worked as a Speech and Language Pathologist in different
          Interdisciplinary Teams for children and adults. I had the privilege
          of working in several teams formed by very good professionals, who
          contributed immensely to my professional practice.
          <br />
          I worked in Foundations such as: <br />- Fundación Spine -{" "}
          <b>
            <u>
              <a href="https://www.spine.org.ar/ ">Spine</a>
            </u>
          </b>{" "}
          - Foundation dedicated to Treatment and Research of Rare Diseases.
          <br />- Alunco Foundation -{" "}
          <b>
            <u>
              <a href="https://alunco.org/">Alunco</a>
            </u>
          </b>{" "}
          - First Transdisciplinary Neurorehabilitation Center in Latin America.
          <br />
          I am currently living in Copenhagen, Denmark since March 2020. My
          mission in starting this business is to help more families and
          children with developmental, language and/or communication challenges
          receive the right kind of therapy that is strengths-based and focuses
          on meeting their specific needs.
          <br />
          Most of the families we work with have different cultural background, so I understand how difficult it is to adapt to such a different culture. Being expats, one of the most valuable things is to have contacts that can guide us on how to settle into the culture. Feel free to connect with us for advice on how to start the diagnostic evaluation process and what kind of services are available to you. It is important to know what rights are available to accompany your children and family members.
        </p>
      </div>

      <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
        <div className='flex flex-col md:flex-row items-top'>
          <img src={xafsaImg} alt="" className='md:h-[200px] lg:w-[1300px] lg:h-[410px] rounded-lg'/>
          <div className="md:ml-10">
            <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
            Xafsa Said
            </h2>
            <p className="mt-3 md:text-xl text-gray-700">Speech and Language Assistant</p>
            <p className='md:mt-5 leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
            My name is Xafsa Said and I'm 25 years old. I'm from Odense and currently live in Herlev. 
            Originally I'm from Somalia and therefore I speak Somali, Danish and English fluenty. 
            I'm currently pursuing my Master's degree in Audiologopædi at the University of Copenhagen and will finish December 2024. 
            <br/>
            I am deeply passionate about working with children who face challenges in speech, language and/or communication. With approximately one year of practical experience from PPR in Kolding, I have had the opportunity to work directly with this specific demographic. 
            Additionally, I have had the privilege of collaborating under the supervision of a recognized expert in the field of autism, Cecilia Brynskov. 
            In this capacity, I have contributed to the linguistic development and communication skills of a 5-year-old boy with autism. 
            I'm inspired by Mindsteps and am thrilled to be part of the NeuroExp team.
            </p>
          </div>
        </div>
      </div>

      <div className="ml-10 my-5">
        <h2 className="bg-sky-200 my-5 w-10 font-bold text-3xl md:text-4xl lg:text-5xl">
          Collaborations
        </h2>
        <p> 
          We collaborate with different professionals through the Hometraining Program.
        </p>
      </div>

      <div className='flex flex-col justify-center lg:flex-row  lg:max-w-10xl  gap-8  group mt-8'>
        <div className='flex flex-col justify-between bg-white/50 p-8 rounded-xl lg:w-1/2 shadow-xl'>
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <img src={arelyImg} alt="" className='md:w-[26vw] md:h-[18vw] md:my-5 rounded-xl' />
            </div>
            <h3 className='font-bold md:ml-0 text-xl lg:text-3xl text-gray-800 md:my-5'>Arely Alvarado</h3>
            <p className='leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
              Arely is a Psychologist originally from Honduras and currently living in Copenhagen for many years. 
              She has extensive experience in the Cognitive-Behavioral area under the ABA (Applied Behavior Analysis) frame as well as in trauma. 
              She founded her center in 2022 with the purpose of supporting families from a neuroaffirmative point of view. 
            </p>
          </div>
          <a href="arealv@neurodiversitet.net" className="text-lg">arealv@neurodiversitet.net</a>
        </div>

        <div className='flex flex-col justify-between bg-white/50 p-8 rounded-xl lg:w-1/2 shadow-xl'>
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <img src={paulaImg} alt="" className='md:w-[26vw] md:h-[18vw] md:my-5 rounded-xl' />
            </div>
              <h3 className='font-bold md:ml-0 text-xl lg:text-3xl text-gray-800 md:my-5'>Paula Martinez</h3>
              <p className='leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
                I was born in Buenos Aires, Argentina. As a Physical Education Teacher, specialized in the motor development and early stimulation, 
                I have dedicated my professional life to working with children and their growth.
                My knowledge is based on a continuous professional development and 24 years of experience working with children in motor 
                development and learning. I have developed projects for international NGOs, private and public organisations. 
                My international experience in the least developed areas has led me to see the difference as a gateway to the new and an 
                opportunity for development. Hence my concern to create a Center where the difference is not the point of view but a 
                point from which to look forward.
              </p>
            </div>
            <a href="https://ludika.dk/en/" className="text-lg mt-5">https://ludika.dk/en/</a>
        </div>
      </div>
    </div>
  );
}


      {/* <div className="bg-white/50 p-4 md:p-8 mt-8 rounded-xl">
        <h2 className="mt-5 mb-5 font-bold md:ml-0 lg:ml-12 text-2xl lg:text-3xl">
          My therapeutic approach
        </h2>
        <p className="mb-5 leading-7 md:leading-8 lg:leading-10 md:ml-0  md:text-md lg:ml-12  lg:text-xl">
          <b>
            Natural Language Acquisition (NLA): Echolalia to Self-Generated
            Language.
          </b>
          <br />
          <br />
          Analytic language development and gestalt language development are two
          ways of processing and developing language. Many people think of
          analytic language development as the "standard" method for developing
          language, using words as a basis for producing sentences.
          <br />
          <br />
          Children who use gestalt language development process language in
          whole sections rather than singular words...at first. Although we all
          use some echolalia, echolalia is the essential part of language
          development for gestalt processors. Both analytic language development
          and gestalt language development are normal and natural! (Ann Peters,
          1983)
          <br />
          <br />
          <b>For more information:</b>
          {/* <br/>
            - file:///C:/Users/maria/Downloads/GLP_Handout_English.Spanish_Final.pdf 
            <br/> 
          <br />-{" "}
          <a href="https://www.meaningfulspeech.com/">
            {" "}
            <u>Meaningful Speech &#8482;</u>
          </a>
          <b />
          <br />-{" "}
          <a href="https://www.northernspeech.com/nla-natural-language-acquisition/natural-language-acquisition-in-autism-echolalia-to-self-generated-language-level-1/">
            <u>Northern Speech Services</u>
          </a>
        </p>
        <p className="mt-8 mb-5 md:leading-7 md:ml-0  md:text-md lg:ml-12  lg:text-xl">
          <b>
            Theoretical Foundations of Sensory Integration: From Theory to
            Identification - Erna Blanche.
            <br />
            Inside Out -{" "}
            <a href="https://sensoryslp.mykajabi.com/">
              <u>Sensory Certificate Course for SLP</u>
            </a>
            .<br />
            <a href="https://learnplaythrive.com/aac/">
              <u>Authentic AAC</u>
            </a>{" "}
            - Implementing Communication Systems for Autonomy & Connection.
            <br />
            <a href="https://learnplaythrive.com/unmasc/">
              <u>Let’s UNMASC</u>
            </a>
            - Understanding the Needs and Motivations of Autistic Social
            Communication.
            <br />
          </b>
        </p>
      </div> */}