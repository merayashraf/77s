import Image from 'next/image'
import React from 'react'

export default function Experience() {
  return (
    <div className="w-full mb-[10%]">
      <h1 className="flex flex-row justify-center container ps-5 my-[5%] text-[32px] md:text-[40px] text-[#FF5F6B]">
        How it works & Experience
      </h1>
      <div className="w-full flex gap-6 lg:gap-0 flex-col md:flex-col lg:flex-row items-center container">
        <div className="flex flex-col container">
          <h1 className="text-[24px] md:text-[32px] text-[#4747C7] mx-[10%] md:mx-[18%] font-bold mt-[5%] mb-[3%]">
            Contest Steps
          </h1>
          <div className="flex flex-col text-[16px] md:text-[18px] mx-[12%] md:mx-[19%]">
            <h2 className="text-[#545457] my-[1.5%]">1- Submit a creative brief</h2>
            <h2 className="text-[#545457] my-[1.5%]">2- Select a package and features</h2>
            <h2 className="text-[#545457] my-[1.5%]">3- Invite more designers</h2>
            <h2 className="text-[#545457] my-[1.5%]">4- Send feedback & rate</h2>
            <h2 className="text-[#545457] my-[1.5%]">5- Pick up the finalists for the final round</h2>
            <h2 className="text-[#545457] my-[1.5%]">6- Select the winner design</h2>
            <h2 className="text-[#545457] my-[1.5%]">7- File handover</h2>
            <div className="text-[16px] md:text-[18px] mx-[5%] my-[0%]">
              <h2 className="text-[#545457]">(copy transfer agreement - </h2>
              <h2 className="text-[#545457]">File review - Payment release)</h2>
            </div>
          </div>
        </div>
        <div className="container w-full flex justify-center sm:my-9 md:justify-start">
          <Image 
            src="/assets/photo11.png" width={576} height={489} alt="Photo11" 
            className="max-w-[80%] h-auto mt-[10px] sm:mx-32 md:mt-[10px] md:w-[480px] md:h-[409px]" 
          />
        </div>
      </div>
    </div>
  );
}
