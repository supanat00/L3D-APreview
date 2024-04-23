import dynamic from "next/dynamic";
import Image from 'next/image'

// import { useRef, useEffect } from "react";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: true,
});

const Video = dynamic(() => import("../components/Video"), {
  ssr: true,
});

const OurPlaces = dynamic(() => import("../components/OurPlaces"), {
  ssr: true,
});

const PowerfulPartners = dynamic(() => import("../components/PowerfulPartners"), {
  ssr: true,
});

const TopScroll = dynamic(() => import('../components/TopScroll'), {
  ssr: true,
});

const OurProject = dynamic(() => import('../components/OurProject'), {
  ssr: true,
});

const OurProfessional = dynamic(() => import('../components/OurProfessional'), {
  ssr: true,
});

const Sequence = dynamic(() => import('../components/Sequence'), {
  ssr: true,
});



export default function Home() {
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


  return (
    <div className="flex flex-col h-full w-full" >
      {/* PART BLKGEM VIDEO SHOW*/}
      <div className="flex flex-col items-center "
      >
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

        {/* Sequence Show */}
        <Sequence />


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

      {/* PART BLKGEM ICONIC */}
      <div className="box-c flex flex-col items-center">
        {/* BLKGEM ICONIC */}
        <div className="flex flex-col justify-center items-center w-full mt-28">
          <p className="text-white text-center font-Montserrat font-black text-md md:text-2xl lg:text-3xl">BLKGEM ICONIC</p>
          <Scene />

          {/* <Image
            className="w-2/3"
            src="/logos/model.png"
            alt={"Model"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          /> */}
          <div className="flex items-center justify-center mt-6">
            {/* bb logo */}
            <Image
              className="w-28 mx-6 md:w-40 lg:w-48 xl:w-64 2xl:w-80 "
              src="/logos/bb.svg"
              alt={"BB LOGO"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <Image
              className="w-28 mx-6 md:w-40 lg:w-48 xl:w-64 2xl:w-80 "
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
      <OurProject />

      {/* PART OUR PROFESSIONAL TRAINERS */}
      <OurProfessional />

      {/* PART OUR PLACE */}
      <OurPlaces />

      {/* PART ARTIST RECRUIT */}
      <div className="flex w-full flex-col mt-24 px-4">
        <p className="text-white text-center text-3xl font-Montserrat font-black leading-none">
          ARTIST RECRUIT <br />
          & DEVELOPMENT</p>
        <div className="flex flex-col w-full mt-8">
          {/* 80 */}
          <div className="flex w-full border-b border-gray-400 items-center px-16 py-2">
            <div className="w-28">
              <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
                80</p>
            </div>
            <div>
              <p className="text-white text-left text-md font-Montserrat font-bold">
                AUDITIONS</p>
            </div>
          </div>
          {/* 68 */}
          <div className="flex w-full border-b border-gray-400 items-center px-16 py-2">
            <div className="w-28">
              <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
                68</p>
            </div>
            <div>
              <p className="text-white text-left text-md font-Montserrat font-bold">
                BANGKOK</p>
            </div>
          </div>
          {/* 12 */}
          <div className="flex w-full border-b border-gray-400 items-center px-16 py-2">
            <div className="w-28">
              <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
                12</p>
            </div>
            <div>
              <p className="text-white text-left text-md font-Montserrat font-bold">
                NATIONWIDE</p>
            </div>
          </div>
          {/* 200 */}
          <div className="flex w-full border-b border-gray-400 items-center pl-16  py-2">
            <div className="w-28">
              <p className="text-white text-left text-3xl font-Montserrat font-bold mr-16">
                200</p>
            </div>
            <div>
              <p className="text-white text-left text-md font-Montserrat font-bold">
                TRAINEES / YEAR</p>
            </div>
          </div>
        </div>
      </div>

      {/* PART POWERFUL PARTNERS */}
      <PowerfulPartners />

      {/* ENDDING */}
      <div className="flex w-full flex-col mt-8 items-center">

        {/* STICKER LINE DOWNLOAD */}
        <div className="w-full px-4 mt-8">
          <a href="https://www.google.com/?gws_rd=ssl" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative bg-white p-2 rounded-xl">
            <div className="relative bg-white w-full p-2 rounded-xl">
              <Image
                className="absolute w-6 top-2 right-2"
                src="/logos/line2.svg"
                alt={"LINE2"}
                width={450}
                height={450}
                sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
              />
              <div className="flex justify-center mt-16 mb-14">
                <Image
                  className="w-28"
                  src="/sticker/BBGG-01.png"
                  alt={"sticker1"}
                  width={450}
                  height={450}
                  sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                />
                <Image
                  className="w-28"
                  src="/sticker/BBGG-10.png"
                  alt={"sticker3"}
                  width={450}
                  height={450}
                  sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                />
                <Image
                  className="w-28"
                  src="/sticker/BBGG-16.png"
                  alt={"sticker2"}
                  width={450}
                  height={450}
                  sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
                />
              </div>
              <p className="text-center mt-6 mb-1 text-lg md:text-2xl lg:text-3xl font-Montserrat">DOWNLOAD STICKER LINE</p>
            </div>
          </a>

        </div>

        {/* APPLICATION DOWNLOAD */}
        <div className="w-full px-4 mt-8">
          <div className="bg-white flex flex-col w-full p-2 rounded-xl justify-center items-center">
            <Image
              className="w-40 mt-8"
              src="/logos/blkgem2.svg"
              alt={"blkgem2"}
              width={450}
              height={450}
              sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
            />
            <p className="text-center mt-8 mb-1 text-lg md:text-2xl lg:text-3xl font-Montserrat">DOWNLOAD APPLICATION</p>
          </div>
        </div>

        {/* SOCIAL */}
        <p className="text-white mt-8 text-center text-md md:text-2xl lg:text-3xl font-Montserrat">BLKGEM.OFFICIAL</p>
        <div className="w-full flex justify-center mt-4 px-8">
          <Image
            className="w-4 mx-4"
            src="/logos/facebook.svg"
            alt={"FACEBOOK"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/x.svg"
            alt={"X"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/ig.svg"
            alt={"IG"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/youtube.svg"
            alt={"YOUTUBE"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />
          <Image
            className="w-6 mx-4"
            src="/logos/line.svg"
            alt={"LINE"}
            width={450}
            height={450}
            sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
          />

        </div>
        {/* Texts */}
        <p className="text-white mt-16 text-center font-bold text-sm md:text-2xl lg:text-3xl font-Montserrat">THE ART OF ENTERTAINMENT ACADEMY</p>
        <Image
          className="w-full mt-10"
          src="/logos/blackgem.svg"
          alt={"BLACKGEM"}
          width={450}
          height={450}
          sizes="(min-width: 720px) 650px, calc(95.5vw - 19px)"
        />
      </div>

      {/* TOP BUTTON */}
      <TopScroll />
    </div>

  );
}
