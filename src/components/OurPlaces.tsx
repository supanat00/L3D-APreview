"use client";
import { imagesour } from "../utils/constants";
import Image from 'next/image'

export default function OurPlaces() {
    return (
        <div className="w-full flex flex-col mt-8 overflow-hidden">
            {/* line1 */}
            <div className="ourplace w-full flex ">
                {imagesour.map((pic, idx) => (
                    <Image
                        key={idx}
                        className="w-60 mx-3"
                        src={pic.src}
                        alt={""}
                        width={450}
                        height={450}
                        sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                    />
                ))}
                {imagesour.map((pic, idx) => (
                    <Image
                        key={idx}
                        className="w-60 mx-3"
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
