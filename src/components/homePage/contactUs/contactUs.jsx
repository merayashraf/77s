import React from 'react'

export default function ContactUs() {
  return (
    <div className="container min-h-screen flex flex-row items-center justify-center bg-[#F5F7FA]">
    <div className="bg-[#FF5F6B] p-8 rounded-lg shadow-lg w-90">
      <h2 className="text-3xl px-10 font-semibold text-[#3D3D3F] mb-4">
        Refer new Clients and you both get a cashback code $50 
      </h2>
      <h2 className="text-3xl px-10 font-semibold text-[#3D3D3F] mb-4">
        promotion free.
      </h2>
      <div className="mb-4 flex flex-row items-center my-10">
        <label className="text-[#FFFFFF] mx-[70px] px-50 w-full">Please invite new client</label>
      </div>
      <div className=" flex flex-row mx-10 my-1">
        <input
          type="text"
          className="flex flex-row p-2 px-[21%] rounded-md border border-[#FFFFFF] mr-2"
        />
        <button className="bg-[#CACAD1] mx-12 text-[#545457] px-10 py-2 rounded-md">
          Copy Link
        </button>
      </div>
      <div className="mb-4 flex flex-row items-center my-10">
        <label className="text-[#FFFFFF] mx-[70px] w-full">Add Email addresses</label>
        </div>
        <div className=" flex flex-row mx-10 my-1">
        <input
          type="email"
          className="flex flex-row p-2 px-[21%] rounded-md border border-[#FFFFFF] mr-2"/>
        <button className="bg-[#CACAD1] text-[#545457] mx-10 px-10 py-2 rounded-md">
          Invite Client
        </button>
      </div>
    </div>
  </div>
  )
}
