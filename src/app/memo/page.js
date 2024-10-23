'use client'
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { SiBehance } from "react-icons/si";
import { SlExclamation } from "react-icons/sl";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";


export default function Memo() {

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

            <div className="flex flex-col items-start bg-[#F5F7FA] py-[3%] px-[7%] md:px-10 lg:px-24">
                <h1 className="text-2xl md:text-3xl font-semibold py-4 text-[#545457]">All Categories</h1>
                <div className="flex flex-wrap gap-4 py-12 justify-center lg:justify-start">
                    <Image src="/asset/Photo5.png" width={180} height={180} alt="Business & Advertising" className="hidden sm:flex md:flex w-[140px] md:w-[190px] lg:w-[207px]" />
                    <Image src="/asset/cate1.png" width={180} height={180} alt="Business & Advertising" className="w-[140px] md:w-[190px] lg:w-[207px]" />
                    <Image src="/asset/cate2.png" width={180} height={180} alt="Illustration & Graphics" className="w-[140px] md:w-[190px] lg:w-[207px]" />
                    <Image src="/asset/cate3.png" width={180} height={180} alt="Web & App Design" className="w-[140px] md:w-[190px] lg:w-[207px]" />
                    <Image src="/asset/cate4.png" width={180} height={180} alt="Clothing & Merchandise" className="w-[140px] md:w-[190px] lg:w-[207px]" />
                    <Image src="/asset/cate5.png" width={180} height={180} alt="Others" className="w-[140px] md:w-[190px] lg:w-[207px]" />
                    <Image src="/asset/cate6.png" width={180} height={180} alt="Others" className="w-[140px] md:w-[190px] lg:w-[207px]" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row text-[#545457] py-20 w-full md:w-[90%] px-10 md:px-14 lg:px-28">
                <div className="flex flex-col text-[25px] md:text-[25px] lg:text-[25px] w-full md:w-[60%] gap-4">
                    {["Logo design", "Logo & brand identity pack", "Logo & social media pack", "Logo & website Design", "Logo & business card", "Logo & Brand guide", "Logo & product packaging", "Business card", "Stationery"].map((item, index) => (
                        <div key={index} >
                            <h1>{item}</h1>
                            <div className=" border-b border-[#545457] sm:w-[70%] lg:w-[60%]"></div>
                        </div>
                    ))}
                </div>
                <div className=" flex justify-center w-full md:w-[40%] py-6 md:py-0">
                    <Image src= "/asset/photo14.png" className="hidden md:flex sm:flex object-contain" width={559.21} height={506.32} alt="Photo14" />
                </div>
            </div>

            <div>
                <div className="px-48 flex flex-row ">
                    <div className="bg-[#F5F7FA] rounded-lg p-5 w-full">
                        <h1 className="font-bold text-[30px] px-10 text-[#FF5F6B]">Logo design</h1>
                    </div>
                    <div>
                        <button className="ms-[15%] my-5 px-3 md:px-20 p-3 md:py-3 text-[#9E9EA3] bg-[#F5F7FA] text-[24px] font-semibold rounded-lg">
                            <Link href="/memo/pricing"> Pricing </Link>
                        </button>
                    </div>
                </div>

                <h1 className="text-[#545457] py-5 px-6 md:px-20 lg:px-48 text-center md:text-left text-[18px] md:text-[24px]">
                    Start and see your project transform into reality in ways that exceed your imagination, 
                    with multiple designs created just for you.
                </h1>
                <div className="flex flex-col gap-4 md:gap-6 px-6 md:px-20 lg:px-48">
                    {[
                        "Dozens of unique, editable designs in digital, print, and web file formats",
                        "Customer support to assist you throughout the process",
                        "Full-copyright ownership of designs and ready-to-use files",
                        "All designers have undergone screening and review processes for top-quality work",
                        "Money-back guarantee*"
                    ].map((text, index) => (
                        <div key={index} className="flex flex-row gap-4 items-start">
                            <FaCheck size={28} className="text-[#00C7C7]" />
                            <h1 className="text-[16px] md:text-[24px]">{text}</h1>
                        </div>
                    ))}
                </div>
                <div className="my-20">
                    <button className="ms-[25%] my-9 px-3 md:px-20 p-3 md:py-3 bg-[#4747C7] text-white font-semibold rounded-lg">Start contest</button>
                    <button className="ms-[15%] my-9 px-3 md:px-20 p-3 md:py-3 bg-[#00C7C7] text-white font-semibold rounded-lg">Hiring 1 to 1</button>
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
    );
}
