
export default function UserDetail() {
  return (
    <>
    
    <div className="flex flex-col bg-white/50 p-8 mx-10 lg:p-14 rounded-xl mt-10 mb-8 shadow-md">
      <div className="flex flex-row items-top">
        <img
          src="../../public/user-profile.png"
          alt="user photo"
          className="w-[20vw] h-[20vw] md:w-[20vw] md:h-[20vw] lg:w-[20vw] lg:h-[20vw] object-cover cursor-pointer mr-10">
        </img>
        <div className="flex flex-col">
          <h1>Àlex Morató</h1>
          <p>
            last visit: 21/10/2024
          </p>
          <p>
            number of sessions: 12
          </p>
        </div>

      </div>
    </div>
  
    </>
  )
}