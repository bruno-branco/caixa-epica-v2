import Image from "next/image";
import FireForge from "./components/fire-forge";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-[url(/bg-1.jpg)] w-full h-[893px] flex flex-col bg-cover p-8 relative z-0">
        <div className="absolute left-0 top-0 h-full w-0 shadow-[100px_0px_300px_100px_rgba(56,42,21,0.8)]" />
        <Image
          src={"/logo.png"}
          width={305}
          height={227}
          alt="logo"
          className="w-[305px] h-[227px] z-20"
        />
        <div className="flex flex-col w-max relative">
          <p className="text-2xl mt-8 text-[#FEB546] font-bebas font-bold scale-y-[1.1] scale-x-[0.8]">
            CONHEÇA
          </p>
          <p className="text-[80px] mt-8 text-[#fff] font-bebas font-bold scale-y-[1.1] scale-x-[0.8] w-[400px]">
            UM NOVO <span className="ml-8">CONCEITO </span>{" "}
            <span className="ml-16">EM RPG</span>
          </p>
          <div className="border-b-[#FFB548] border-b-8 w-[100px] h-[10px] mx-auto mt-2" />
        </div>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>

      {/* Add some content to enable scrolling for testing */}
      <div className="h-[200vh] bg-gray-900 p-8">
        <p className="text-white text-center">
          Scroll down to see the fire effect intensify!
        </p>
      </div>

      {/* Fire effect */}
      <FireForge />
    </main>
  );
}
