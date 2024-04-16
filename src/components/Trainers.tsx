
import { images } from "../utils/constants";
import Image from 'next/image'

export default function Trainers() {
    return (
        <div className="w-full flex flex-col  overflow-hidden">
            {/* line1 */}
            <div className="moveL w-full flex mt-12 ">
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
            {/* line2 */}
            <div className="moveR w-full flex flex-row-reverse mt-12  ">
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
