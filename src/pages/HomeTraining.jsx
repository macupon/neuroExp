import PfdFile from "../components/ui/icons/PfdFile"

export default function HomeTraining() {
  return (
    <>

    <div className="flex flex-wrap p-6 md:p-8  md:items-center justify-center">

        <div className='flex flex-col md:flex-row p-4 md:p-8 rounded-xl  flex justify-center  md:leading-10'>
            <h1 className='bg-sky-200 text-left font-bold w-10  md:h-24 md:mr-16  mb-6 md:mb-5 md:mt-0 md:w-24 lg:ml-0 text-4xl md:text-5xl 
          lg:text-6xl'>HOME TRAINING PROGRAM</h1>
            <p className='mb-5 leading-7 md:leading-8 lg:leading-10 md:ml-28 lg:ml-40 md:text-base lg:text-xl'>
                If you have a child with special needs and you are a resident in Denmark, you can apply for a 
                service through the Kommune which is called Hjemmetræning Programme. The Hometraining Program 
                consists of a teamwork between professionals from different areas of development and families.
                <br/>
                <b>The protagonists of the program are the parents</b> where they seek to train different skills with 
                their child to improve their difficulties under the supervision of professionals such as Psychologist, 
                Occupational Therapist, Speech and Language Pathologist.
                <br/>
                <br/>
                <b>NeuroExp collaborates with:</b>
                <br/>
                Center for Neurodiversitet - CN: Arely Alvarado, cand. psych - arealv@neurodiversitet.net
                <br/>
                <u><a href="http://www.ludika.dk/en/about-ludika/behind-ludika/">Ludika Center</a></u>: Paula Martinez, Specialized in the motor development and early stimulation.
            </p>
        </div>

        <div className='h-[456px] flex justify-center'>
            <PfdFile/>
        </div>

    </div>
    </>
  )
}
