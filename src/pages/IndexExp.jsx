/* eslint-disable react/no-unescaped-entities */
import logo from '../../public/exp-logo.png'
import { PlanetIcon }  from '../components/ui/icons/PlanetIcon'
import { PlaneIcon } from 'lucide-react'
import chatIcon from '../../public/chatIcon.png'
import img1 from '../../public/indexImg1.webp'
import img2 from '../../public/indexImg2.webp'
import Map from '../components/ui/Map'



export const IndexExp =()=> {
    return (
        <>
                <div className='flex h-48 lg:h-80 justify-evenly content-center bg-violet-50'>

                    <img src={logo} className='sm:h-auto md:h-auto' alt="logo"/>

                </div>


                <div className='flex flex-row justify-center text-center pt-16 mb-4'>
                    <h2 className='text-nowrap text-purple font-bold  mb-6 md:mb-5 md:mt-0  text-3xl md:text-4xl lg:text-5xl'>Child-led Play Therapy</h2>
                </div>

                <div className='flex flex-col lg:flex-row  lg:max-w-8xl mx-5 gap-8  group'>

                    <div className='bg-white/50 p-8 rounded-xl lg:w-1/3 shadow-xl'>
                        <div className='h-10 mx-auto'>
                            <PlanetIcon/>
                        </div>
                        <h3 className='text-md font-bold'>EXPLORE</h3>
                        <p className='font-light text-sm leading-7 my-3'>To explore the world around them, children use their senses 
                            (sight, touch, smell, hearing and taste) and their gross and fine motor skills.
                            In this way, they learn by manipulating objects and interacting with other people. 
                            From there, they develop intelligence and communication skills
                        </p>
                    </div>

                    <div className='bg-white/50 p-8 rounded-xl lg:w-1/3 shadow-xl'>
                        <div className='h-10 mx-auto'>
                            <PlaneIcon/>
                        </div>
                        <h3 className='text-md font-bold'>EXPERIENCE</h3>
                        <p className='font-light text-sm leading-7 my-3'>Every stimulus that enters through the senses is transformed into an experience.
                        Brain plasticity is the capacity of the brain structure to modify itself with learning, and depends fundamentally on two factors: 
                        age and personal experience.
                        It is important to consult a specialist if you suspect any alteration in your child's neurodevelopment. 
                        </p>
                    </div>

                    <div className='bg-white/50 p-8 rounded-xl lg:w-1/3 shadow-xl'>
                        <div className='h-10 mx-auto'>
                            <img src={chatIcon} className='w-8' alt="" />
                        </div>
                        <h3 className='text-md font-bold'>EXPRESS</h3>
                        <p className='font-light text-sm leading-7 my-3'>Language is the ability we use to communicate with others. 
                        We can express ourselves in different ways: it can be verbal, sign, body language.
                        With this in mind, we seek to stimulate language in those children who show some difficulty. 
                        </p>
                    </div>

                </div>




                <div className='text-center pt-16 mb-4'>
                    <h2 className='text-nowrap font-bold text-purple mb-6 md:mb-5 md:mt-0  text-4xl md:text-5xl lg:text-6xl'>Our Services</h2>
                </div>

                <div className='flex flex-col md:justify-evenly md:align-middle my-5 gap-4 md:gap-2 md:mx-0 md:flex-row group '>

                    <div className='flex flex-col md:flex-row justify-center items-center bg-white/50 p-8 rounded-full h-[80px] mx-4 md:mx-0 md:h-[150px] md:w-[150px] lg:w-[190px] lg:h-[190px] border-2 border-indigo-200 shadow-sm shadow-indigo-500/50'>
                        <h3 className='text-md font-bold text-center'>ASSESSMENT TO PARENTS</h3>
                    </div>

                    <img src={img1} alt="" className='invisible hidden md:block md:visible object-cover  w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] rounded-full'/>

                    <div className='flex justify-center items-center bg-white/50 p-8 rounded-full h-[80px] mx-4 md:mx-0 my-0 md:my-0 md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] border-2 border-indigo-200 shadow-sm shadow-indigo-500/50'>
                        <h3 className=' text-md font-bold text-center '>SPEECH, LANGUAGE AND COMMUNICATION THERAPY</h3>
                    </div>

                    <img src={img2} alt="" className='invisible hidden md:block md:visible object-cover w-[150px] h-[150px] lg:w-[190px] lg:h-[190px] rounded-full' />
                    
                    <div className='flex justify-center items-center bg-white/50 p-8 rounded-full h-[80px] mx-4 md:mx-0 my-0 md:my-0 md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] border-2 border-indigo-200 shadow-sm shadow-indigo-500/50'>
                        <h3 className='text-md font-bold text-center'>HOMETRAINING PROGRAM</h3>
                    </div>

                </div>





                <div className='text-center pt-16 mb-4'>
                    <h2 className='text-nowrap font-bold text-purple  mb-6 md:mb-5 md:mt-0  text-4xl md:text-5xl lg:text-6xl'>What people say</h2>
                </div>

                <div className='flex flex-col lg:flex-row  lg:max-w-8xl mx-5 gap-8  group'>

                    <div className='bg-white/50 p-8 rounded-xl lg:w-1/3 shadow-md'>
                        <h3 className='text-md font-bold'>MOM OF 4 YEAR OLD BOY - BILINGUAL</h3>
                        <p className='font-light text-sm leading-7 my-3'>"We are very happy with the results that our son 
                        has had during the year that Flor has been treating him. Flor always informed us of the steps to 
                        follow and advised us on how to continue the work at home. My kid speaks Spanish and Danish, and 
                        we noticed the improvement in both languages. It was great to find a therapist who works also with 
                        Spanish speaking families. Both verbal and interpersonal improvement in his day-to-day difficulties 
                        in the kindergarten. Our son loved going to therapy, and we can 100% recommend Flor as a 
                        professional." <br/> Gabriela & Christian
                        </p>
                    </div>

                    <div className='bg-white/50 p-8 rounded-xl lg:w-1/3 shadow-md'>
                        <h3 className='text-md font-bold'>MOM OF 5 YEAR OLD BOY - TRILINGUAL</h3>
                        <p className='font-light text-sm leading-7 my-3'>"For a long time we have been looking for a speech 
                        therapist in Denmark and have tried with a few professionals until we found Flor. We are a 
                        multicultural family, where our little boy is exposed to 3 languages. 
                        Flor has been able to advise us on how to continue the work at home, putting together a treatment 
                        plan so that we can help him to generalize all the learning. The advances were noticed instantly, 
                        and the most important thing: we saw how our son has more tools to socialize and to express himself. 
                        No matter how many languages you speak at home, do not hesitate to contact Flor because she can adapt 
                        according to your needs."<br/> Ana
                        </p>
                    </div>

                    <div className='bg-white/50 p-8 rounded-xl lg:w-1/3 shadow-md'>
                        <h3 className='text-md font-bold'>MOM OF 9 YEAR OLD BOY - BILINGUAL</h3>
                        <p className='font-light text-sm leading-7 my-3'>"My son has Down Syndrome with communication and 
                        read-writing delays.
                        Flor's professionalism has managed to keep my son's interest in learning and has increased.We have 
                        been having regular sessions for several months and we have seen great progress in him. My son likes 
                        her very much because the sessions with Flor are a lot of fun for him. We are very happy and 
                        satisfied to work with Flor."<br/> Paulina
                        </p>
                    </div>

                </div>




                <div className='bg-white/50 rounded-xl shadow-md mx-5  my-8'>
                    <Map/>
                </div>




        </>
    )
}