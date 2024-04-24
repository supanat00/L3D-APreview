import Image from 'next/image'

export default function Trainers() {
    return (
        // POWERFUL PARTNERS
        <div className="flex flex-col w-full mt-24 items-center justify-center">
            {/* Header */}
            <p className="text-gray-500 font-Montserrat text-center text-md ">POWERFUL PARTNERS</p>
            {/* Body */}
            <div className="flex flex-col mt-6 items-center">
                {/* GMM MUSIC ICON */}
                <div className="mt-5 items-center justify-center">
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
                <div className="flex mt-6  items-center justify-center w-full px-10">
                    <div className="w-1/4 flex  items-center justify-center px-2">
                        <Image
                            className="w-full"
                            src="/logos/gnest.svg"
                            alt={"gnest"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                    <div className="w-1/4 flex  items-center justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/whitefox.svg"
                            alt={"whitefox"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                    <div className="w-1/4 flex  items-center justify-center px-6">
                        <Image
                            className="w-full"
                            src="/logos/wm.svg"
                            alt={"wm"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>

                    <div className="w-1/4 flex  items-center justify-center px-4">
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
                <div className="flex  items-center justify-center w-full px-10">
                    <div className="w-1/4 flex  items-center justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/gmmshow.svg"
                            alt={"gmmshow"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/4 flex  items-center justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/sanam.svg"
                            alt={"sanam"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/4 flex  items-center justify-center px-0.5">
                        <Image
                            className="w-full"
                            src="/logos/grammygold.svg"
                            alt={"grammygold"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/4 flex  items-center justify-center px-3">
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
                <div className="flex  items-center justify-center w-full px-20">
                    <div className="w-1/3 flex  items-center justify-center px-4">
                        <Image
                            className="w-full"
                            src="/logos/thaidall.svg"
                            alt={"thaidall"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/3 flex  items-center justify-center px-5">
                        <Image
                            className="w-full"
                            src="/logos/clubclass.svg"
                            alt={"clubclass"}
                            width={450}
                            height={450}
                            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                        />
                    </div>
                    <div className="w-1/3 flex  items-center justify-center px-0.5">
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

            {/* Country */}
            <div className="flex mt-24 w-full justify-center z-30">
                {/* col one */}
                <div className="flex flex-col mx-3">
                    {/* thailand */}
                    <div className="flex w-full space-x-4">
                        <div className="w-8">
                            <Image
                                className="w-full"
                                src="/logos/thai.png"
                                alt={"thailand"}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </div>
                        <p className="text-white font-Montserrat font-bold text-center text-sm">THAILAND</p>
                    </div>
                    {/* korea */}
                    <div className="flex w-full space-x-4 mt-6">
                        <div className="w-8">
                            <Image
                                className="w-full"
                                src="/logos/japan.png"
                                alt={"japan"}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </div>
                        <p className="text-white font-Montserrat font-bold text-center text-sm">JAPAN</p>
                    </div>
                </div>
                {/* col two */}
                <div className="flex flex-col mx-3">
                    <div className="flex w-full space-x-4">
                        <div className="w-8">
                            <Image
                                className="w-full"
                                src="/logos/korean.png"
                                alt={"korean"}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </div>
                        <p className="text-white font-Montserrat font-bold text-center text-sm">KOREA</p>
                    </div>
                    <div className="flex w-full space-x-4 mt-6">
                        <div className="w-8">
                            <Image
                                className="w-full"
                                src="/logos/chainese.png"
                                alt={"whitefox"}
                                width={450}
                                height={450}
                                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                            />
                        </div>
                        <p className="text-white font-Montserrat font-bold text-center text-sm">CHINA</p>
                    </div>

                </div>
            </div>

            <div className="bg-black flex w-full mt-8 z-20">
                <Image
                    className="w-full"
                    src="/logos/model2.png"
                    alt={"model2"}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 1080px) 1920px, calc(95.5vw - 19px)"
                />
            </div>
            {/* BE AN ARTIST */}
            <div className="flex  w-full  items-center justify-center">
                <div className="flex flex-col w-full relative ">
                    <Image
                        className="w-full"
                        src="/logos/be-an2.jpg"
                        alt={"BE-AN"}
                        width={1920}
                        height={1080}
                        sizes="(min-width: 1080px) 1920px, calc(95.5vw - 19px)"
                    />
                </div>
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
                            className="mt-6 py-0.5 text-black font-Montserrat bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-lg  px-20"
                        >BLKGEMOFFICIAL.COM</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
