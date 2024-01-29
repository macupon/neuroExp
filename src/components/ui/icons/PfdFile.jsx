import HomeTraining from '../../../../public/HomeTraining.pdf'

export default function PfdFile() {
  return (
      <div>
        <iframe src={HomeTraining} frameborder="0" className='w-full h-full' allowFullScreen></iframe>
      </div>


  )
}
