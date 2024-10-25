'use client'
import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { SiBehance } from "react-icons/si";
import { SlExclamation } from "react-icons/sl";


export default function Pricing() {
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

            <div className="flex flex-col items-start bg-[#F5F7FA] px-6">
                <h1 className="text-4xl font-semibold py-12 px-[5%] text-[#545457]">Pricing</h1>
                <div className="px-[5%] flex flex-row">
                    <div className="w-[97%] md:w-[180%] flex flex-row items-center h-[50px] md:h-[80px] relative px-5 py-3 bg-white rounded-lg shadow-md">
                        <h1 className="text-[20px] text-[#9E9EA3]">Logo, Brand Identity, Packaging...</h1>
                        <div className="ms-56 px-20 md:px-8 p-3 md:py-7 bg-[#FF5F6B] text-white font-semibold rounded-e-md ">
                            <IoSearch size={25} />
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl font-semibold py-10 px-[5%] text-[#FF5F6B]">All Categories</h1>
                <div className="flex flex-row text-[#3D3D3F] gap-[115px] px-[5%]">
                    <div className="text-xl ">
                        <h2 className="font-bold py-1">Logo & identity</h2>
                        <h3 className="py-2.5">Logo design</h3>
                        <h3 className="py-2.5">Logo & brand identity pack</h3>
                        <h3 className="py-2.5">Logo & social media pack</h3>
                        <h3 className="py-2.5">Logo & website Design</h3>
                        <h3 className="py-2.5">Logo & business card</h3>
                        <h3 className="py-2.5">Logo & brand guide</h3>
                        <h3 className="py-2.5">Logo & product packaging</h3>
                        <h3 className="py-2.5">Business card</h3>
                        <h3 className="py-2.5">Stationery</h3>
                    </div>

                    <div className="flex flex-col  text-xl ">
                        <h2 className="font-bold py-1">Web - UI/UX design</h2>
                        <h3 className="py-2.5">Web design</h3>
                        <h3 className="py-2.5">WordPress theme design</h3>
                        <h3 className="py-2.5">Landing page design</h3>
                        <h3 className="py-2.5">App design</h3>
                        <h3 className="py-2.5">Facebook cover / Post</h3>
                        <h3 className="py-2.5">Social media page</h3>
                        <h3 className="py-2.5">Banner ad</h3>
                        <h3 className="py-2.5">Email</h3>
                        <h3 className="py-2.5">Animated GIFs</h3>
                        <h3 className="py-2.5">Logo animation</h3>
                        <h3 className="py-2.5">Power Point template</h3>
                    </div>

                    <div className="flex flex-col text-xl ">
                        <h2  className="font-bold w-60 py-1">Business & advertising</h2>
                        <h3  className="py-2.5">Product packaging</h3>
                        <h3  className="py-2.5">Product label</h3>
                        <h3  className="py-2.5">Book/Magazine cover</h3>
                        <h3  className="py-2.5">Flyer/Print Poster</h3>
                        <h3  className="py-2.5">Card / Invitation</h3>
                        <h3  className="py-2.5">Brochure</h3>
                        <h3  className="py-2.5">Pag</h3>
                        <h3  className="py-2.5">Car/truck/Van wrap</h3>
                        <h3  className="py-2.5">Signage</h3>
                        <h3  className="py-2.5">Menu</h3>
                        <h3  className="py-2.5">Album cover</h3>
                    </div>

                    <div className="flex flex-col  text-xl ">
                        <h2 className=" font-bold w-60 py-1">Clothing & Merchandise</h2>
                        <h3 className="py-2.5">T-shirt clothing / apparel</h3>
                        <h3 className="py-2.5">Merchandise</h3>
                        <h3 className="py-2.5">Cup / Mug</h3>
                        <h3 className="py-2.5">Sticker</h3>
                        <h2 className="font-bold w-60 py-1">Art & Illustration</h2>
                        <h3 className="py-2.5">Illustration / Graphics</h3>
                        <h3 className="py-2.5">Infographic</h3>
                        <h3 className="py-2.5">Character / Mascot</h3>
                        <h3 className="py-2.5">Icon / Button</h3>
                        <h3 className="py-2.5">Store branding</h3>
                        <h3 className="py-2.5">3D modeling / Animation</h3>
                        <h3 className="py-2.5 text-[#FF5F6B] text-[24px] font-semibold">Others</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="py-10 flex flex-row">
                    <h1 className="text-[30px] px-[5%] font-semibold text-[#545457]">Contest packages</h1>
                    <div className="ms-[50%] gap-5 flex flex-row">
                        <h3 >Currency</h3>
                        <div className=" bg-[#F5F7FA] ps-3 rounded-lg">
                            <select className=" w-full p-1.5 text-[#545457] bg-transparent focus:outline-none">
                                <option>Egp</option>
                                <option>$</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-8 px-4">
                    <div className="max-w-6xl mx-auto ">
                        <div className="flex flex-col sm:flex-row md:flex-row justify-end items-end gap-20 mb-8">
                            <div className="bg-[#CACAD1] text-center p-6 rounded-lg w-1/4 md:w-auto">
                                <h3 className="text-xl font-bold text-gray-700">SILVER</h3>
                                <p className="text-2xl font-bold text-gray-700">$299</p>
                            </div>
                            <div className="bg-[#DDB35E] text-center p-6 rounded-lg shadow-lg w-1/4 md:w-auto">
                                <h3 className="text-xl font-bold text-gray-700">GOLD</h3>
                                <p className="text-2xl font-bold text-gray-700">$599</p>
                                <span className="block mt-2 text-lg text-gray-600">Award $359</span>
                            </div>
                            <div className="bg-[#00C7C7] text-center p-6 rounded-lg w-1/4 md:w-auto">
                                <h3 className="text-xl font-bold text-gray-700">PLATINUM</h3>
                                <p className="text-2xl font-bold text-gray-700">$999</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto  py-3">
                            <table className="w-full bg-white shadow-md rounded-lg">
                                <tbody>
                                    <tr className="bg-[#9E9EA3] border-b">
                                        <td className="px-4 text-[27px] py-3 text-[#3D3D3F]">Design concepts (approx.)</td>
                                        <td className="text-center px-4 py-3 text-[#FFFFFF] text-[42px]">50</td>
                                        <td className="text-center px-4 py-3 text-[#FFFFFF] text-[42px]">40</td>
                                        <td className="text-center px-4 py-3 text-[#FFFFFF] text-[42px]">30</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 text-[27px] text-[#3D3D3F]">100% Guarantee</td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                    </tr>
                                    <tr className="bg-[#9E9EA3] border-b">
                                        <td className="px-4 py-3 text-[27px] text-[#3D3D3F]">Full intellectual property right</td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 text-[27px] py-3 text-[#3D3D3F]">Mid & Adv. Level designers only</td>
                                        <td className="text-center px-4 py-3 text-[#545457]">—</td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                        <td className="text-center px-4 py-3 text-[#545457]">—</td>
                                    </tr>
                                    <tr className="bg-[#9E9EA3] border-b">
                                        <td className="px-4 text-[27px] py-3 text-[#3D3D3F]">Adv. Level designers only</td>
                                        <td className="text-center px-4 py-3 font-bold text-[#FFFFFF]">—</td>
                                        <td className="text-center px-4 py-3 font-bold text-[#FFFFFF]">—</td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                    </tr>
                                    <tr className="broder-b">
                                        <td className="px-4 text-[27px] py-3 text-[#3D3D3F]">Dedicated manager</td>
                                        <td className="text-center px-4 py-3 text-[#545457]">—</td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                        <td className="text-center px-[5.5%] py-3 text-[#545457]"><FaCheck /></td>
                                    </tr>
                                    <tr className="bg-[#9E9EA3]">
                                        <td className="px-4 text-[27px] py-3 text-[#3D3D3F]">Prioritized support</td>
                                        <td className="text-center px-4 py-3 font-bold text-[#FFFFFF]">—</td>
                                        <td className="text-center px-4 py-3 font-bold text-[#FFFFFF]">—</td>
                                        <td className="text-center px-[5%] py-3 text-[#545457]"><FaCheck /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <p className="text-[20px] text-[#FF5F6B]">*Explore creative concept from multiple designer</p>
                            <span className="text-[20px] text-[#FF5F6B]">*Fixed price with set t imeline</span>
                        </div>
                        <div className="flex justify-end items-end">
                            <button className="ms-[30%] my-9 px-3 md:px-20 p-3 md:py-3 bg-[#4747C7] text-white font-semibold rounded-lg">START CONTEST</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-[9%] px-4">
                <div className="px-[5%] max-w-7xl mx-auto">
                    <h1 className="text-[30px] text-[#545457]">Hiring 1 to 1</h1>
                    <div className="my-5 bg-[#00C7C7]  flex justify-end p-6 w-1/4 md:w-auto">
                        <h2 className=" text-xl font-bold text-[#3D3D3F]">From EGP 2999 to GP 6999</h2>
                    </div>
                    <div >
                        <p className="text-[20px] text-[#FF5F6B]">Choose a designer for creative concept</p>
                        <span className="text-[20px] text-[#FF5F6B]">Negotiable cost and flexible timing</span>
                    </div>
                    <div className="flex justify-end items-end">
                            <button className="ms-[30%] my-9 px-3 md:px-20 p-3 md:py-3 bg-[#00C7C7] text-white font-semibold rounded-lg">Hiring 1 to 1</button>
                        </div>
                </div>
            </div>

            <div className="bg-[#252C47]">
                <div className="flex flex-row justify-between mx-auto bg-[#252C47] border-b-2 w-[85%] ">
                    <div className="my-20 text-[#FFFFFF] text-xl">
                        <h1 className="container flex flex-col font-bold ">Design Services</h1>
                        <h2 className="   my-5">Design Contest</h2>
                        <h2 className="   my-5">Hiring 1 to 1</h2>
                        <h2 className="   my-5">Switch to Designer</h2>
                        <h2 className="   my-5">77S design Studio</h2>
                        <h2 className="   my-5">Find a Designer</h2>
                        <h2 className="   my-5">Discover Designs</h2>
                    </div>

                <div className="my-20 text-[#FFFFFF] text-xl">
                    <h1 className="container flex flex-col font-bold ">Category</h1>
                    <h2 className="my-5">Logo / brand identity</h2>
                    <h2 className="my-5">T-shirt</h2>
                    <h2 className="my-5">Label - packaging</h2>
                    <h2 className="my-5">Illustration - graphics</h2>
                    <h2 className="my-5">Web - App design</h2>
                    <h2 className="my-5">All categories</h2>
                </div>

                <div className="my-20 flex flex-col justify-between text-[#FFFFFF] ">
                <div className="flex flex-row items-center ps-1 gap-4 text-[1.7vw]">
                <CiBookmark />
                    <h1>Pricing</h1>
                    </div>

                    <div className="flex flex-row items-center ps-1 gap-4 text-[1.7vw]">
                    <MdOutlineEmail />
                    <h1 className="">Join to 77S design </h1>
                    </div>

                    <div className="flex flex-row items-center ps-1 gap-4 text-[1.7vw]">
                    <HiOutlineQuestionMarkCircle />
                    <h1 className="">Help</h1>
                    </div>

                    <div className="flex flex-row items-center ps-1 gap-4 text-[1.7vw]">
                    <SlExclamation />
                    <h1 className="">About</h1>
                    </div>

                    <div className="flex flex-row ">
                    <Image src= "/asset/photo13.png" className='object-scale-down' width={35} height={25} alt="Photo13"/>
                    <h1 className="text-[1.7vw] mx-3">Contact</h1>
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

        </div>
    )
}



