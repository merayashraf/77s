import Image from "next/image";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { SlExclamation } from "react-icons/sl";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBehance } from "react-icons/si";
import NavBar from "@/components/navBar/navBar";
import HeroSections from "@/components/homePage/heroSection/heroSections";
import Categories from "@/components/homePage/categories/categories";
import Experience from "@/components/homePage/experience/experience";
import Hiring from "@/components/homePage/hiring/hiring";
import ContactUs from "@/components/homePage/contactUs/contactUs";
import Footer from "@/components/footer/footer";





export default function Home() {
  return (
    <div className=" flex flex-col">
        <NavBar/>
        <HeroSections/>
        <Categories/>
        <Experience/>
        <Hiring/>        
        <ContactUs/>
        <Footer/>
    </div>  
    
  );
}