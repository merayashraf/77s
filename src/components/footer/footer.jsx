import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { SiBehance } from "react-icons/si";
import { SlExclamation } from "react-icons/sl";

export default function Footer() {
  return (
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
)
}
