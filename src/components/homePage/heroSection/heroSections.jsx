import Image from "next/image";

export default function HeroSections() {
return (
    <div className="bg-[#F5F7FA] w-screen overflow-hidden">
    <div className="flex flex-col-reverse md:flex-row items-center h-[calc(100vh-120px)] justify-around w-[97%] md:w-[88%] mx-auto">
      <div className="w-[97%] md:w-[65%] h-full text-start flex flex-col justify-between gap-10 ">
        <div className=" flex flex-col justify-center ps-7 pt-5 md:pt-20 h-[calc(100%-80px)]">
          <h1 className="text-[3.7vw] text-center md:text-start w-fit md:w-[72%] text-[#3D3D3F] relative font-bold">Access to talented and creative designers for original designs</h1>
        </div>
        <div className="w-[97%] md:w-[90%] flex flex-row items-center h-[50px] md:h-[80px] relative py-3 bg-white rounded-lg shadow-md">
          <div className="w-[72%] ps-3">
            <select className=" w-full text-gray-700 bg-transparent border-none focus:outline-none">
              <option>Logo, Brand Identity, Packaging...</option>
            </select>
          </div>
          <div className="mx-4 border-l border-gray-300 h-10"></div>
            <div className="w-[22%]">
              <select className="text-gray-700 bg-transparent border-none focus:outline-none">
                <option>CONTEST </option>
              </select>
              <p className="text-[7px] md:text-sm text-gray-400">Project 1 to 1</p>
            </div>
            <button className="ms-7 px-3 md:px-8 p-3 md:py-7 bg-[#FF5F6B] text-white font-semibold rounded-e-md shadow-md hover:bg-red-600 focus:outline-none">Start</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-[70%] md:w-[35%]">
          <Image src= "/assets/photo2.png" className="w-full" width={400} height={512} alt="Photo2"/>
        </div>
      </div>

      <div className="container flex mx-auto px-8 md:px-24 py-16">
        <div className="flex flex-row items-center mx-auto gap-5">
          <Image src= "/assets/photo3.png" width={45} className='w-[50px] h-[25px]' height={10} alt="Photo3"/>
          <h1 className="flex flex-row text-[#FF5F6B] text-center text-[20px] md:text-[2.5vw]">IP PROTECTION FOR YOUR DESIGNS - 100% GUARANTEE</h1>
          <Image src= "/assets/photo4.png" width={35} height={10} alt="Photo4" className='w-[50px] h-[25px]'/>
        </div>
      </div>
  </div>
  )
}
