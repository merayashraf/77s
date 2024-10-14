import Image from 'next/image'
import React from 'react'

export default function Hiring() {
  return (
    <div className="container gap-5 flex flex-col-reverse md:flex-col-reverse lg:flex-row lg:justify-evenly items-center sm:mx-[5%] lg:mx-auto mb-[10%]">
        <Image src= "/assets/photo12.png" width={576} height={489}  alt="Photo12"/>
        <div>
          <h1 className="text-[40px] ps-5 text-[#00C7C7]">Hiring Steps</h1>
            <div className=" flex gap-8  flex-col my-[9%] text-[#545457] pe-3 ps-5 text-[18px] w-fit">
                <h2 >1- Submit a creative brief</h2>
                <h2 >2- Invite a designer or send to your designer</h2>
                <h2 >3- Discuss project details/Timeline & Budget</h2>
                <h2 >4- Secure invoice</h2>
                <h2 >5- Discuss the design & Send feedback</h2>
                <h2 >6- Receive files & Release payment</h2>
            </div>
        </div>
    </div>
  )
}
