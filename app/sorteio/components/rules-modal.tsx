import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// This component is now designed specifically to live inside a DialogContent container.
// It includes its own header and footer for a self-contained layout.
export default function RaffleRulesModal() {
  return (
    // The modal content is wrapped in a flex column to structure the header, body, and footer.
    <div className="flex flex-col h-full max-h-[85vh] bg-[#1c130b] text-white p-6">
      <DialogHeader className="flex-shrink-0">
        <DialogTitle className="text-3xl md:text-4xl text-center font-bebas font-bold text-[#FEB546] tracking-wider">
          Regras do Sorteio – Caixa Épica
        </DialogTitle>
        <div className="border-b-[#FFB548] border-b-2 w-32 h-1 mx-auto pt-2" />
      </DialogHeader>

      {/* This div handles the scrolling of the rules content if it's too long. */}
      <div className="flex-grow space-y-4 text-sm md:text-base text-gray-300 pr-3 overflow-y-auto mt-4">
        {/* Section: Premiação */}
        <section>
          <h2 className="text-lg md:text-xl font-bebas font-bold text-[#FEB546] mb-1">
            Premiação Total
          </h2>
          <p>
            Ao longo da campanha, serão sorteadas{" "}
            <span className="font-bold text-white">5 miniaturas de resina</span>{" "}
            no total. Cada vencedor receberá 1 miniatura.
          </p>
          <ul className="list-disc list-inside mt-2 pl-2 space-y-1">
            <li>2 miniaturas pequenas</li>
            <li>2 miniaturas médias</li>
            <li>1 miniatura grande</li>
          </ul>
        </section>

        {/* Section: Datas */}
        <section>
          <h2 className="text-lg md:text-xl font-bebas font-bold text-[#FEB546] mb-1">
            Datas dos Sorteios
          </h2>
          <p>
            As datas serão divulgadas no Instagram oficial{" "}
            <a
              href="https://www.instagram.com/caixaepica"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FFB548] hover:underline"
            >
              @caixaepica
            </a>
            .
          </p>
        </section>

        {/* Section: Como Participar */}
        <section>
          <h2 className="text-lg md:text-xl font-bebas font-bold text-[#FEB546] mb-1">
            Regras para Participar
          </h2>
          <ul className="list-decimal list-inside mt-2 pl-2 space-y-2">
            <li>Preencher o formulário com nome e WhatsApp válido.</li>
            <li>
              Seguir{" "}
              <a
                href="https://www.instagram.com/caixaepica"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FFB548] hover:underline"
              >
                @caixaepica
              </a>{" "}
              no Instagram.
            </li>
            <li>
              Comentar no post oficial marcando{" "}
              <span className="font-bold text-white">3 amigos diferentes</span>.
            </li>
          </ul>
        </section>

        {/* Section: Importante */}
        <section className="p-3 bg-white/5 border border-yellow-500/20 rounded-md">
          <h3 className="text-md md:text-lg font-bebas font-bold text-[#FEB546] mb-1">
            Importante
          </h3>
          <ul className="list-disc list-inside pl-2 space-y-1 text-xs md:text-sm">
            <li>Não marcar empresas, perfis fakes ou inativos.</li>
            <li>Comentários e marcações serão validados.</li>
            <li>Pode comentar mais de uma vez marcando amigos diferentes.</li>
          </ul>
        </section>

        {/* Section: Validação */}
        <section>
          <h2 className="text-lg md:text-xl font-bebas font-bold text-[#FEB546] mb-1">
            Validação dos Vencedores
          </h2>
          <p>
            Quem não cumprir todas as regras será{" "}
            <span className="font-bold text-red-400">desclassificado</span>.
          </p>
        </section>

        {/* Section: Contato */}
        <section>
          <h2 className="text-lg md:text-xl font-bebas font-bold text-[#FEB546] mb-1">
            Contato com os Vencedores
          </h2>
          <p>
            O contato será feito via{" "}
            <span className="font-bold text-white">WhatsApp</span>. O vencedor
            tem <span className="font-bold text-white">5 dias corridos</span>{" "}
            para responder.
          </p>
        </section>

        {/* Section: Avisos Finais */}
        <section>
          <h2 className="text-lg md:text-xl font-bebas font-bold text-[#FEB546] mb-1">
            Avisos Finais
          </h2>
          <ul className="list-disc list-inside pl-2 space-y-1">
            <li>Esta promoção não é associada ao Instagram.</li>
            <li>
              Ao participar, você autoriza o uso de seu nome na divulgação do
              resultado.
            </li>
          </ul>
        </section>
      </div>

      <DialogFooter className="mt-6 flex-shrink-0">
        <DialogClose asChild>
          <Button
            type="button"
            className="w-full bg-[#97673D] hover:bg-[#b48258] text-white font-bold"
          >
            Entendi
          </Button>
        </DialogClose>
      </DialogFooter>
    </div>
  );
}
