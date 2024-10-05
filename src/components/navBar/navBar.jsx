'use client'
import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
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
        <div className="w-full relative flex bg-[#F5F7FA] flex-row items-center text-[17px] justify-between py-[30px] px-7 lg:px-[100px]">
          {/* Menu For Small Screens */}
          {openMenu && (
            <div ref={menuRef} className='absolute component flex flex-col -bottom-60 z-[100] gap-2 bg-white shadow-md rounded-md w-[180px] p-3'>
              <Link href="/"> Categories </Link>
              <Link href="/"> Discover </Link>
              <Link href="/"> Designers </Link>
              <Link href="/"> Find contests </Link>
              <Link href="/"> Find Projects </Link>
              <Link href="/"> Help </Link>
              <Link href="/"> Work </Link>
            </div>
          )}
          {/* Menu For Large Screens */}
          <div className="flex flex-row items-center gap-10 lg:gap-[70px]">
            <button className='block lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
              <IoMenu className='text-[20px]' />
            </button>
            <Image src="/asset/logo.png" width={200} height={200} className='w-[100px] lg:w-[200px]' alt="Logo" />
            <div className='hidden lg:flex flex-row gap-[70px] my-auto'>
              <Link href="/"> Categories </Link>
              <Link href="/"> Discover </Link>
              <Link href="/"> Designers </Link>
            </div>
          </div>
          <div className="flex flex-row gap-[50px]">
            <div className='hidden lg:flex flex-row gap-[50px]'>
              <Link href="/"> Help </Link>
              <Link href="/"> Work </Link>
            </div>
            <div className="text-[20px] flex flex-row justify-evenly items-center gap-[30px]">
              <HiMail />
              <IoIosNotifications />
              <IoPersonCircle />
            </div>
          </div>
        </div>
    );
}
