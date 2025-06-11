"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'



export default function OurProject() {

    return (
        <div className="flex flex-col mt-36 justify-center items-center overflow-hidden">
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
                modules={[Autoplay, Pagination,]}
                className="mySwiper flex w-full">
                {/* Page 1 AWESOME SUMMER */}
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
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full px-5">
                                <p className="text-white  font-Montserrat text-center text-xs">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• MV.FULL PRODUCTION 100 SQ.M VIRTUAL</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• PRODUCTION LED VOLUME</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• INDIVIDUAL PICTURE & VDO PROFILE</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• PROFESSIONAL TRAINING TEAM</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• EXCLUSIVE MUSIC TRACK</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• PROFILE SHARING WITHIN LABELS UNDER GMM MUSIC</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Page 2 GEM JUNIOR */}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center pt-14 pb-10 px-12 rounded-3xl border border-gray-500">
                        {/* GEM JUNIOR LOGO */}
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
                                <p className="text-white font-Montserrat  text-center text-xs">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• VOCAL / DANCE / ACTING</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• PROFILE SHOOTING</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• DANCING WITH BB-GG </p>
                                <p className="text-white font-medium font-Montserrat text-xs">• SHOWCASE</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• SUMMER FOR NATIONAL AND INTERNATIONAL</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 3 TEEN CAMP */}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center pt-8 pb-10 px-12 rounded-3xl border border-gray-500">
                        {/* Teen Camp LOGO */}
                        <Image
                            className="w-40 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/TeenCamp.png"
                            alt={"APT2024 LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full ">
                                <p className="text-white font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• Learn to sing&apos; dance&apos; rap&apos; act&apos; practice modeling</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• Showcase on the GMM Auditorium stage</p>
                                <p className="text-white font-medium font-Montserrat text-xs ">• Special jacket for Teen Camp</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• Learn for a total of 7 days</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 4 Snow Gem*/}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center py-8 pb-10  rounded-3xl border border-gray-500">
                        {/* SnowGem LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/SnowGem.png"
                            alt={"SnowGem LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full px-16">
                                <p className="text-white font-Montserrat text-center text-xs">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• Musical performance in the snow on the GMM <br /> Auditorium stage </p>
                                <p className="text-white font-medium font-Montserrat text-xs">• Special show&apos; cute bunny ears</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• Practice singing&apos; playing&apos; dancing&apos; acting&apos; modeling and showcase on stage</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• A delicious lunch and snacks</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• Learn for 9 days</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 5 GEMX*/}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center py-8 pb-10  rounded-3xl border border-gray-500">
                        {/* SnowGem LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/GEMX.png"
                            alt={"SnowGem LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-6 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">Experience Sharing & Real Collaboration</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full px-16">
                                <p className="text-white font-Montserrat text-center text-xs">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• Learn singing&apos; dancing and performing techniques on stage like an artist with a teacher who creates real artists</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• Dance workshop with Korean choreographer BICO LIM&apos; the man behind Enhypen / Riize / TITOT</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• Workshop on building Inner and confidence with Lukkade Metinee</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• Profile Shooting and Com-card to present profiles to music labels</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• Open the experience of performing on the concert stage</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• Casting & Audition with famous artists and leading music label teams in Thailand from GNEST / GeneLab / LIT Entertainment / ONE MUSIC / Sanamluang Music / WhiteFox / White Music / ONE31</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 6 AET-01*/}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center  pb-10  rounded-3xl border border-gray-500">
                        {/* AET-01 LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/AET-01.png"
                            alt={"AET-01 LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">Trainee Creation Course <br /> with Trainee Artist Training by GMM Music </p>

                    </div>
                </SwiperSlide>

                {/* Part 7 BGConcert*/}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center py-8 pb-10  rounded-3xl border border-gray-500">
                        {/* BGConcert LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/BGConcert.png"
                            alt={"BGConcert LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl mt-8">FULL PRODUCTION WITH PROFESSIONAL TEAM THAI - INTERNATIONAL CONCERT</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full px-16">
                                <p className="text-white font-Montserrat text-center text-xs">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• Perform on a grand concert stage with full lighting&apos; sound&apos; and effects systems.</p>
                                <p className="text-white font-medium font-Montserrat text-xs">• The show is designed and supervised by a professional team from Harlem Shake.</p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• Opportunity to work with a national concert production team</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

                {/* Part 8 MegaMV*/}
                <SwiperSlide >
                    <div className="flex flex-col mt-10 justify-center items-center py-8 pb-10  rounded-3xl border border-gray-500">
                        {/* MegaMV LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/MegaMV.png"
                            alt={"MegaMV LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 items-center">
                            <div className="w-full px-16">
                                <p className="text-white font-Montserrat text-center text-xs">PROJECT HIGHLIGHT :</p>
                                <p className="text-white font-medium font-Montserrat text-xs mt-3">• Filming the MV for BLKGEM's Theme song with Full Production </p>
                                <p className="text-white font-medium font-Montserrat text-xs mb-4">• Under the supervision of Harlem Shake and the professional team of national production</p>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Detail */}
            <div className="w-full flex flex-col mt-20 px-2 ">
                {/* Vocal */}
                <div className="flex border-b border-white justify-between pb-4 pl-2">
                    <p className="text-white font-Montserrat font-bold text-2xl md:text-3xl lg:text-4xl">VOCAL</p>
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
                    <p className="text-white font-Montserrat font-bold text-2xl md:text-3xl lg:text-4xl">DANCE</p>
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
                    <p className="text-white font-Montserrat font-bold text-2xl md:text-3xl lg:text-4xl">RAP</p>
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
                    <p className="text-white font-Montserrat font-bold text-2xl md:text-3xl lg:text-4xl">PERFORMANCE</p>
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
