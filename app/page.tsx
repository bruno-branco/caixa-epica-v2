import Image from "next/image";
import FireForge from "./components/fire-forge";
import LeadForm from "./components/lead-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen text-[0]">
      <div className="relative w-full h-[1024px] bg-cover bg-center bg-[url(/bg-1.jpg)]">
        <div className="absolute inset-0  bg-gradient-to-b from-transparent via-gray-950 to-black md:bg-gradient-to-r md:from-transparent md:via-black/60 md:to-black" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:flex-row md:items-start md:justify-between md:px-8 lg:px-20">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-20">
            <div className="absolute left-0 top-0 hidden md:block h-full w-0 shadow-[100px_0px_300px_100px_rgba(56,42,21,0.8)] z-10" />

            <Image
              src={"/logo.png"}
              width={305}
              height={227}
              alt="logo"
              className="w-40 h-auto md:w-[305px] md:h-[227px] mt-8 md:mt-0"
            />

            <div className="flex flex-col items-center md:items-start w-full max-w-md mt-4">
              <p className="text-base text-[#FEB546] font-bebas font-bold tracking-wide md:text-2xl">
                PARTICIPE
              </p>
              <p className="text-3xl text-white font-bebas font-bold leading-tight md:text-5xl lg:text-7xl mt-2 md:mt-4">
                DO NOSSO SORTEIO DE MINIATURAS
              </p>
              <div className="border-b-[#FFB548] border-b-4 w-16 md:w-24 h-[6px] mx-auto mt-2 md:mx-0" />
            </div>
          </div>

          <Card className="bg-transparent self-center border-none drop-shadow-2xl rounded-md p-4 w-full max-w-sm mt-12 md:-mt-10 md:ml-8 lg:mr-0 ">
            <CardContent className="p-0">
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </div>
      {/*       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4"></footer> */}
      <FireForge />
    </main>
  );
}
