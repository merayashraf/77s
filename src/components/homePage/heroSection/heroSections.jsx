import Image from "next/image";

export default function HeroSections() {
return (
    <div className="bg-[#F5F7FA]">
    <div className="flex flex-col md:flex-row items-center h-[calc(100vh-120px)] justify-around w-[88%] mx-auto">
      <div className="w-[65%] h-full text-start flex flex-col justify-between gap-10 ">
        <div className=" flex flex-col justify-center pt-20 h-[calc(100%-80px)]">
          <h1 className="text-[52.62px] w-[64%] text-[#3D3D3F] relative font-bold">Access to talented and creative designers for original designs</h1>
        </div>
        <div className=" w-[90%] flex flex-row items-center h-[80px] relative py-3 bg-white rounded-lg shadow-md">
          <div className="w-[72%] ps-3">
            <select className=" w-full text-gray-700 bg-transparent border-none focus:outline-none">
              <option>Logo, Brand Identity, Packaging...</option>
            </select>
          </div>
          <div className="mx-4 border-l border-gray-300 h-10"></div>
            <div className="">
              <select className="text-gray-700 bg-transparent border-none focus:outline-none">
                <option>CONTEST </option>
              </select>
              <p className="text-sm text-gray-400">Project 1 to 1</p>
            </div>
            <button className="ml-5 px-8 py-7 bg-red-500 text-white font-semibold rounded-s-md shadow-md hover:bg-red-600 focus:outline-none">Start</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-[35%]">
          <Image src= "/asset/photo2.png" className="w-full" width={400} height={512} alt="Photo2"/>
        </div>
      </div>

      <div className="container flex mx-auto px-24 py-16">
        <div className="flex flex-row items-center mx-auto gap-5">
          <Image src= "/asset/photo3.png" width={45} className='w-[50px] h-[25px]' height={10} alt="Photo3"/>
          <h1 className="flex flex-row text-[#FF5F6B] text-[3vw]">IP PROTECTION FOR YOUR DESIGNS - 100% GUARANTEE</h1>
          <Image src= "/asset/photo4.png" width={35} height={10} alt="Photo4" className='w-[50px] h-[25px]'/>
        </div>
      </div>
  </div>
  )
}
