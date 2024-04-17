
import { imagesour } from "../utils/constants";
import Image from 'next/image'

export default function OurPlaces() {
    return (
        <div className="flex flex-col w-full mt-16 items-center">
            {/* OUR PLACE */}
            <p className="text-white text-center font-Montserrat font-bold text-sm md:text-2xl lg:text-3xl">OUR PLACE</p>
            {/* BLKGEM PLACE PICTURE */}
            <div className="w-full flex flex-col overflow-hidden">
                {/* line1 */}
                <div className="ourplaces w-full mt-8 flex">
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

            <p className="text-gray-400 mt-10 text-center text-md font-Montserrat md:text-2xl lg:text-3xl">M THEATRE & GMM BUILDING FLOOR 22</p>
        </div>



    );
}
