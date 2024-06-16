/* eslint-disable react/no-unescaped-entities */
import caraDePapa from "../../public/approach1.jpg.webp"
import approach2 from "../../public/approach2.jpg.webp"
import senses from "../../public/senses.png.webp"

export default function OurApproach() {
    return (
    <>
    <div className="flex flex-wrap p-6 md:p-8  md:items-center lg:items-center">
        <div className="ml-10 my-14">
            <h2 className="flex justify-center font-bold text-3xl md:text-4xl lg:text-5xl">
                Our Approach        
            </h2>
        </div>

        <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
            <div className='flex flex-col md:flex-row items-top'>
            <img src={caraDePapa} alt="" className='md:h-[200px] lg:h-[300px] lg:w-[400px] rounded-lg'/>
            <div className="md:ml-10">
                <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                    Child-led playbased Therapy
                </h2>
                <p className='md:mt-5 leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
                Child-led therapy is all about following a child's interests and allowing them to lead in your sessions. 
                Rather than going into sessions with an adult-directed agenda, we enter the child’s world of play. 
                Children will gravitate toward what they enjoy or what their body needs (jumping, crashing, etc). 
                This means sessions are intrinsically motivating and meaningful for the child. This doesn’t mean that we have to use the 
                same activities/toys in the same way every session or that we can never introduce anything new. Child-led therapy allows us 
                to establish ourselves as a true play partner and form authentic relationships with the child that are built on trust and 
                connection. Trust is foundational for our language models to be accepted by children. 
                </p>
            </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
            <div className='flex flex-col md:flex-row items-top'>
            <img src={approach2} alt="" className='md:h-[200px] lg:h-[300px] lg:w-[400px] rounded-lg'/>
            <div className="md:ml-10">
                <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Natural Language Aquisition Framework
                </h2>
                <p className="mt-3 md:text-xl text-gray-700">Echolalia to Self-Generated Language</p>
                <p className='md:mt-5 leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
                Analytic language development and gestalt language development are two ways of processing and developing language. 
                Many people think of analytic language development as the "standard" method for developing language, using words as a basis for producing sentences. 
                Children who use gestalt language development process language in whole sections rather than singular words at first. 
                Both analytic language development and gestalt language development are normal and natural! (Ann Peters, 1983).
                </p>
            </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
            <div className='flex flex-col md:flex-row items-top'>
            <img src={senses} alt="" className='md:h-[200px] lg:h-[300px] lg:w-[400px] rounded-lg'/>
            <div className="md:ml-10">
                <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Sensory Integration
                </h2>
                <p className='md:mt-5 leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
                Sensory regulation serves as the cornerstone for successful interaction and communication. 
                When individuals are able to regulate their sensory experiences, they can better manage their attention, emotions, and responses to stimuli in their environment. 
                This regulation lays the foundation for effective communication by enabling individuals to focus, process information, and engage with others without being overwhelmed or distracted by sensory input.
                </p>
            </div>
            </div>
        </div>


        <div className='flex flex-col lg:flex-col bg-white/50 p-8 rounded-xl mt-8 shadow-md'>
            <div className='flex flex-col md:flex-row items-top'>
            <img src={caraDePapa} alt="" className='md:h-[200px] lg:h-[300px] rounded-lg'/>
            <div className="md:ml-10">
                <h2 className="font-bold md:ml-0 text-xl lg:text-5xl text-gray-800">
                Authentic AAC
                </h2>
                <p className='md:mt-5 leading-7 md:leading-6 lg:leading-10 md:text-md text-gray-700'>
                <b>AAC</b> stands for Augmentative and Alternative Communication and encompasses a wide range of tools and strategies designed 
                to support individuals with communication difficulties, ranging from speech-generating devices to picture communication 
                systems and sign language. For parents, embracing AAC often begins with understanding its potential to unlock their 
                child's ability to express thoughts, feelings, and desires. It's a journey of learning about different AAC options, 
                exploring how they can be integrated into daily life, and discovering the profound impact they can have on their child's 
                social interactions, academic progress, and overall quality of life. By embracing AAC, parents embark on a path of 
                advocacy and empowerment, ensuring that their child's voice is heard and valued, regardless of their verbal abilities.
                </p>
            </div>
            </div>
        </div>


      </div>
    </>
    );
}