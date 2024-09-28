import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";


export default function Home() {
  return (
    <div className=" w-full flex flex-row items-center text-[17px] gap-4 mt-[30px] px-[90px] justify-evenly" >

      <div className="flex flex-row items-center gap-[70px]">
      <Image src= "/asset/logo.png" width={200} height={200} alt="Logo"/>
      <Link href="/"> Catigories </Link>
      <Link href="/"> Discover </Link>
      <Link href="/"> Designers </Link>
      </div>

      <div className="flex flex-row gap-[50px]">
      <Link href="/"> Help </Link>
      <Link href="/"> Work </Link>

      <div className=" text-[20px] flex flex-row justify-evenly items-center gap-[30px]">
        <HiMail />
        <IoIosNotifications />
        <IoPersonCircle />

      </div>
      </div>
    </div>
  );
}

