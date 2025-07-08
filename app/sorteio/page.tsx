import Image from "next/image";
import FireForge from "../../components/fire-forge";
import LeadForm from "./components/lead-form";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import RaffleRulesModal from "./components/rules-modal";

export default function Sorteio() {
  return (
    <>
      {/* The Dialog for the rules modal remains unchanged. */}
      <Dialog>
        <DialogContent className="max-w-2xl border-none bg-transparent p-0">
          <RaffleRulesModal />
        </DialogContent>

        <main className="flex min-h-screen flex-col bg-[url(/bg-2.jpg)] text-[0]">
          <div
            className="relative flex min-h-screen w-full flex-grow items-center justify-center bg-cover bg-center p-4 sm:p-6 lg:p-8"
            style={{ backgroundImage: "url(/bg-1.jpg)" }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-black md:bg-gradient-to-r md:from-transparent md:via-black/60 md:to-black" />

            {/* This is the main content grid.
            - On mobile (default), it's a single column (`grid-cols-1`), so items stack vertically.
            - On desktop (`md:`), it becomes a two-column grid (`md:grid-cols-5`) for precise alignment.
          */}
            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-5 md:gap-x-12">
              {/* Left Column Container (spans 3 of 5 grid columns on desktop) */}
              <div className="md:col-span-3">
                <div className="flex flex-col items-center justify-center gap-2 text-center md:items-start md:text-left">
                  {/* Header: Logo & Title */}
                  <div className="flex w-full flex-col items-center gap-6 md:flex-row">
                    <Image
                      src={"/logo.png"}
                      width={305}
                      height={227}
                      alt="Caixa Épica Logo"
                      className="w-40 h-auto md:min-w-[200px]"
                    />
                    <div className="hidden h-24 border-l-4 border-l-[#FFB548]/80 md:block" />
                    <h1 className="font-bebas text-5xl font-bold tracking-wide md:text-6xl lg:text-6xl w-full">
                      <span className="text-[#FEB546]">PARTICIPE DO </span>
                      <br />
                      <span className="text-white">SORTEIO DE MINIATURAS</span>
                    </h1>
                  </div>

                  {/* Miniatures Image */}
                  <Image
                    src={"/asset-1.png"}
                    width={700}
                    height={700}
                    alt="Coleção de miniaturas do sorteio"
                    className="mt-0 w-full max-w-xl self-center brightness-110 md:min-w-[920px]"
                  />
                </div>
              </div>

              {/* Right Column: Form (spans 2 of 5 grid columns on desktop) */}
              <div className="flex w-full max-w-sm justify-self-center md:col-span-2 md:justify-self-center">
                <Card className="w-full rounded-md border-none bg-transparent p-0 drop-shadow-2xl">
                  <CardContent className="p-0">
                    <LeadForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <FireForge />
        </main>
      </Dialog>
    </>
  );
}
