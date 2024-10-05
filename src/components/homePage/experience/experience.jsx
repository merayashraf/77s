import Image from 'next/image'
import React from 'react'

export default function Experience() {
  return (
    <div className="w-full mb-[10%]">
          <h1 className="flex flex-row justify-center container my-[5%] text-[40px] text-[#FF5F6B]">How it works & Experience</h1>
          <div className="w-full flex flex-row items-center container">
            <div className="flex flex-col container">
              <h1 className="text-[32px] text-[#4747C7] mx-[18%] font-bold mt-[5%] mb-[3%]">Contest Steps</h1>
              <div className="flex flex-col mx-[10%]">
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">1- Submit a creative brief</h2>
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">2- Select a package and features</h2>
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">3- Invite more designers</h2>
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">4- Send feedback & rate</h2>
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">5- Pick up the finalists for the final round</h2>
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">6- Select the winner design</h2>
                <h2 className="text-[#545457] text-[18px] mx-[10%] my-[1.5%] ">7- File handover</h2>
                <h2 className="text-[#545457] text-[18px] mx-[11%] my-[0%] ">(copy transfer agreement - </h2>
                <h2 className="text-[#545457] text-[18px] mx-[11%] my-[0%] ">File review - Payment  release)</h2>
              </div>
            </div>
            <div className="container w-full flex flex-row justify-start">
              <Image src= "/asset/photo11.png" width={576} height={489} alt="Photo11"/>
            </div>
          </div>
        </div>
  )
}
