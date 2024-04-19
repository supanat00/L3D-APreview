import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image'

export default function OurProject() {
    return (
        <div className="flex flex-col mt-12 justify-center items-center overflow-hidden">
            {/* OUR PROJECT */}
            <p className="text-white text-center font-Montserrat font-black text-sm md:text-2xl lg:text-3xl">OUR PROJECT</p>

            {/* Contents Slide */}
            <Swiper
                slidesPerView={1.05}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation,]}
                className="flex w-full ">
                {/* Page 1 */}
                <SwiperSlide >
                    <div className="flex flex-col mt-12 justify-center items-center overflow-hidden">
                        {/* AWESOME LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/awesome.svg"
                            alt={"AWESOME LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-12 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">AUTHENTIC ARTIST EXPERIENCE</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 px-3 items-center">
                            <div className="w-full border border-gray-500 pl-4 pr-2 py-4">
                                <p className="text-gray-400 font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white  font-Montserrat text-xs mt-3">• MV.FULL PRODUCTION 100 SQ.M VIRTUAL PRODUCTION LED VOLUME</p>
                                <p className="text-white  font-Montserrat text-xs ">• INDIVIDUAL PICTURE & VDO PROFILE</p>
                                <p className="text-white  font-Montserrat text-xs ">• PROFESSIONAL TRAINING TEAM</p>
                                <p className="text-white  font-Montserrat text-xs ">• EXCLUSIVE MUSIC TRACK</p>
                                <p className="text-white  font-Montserrat text-xs mb-3">• PROFILE SHARING WITHIN LABELS UNDER GMM MUSIC</p>
                            </div>

                            {/* SEE MORE BUTTON */}
                            <a
                                rel="noopener"
                                href="https://www.google.com/?gws_rd=ssl"
                                target="_blank">
                                <button
                                    type="button"
                                    className="mt-6 py-0.5 text-gray-900 font-Montserrat font-medium bg-white border border-gray-300 focus:ring-4 focus:ring-gray-100 rounded-full text-xxs px-8"
                                >SEE MORE</button>
                            </a>

                            {/* DOT DOT DOT */}

                        </div>

                    </div>
                </SwiperSlide>
                {/* Page 2 */}
                <SwiperSlide >
                    <div className="flex flex-col mt-12 justify-center items-center overflow-hidden">
                        {/* AWESOME LOGO */}
                        <Image
                            className="w-56 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
                            src="/logos/awesome.svg"
                            alt={"AWESOME LOGO"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />

                        <p className="mt-12 text-white text-center text-sm font-Montserrat font-medium md:text-2xl lg:text-3xl">AUTHENTIC ARTIST EXPERIENCE</p>

                        {/* Project Highlight */}
                        <div className="w-full flex flex-col mt-8 px-3 items-center">
                            <div className="w-full border border-gray-500 pl-4 pr-2 py-4">
                                <p className="text-gray-400 font-Montserrat text-center text-xs ">PROJECT HIGHLIGHT :</p>
                                <p className="text-white  font-Montserrat text-xs mt-3">• MV.FULL PRODUCTION 100 SQ.M VIRTUAL PRODUCTION LED VOLUME</p>
                                <p className="text-white  font-Montserrat text-xs ">• INDIVIDUAL PICTURE & VDO PROFILE</p>
                                <p className="text-white  font-Montserrat text-xs ">• PROFESSIONAL TRAINING TEAM</p>
                                <p className="text-white  font-Montserrat text-xs ">• EXCLUSIVE MUSIC TRACK</p>
                                <p className="text-white  font-Montserrat text-xs mb-3">• PROFILE SHARING WITHIN LABELS UNDER GMM MUSIC</p>
                            </div>

                            {/* SEE MORE BUTTON */}
                            <a
                                rel="noopener"
                                href="https://www.google.com/?gws_rd=ssl"
                                target="_blank">
                                <button
                                    type="button"
                                    className="mt-6 py-0.5 text-gray-900 font-Montserrat font-medium bg-white border border-gray-300 focus:ring-4 focus:ring-gray-100 rounded-full text-xxs px-8"
                                >SEE MORE</button>
                            </a>

                            {/* DOT DOT DOT */}

                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>



            {/* Detail */}
            <div className="w-full flex flex-col mt-10 px-2 ">
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
        </div>
    );
}
