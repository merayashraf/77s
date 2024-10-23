import Link from 'next/link';
import React from 'react'
import { FaLayerGroup } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";

export default function Ndas() {
    return (
        <div className="font-rotunda ">
            <div className="py-5 bg-[#F5F7FA]">
                <h1 className="text-3xl font-semibold py-[5%] px-[10%] text-[#545457]">My Work </h1>
                <div className="flex flex-row text-[22px] gap-36 mx-[40%]">
                    <Link href="/" className="text-[#3D3D3F]"> Contests </Link>
                    <Link href="/work/projectWork" className="text-[#9E9EA3]"> Project </Link>
                    <Link href="/work/designerWork" className="text-[#9E9EA3]"> Designer </Link>
                    <Link href="/work/dnas" className="text-[#9E9EA3]"> NDAs </Link>
                </div>
            </div>

            <div className="flex flex-row items-center p-6 py-[10%] px-[10.5%]">
                        <div className="relative w-32 h-32 bg-[#D9D9D9] flex justify-center items-center">
                            <span>Contest link</span>
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#FF5F6B] border-l-[30px] border-l-transparent"></div>
                            <span className="absolute bottom-0 left-0 bg-[#3D3D3F] text-[#FFFFFF] px-2 py-1 text-sm">$00</span>
                        </div>

                        <div className="flex flex-col ml-6">
                            <h2 className="text-2xl text-[#545457] font-semibold">Name of the brief</h2>
                            <p className="text-[#545457]">Details of the brief</p>
                            <span className="italic text-[#3D3D3F]">by Client Name</span>

                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-3 py-1 rounded-lg">Package</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-3 py-1 rounded-lg">Guaranteed</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-10 py-1 rounded-lg">Category</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-10 py-1 rounded-lg">Industry</span>
                            </div>
                        </div>

                        <div className="flex flex-col text-xs px-10">
                            <div className="flex items-center px-20 text-[#3D3D3F] mb-2">
                                <FaLayerGroup className="mr-2" />
                                <span>00 designs</span>
                            </div>
                            <div className="flex items-center px-20 text-[#3D3D3F]">
                                <TfiAlarmClock className="mr-2" />
                                <span>3 days, 12 hours</span>
                            </div>
                            <div>
                                <button className="ms-[40%] my-10 px-3 md:px-10 p-3 md:py-3 text-[#9E9EA3] bg-[#F5F7FA] text-[9.36px] font-semibold rounded-lg">Watch</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
