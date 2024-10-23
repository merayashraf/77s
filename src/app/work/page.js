'use client'
import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import React from 'react'
import { VscTriangleRight } from "react-icons/vsc";
import { FaLayerGroup } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBehance } from "react-icons/si";


export default function Work() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="font-rotunda">
            <div className="w-full relative flex bg-[#F5F7FA] flex-row items-center text-[17px] justify-between py-[30px] px-7 lg:px-[100px]">
                {/* Menu For Small Screens */}
                {openMenu && (
                    <div ref={menuRef} className='absolute component flex flex-col -bottom-60 z-[100] gap-2 bg-white shadow-md rounded-md w-[180px] p-3'>
                    <Link href="/memo"> Categories </Link>
                    <Link href="/"> Discover </Link>
                    <Link href="/"> Designers </Link>
                    <Link href="/"> Find contests </Link>
                    <Link href="/"> Find Projects </Link>
                    <Link href="/"> Help </Link>
                    <Link href="/work"> Work </Link>
                    </div>
                )}
                {/* Menu For Large Screens */}
                <div className="flex flex-row items-center gap-10 lg:gap-[70px]">
                    <button className='block lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                    <IoMenu className='text-[20px]' />
                    </button>
                    <Image src="/asset/logo.png" width={200} height={200} className='w-[100px] lg:w-[200px]' alt="Logo" />
                    <div className='hidden lg:flex flex-row gap-[70px] my-auto'>
                    <Link href="/memo"> Categories </Link>
                    <Link href="/"> Discover </Link>
                    <Link href="/"> Designers </Link>
                    </div>
                </div>
                <div className="flex flex-row gap-[50px]">
                    <div className='hidden lg:flex flex-row gap-[50px]'>
                    <Link href="/"> Help </Link>
                    <Link href="/work"> Work </Link>
                    </div>
                    <div className="text-[20px] flex flex-row justify-evenly items-center gap-[30px]">
                    <Link href="/"> <HiMail /> </Link>
                    <Link href="/"> <IoIosNotifications /> </Link>
                    <Link href="/"> <IoPersonCircle /> </Link>
                    </div>
                </div>
            </div>

            <div className="py-5 bg-[#F5F7FA]">
                <h1 className="text-3xl font-semibold py-[3%] px-[7%] text-[#545457]">My Work </h1>
                <div className="flex flex-row text-[22px] gap-36 mx-[40%]">
                    <Link href="/" className="text-[#3D3D3F]"> Contests </Link>
                    <Link href="/work/projectWork" className="text-[#9E9EA3]"> Project </Link>
                    <Link href="/work/designerWork" className="text-[#9E9EA3]"> Designer </Link>
                    <Link href="/work/ndas" className="text-[#9E9EA3]"> NDAs </Link>
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

                <div className="flex flex-col">
                    <div className="flex flex-row items-center p-6 mb-6">
                        <div className="relative w-32 h-32 bg-[#D9D9D9] flex justify-center items-center">
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#FF5F6B] border-l-[30px] border-l-transparent"></div>
                            <span className="absolute bottom-0 left-0 bg-[#3D3D3F] text-white px-2 py-1 text-sm">$00</span>
                        </div>

                        <div className="flex flex-col ml-6">
                            <h2 className="text-2xl text-[#545457] font-semibold">Name of the brief</h2>
                            <p className="text-[#545457]">Details of the brief</p>
                            <span className="italic text-[#3D3D3F]">by Client Name</span>

                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-2 py-1 rounded-lg">Pack</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-3 py-1 rounded-lg">Guaranteed</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-10 py-1 rounded-lg">Category</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-10 py-1 rounded-lg">Industry</span>
                            </div>
                        </div>

                        <div className="flex flex-col text-xs px-10">
                            <div className="flex items-center text-[#3D3D3F] mb-2">
                                <FaLayerGroup className="mr-2" />
                                <span>00 designs</span>
                            </div>
                            <div className="flex items-center text-[#3D3D3F]">
                                <TfiAlarmClock className="mr-2" />
                                <span>3 days, 12 hours</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center p-6">
                        <div className="relative w-32 h-32 bg-[#D9D9D9] flex justify-center items-center">
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#FF5F6B] border-l-[30px] border-l-transparent"></div>
                            <span className="absolute bottom-0 left-0 bg-[#3D3D3F] text-[#FFFFFF] px-2 py-1 text-sm">$00</span>
                        </div>

                        <div className="flex flex-col ml-6">
                            <h2 className="text-2xl text-[#545457] font-semibold">Name of the brief</h2>
                            <p className="text-[#545457]">Details of the brief</p>
                            <span className="italic text-[#3D3D3F]">by Client Name</span>

                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-2 py-1 rounded-lg">Pack</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-3 py-1 rounded-lg">Guaranteed</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-10 py-1 rounded-lg">Category</span>
                                <span className="bg-[#9E9EA3] text-[#FFFFFF] px-10 py-1 rounded-lg">Industry</span>
                            </div>
                        </div>

                        <div className="flex flex-col text-xs px-10">
                            <div className="flex items-center text-[#3D3D3F] mb-2">
                                <FaLayerGroup className="mr-2" />
                                <span>00 designs</span>
                            </div>
                            <div className="flex items-center text-[#3D3D3F]">
                                <TfiAlarmClock className="mr-2" />
                                <span>3 days, 12 hours</span>
                            </div>
                        </div>
                    </div>
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
