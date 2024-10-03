import React from 'react'
import Image from "next/image"
import pics from "../assets/img/pics.jpg"

function Hero() {
    return (
        <div className="flex py-8 ">
            
            <div className="px-6 w-[40%] py-28">
                <><div className='text-5xl sm:text- font-bold font-serif text-blue-600 animate-pulse text-center'>Web</div>
                <div className='mt-4 text-5xl font-bold font-serif text-blue-600 animate-bounce text-center'>Automations</div>
                </>
                <p className='text-xl fond-bold font-normal text-blue-950 text-center'>Our cutting-edge Web Automation Applications works for revolutionizing all nature of Businesses, Industries. Can gain effortless access to get data from the Web, streamlining operations and empowering informed decision-making like never before.</p>

            </div>
            <div className=" w-[60%] py-10">
                <Image src={pics}
                    alt="picture"
                    className="rounded-l-full w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}

export default Hero
