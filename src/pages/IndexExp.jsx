import logo from '../../public/exp-logo.png'
import { PlanetIcon }  from '../components/ui/icons/PlanetIcon'
import { PlaneIcon } from 'lucide-react'
import chatIcon from '../../public/chatIcon.png'



export const IndexExp =()=> {
    return (
        <>
        <div className='flex h-48 justify-evenly content-center bg-violet-50'>

            <img src={logo} className='sm:h-auto md:h-auto' alt="logo"/>

        </div>
        <div className='text-center py-8'>
            <h2 className=' text-2xl mx-auto leading-normal'>What we Do</h2>
        </div>
        <div className='flex flex-col md:max-w-8xl mx-5 gap-8 md:flex-row lg:flex-row group'>

            <div className='bg-white/50 p-8 rounded-xl  md:w-1/3'>
                <div className='h-10 mx-auto'>
                    <PlanetIcon/>
                </div>
                <h4 className='text-md font-bold'>EXPLORE</h4>
                <p className='font-light text-sm leading-7 my-3'>To explore the world around them, children use their senses 
                    (sight, touch, smell, hearing and taste) and their gross and fine motor skills.
                    In this way, they learn by manipulating objects and interacting with other people. 
                    From there, they develop intelligence and communication skills
                </p>
            </div>

            <div className='bg-white/50 p-8 rounded-xl md:w-1/3'>
                <div className='h-10 mx-auto'>
                    <PlaneIcon/>
                </div>
                <h4 className='text-md font-bold'>EXPERIENCE</h4>
                <p className='font-light text-sm leading-7 my-3'>Every stimulus that enters through the senses is transformed into an experience.
                Brain plasticity is the capacity of the brain structure to modify itself with learning, and depends fundamentally on two factors: age and personal experience.
                It is important to consult a specialist if you suspect any alteration in your child's neurodevelopment. 
                </p>
            </div>

            <div className='bg-white/50 p-8 rounded-xl md:w-1/3'>
                <div className='h-10 mx-auto'>
                    <img src={chatIcon} className='w-8' alt="" />
                </div>
                <h4 className='text-md font-bold'>EXPRESS</h4>
                <p className='font-light text-sm leading-7 my-3'>Language is the ability we use to communicate with others. We can express ourselves in different ways: it can be verbal, sign, body language.
                With this in mind, we seek to stimulate language in those children who show some difficulty. 
                </p>
            </div>

        </div>

        </>
    )
}