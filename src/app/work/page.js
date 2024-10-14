import Link from 'next/link'
import React from 'react'

export default function Work() {
    return (
        <div>
            <div className="bg-[#F5F7FA]">
                <h1 className="text-3xl font-semibold py-[5%] px-[10%] text-[#545457]">My Work </h1>
                <div className="flex flex-row  text-[22px] gap-36 mx-[35%]">
                    <Link href="/" className="text-[#3D3D3F]"> Contests </Link>
                    <Link href="/" className="text-[#9E9EA3]"> Project </Link>
                    <Link href="/" className="text-[#9E9EA3]"> Designer </Link>
                    <Link href="/" className="text-[#9E9EA3]"> NDAs </Link>
                </div>
            </div>

            <div>
                
            </div>


        </div>
    )
}
