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
      <div className="flex flex-col items-center">
        {/* BLKGEM LOGO*/}
        <Image
          className="w-36 mt-16 md:w-48 lg:w-64 xl:w-80 2xl:w-96 "
          src="/logos/blkgem.svg"
          alt={"BLKGEM LOGO"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />
        {/* TITLE */}
        <p className="text-white text-center mt-14 px-5 md:px-20 lg:px-40 font-bold text-3xl md:text-5xl lg:text-6xl">THE ART OF ENTERTAINMENT ACADEMY</p>

        {/* Video Show */}
        <Video />

        {/* Icon BLKGEM / GMMMUSIC / HARIEM SHAKE */}
        <div className="flex mt-16">
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

        {/* BLKGEM ICONIC */}
        <div className="">
          <p className="text-white text-center mt-10">BLKGEM ICONIC</p>
          <Scene />
        </div>



        {/* OUR PROJECT */}
        <div>
          <p className="text-white">OUR PROJECT</p>
        </div>
        {/* OUR PROFESSIONAL TRAINERS */}
        {/* POWERFUL PARTNERS */}
        {/* OUR PLACE */}
        {/* VISIT OUR WEBSITE */}
        {/* STICKER LINE */}
        {/* DOWNLOAD APPLICATION */}
        {/* SOCIAL */}



        {/* GO TO TOP BUTTON */}


      </div>

    </div>

  );
}
