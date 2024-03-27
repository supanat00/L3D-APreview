import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Video Background */}
      <video
        src="/video/rgb-bg.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
        />

      {/* Part One */}      
      <div className="flex before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl before:dark:from-transparent before:lg:h-[360px] z-[-1] p-20">
        {/* Logo */}
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logos/tkobro_logo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
        />        
      </div>
      {/* Model Show */}
        <div className="">
          <Scene />
        </div>

      

      {/* part.3 */}
      {/* <div className="text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div> */}
    </main>
  );
}
