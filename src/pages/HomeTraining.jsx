import PfdFile from "../components/ui/icons/PfdFile"

export default function HomeTraining() {
  return (
    <>

    <div className='bg-white/50 p-8 rounded-xl m-8'>
        <div className='flex flex-col  md:leading-10 lg:leading-10'>
            <h1 className='bg-sky-200 mt-5 mb-5 w-10 font-bold md:ml-0 lg:ml-0 text-3xl md:text-4xl lg:text-5xl'>HOME TRAINING PROGRAM</h1>
            <p className='mb-5 md:leading-7 md:ml-0  md:text-md lg:ml-0  lg:text-xl'>
                If you have a child with special needs and you are a resident in Denmark, you can apply for a 
                service through the Kommune which is called Hjemmetræning Programme. The Hometraining Program 
                consists of a teamwork between professionals from different areas of development and families. 
                The protagonists of the program are the parents where they seek to train different skills with 
                their child to improve their difficulties under the supervision of professionals such as Psychologist, 
                Occupational Therapist, Speech and Language Pathologist.
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
    <div className='bg-white/50 p-8 m-8 rounded-xl h-[600px] flex justify-center'>
        <PfdFile/>
    </div>
    </>
  )
}
