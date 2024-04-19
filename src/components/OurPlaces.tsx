"use client"
import { imagesour } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react"

import Image from 'next/image'

export default function OurPlaces() {
    return (
        <div className="flex flex-col w-full mt-16 items-center">
            {/* OUR PLACE */}
            <p className="text-white text-center font-Montserrat font-bold text-sm md:text-2xl lg:text-3xl">OUR PLACE</p>
            {/* BLKGEM PLACE PICTURE */}
            <div className="w-full flex flex-row overflow-hidden">
                {/* line1 */}
                <Swiper className="mt-8 flex w-48">

                    {imagesour.map((pic, idx) => (
                        <SwiperSlide className="mx-4" key={idx}>
                            <Image
                                className="w-full"
                                src={pic.src}
                                alt={""}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <p className="text-gray-400 mt-10 text-center text-md font-Montserrat md:text-2xl lg:text-3xl">M THEATRE & GMM BUILDING FLOOR 22</p>
        </div>



    );
}
