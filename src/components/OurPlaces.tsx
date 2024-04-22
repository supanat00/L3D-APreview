"use client"
import { imagesour } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import Image from 'next/image'

export default function OurPlaces() {
    return (
        <div className="flex flex-col w-full mt-16 items-center">
            {/* OUR PLACE */}
            <p className="text-white text-center font-Montserrat font-bold text-sm md:text-2xl lg:text-3xl">OUR PLACE</p>
            {/* BLKGEM PLACE PICTURE */}
            <div className="w-full flex flex-row overflow-hidden">
                {/* line1 */}
                <Swiper
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 45,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    slidesPerView={1.6}
                    spaceBetween={-85}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                    className="mt-8 flex w-full">

                    {imagesour.map((pic, idx) => (
                        <SwiperSlide className="" key={idx}>
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
            <p className="text-gray-400 mt-10 text-center text-md font-Montserrat md:text-2xl lg:text-3xl">M THEATRE & GMM BUILDING FLOOR 22 - 23</p>
        </div>



    );
}
