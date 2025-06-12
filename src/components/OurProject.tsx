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

            {/* Contents Slide (REFACTORED SECTION) */}
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
                className="mySwiper flex w-full mt-10">

                {/* Page 1: AWESOME SUMMER */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/awesome.svg"
                            alt="AWESOME LOGO"
                            width={450}
                            height={450}
                            priority
                        />
                        <p className="mb-8 text-white text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">
                            AUTHENTIC ARTIST EXPERIENCE
                        </p>
                        <div className="w-full max-w-md">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• MV.FULL PRODUCTION 100 SQ.M VIRTUAL</p>
                                <p>• PRODUCTION LED VOLUME</p>
                                <p>• INDIVIDUAL PICTURE & VDO PROFILE</p>
                                <p>• PROFESSIONAL TRAINING TEAM</p>
                                <p>• EXCLUSIVE MUSIC TRACK</p>
                                <p>• PROFILE SHARING WITHIN LABELS UNDER GMM MUSIC</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Page 2: GEM JUNIOR */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/gemjunior.png"
                            alt="gemjunior LOGO"
                            width={450}
                            height={450}
                        />
                        <p className="mb-8 text-white text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">
                            THE ARTIST JOURNEY BEGINS
                        </p>
                        <div className="w-full max-w-md">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• VOCAL / DANCE / ACTING</p>
                                <p>• PROFILE SHOOTING</p>
                                <p>• DANCING WITH BB-GG</p>
                                <p>• SHOWCASE</p>
                                <p>• SUMMER FOR NATIONAL AND INTERNATIONAL</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Page 3: TEEN CAMP */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/TeenCamp.png"
                            alt="TeenCamp LOGO"
                            width={450}
                            height={450}
                        />
                        <div className="w-full max-w-md mt-8">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• Learn to sing&apos; dance&apos; rap&apos; act&apos; practice modeling</p>
                                <p>• Showcase on the GMM Auditorium stage</p>
                                <p>• Special jacket for Teen Camp</p>
                                <p>• Learn for a total of 7 days</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Page 4: Snow Gem */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/SnowGem.png"
                            alt="SnowGem LOGO"
                            width={450}
                            height={450}
                        />
                        <div className="w-full max-w-md mt-8">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• Musical performance in the snow on the GMM Auditorium stage</p>
                                <p>• Special show&apos; cute bunny ears</p>
                                <p>• Practice singing&apos; playing&apos; dancing&apos; acting&apos; modeling and showcase on stage</p>
                                <p>• A delicious lunch and snacks</p>
                                <p>• Learn for 9 days</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Page 5: GEMX */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/GEMX.png"
                            alt="GEMX LOGO"
                            width={450}
                            height={450}
                        />
                        <p className="mb-8 text-white text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">
                            Experience Sharing & Real Collaboration
                        </p>
                        <div className="w-full max-w-md">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• Learn singing&apos; dancing and performing techniques on stage like an artist with a teacher who creates real artists</p>
                                <p>• Dance workshop with Korean choreographer BICO LIM&apos; the man behind Enhypen / Riize / TITOT</p>
                                <p>• Workshop on building Inner and confidence with Lukkade Metinee</p>
                                <p>• Profile Shooting and Com-card to present profiles to music labels</p>
                                <p>• Open the experience of performing on the concert stage</p>
                                <p>• Casting & Audition with famous artists and leading music label teams in Thailand from GNEST / GeneLab / LIT Entertainment / ONE MUSIC / Sanamluang Music / WhiteFox / White Music / ONE31</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Page 6: AET-01 */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/AET-01.png"
                            alt="AET-01 LOGO"
                            width={450}
                            height={450}
                        />
                        <p className="text-white text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">
                            Trainee Creation Course <br /> with Trainee Artist Training by GMM Music
                        </p>
                    </div>
                </SwiperSlide>

                {/* Page 7: BGConcert */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/BGConcert.png"
                            alt="BGConcert LOGO"
                            width={450}
                            height={450}
                        />
                        <p className="mb-8 text-white text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">
                            FULL PRODUCTION WITH PROFESSIONAL TEAM THAI - INTERNATIONAL CONCERT
                        </p>
                        <div className="w-full max-w-md">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• Perform on a grand concert stage with full lighting&apos; sound&apos; and effects systems.</p>
                                <p>• The show is designed and supervised by a professional team from Harlem Shake.</p>
                                <p>• Opportunity to work with a national concert production team</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Page 8: MegaMV */}
                <SwiperSlide>
                    <div className="flex flex-col h-[400px] items-center justify-center p-6 rounded-3xl border border-gray-500 text-center">
                        <Image
                            className="h-28 w-auto mb-8"
                            src="/logos/MegaMV.png"
                            alt="MegaMV LOGO"
                            width={450}
                            height={450}
                        />
                        <div className="w-full max-w-md mt-8">
                            <p className="text-white font-Montserrat text-xs mb-4">PROJECT HIGHLIGHT :</p>
                            <div className="space-y-2 text-white font-medium font-Montserrat text-xs">
                                <p>• Filming the MV for BLKGEM&apos;s Theme song with Full Production</p>
                                <p>• Under the supervision of Harlem Shake and the professional team of national production</p>
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
