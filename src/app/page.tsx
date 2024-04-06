import dynamic from "next/dynamic";
import Image from 'next/image'

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

const Video = dynamic(() => import('@/components/Video'), {
  ssr: false,
});



export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* PART BLKGEM VIDEO SHOW*/}
      <div className="flex flex-col items-center">
        {/* BLKGEM LOGO*/}
        <Image
          className="w-36 mt-24 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
          src="/logos/blkgem.svg"
          alt={"BLKGEM LOGO"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />
        {/* TITLE */}
        <p className="text-white text-center mt-16 px-5 md:px-20 lg:px-40 font-bold text-3xl md:text-5xl lg:text-6xl">THE ART OF ENTERTAINMENT ACADEMY</p>

        {/* Video Show */}
        <Video />

        {/* Icon BLKGEM / GMMMUSIC / HARIEM SHAKE */}
        <div className="flex mt-20">
          {/* GMM LOGO */}
          <Image
            className="w-16 md:w-40 lg:w-64 xl:w-80 2xl:w-96 "
            src="/logos/gmm.svg"
            alt={"GMM LOGO"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          {/* BLKGEM LOGO */}
          <Image
            className="mx-8 w-24 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
            src="/logos/blkgem.svg"
            alt={"BLKGEM LOGO"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          {/* HARIEM LOGO */}
          <Image
            className="w-16 md:w-40 lg:w-64 xl:w-80 2xl:w-96 "
            src="/logos/hariem.svg"
            alt={"BLKGEM LOGO"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
        </div>
      </div>

      {/* PART BLKGEM ICONIC */}
      <div className="flex flex-col items-center">
        {/* BLKGEM ICONIC */}
        <div className="mt-28">
          <p className="text-white text-center font-bold text-md md:text-2xl lg:text-3xl">BLKGEM ICONIC</p>
          <Scene />
          <div className="flex justify-around">
            {/* bb logo */}
            <Image
              className="w-24 md:w-40 lg:w-48 xl:w-64 2xl:w-80 "
              src="/logos/bb.svg"
              alt={"BB LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <Image
              className="w-24 md:w-40 lg:w-48 xl:w-64 2xl:w-80 "
              src="/logos/gg.svg"
              alt={"GG LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
          </div>
        </div>
      </div>

      {/* PART OUR PROJECT */}
      <div className="flex flex-col mt-12 items-center">
        {/* OUR PROJECT */}
        <p className="text-white text-center font-bold text-sm md:text-2xl lg:text-3xl">OUR PROJECT</p>



        {/* AWESOME LOGO */}
        <Image
          className="w-48 mt-16 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
          src="/logos/awesome.svg"
          alt={"AWESOME LOGO"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />

        <p className="mt-12 text-white text-center text-sm md:text-2xl lg:text-3xl">AUTHENTIC ARTIST EXPERIENCE</p>
      </div>


    </div>

  );
}
