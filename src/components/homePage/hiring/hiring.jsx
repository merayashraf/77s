import Image from 'next/image'
import React from 'react'

export default function Hiring() {
  return (
    <div className="container flex flex-col md:flex-row justify-evenly items-center mx-auto mb-[10%]">
        <Image src= "/asset/photo12.png" width={576} height={489} alt="Photo12"/>
        <div>
        <h1 className="text-[40px] text-[#00C7C7]">Hiring Steps</h1>
            <div className=" flex gap-8 flex-col my-[9%] text-[#545457] w-fit">
                <h2 className=" text-[18px] px-3 w-full">1- Submit a creative brief</h2>
                <h2 className=" text-[18px] px-3 w-full ">2- Invite a designer or send to your designer</h2>
                <h2 className=" text-[18px] px-3 w-full ">3- Discuss project details/Timeline & Budget</h2>
                <h2 className=" text-[18px] px-3 w-full ">4- Secure invoice</h2>
                <h2 className=" text-[18px] px-3 w-full ">5- Discuss the design & Send feedback</h2>
                <h2 className=" text-[18px] px-3 w-full ">6- Receive files & Release payment</h2>
            </div>
        </div>
    </div>
  )
}
