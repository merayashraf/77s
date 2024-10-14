import Image from 'next/image'
import React from 'react'

export default function Categories() {
  return (
    <div className="flex flex-col my-14">
    <h1 className=" text-[#707070] px-3 lg:px-24 text-[28px]">Categories:</h1>
    <div className="flex flex-row flex-wrap gap-1 lg:gap-10 w-[95%] lg:w-[60%] mx-auto justify-between" >
      <Image src= "/assets/photo5.png" width={180} height={200} alt="Photo5"/>
      <Image src= "/assets/photo6.png" width={180} height={200} alt="Photo6"/>
      <Image src= "/assets/photo7.png" width={180} height={200} alt="Photo7"/>
      <Image src= "/assets/photo8.png" width={180} height={200} alt="Photo8"/>
      <Image src= "/assets/photo9.png" width={180} height={200} alt="Photo9"/>
      <Image src= "/assets/photo10.png" width={180} height={200} alt="Photo10"/>
    </div>
  </div>
  )
}
