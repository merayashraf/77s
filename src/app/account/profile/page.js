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

export default function Profile() {
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

            <div className="py-2 bg-[#F5F7FA]">
                <h1 className="text-2xl sm:text-3xl py-4 lg:px-[7%] px-8 font-bold text-[#545457]">Account Settings </h1>
                <div className="flex overflow-x-auto whitespace-nowrap text-[15px] md:text-[22px] lg:gap-[15%] gap-20 lg:px-[7%] px-8">
                    <Link href="/" className="text-[#3D3D3F]"> General </Link>
                    <Link href="/account/profile" className="text-[#9E9EA3]"> Profile </Link>
                    <Link href="/" className="text-[#9E9EA3]"> Notifications </Link>
                    <div className="hidden sm:flex lg:gap-[75%]">
                        <Link href="/" className="text-[#9E9EA3]"> ID verification </Link>
                        <Link href="/" className="text-[#9E9EA3]"> Membership </Link>
                    </div>
                </div>
            </div>

            <div className="px-8 sm:px-12 md:px-20 py-20">
                <form className="space-y-6">
                    <div className="flex items-center gap-8">
                        <div className="mx-20 w-[400px] h-[300px] bg-[#FFFFFF] rounded-full border border-[#707070] flex items-center justify-center">
                            <span className="text-[#9E9EA3] text-[25px] flex justify-center">Avatar <br/> 200x200</span>
                        </div>
                        <div className="px-32 space-y-20 w-full">
                            <div>
                                <label className="block text-base text-[25px] my-2 text-[#9E9EA3]">Username</label>
                                <input type="text" className="w-[650px] border border-[#707070] rounded-md p-3 sm:p-4" />
                            </div>
                            <div>
                                <label className="block text-base text-[25px] my-2 text-[#9E9EA3]">Languages</label>
                                <input type="text" className="w-[650px] border border-[#707070] rounded-md p-3 sm:p-4" />
                            </div>
                        </div>
                    </div>
                    <div className="px-8">
                        <label className="block text-base my-2 text-[#545457]">Biography</label>
                        <textarea className="w-full border border-[#707070] rounded-md p-3 sm:p-4" rows="4"></textarea>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className="text-base text-[#545457]">I’m available for new projects and contest invitations.</span>
                    </div>
                    <div>
                        <h2 className="text-lg text-[#545457] font-bold">Change Password:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-base text-[#545457]">Current password</label>
                                <input type="password" className="w-full border border-[#707070] rounded-md p-3 sm:p-4" />
                            </div>
                            <div>
                                <label className="block text-base text-[#545457]">New password</label>
                                <input type="password" className="w-full border border-[#707070] rounded-md p-3 sm:p-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-2 bg-gray-400 text-white text-base sm:text-lg rounded-md">Portfolio</button>
                        <button className="px-8 py-2 bg-[#00C7C7] text-white text-base sm:text-lg rounded-md">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
