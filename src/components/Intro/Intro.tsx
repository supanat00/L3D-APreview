"use client"
import dynamic from "next/dynamic";
import Image from 'next/image'

// import { useRef, useEffect } from "react";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Video = dynamic(() => import("./Video"), {
    ssr: true,
});

const Sequence = dynamic(() => import('./Sequence'), {
    ssr: true,
});

// gsap.registerPlugin(ScrollTrigger)

// const comp = useRef(null)
// useEffect(() => {
//   gsap.to(".blkgemlogo", {
//     pin: true,
//     start: 'top top',
//     end: '+=400',
//     markers: true,
//   });
// },
// );

// ref={comp}

export default function Intro() {
    return (
        <div className="flex flex-col items-center "
        >

            {/* Sequence Show */}
            <Sequence />

            {/* BLKGEM LOGO*/}
            <Image
                className="blkgemlogo
                     w-32 mt-20                     
                     lg:w-60 lg:mt-36
                     xl:w-60 xl:mt-32"
                src="/logos/blkgem.svg"
                alt={"BLKGEM LOGO"}
                priority={true}
                width={450}
                height={450}
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            {/* TITLE */}
            <p className="text-primary text-center font-Montserrat leading-none font-black mt-16 px-8 md:px-20 lg:px-40 text-3xl md:text-5xl lg:text-6xl"
            >THE ART OF
                ENTERTAINMENT
                ACADEMY
            </p>


            {/* Video Show */}
            <Video />



            {/* Icon BLKGEM / GMMMUSIC / HARIEM SHAKE */}
            <div className="flex flex-row mt-20 justify-center item-center px-10">
                {/* GMM LOGO */}
                <div className="flex flex-col justify-center item-center -mr-6">
                    <Image
                        className="w-full"
                        src="/logos/gmm.png"
                        alt={"GMM LOGO"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>

                {/* BLKGEM LOGO */}
                <div className="flex flex-col justify-center item-center px-12 w-48">
                    <Image
                        className="w-full"
                        src="/logos/blkgem.png"
                        alt={"BLKGEM LOGO"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>

                {/* HARIEM LOGO */}
                <div className="flex flex-col justify-center item-center -ml-6">
                    <Image
                        className="w-full"
                        src="/logos/hariem.png"
                        alt={"BLKGEM LOGO"}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>
            </div>
        </div>



    );
}
