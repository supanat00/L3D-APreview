'use client'
import dynamic from "next/dynamic";
import Image from 'next/image'

import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Video = dynamic(() => import("./Video"), {
    ssr: true,
});

// const Sequence = dynamic(() => import('./Sequence'), {
//     ssr: true,
// });

gsap.registerPlugin(ScrollTrigger)

export default function Intro() {

    // const main = useRef(null);

    // useLayoutEffect(() => {

    //     const t1 = gsap.timeline({
    //         scrollTrigger: {
    //             start: "top end",
    //             end: "+=100px",
    //             scrub: true,
    //             markers: true
    //         }
    //     })

    //     t1.to(sequence.current, { yPercent: -50, duration: 3 }, 0)
    //     t1.from(sequence.current, { yPercent: 0, duration: 3 }, 0)
    // }, []);



    useEffect(() => {
        const introDiv = document.querySelectorAll(".intro-div")
        const sequenceImg = document.querySelectorAll(".sequenceimg")
        const blkLogo = document.querySelectorAll(".blkgemlogo")
        const sequenceWrap = document.querySelectorAll(".sequence-wrap")

        const sequenceimg = gsap.timeline({
            scrollTrigger: {
                pin: true,
                pinSpacing: false,
                trigger: sequenceImg,
                start: "20% 20%",
                end: "130% 70%",
                endTrigger: sequenceWrap,
                // markers: true,
            },
        });

    })

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">


            {/* Sequence Show */}
            {/* <div className="sequenceimg relative w-full flex flex-col items-center justify-center overflow-hidden z-50"
                >
                    <Sequence />
                </div> */}

            <div className="sequence-wrap relative w-full flex flex-col items-center justify-center overflow-hidden z-50"
            >
                <div className="sequenceimg  relative flex w-full h-full items-center justify-center ">
                    {/* BG */}
                    <Image
                        className="absoslute w-full "
                        src="/logos/1713979815109.png"
                        alt={"BLKGEM LOGO"}
                        priority={true}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                </div>

                {/* BLKGEM LOGO*/}
                <Image
                    className="blkgemlogo                    
                        w-32 "
                    src="/logos/blkgem.svg"
                    alt={"BLKGEM LOGO"}
                    priority={true}
                    width={450}
                    height={450}
                    sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                />
                {/* TITLE */}
                <p className="text-primary text-center font-Montserrat leading-none font-black mt-48 px-8 md:px-20 lg:px-40 text-3xl md:text-5xl lg:text-6xl"
                >THE ART OF
                    ENTERTAINMENT
                    ACADEMY
                </p>

            </div>




            {/* wrap-2 */}
            <div className="video-wrap flex flex-col w-full h-full items-center justify-center mt-20">

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


        </div>
    );
}
