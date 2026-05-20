import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6 py-16 bg-[#F5F0E8] text-[#1a1a1a]">
      <div className="max-w-lg w-full text-center space-y-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF355E]">Factorial × SIMO</p>
        <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold tracking-tight leading-[1.15]">
          Proposta comercial Factorial
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed opacity-80">
          Contexto, pacote Essentials PRO, integração com o PHC, investimento em USD e próximos passos numa experiência em
          scroll.
        </p>
        <div className="pt-2">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#FF355E] px-10 text-base font-semibold text-white shadow-md hover:bg-[#e62e54] hover:text-white"
          >
            <Link to="/proposta" className="gap-2">
              Abrir proposta interativa
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </Button>
        </div>
        <p className="text-sm opacity-50 pt-4">
          Victor Gutierrez · Desenvolvimento de negócio · Factorial
        </p>
      </div>
    </div>
  );
};

export default Landing;
