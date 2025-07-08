import Image from "next/image";
import FireForge from "../../components/fire-forge";
import LeadForm from "./components/lead-form";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import RaffleRulesModal from "./components/rules-modal";

export default function Sorteio() {
  return (
    <Dialog>
      {/* The DialogContent is the modal window.
        - We set a max-width like `max-w-2xl` to make it wider.
        - The background color is removed from here because the modal component handles it.
        - p-0 removes the default padding so our modal component can control its own spacing.
      */}
      <DialogContent className="max-w-2xl border-none p-0 bg-transparent">
        <RaffleRulesModal />
      </DialogContent>

      {/* The rest of your page remains exactly the same. */}
      <main className="flex flex-col min-h-screen text-[0] bg-[url(/bg-2.jpg)]">
        <div className="flex relative w-full min-h-screen bg-cover bg-center bg-[url(/bg-1.jpg)]">
          {/*dark gradient*/}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-black md:bg-gradient-to-r md:from-transparent md:via-black/60 md:to-black" />

          <div className="flex flex-col w-full justify-center items-center">
            <div className="relative z-10 flex w-full items-center justify-center md:flex-row md:items-start md:justify-between md:px-8 lg:px-20">
              <div className="flex items-center w-full text-center md:mt-8 gap-8 h-full">
                {/*                 <div className="absolute left-0 top-0 hidden md:block h-full w-0 shadow-[100px_0px_300px_100px_rgba(56,42,21,0.4)] z-10" /> */}
                <Image
                  src={"/logo.png"}
                  width={305}
                  height={227}
                  alt="logo"
                  className="w-40 h-auto md:min-w-[200px] md:h-auto mt-2 md:mt-0 mx-auto"
                />

                <div className="border-l-[#FFB548]/80 border-l-4 w-max h-full" />
                <div className="flex flex-col items-center md:items-center w-full mt-4 mx-auto">
                  <p className="text-[#FEB546] font-bebas font-bold tracking-wide md:text-7xl lg:text-7xl mx-auto">
                    PARTICIPE{" "}
                    <span className="text-white">DO SORTEIO DE MINIATURAS</span>
                  </p>
                </div>
              </div>
            </div>

            <Image
              src={"/asset-1.png"}
              width={700}
              height={700}
              alt="asset"
              className="mt-0 brightness-100 md:w-[1080px] md:h-auto w-auto self-center"
            />
          </div>
          <Card className="bg-transparent self-center border-none drop-shadow-2xl rounded-md p-4 w-full max-w-sm mt-12 md:-mt-10 md:ml-8 lg:mr-4 ">
            <CardContent className="p-0">
              <LeadForm />
            </CardContent>
          </Card>
        </div>
        <FireForge />
      </main>
    </Dialog>
  );
}
