import Image from "next/image";
import FireForge from "../../../components/fire-forge"; // Assuming this component exists
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This is the main component for the raffle rules page.
export default function RaffleRulesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[url(/bg-2.jpg)] text-white">
      {/* Main container with background and gradient overlay */}
      <div className="relative w-full flex-grow bg-cover bg-center bg-[url(/bg-1.jpg)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full p-4 md:px-8 lg:px-20">
          {/* Logo */}
          <Image
            src={"/logo.png"}
            width={200}
            height={149}
            alt="logo"
            className="w-40 h-auto md:w-52 mt-8 md:mt-12"
          />

          {/* Rules Container */}
          <div className="w-full max-w-4xl mt-8 mb-16 p-6 md:p-10 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
            <h1 className="text-3xl md:text-5xl text-center font-bebas font-bold text-[#FEB546] tracking-wider">
              Regras do Sorteio – Caixa Épica
            </h1>
            <div className="border-b-[#FFB548] border-b-2 md:border-b-4 w-24 md:w-32 h-1 mx-auto mt-3 mb-8" />

            <div className="space-y-6 text-base md:text-lg text-gray-200">
              {/* Section: Premiação */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-[#FEB546] mb-2">
                  Premiação Total
                </h2>
                <p>
                  Ao longo da campanha, serão sorteadas{" "}
                  <span className="font-bold text-white">
                    5 miniaturas de resina
                  </span>{" "}
                  no total. Cada vencedor receberá 1 miniatura. A distribuição
                  dos prêmios ocorrerá ao longo de mais de um sorteio, conforme
                  cronograma a ser divulgado.
                </p>
                <ul className="list-disc list-inside mt-2 pl-4 space-y-1">
                  <li>2 miniaturas pequenas</li>
                  <li>2 miniaturas médias</li>
                  <li>1 miniatura grande</li>
                </ul>
              </section>

              {/* Section: Datas */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-[#FEB546] mb-2">
                  Datas dos Sorteios
                </h2>
                <p>
                  As datas dos sorteios serão{" "}
                  <span className="font-bold text-white">
                    definidas e divulgadas exclusivamente no Instagram oficial
                  </span>{" "}
                  da Caixa Épica –{" "}
                  <a
                    href="https://www.instagram.com/caixaepica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#FFB548] hover:underline"
                  >
                    @caixaepica
                  </a>
                  . Fique atento às postagens para não perder as oportunidades!
                </p>
              </section>

              {/* Section: Como Participar */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-[#FEB546] mb-2">
                  Regras para Participar
                </h2>
                <p>Para participar, o usuário deve obrigatoriamente:</p>
                <ul className="list-decimal list-inside mt-2 pl-4 space-y-2">
                  <li>
                    Preencher o formulário de participação disponível no site
                    oficial da campanha, informando nome completo e número de
                    telefone com WhatsApp válido.
                  </li>
                  <li>
                    Seguir o perfil oficial da Caixa Épica no Instagram (
                    <a
                      href="https://www.instagram.com/caixaepica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FFB548] hover:underline"
                    >
                      @caixaepica
                    </a>
                    ) e manter o follow até a realização do sorteio.
                  </li>
                  <li>
                    Comentar no post oficial do sorteio, marcando{" "}
                    <span className="font-bold text-white">
                      3 amigos diferentes
                    </span>
                    .
                  </li>
                </ul>
              </section>

              {/* Section: Importante */}
              <section className="p-4 bg-gray-900/50 border border-yellow-500/20 rounded-md">
                <h3 className="text-xl md:text-2xl font-bebas font-bold text-[#FEB546] mb-2">
                  Importante
                </h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>
                    Os perfis marcados não podem ser empresas, perfis fakes ou
                    inativos.
                  </li>
                  <li>
                    Todos os comentários e marcações serão validados no momento
                    do sorteio.
                  </li>
                  <li>Comentários fora do padrão serão desconsiderados.</li>
                  <li>
                    É permitido comentar mais de uma vez, desde que os amigos
                    marcados sejam diferentes em cada comentário.
                  </li>
                </ul>
              </section>

              {/* Section: Validação */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-[#FEB546] mb-2">
                  Validação dos Vencedores
                </h2>
                <p>
                  No momento do sorteio será verificado se o participante atende
                  a todos os critérios. Participantes que não atenderem serão{" "}
                  <span className="font-bold text-red-400">
                    desclassificados
                  </span>
                  , e um novo sorteado será selecionado.
                </p>
              </section>

              {/* Section: Contato */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-[#FEB546] mb-2">
                  Contato com os Vencedores
                </h2>
                <p>
                  O contato será feito{" "}
                  <span className="font-bold text-white">
                    exclusivamente via WhatsApp
                  </span>
                  . O vencedor terá até{" "}
                  <span className="font-bold text-white">5 dias corridos</span>{" "}
                  para responder. Após esse prazo, será considerado
                  desclassificado e um novo sorteio será realizado.
                </p>
              </section>

              {/* Section: Avisos Finais */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-[#FEB546] mb-2">
                  Avisos Finais
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>
                    Esta ação é uma promoção da Caixa Épica e não é patrocinada,
                    administrada ou associada ao Instagram.
                  </li>
                  <li>
                    Ao participar, o usuário autoriza o uso de seu nome e perfil
                    público para divulgação dos vencedores.
                  </li>
                </ul>
              </section>
              <div className="flex w-full">
                <Link href={"/sorteio"} className="w-full flex">
                  <Button className="ml-auto hover:cursor-pointer bg-[#97673D]">
                    Voltar para a página do sorteio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <FireForge />
    </main>
  );
}
