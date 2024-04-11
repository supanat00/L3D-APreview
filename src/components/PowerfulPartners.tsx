"use client";
import Image from 'next/image'

export default function Trainers() {
    return (
        // POWERFUL PARTNERS
        <div className="flex flex-col mt-10 items-center justify-center">
            {/* Header */}
            <p className="text-gray-500 font-Montserrat text-center text-md ">POWERFUL PARTNERS</p>
            {/* Body */}
            <div className="flex flex-col mt-6 items-center">
                {/* GMM MUSIC ICON */}
                <div className="mt-5">
                    <Image
                        className="w-24"
                        src="/logos/gmmmusic.svg"
                        alt={"gmmmusic"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
                {/* row one */}
                <div className="flex mt-6 justify-center w-full px-10">
                    <div className="w-1/4 flex justify-center px-2">
                        <Image
                            className="w-full"
                            src="/logos/gnest.svg"
                            alt={"gnest"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                    <div className="w-1/4 flex justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/whitefox.svg"
                            alt={"whitefox"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                    <div className="w-1/4 flex justify-center px-6">
                        <Image
                            className="w-full"
                            src="/logos/wm.svg"
                            alt={"wm"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                    <div className="w-1/4 flex justify-center px-4">
                        <Image
                            className="w-full "
                            src="/logos/one31.svg"
                            alt={"one31"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                </div>
                {/* row two */}
                <div className="flex justify-center w-full px-10">
                    <div className="w-1/4 flex justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/gmmshow.svg"
                            alt={"gmmshow"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/4 flex justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/sanam.svg"
                            alt={"sanam"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/4 flex justify-center px-0.5">
                        <Image
                            className="w-full"
                            src="/logos/grammygold.svg"
                            alt={"grammygold"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/4 flex justify-center px-3">
                        <Image
                            className="w-full"
                            src="/logos/newcountry.svg"
                            alt={"newcountry"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                </div>
                {/* row three */}
                <div className="flex justify-center w-full px-20">
                    <div className="w-1/3 flex justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/thaidall.svg"
                            alt={"thaidall"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/3 flex justify-center px-5">
                        <Image
                            className="w-full"
                            src="/logos/clubclass.svg"
                            alt={"clubclass"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/3 flex justify-center px-0.5">
                        <Image
                            className="w-full"
                            src="/logos/hariemshake.svg"
                            alt={"hariemshake"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                </div>


            </div>

            {/* BRIDGE TO ASIA. */}
            <p className="text-gray-500 text-center font-Montserrat text-md mt-12">BRIDGE TO ASIA.</p>
            {/*  */}
            <div className="flex mt-8 w-full justify-center">
                <div className="flex flex-col mx-3">
                    <div className="flex w-ful space-x-4">
                        <Image
                            className="w-10"
                            src="/logos/thai.png"
                            alt={"thailand"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                        <p className="text-white font-Montserrat font-bold text-center text-md">THAILAND</p>
                    </div>
                    <div className="flex w-full space-x-4 mt-6">
                        <Image
                            className="w-10"
                            src="/logos/japan.png"
                            alt={"japan"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                        <p className="text-white font-Montserrat font-bold text-center text-md">JAPAN</p>
                    </div>

                </div>

                <div className="flex flex-col mx-3">
                    <div className="flex w-ful space-x-4">
                        <Image
                            className="w-10"
                            src="/logos/korean.png"
                            alt={"korean"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                        <p className="text-white font-Montserrat font-bold text-center text-md">KOREA</p>
                    </div>
                    <div className="flex w-full space-x-4 mt-6">
                        <Image
                            className="w-10"
                            src="/logos/chainese.png"
                            alt={"whitefox"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                        <p className="text-white font-Montserrat font-bold text-center text-md">CHINA</p>
                    </div>

                </div>
            </div>
            <div className="flex w-full -mt-16">
                <Image
                    className="w-full"
                    src="/logos/model2.png"
                    alt={"model2"}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 1080px) 1920px, calc(95.5vw - 19px)"
                />
            </div>
            <div className="flex w-full bg-white items-center justify-center">
                <p className="text-black font-Montserrat font-bold text-center text-3xl leading-none">BE AN ARTIST <br /> HEAR & NOW</p>
            </div>

            <div className="flex flex-col w-full  items-center justify-center mt-10">
                <p className="text-white text-center text-sm font-Montserrat">VISIT OUR WEBSITE</p>
                <div className="flex w-full items-center justify-center">
                    <a
                        rel="noopener"
                        href="https://www.blkgemofficial.com"
                        target="_blank">
                        <button
                            type="button"
                            className="mt-6 py-0.5 text-gray-900 font-Montserrat bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-lg  px-24  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >BLKGEMOFFICIAL.COM</button>
                    </a>
                </div>
            </div>
        </div>


    );
}
