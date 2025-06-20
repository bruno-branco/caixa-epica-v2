import Image from "next/image";
import FireForge from "./components/fire-forge";
import LeadForm from "./components/lead-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex gap-0 flex-col text-[0]">
      <div className="bg-[url(/bg-1.jpg)] w-full h-[1024px] flex bg-cover p-0 relative z-0 m-0 justify-between">
        <div className="w-full bg-gradient-to-r from-transparent to-black/90 h-full absolute" />
        <div className="flex flex-col m-8">
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
        </div>
        <Card className="h-max bg-transparent mr-20 border-none drop-shadow-2xl/100 self-center rounded-md">
          <CardContent>
            <LeadForm />
          </CardContent>
        </Card>
      </div>
      {/*       <div className="bg-[url(/bg-2.jpg)] w-full flex h-[893px] -mt-1 bg-contain"></div> */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>

      {/* Fire effect */}
      <FireForge />
    </main>
  );
}
