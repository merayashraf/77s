import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";


export default function Memo() {
    return (
        <div>
            <div className="flex flex-col items-start bg-[#F5F7FA] px-10">
                <h1 className="text-3xl font-semibold py-[5%] px-[10%] text-[#545457]">All Categories</h1>
                <div className="flex flex-row gap-4 py-4">
                    <div className="flex flex-row items-center gap-20">
                        <Image src="/asset/cate0.png" width={215} height={215} alt="Logo & Brand identity"/>
                        <Image src="/asset/cate1.png" width={180} height={180} alt="Business & Advertising"/>
                        <Image src="/asset/cate2.png" width={180} height={180} alt="Illustration & Graphics"/>
                        <Image src="/asset/cate3.png" width={180} height={180} alt="Web & App Design"/>
                        <Image src="/asset/cate4.png" width={180} height={180} alt="Clothing & Merchandise"/>
                        <Image src="/asset/cate5.png" width={180} height={180} alt="Others"  />
                    </div>
                </div>
            </div>

            <div className="flex flex-row text-[#545457] py-28 w-[90%] overflow-hidden">
                <div className="flex flex-col px-48 gap-5 sm:justify-center lg:justify-normal text-[22px] w-[97%] md:w-[88%] mx-auto">
                    <h1>Logo design</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Logo & brand identity pack</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Logo & social media pack</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Logo & website Design</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Logo & business card</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Logo & Brand guide</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Logo & product packaging</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Business card</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                    <h1>Stationery</h1>
                    <div className="border-b border-[#545457] w-[90%]"></div>
                </div>
                <div className="flex flex-row items-center justify-end w-[100%]">
                    <Image src= "/asset/photo14.png" className="flex justify-center w-full" width={559} height={506} alt="Photo14"/>
                </div>
            </div>

            <div className="">
                <div className="px-48 flex flex-row gap-36">
                    <div className="bg-[#F5F7FA] p-5 w-full">
                        <h1 className="font-bold text-[30px] px-10 text-[#FF5F6B]">Logo design</h1>
                    </div>
                    <div className="text-[#9E9EA3] p-5 font-bold text-[30px] bg-[#F5F7FA] ">
                        <Link href="/memo/pricing"> Pricing </Link>
                    </div>
                </div>

                <h1 className="text-[#545457] py-10 px-48  text-[24px]">Start and see your project transform into reality in ways that exceed <br/> your imagination, With multiple designs created just for you</h1>
                
                <div className="flex flex-row gap-10 px-48">
                    <FaCheck size={33} className=" text-[#00C7C7]"/>
                    <h1 className="text-[24px]">Dozens of unique, editable designs in digital, print, and web <br/> file formats</h1>
                </div>
                <div className="flex flex-row gap-10 my-6 px-48">
                    <FaCheck size={33} className=" text-[#00C7C7]"/>
                    <h1 className="text-[24px]">Customer support to assist you throughout the process</h1>
                </div>
                <div className="flex flex-row gap-10 px-48 my-6">
                    <FaCheck size={33} className=" text-[#00C7C7]"/>
                    <h1 className="text-[24px]">Full-copyright ownership of designs and ready-to-use files</h1>
                </div>
                <div className="flex flex-row gap-10 px-48 my-6">
                    <FaCheck size={33} className=" text-[#00C7C7]"/>
                    <h1 className="text-[24px]">All designers have undergone screening and review processes <br/> for top-quality work</h1>
                </div>
                
                <div className="flex flex-row gap-10 px-48">
                    <FaCheck size={33} className=" text-[#00C7C7]"/>
                    <h1 className="text-[24px]">Money-back guarantee*</h1>
                </div>

                <div>
                    <button className="ms-[30%] my-9 px-3 md:px-20 p-3 md:py-3 bg-[#4747C7] text-white font-semibold rounded-lg">Start contest</button>
                    <button className="ms-[15%] my-9 px-3 md:px-20 p-3 md:py-3 bg-[#00C7C7] text-white font-semibold rounded-lg">Hiring 1 to 1</button>
                </div>
            </div>
        </div>
    );
}
