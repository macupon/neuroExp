import React from 'react'

export default function WhatWeOffer() {
  return (
    <div className='bg-white/50 p-8 rounded-xl m-8'>
        <div className='flex flex-col  md:leading-10 lg:leading-10'>
            <h1 className='bg-sky-200 mt-5 mb-5 w-10 font-bold md:ml-0 lg:ml-0 text-3xl md:text-4xl lg:text-5xl'>WHAT WE OFFER</h1>
            <p className='mb-5 md:leading-7 md:ml-0  md:text-md lg:ml-0  lg:text-xl'>
            On this page you can find all the services offered, both <b>individual Speech and Language Therapy</b> as 
            well as <b>Multidisciplinary Treatment in a team with other professionals.</b> <br/>
            Whatever language the child uses to communicate, the therapy will be adapted to the needs of the 
            child and the family. Our interest is to enhance all the interactive, communicative and linguistic 
            skills of the child. 
            </p>
            <p className='mb-5 md:leading-7 md:ml-0  md:text-md lg:ml-0  lg:text-xl'>
                <b>NeuroExp collaborates with:</b>
                <br/>
                Center for Neurodiversitet - CN: Arely Alvarado, cand. psych - arealv@neurodiversitet.net
                <br/>
                <u><a href="http://www.ludika.dk/en/about-ludika/behind-ludika/">Ludika Center</a></u>: Paula Martinez, Specialized in the motor development and early stimulation.
            </p>
        </div>
    </div>
  )
}
