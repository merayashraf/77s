import Link from 'next/link'
import React from 'react'
import { VscTriangleRight } from "react-icons/vsc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBehance } from "react-icons/si";
import Image from 'next/image';

export default function Project() {
    return (
        <div>
            <div className="py-5 bg-[#F5F7FA]">
                <h1 className="text-3xl font-semibold py-[5%] px-[10%] text-[#545457]">My Work </h1>
                <div className="flex flex-row  text-[22px] gap-36 mx-[40%]">
                    <Link href="/" className="text-[#3D3D3F]"> Contests </Link>
                    <Link href="/work/projectWork" className="text-[#9E9EA3]"> Project </Link>
                    <Link href="/" className="text-[#9E9EA3]"> Designer </Link>
                    <Link href="/" className="text-[#9E9EA3]"> NDAs </Link>
                </div>
            </div>

            <div className="flex py-[10%] flex-row">
                <div className="flex flex-col px-[7%]">
                    <div className="flex flex-row items-center">
                        <div className="bg-[#9E9EA3] p-6 w-full flex items-center rounded-r-md">
                            <h1 className="px-[2%] text-[22px] text-[#545457]">In progress (0)</h1>
                        </div>
                        <VscTriangleRight className="text-7xl text-[#9E9EA3] -ml-5" />
                    </div>
                    <div className="p-6 w-full">
                        <h1 className="px-[2%] text-[22px] text-[#545457]">Stored (0)</h1>
                    </div>
                    <div className="p-6 w-full">
                        <h1 className="px-[2%] text-[22px] text-[#545457]">Finished (0)</h1>
                    </div>
                    <div className="p-6 w-full">
                        <h1 className="px-[2%] text-[22px] text-[#545457]">Final round (0)</h1>
                    </div>
                    <div className="p-6 w-full">
                        <h1 className="px-[2%] text-[22px] text-[#545457]">Winner (0)</h1>
                    </div>
                </div>
                <div>
                    <div className="border-l-2 border-[#3D3D3F] h-full mx-6"></div>
                </div>
            </div>


            
            <div className="">
                <footer className="bg-[#13192E] py-14">
                    <div className="container mx-auto flex flex-row justify-between items-center px-4 lg:px-32">
                        <div className="flex flex-row items-center">
                            <Image src= "/asset/logo2.png" width={200} height={50} alt="Logo2"/>
                        <div className="border-l-2 border-[#F5F7FA] h-6 mx-6"></div>
                        <div className="text-[#F5F7FA] text-[1.3vw] ">
                            Terms
                        </div>
                        <div className="border-l-2 border-[#F5F7FA] h-6 mx-6"></div>
                        <div className="text-[#F5F7FA] text-[1.3vw] ">
                            Privacy
                        </div>
                        </div>

                        <div className="flex flex-row items-center gap-6">
                        <div className="text-[#F5F7FA] font-bold">
                            <SiBehance size={35} />
                        </div>
                        <div className="text-[#F5F7FA] font-bold">
                            <FaFacebookF size={35} />
                        </div>
                        <div className="text-[#F5F7FA] font-bold">
                            <FaInstagram size={35} />
                        </div>
                        <div className="text-[#F5F7FA] ">
                            <FaXTwitter size={35}/>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}
