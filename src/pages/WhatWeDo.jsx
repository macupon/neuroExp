import picOne from '../../public/neuro-img-1.webp'
// import neuroEXP from '../../public/neuroEXP.mp4'

export default function WhatWeDo() {
  return (
    <>

    <div className="flex flex-wrap p-6 md:p-8 md:items-center ">
      {/* <div>
        <video src={neuroEXP} controls autoPlay loop className='rounded-lg'></video>
      </div> */}
      <div className='flex flex-col md:flex-row p-4 md:p-8 rounded-xl  flex justify-center  md:leading-10'>

        <h1 className='bg-sky-200 text-left font-bold w-10  md:h-24 md:mr-16  mb-6 md:mb-5   
                      md:mt-0 md:w-24 lg:ml-12 text-4xl md:text-5xl lg:text-6xl'>WHAT WE DO</h1>
        <p className='mb-5 leading-7 md:leading-8 lg:leading-10 md:ml-10 lg:ml-12 md:text-base lg:text-xl'>
          <b>Early Stimulation</b> or Early Intervention consists of providing the baby and the child with the best 
          opportunities for physical, intellectual and social development so that their abilities and skills find 
          their greatest potential in an environment full of stimuli.<br/>
          <br/>
          On this page you will find all the services offered, both in Speech Therapy and Neurodevelopmental Therapy, 
          individually and in groups. No matter what language the child uses to communicate, therapy will be tailored 
          to the needs of the child and families. 
        </p>

      </div>

      <img src={picOne} alt=""  className='rounded-lg'/>

      <div className='bg-white/50 p-4 md:p-8 mt-8 rounded-xl'>
        <h2 className='mt-5 mb-5 font-bold md:ml-0 lg:ml-12 text-2xl lg:text-3xl'>What types of diagnosis do we work with?</h2>
        <p className='mb-5 leading-7 md:leading-8 lg:leading-10 md:ml-0 lg:ml-12 md:text-base lg:text-xl'>
          - Neurodevelopmental Disorders <br/>
          - Attention Deficit Hyperactivity Disorder (ADHD).<br/>
          - Specific learning disorders.<br/>
          - Communication disorders.<br/>
          - Autism spectrum disorders (ASD).<br/>
          - Developmental language disorders<br/>
          - Language delay<br/>
          - Specific language disorder<br/>
          <br/>
          <b>Disorders in which language development is delayed or impaired due to lack of stimulation or adverse 
          environmental conditions:</b><br/>
          - Language disorders due to social deprivation.<br/>
          - Language and speech difficulties associated with multicultural contexts and multilingualism.<br/>
          - Disorders in which development is delayed or impaired by severe cognitive deficits:<br/>
          - Language disorders in intellectual disability.<br/>
          - Language and communication disorders in autism and pervasive developmental disorders.<br/>
          - Disorders in which language development is impaired or impeded by sensory deficits:<br/>
          - Prelocution and postlocution hearing loss and deafness.<br/>
          - Hearing and language impairment in cochlear implants.<br/>
          - Disorders in which learning to read and write is delayed or impaired:<br/>
          - Dyslexia<br/>
          - Dysgraphia<br/>
          - Reading delay<br/>
          - Dyscalculia<br/>
        </p>
      </div>
    </div>
    
    </>
  )
}
