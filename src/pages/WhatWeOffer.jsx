import babyblocks from '../../public/cover2_files/babyblocks.webp'
import babybear from '../../public/cover2_files/babybear.webp'
import speechtep from '../../public/cover2_files/speechtep.webp'
import babydough from '../../public/cover2_files/babydough.webp'
import speechterap from '../../public/cover2_files/speechterap.webp'

import { ProfileForm } from '../components/demo/ProfileForm'


export default function WhatWeOffer() {
  return (
    <>
    <div className="flex flex-wrap p-6 md:p-8  md:items-center lg:items-center">
    
      <div className='flex flex-col md:flex-row p-4 md:p-8 rounded-xl  flex justify-center  md:leading-10'>
          <h1 className='bg-sky-200 text-left font-bold w-10  md:h-24 md:mr-16  mb-6 md:mb-5 md:mt-0 md:w-24 lg:ml-12 text-4xl md:text-5xl 
          lg:text-6xl'>WHAT WE OFFER</h1>
          <p className='mb-5 leading-7 md:leading-8 lg:leading-10 md:ml-10 lg:ml-12 md:text-base lg:text-xl'>
            On this page you can find all the services offered, both <b>individual Speech and Language Therapy</b> as 
            well as <b>Multidisciplinary Treatment in a team with other professionals.</b> <br/>
            Whatever language the child uses to communicate, the therapy will be adapted to the needs of the 
            child and the family. Our interest is to enhance all the interactive, communicative and linguistic 
            skills of the child. <br/>
            <br/>
            <b>NeuroExp collaborates with:</b>
              <br/>
              Center for Neurodiversitet - CN: Arely Alvarado, cand. psych - arealv@neurodiversitet.net
              <br/>
              <u><a href="http://www.ludika.dk/en/about-ludika/behind-ludika/">Ludika Center</a></u>: Paula Martinez, 
              Specialized in the motor development and early stimulation.
          </p>
      </div>

      <img src={babyblocks} alt="" className='m-2 rounded-xl lg:w-[100%] lg:h-[400px]'/>

      <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
        <h2 className='my-2 font-bold md:ml-0 text-2xl lg:text-3xl'> Neurodevelopmental evaluation</h2>
        <div className='flex flex-col md:flex-row md:align-middle my-8'>
          <img src={babybear} alt="" className='md:w-[20vw] md:h-[150px] lg:w-[30vw] lg:h-[200px] md:mt-2 rounded-lg'/>
            <p className='my-5 md:my-0 leading-7 md:leading-6 lg:leading-10 md:ml-6 md:text-base lg:text-xl'>
              The evaluation process begins with an interview with the family about the child's development and 
              then the general and specific evaluations will be performed.
              1.Admission interview: You will get a questionnaire on the child's neurodevelopment to be completed.
              If needed, I'll be able to deepen specific aspects that are of interest for the diagnosis.
              2.Evaluation: The child will be evaluated during a one-hour session in the office.
              Reports are not included in the price of the evaluation. Reports will be charged as an hourly session.
            </p>
        </div>
        <div className='flex justify-end mr-10'>
          <button className='mt-[-20px] rounded-full bg-indigo-200 w-[110px] h-[60px]'>1500 Dkk</button>
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
        <h2 className='my-2 font-bold md:ml-0 text-2xl lg:text-3xl'> Speech and Language Evaluation</h2>
        <div className='flex flex-col md:flex-row my-8'>
          <img src={babydough} alt="" className='md:w-[20vw] md:h-[150px] lg:w-[30vw] lg:h-[200px] md:mt-2 rounded-lg'/>
            <p className='my-5 md:my-0 leading-7 md:leading-6 lg:leading-10 md:ml-6 md:text-base lg:text-xl'>
              1. Admission interview: You will be given a questionnaire about the child's speech and language
              development to be completed. 
              2. Evaluation: I will evaluate taking into account the chronological age of the child. There will be 
              considered all aspects related to communication (neurolinguistic, articulatory, respiratory and phonatory).
              Reports are not included in the price of the evaluation. Reports will be charged as an hourly session.
            </p>
        </div>
        <div className='flex justify-end mr-10'>
          <button className='mt-[-20px] rounded-full bg-indigo-200 w-[110px] h-[60px]'>1500 Dkk</button>
        </div>
      </div>

      <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
        <h2 className='my-2 font-bold md:ml-0  text-2xl lg:text-3xl'> Initial Consultation </h2>
        <div className='flex flex-col md:flex-row my-8'>
          <img src={speechtep} alt="" className='md:w-[20vw] md:h-[150px] lg:w-[30vw] lg:h-[200px] md:mt-2 rounded-lg'/>
            <p className='my-5 md:my-0 leading-7 md:leading-6 lg:leading-10 md:ml-6 md:text-base lg:text-xl'>
              This service is for those families who are interested in a professional consultation and get suggestions 
              that can help with their child's speech and language development. 
              This service includes:    
              Initial phone call for 20 minutes: where the case is superficially disclosed.
              Language development and general development questionnaire to be completed by parents.
              One hour face-to-face session where the professional will evaluate the child's communication, language 
              and learning skills.
              Personalized handbook with guidelines and activities that parents can carry out at home to promote 
              the child's linguistic development.
            </p>
        </div>
        <div className='flex justify-end mr-10'>
          <button className='mt-[-20px] rounded-full bg-indigo-200 w-[110px] h-[60px]'>1000 Dkk</button>
        </div>
      </div>

      <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
        <h2 className='my-2 font-bold md:ml-0 text-2xl lg:text-3xl'> Language Therapy</h2>
        <div className='flex flex-col md:flex-row my-8'>
          <img src={speechterap} alt="" className='md:w-[20vw] md:h-[150px] lg:w-[30vw] lg:h-[200px] md:mt-2 rounded-lg'/>
            <p className='my-5 md:my-0 leading-7 md:leading-6 lg:leading-10 md:ml-6 md:text-base lg:text-xl'>
              TWe offer one hour session in which all aspects of communication through play will be explored. 
              It is important to emphasize that all sessions will be play based approach since there are many more 
              possibilities for the child to incorporate the learning through play than through formal and structured 
              intervention. 
              At the end of the session, parents will be advised on how to continue with the activities at home, 
              trying to generalize all the learning in the different environments where the child develops.
            </p>
        </div>
        <div className='flex justify-end mr-10'>
          <button className='mt-[-20px] rounded-full bg-indigo-200 w-[110px] h-[60px]'>650 Dkk</button>
        </div>
      </div>
        <div className='bg-white/50 p-4 md:p-8 mt-8 rounded-xl w-[100%]'>
        <ProfileForm/>
      </div>
    </div>
  </>
  )
}
