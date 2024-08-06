import React from "react";
import {SparklesCore} from "@/components/ui/Sparkles";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
      <>
          <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              <div className="w-full absolute inset-0 h-screen">
                  <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF"/>
              </div>
              <h1 id="vycetka-header" className="text-2xl md:text-5xl xl:text-7xl font-bold text-center text-white relative z-20">
                  Výčetka
              </h1>
              <div className="z-10 flex flex-col md:flex-row gap-10 pt-12">
                  <Image className="outline-1 outline-white rounded-lg" width={200} height={200} alt="get it on google play" src="/googleplay.png"></Image>
                  <Image className="opacity-45 outline-1 outline-white rounded-lg" width={200} height={200} alt="get it on google play" src="/appstore.png"></Image>
              </div>
          </div>
          <div className="border-t border-t-gray-300 flex md:justify-evenly flex-row bg-black z-10 p-4 text-gray-300">
              <p className="hidden md:flex text-sm md:text-lg py-2">&copy; 2024 Max Juškevič. Všechna práva vyhrazena.</p>
              <Link href="/privacy">
                  <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-gray-300 dark:text-white text-black rounded-full font-bold transform hover:-translate-y-1 transition duration-400">
                      Ochrana soukromí
                  </button>
              </Link>
          </div>
      </>
  );
}

export default Home;