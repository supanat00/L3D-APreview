"use client";
import { images } from "../utils/constants";
import Image from 'next/image'

export default function Trainers() {
    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="moveL w-full flex mt-12 items-center justify-center ">
                {images.map((pic, idx) => (
                    <Image
                        key={idx}
                        className="w-40 mx-3"
                        src={pic.src}
                        alt={""}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                ))}
                {images.map((pic, idx) => (
                    <Image
                        key={idx}
                        className="w-40 mx-3"
                        src={pic.src}
                        alt={""}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                ))}
            </div>
            <div className="moveR w-full flex mt-12 items-center justify-center ">
                {images.map((pic, idx) => (
                    <Image
                        key={idx}
                        className="w-40 mx-3"
                        src={pic.src}
                        alt={""}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                ))}
                {images.map((pic, idx) => (
                    <Image
                        key={idx}
                        className="w-40 mx-3"
                        src={pic.src}
                        alt={""}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                ))}
            </div>


        </div>



    );
}
