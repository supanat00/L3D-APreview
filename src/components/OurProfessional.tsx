"use client"
import { imagevocal } from "../utils/constants";
import { imageperform } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'



export default function OurProfessional() {

    return (
        <div className="flex flex-col mt-12 items-center">
            <p className="text-gray-400 text-center font-Montserrat font-medium text-sm md:text-2xl lg:text-3xl">OUR PROFESSIONAL TRAINERS</p>
            {/* PROFESIONAL TRAINERS PICTURE */}
            <div className="w-full flex flex-col overflow-hidden">
                {/* line1 */}
                <Swiper
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    slidesPerView={2}
                    spaceBetween={50}
                    centeredSlides={true}
                    freeMode={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode]}
                    className="mySwiper mt-8 flex w-full">

                    {imagevocal.map((pic, idx) => (
                        <SwiperSlide className="" key={idx}>
                            <Image
                                className="w-full"
                                src={pic.src}
                                loading="lazy"
                                alt={""}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* line2 */}
                <Swiper
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    slidesPerView={2}
                    spaceBetween={50}
                    centeredSlides={true}
                    freeMode={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode]}
                    className="mySwiper mt-8  w-full">

                    {imageperform.map((pic, idx) => (
                        <SwiperSlide className="" key={idx}>
                            <Image
                                className="w-full"
                                src={pic.src}
                                loading="lazy"
                                alt={""}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Image
                className="w-full mt-10"
                src="/logos/blackgem.svg"
                alt={"BLACKGEM"}
                width={450}
                height={450}
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <div className="w-full px-8">
                {/* VISION */}
                <div className="flex flex-col mt-16 w-full">
                    <p className="text-gray-600 font-Montserrat text-left text-sm md:text-2xl lg:text-3xl">VISION</p>
                    <p className="text-white mt-4 font-Montserrat font-bold text-left text-md md:text-2xl lg:text-3xl leading-5">
                        ❝<br />ACADEMY OF ARTISTIC<br />INSPIRATION IN ASIA<br />❞
                    </p>
                </div>
                {/* MISSION */}
                <div className="flex flex-col mt-12 w-full">
                    <p className="text-gray-600 text-right text-sm font-Montserrat md:text-2xl lg:text-3xl">MISSION</p>
                    <p className="text-white mt-4 text-right font-Montserrat font-bold text-md md:text-2xl lg:text-3xl leading-5">
                        ❝<br />ENHANCE<br />ENTERTAINMENT<br />INDUSTRY TALENT<br />❞
                    </p>
                </div>
            </div>
        </div>
    );
}
