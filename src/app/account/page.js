'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle, IoMenu } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBehance } from "react-icons/si";

export default function Account() {
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
        <div>
            {/* Header */}
            <div className="w-full relative flex bg-[#F5F7FA] items-center text-[17px] justify-between py-[20px] px-4 sm:px-7 lg:px-[100px]">
                {/* Mobile Menu */}
                {openMenu && (
                    <div ref={menuRef} className='absolute top-full left-4 right-4 z-[100] bg-white shadow-md rounded-md w-[calc(100%-2rem)] p-3 flex flex-col gap-2'>
                        <Link href="/memo"> Categories </Link>
                        <Link href="/"> Discover </Link>
                        <Link href="/"> Designers </Link>
                        <Link href="/"> Find contests </Link>
                        <Link href="/"> Find Projects </Link>
                        <Link href="/"> Help </Link>
                        <Link href="/work"> Work </Link>
                    </div>
                )}
                {/* Main Header */}
                <div className="flex items-center gap-5 lg:gap-[70px]">
                    <button className='lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        <IoMenu className='text-[20px]' />
                    </button>
                    <Image src="/asset/logo.png" width={200} height={200} className='w-[80px] sm:w-[100px] lg:w-[200px]' alt="Logo" />
                    <div className='hidden lg:flex items-center gap-[50px]'>
                        <Link href="/memo"> Categories </Link>
                        <Link href="/"> Discover </Link>
                        <Link href="/"> Designers </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4 lg:gap-[50px]">
                    <div className='hidden lg:flex gap-[30px]'>
                        <Link href="/"> Help </Link>
                        <Link href="/work"> Work </Link>
                    </div>
                    <div className="text-[20px] flex gap-3">
                        <Link href="/"> <HiMail /> </Link>
                        <Link href="/"> <IoIosNotifications /> </Link>
                        <Link href="/account"> <IoPersonCircle /> </Link>
                    </div>
                </div>
            </div>

            {/* Account Settings Header */}
            <div className="py-2 bg-[#F5F7FA]">
                <h1 className="text-2xl sm:text-3xl py-4 lg:px-[7%] px-8 font-bold text-[#545457]">Account Settings </h1>
                <div className="flex overflow-x-auto whitespace-nowrap text-[15px] md:text-[22px] lg:gap-[15%] gap-20 lg:px-[7%] px-8">
                    <Link href="/" className="text-[#3D3D3F]"> General </Link>
                    <Link href="/" className="text-[#9E9EA3]"> Profile </Link>
                    <Link href="/" className="text-[#9E9EA3]"> Notifications </Link>
                    <div className="hidden sm:flex lg:gap-[75%]">
                        <Link href="/" className="text-[#9E9EA3]"> ID verification </Link>
                        <Link href="/" className="text-[#9E9EA3]"> Membership </Link>
                    </div>
                </div>
            </div>


            <div className="px-6 sm:px-8 md:px-10 py-10">
                <form className="space-y-6">
                    <div>
                        <label className="block text-base sm:text-lg text-[#545457]">E-mail</label>
                        <input
                            type="email"
                            className="w-full border border-[#707070] rounded-md p-3 sm:p-4"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">First Name</label>
                            <input
                                type="text"
                                className="lg:w-full w-[40%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">Last Name</label>
                            <input
                                type="text"
                                className="lg:w-full w-[40%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-base sm:text-lg text-[#545457]">Address details</label>
                        <input
                            type="text"
                            className="w-full border border-[#707070] rounded-md p-3 sm:p-4"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">Time zone</label>
                            <input
                                type="text"
                                className="lg:w-full w-[30%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">Country</label>
                            <input
                                type="text"
                                className="lg:w-full w-[30%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">City State (opt.)</label>
                            <input
                                type="text"
                                className="lg:w-full w-[30%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">State (opt.)</label>
                            <input
                                type="text"
                                className="lg:w-full w-[30%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">Zip (opt.)</label>
                            <input
                                type="text"
                                className="lg:w-full w-[30%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                        <div>
                            <label className="block text-base sm:text-lg text-[#545457]">Phone Number</label>
                            <input
                                type="text"
                                className="lg:w-full w-[30%] border border-[#707070] rounded-md p-3 sm:p-4"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end py-10">
                        <button className="px-8 sm:px-10 md:px-12 py-2 bg-[#00C7C7] text-white text-base sm:text-lg rounded-md">
                            Continue
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#13192E] py-4 sm:py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 lg:px-32">
                    <div className="flex flex-col md:flex-row items-center">
                        <Image src= "/asset/logo2.png" width={200} height={50} alt="Logo2"/>
                        <div className="border-l-2 border-[#F5F7FA] h-6 mx-6 hidden md:block"></div>
                        <div className="text-[#F5F7FA]">Terms</div>
                        <div className="border-l-2 border-[#F5F7FA] h-6 mx-6 hidden md:block"></div>
                        <div className="text-[#F5F7FA]">Privacy</div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <SiBehance className="text-[#F5F7FA]" size={25} />
                        <FaFacebookF className="text-[#F5F7FA]" size={25} />
                        <FaInstagram className="text-[#F5F7FA]" size={25} />
                        <FaXTwitter className="text-[#F5F7FA]" size={25} />
                    </div>
                </div>
            </footer>
        </div>
    );
}
