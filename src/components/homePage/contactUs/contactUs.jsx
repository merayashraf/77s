import React from 'react'

export default function ContactUs() {
  return (
    <div className="w-full lg:min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#F5F7FA] p-4">
      <div className="bg-[#ff5f6b] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full sm:w-[60%] md:w-[80%]">
        <h2 className="text-sm sm:text-base md:text-xl text-center md:text-start lg:text-4xl px-2 sm:px-4 md:px-10 font-semibold text-[#3D3D3F] mb-4">
          Refer new Clients and you both get a cashback code of $50 Promotion free.
        </h2>
        <div className="mb-4 flex flex-col md:flex-row items-center my-0 md:my-6">
          <label className="text-[#FFFFFF] text-start ms-8 md:ms-20 text-[9.5px] sm:text-sm md:text-base md:text-left -mb-2 md:mb-0 w-full md:w-auto md:mx-[70px]">
            Please invite a new client
          </label>
        </div>
        <div className="flex flex-row md:flex-row gap-4 mx-2 sm:mx-4 md:mx-10 my-2">
          <input
            type="text"
            className="w-full p-1 sm:p-2 rounded-full md:rounded-md text-[9.5px] md:text-base border border-[#FFFFFF] md:mr-2"
            placeholder="Enter client name"
          />
          <button className="bg-[#CACAD1] text-[#545457] text-[9.5px] md:text-base !w-[130px] md:w-auto px-1 sm:px-6 md:px-10 py-1 sm:py-2 rounded-full md:rounded-md">
            Copy Link
          </button>
        </div>
        <div className="mb-4 flex flex-row md:flex-row items-center my-6">
        <label className="text-[#FFFFFF] text-start ms-4 md:ms-20 text-[9.5px] sm:text-sm md:text-base md:text-left -mb-2 md:mb-0 w-full md:w-auto md:mx-[70px]">
            Add Email addresses
          </label>
        </div>
        <div className="flex flex-row md:flex-row gap-4 mx-2 sm:mx-4 md:mx-10 my-2">
          <input
            type="email"
            className="w-full p-1 sm:p-2 rounded-full md:rounded-md border text-[9.5px] md:text-base border-[#FFFFFF] md:mr-2"
            placeholder="Enter email address"
          />
          <button className="bg-[#CACAD1] text-[#545457] text-[9.5px] md:text-base !w-[130px] md:w-auto px-4 sm:px-6 md:px-10 py-1 sm:py-2 rounded-full md:rounded-md">
            Invite Client
          </button>
        </div>
      </div>
    </div>
  )
}
