"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'



export default function OurProject() {

    return (
        <div className="flex flex-col mt-12 justify-center items-center overflow-hidden">
            {/* OUR PROJECT */}
            <p className="text-white text-center font-Montserrat font-black text-sm md:text-2xl lg:text-3xl">OUR PROJECT</p>

            {/* Contents Slide */}
            <Swiper
                slidesPerView={1.05}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation,]}
                className="mySwiper flex w-full">
                {/* Page 1 */}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center pt-14 pb-10 px-12 rounded-3xl border border-gray-500">
                        {/* AWESOME LOGO */}
                        <Image
                            className="w-40"
                            src="/logos/gemjunior.png"
                            alt={"gemjunior LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-12 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">THE ARTIST JOURNEY BEGINS</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full">
                                <p className="text-white font-Montserrat  text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• VOCAL</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• DANCE</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• ACTING</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• PROFILE SHOOTING</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• SINGING WITH IDOL ARTIST</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• SHOWCASE</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• SUMMER FOR NATIONAL AND INTERNATIONAL</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Page 2 */}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center pt-8 pb-10 px-12 rounded-3xl border border-gray-500">
                        {/* ATP2024 LOGO */}
                        <Image
                            className="w-40 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/atp2024.png"
                            alt={"APT2024 LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-8 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">ARTIST TRAINING PROGRAM
                            WITH 9 POWERFUL MENTORS</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full ">
                                <p className="text-white font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-6">• WORKSHOP WITH 9 POWERFUL MENTORS</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• ARTIST TRAINING PROGRAM IN 6 MONTHS</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-3">• THE FINAL CONCERT</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 3 */}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center pt-14 pb-10  rounded-3xl border border-gray-500">
                        {/* AWESOME LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/awesome.svg"
                            alt={"AWESOME LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-14 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">AUTHENTIC ARTIST EXPERIENCE</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-14 items-center">
                            <div className="w-full px-5">
                                <p className="text-white  font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• MV.FULL PRODUCTION 100 SQ.M VIRTUAL PRODUCTION LED VOLUME</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• INDIVIDUAL PICTURE & VDO PROFILE</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• PROFESSIONAL TRAINING TEAM</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• EXCLUSIVE MUSIC TRACK</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• PROFILE SHARING WITHIN LABELS UNDER GMM MUSIC</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 4 */}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center py-8 pb-10  rounded-3xl border border-gray-500">
                        {/* AWESOME LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/blkcon.png"
                            alt={"AWESOME LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-12 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">STAGE PERFORMANCE EXPERIENCE</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-16 items-center">
                            <div className="w-full px-16">
                                <p className="text-white font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-8 mb-5">• FULL PRODUCTION WITH PROFESSIONAL TEAM
                                    <br />THAI - INTERNATIONAL CONCERT</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Detail */}
            <div className="w-full flex flex-col mt-20 px-2 ">
                {/* Vocal */}
                <div className="flex border-b border-white justify-between pb-4 pl-2">
                    <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">VOCAL</p>
                    <Image
                        className="w-6"
                        src="/logos/arrow.svg"
                        alt={"ARROW"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
                {/* Dance */}
                <div className="flex border-b mt-5 border-white justify-between pb-4 pl-2">
                    <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">DANCE</p>
                    <Image
                        className="w-6"
                        src="/logos/arrow.svg"
                        alt={"ARROW"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
                {/* Rap */}
                <div className="flex border-b mt-5 border-white justify-between pb-4 pl-2">
                    <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">RAP</p>
                    <Image
                        className="w-6"
                        src="/logos/arrow.svg"
                        alt={"ARROW"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
                {/* Performance */}
                <div className="flex border-b mt-5 border-white justify-between pb-4 pl-2">
                    <p className="text-white font-Montserrat font-black text-2xl md:text-3xl lg:text-4xl">PERFORMANCE</p>
                    <Image
                        className="w-6"
                        src="/logos/arrow.svg"
                        alt={"ARROW"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
            </div>
        </div >
    );
}
