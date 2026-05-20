import { ReactNode } from "react";
import { Check } from "lucide-react";
import { CLIENT, PRICING_TOTALS_USD, PROPOSAL_PRICING } from "@/utils/constants";

interface SlideData {
  id: string;
  title: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[15px] tracking-[0.2em] uppercase opacity-60 mb-3">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[38px] md:text-[42px] font-light leading-[1.12] mb-4 max-w-[1200px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[17px] md:text-[19px] opacity-80 font-light leading-snug max-w-[1000px]">{children}</p>
);

const {
  seatCount: SEATS,
  licenseDiscountPercent: DISCOUNT_PCT,
  factorialOneDiscountPercent: ONE_DISCOUNT_PCT,
  organizationName: ORG,
} = CLIENT;

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Capa",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Proposta Factorial</SectionLabel>
        <h1 className="text-[44px] md:text-[52px] font-light leading-[1.08] mb-4 max-w-[1200px]">{ORG}</h1>
        <p className="text-[17px] md:text-[19px] opacity-80 font-light mb-3">
          {PROPOSAL_PRICING.bundleName} (Enterprise), ATS {PROPOSAL_PRICING.recruitment.tier} e Factorial One · Core,
          operações, formações, desempenho e envolvimento, com dados preparados para o PHC.
        </p>
        <p className="text-[14px] md:text-[15px] opacity-60 font-light">
          {SEATS} lugares · PEPM e ATS −{DISCOUNT_PCT}% · Factorial One −{ONE_DISCOUNT_PCT}% · USD mensais (acordo
          comercial)
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
            <span className="text-[18px] font-light">F</span>
          </div>
          <div>
            <p className="text-[16px] opacity-70">Victor Gutierrez</p>
            <p className="text-[13px] opacity-50">Desenvolvimento de negócio · Factorial</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "context",
    title: "Contexto",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>Porquê a SIMO procura um novo sistema de RH</SlideTitle>
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <p className="text-[15px] md:text-[16px] opacity-70 leading-snug mb-4">
              Avaliação de desempenho em <strong className="opacity-100">folhas Excel</strong>, cadastro físico e baixa
              manual no <strong className="opacity-100">PHC</strong>, picagem e ausências{" "}
              <strong className="opacity-100">manuais</strong> · com dois técnicos de RH para ~80 colaboradores.
            </p>
            <p className="text-[15px] md:text-[16px] opacity-70 leading-snug mb-4">
              Querem <strong className="opacity-100">automatizar</strong>, ter histórico de carreira e começar com 180°
              (evoluindo depois para 360°), mais um <strong className="opacity-100">LMS</strong> para formar e medir
              progresso.
            </p>
            <p className="text-[15px] md:text-[16px] opacity-70 leading-snug">
              Os valores de investimento são o acordo SIMO · linha PEPM ({DISCOUNT_PCT}% off sobre lista), ATS Business (
              {DISCOUNT_PCT}%) e tokens Factorial One ({ONE_DISCOUNT_PCT}% off), em USD mensais.
            </p>
          </div>
          <div className="space-y-2">
            {[
              {
                icon: "📱",
                title: "Mobile primeiro",
                desc: "Picagem, ausências, assinaturas e tarefas na app · menos papel.",
              },
              {
                icon: "🧾",
                title: "Dados fiáveis",
                desc: "Folhas de horas e exportações para reconciliar com o PHC.",
              },
              {
                icon: "🌍",
                title: "Um sistema",
                desc: "Informação do colaborador num único espaço, não espalhada em ficheiros.",
              },
              {
                icon: "🤝",
                title: "Preço acordo",
                desc: `${DISCOUNT_PCT}% em PEPM/ATS · ${ONE_DISCOUNT_PCT}% em Factorial One · ver quadro mensal.`,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 border border-foreground/15 p-3">
                <span className="text-[22px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[14px] font-medium mb-0.5">{item.title}</h4>
                  <p className="text-[12px] opacity-60 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "priorities",
    title: "Prioridades",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>O que pediram</SectionLabel>
        <SlideTitle>RH de ponta a ponta, com PHC na folha</SlideTitle>
        <SlideSubtitle>
          Core, horas, ausências, LMS, desempenho, envolvimento, ATS {PROPOSAL_PRICING.recruitment.tier} e Factorial One:
          dados preparados para o PHC.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[
            {
              icon: "👤",
              title: "Core",
              desc: "Diretório, contratos, organograma, documentos, assinaturas e admissão.",
            },
            {
              icon: "⏱️",
              title: "Registo de horas",
              desc: "Picagem com geolocalização, aprovação e exportações.",
            },
            {
              icon: "🏖️",
              title: "Ausências",
              desc: "Pedidos, políticas, saldos e calendários de equipa.",
            },
            {
              icon: "📈",
              title: "Desempenho",
              desc: "Ciclos 180°/360°, Ninebox, planos de ação e Factorial One (IA interna).",
            },
            {
              icon: "🎓",
              title: "Formações",
              desc: "LMS, catálogo, testes e ligação ao desenvolvimento.",
            },
            {
              icon: "💬",
              title: "Envolvimento",
              desc: "Inquéritos de clima e NPS para acompanhar a organização.",
            },
            {
              icon: "📣",
              title: `Recrutamento (${PROPOSAL_PRICING.recruitment.tier})`,
              desc: "ATS ao ritmo das vagas: pipeline, página de emprego e comunicação com candidatos.",
            },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-4">
              <span className="text-[26px] block mb-2">{f.icon}</span>
              <h3 className="text-[15px] font-medium mb-1">{f.title}</h3>
              <p className="text-[12px] opacity-65 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "recommended-package",
    title: "Pacote",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Pacote recomendado</SectionLabel>
        <SlideTitle>{PROPOSAL_PRICING.bundleName} · Enterprise</SlideTitle>
        <SlideSubtitle>
          Pacote mensal para {SEATS} colaboradores: bundle + ATS {PROPOSAL_PRICING.recruitment.tier} + Factorial One:
          PEPM{" "}
          <strong className="opacity-100">${PROPOSAL_PRICING.pepmListPrice}</strong> antes do{" "}
          <strong className="opacity-100">{DISCOUNT_PCT}%</strong>; linha própria para tokens com{" "}
          <strong className="opacity-100">{ONE_DISCOUNT_PCT}%</strong>.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">No bundle</h3>
            <div className="space-y-3 text-[13px] opacity-75 leading-snug">
              <div>
                <p className="font-medium opacity-90 mb-1">Core + operação</p>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <Check className="shrink-0 mt-0.5" size={14} /> Diretório, contratos, documentos, fluxos de
                    admissão
                  </li>
                  <li className="flex gap-2">
                    <Check className="shrink-0 mt-0.5" size={14} /> Registo de horas e ausências com aprovações
                  </li>
                  <li className="flex gap-2">
                    <Check className="shrink-0 mt-0.5" size={14} /> Relatórios e exportações para o PHC
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium opacity-90 mb-1">Pessoas & desenvolvimento</p>
                <ul className="space-y-1">
                  <li className="flex gap-2">
                    <Check className="shrink-0 mt-0.5" size={14} /> Formações (LMS) e avaliação de desempenho
                  </li>
                  <li className="flex gap-2">
                    <Check className="shrink-0 mt-0.5" size={14} /> Envolvimento (inquéritos, clima)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[17px] font-medium mb-3">ATS {PROPOSAL_PRICING.recruitment.tier} + Factorial One</h3>
            <p className="text-[14px] opacity-75 leading-snug mb-3">
              O plano Business dá amplitude para vagas activas surpreendentes ao longo do ano; Factorial One traz IA
              dentro da Factorial ({ONE_DISCOUNT_PCT}% sobre a linha de tokens na proposta).
            </p>
            <p className="text-[12px] opacity-55 leading-snug border-t border-white/15 pt-3">
              Referência: operacional até <strong className="opacity-80">final de junho de 2026</strong>.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "phc",
    title: "PHC",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Folha de retribuição</SectionLabel>
        <SlideTitle>Factorial prepara dados · PHC processa a folha</SlideTitle>
        <SlideSubtitle>
          O PHC mantém o processamento salarial e os recibos de vencimento; a Factorial centraliza RH, tempos e
          ausências com histórico auditável.
        </SlideSubtitle>
        <div className="grid grid-cols-2 gap-6 mt-5">
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">Factorial</h3>
            <ul className="text-[13px] opacity-75 space-y-1.5 leading-snug">
              <li>• Ficha e alterações relevantes para a folha</li>
              <li>• Horas, ausências e aprovações</li>
              <li>• Documentos e integração de recibos quando aplicável</li>
              <li>• Exportações mapeadas para o PHC</li>
            </ul>
          </div>
          <div className="border border-white/20 p-5">
            <h3 className="text-[16px] font-medium mb-2">PHC</h3>
            <ul className="text-[13px] opacity-75 space-y-1.5 leading-snug">
              <li>• Processamento salarial e compliance</li>
              <li>• Ficheiros bancários e obrigações legais</li>
              <li>• Contabilização no vosso ERP</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "investment",
    title: "Investimento",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Investimento</SectionLabel>
        <SlideTitle>Valor mensal (USD) · conforme esta proposta</SlideTitle>

        <div className="grid grid-cols-2 gap-8 mt-2">
          <div className="space-y-3 border border-foreground/20 p-5 text-[13px]">
            <h3 className="text-[15px] font-medium opacity-90 mb-2">Licenças (PEPM)</h3>
            <div className="flex justify-between gap-2">
              <span className="opacity-65">${PROPOSAL_PRICING.pepmListPrice} × {SEATS}</span>
              <span className="font-medium">${PRICING_TOTALS_USD.licenseListSubtotal.toFixed(2)}/mês</span>
            </div>
            <div className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400">
              <span>{DISCOUNT_PCT}% off</span>
              <span>
                −${(PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal).toFixed(2)}/mês
              </span>
            </div>
            <div className="flex justify-between gap-2 border-t border-foreground/15 pt-2 font-medium">
              <span>Total</span>
              <span>${PRICING_TOTALS_USD.licenseDiscountedSubtotal.toFixed(2)}/mês</span>
            </div>

            <h3 className="text-[15px] font-medium opacity-90 mb-2 pt-3 border-t border-foreground/10">
              Recrutamento ({PROPOSAL_PRICING.recruitment.tier})
            </h3>
            <div className="flex justify-between gap-2">
              <span className="opacity-65">Lista</span>
              <span className="font-medium">${PRICING_TOTALS_USD.recruitmentListPerMonth.toFixed(2)}/mês</span>
            </div>
            <div className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400">
              <span>{DISCOUNT_PCT}% off</span>
              <span>
                −$
                {(
                  PRICING_TOTALS_USD.recruitmentListPerMonth - PRICING_TOTALS_USD.recruitmentDiscountedSubtotal
                ).toFixed(2)}
                /mês
              </span>
            </div>
            <div className="flex justify-between gap-2 border-t border-foreground/15 pt-2 font-medium">
              <span>Total</span>
              <span>${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mês</span>
            </div>

            <h3 className="text-[15px] font-medium opacity-90 mb-2 pt-3 border-t border-foreground/10">
              Tokens Factorial One
            </h3>
            <div className="flex justify-between gap-2">
              <span className="opacity-65">Lista</span>
              <span className="font-medium">${PRICING_TOTALS_USD.factorialOneListPerMonth.toFixed(2)}/mês</span>
            </div>
            <div className="flex justify-between gap-2 text-emerald-700 dark:text-emerald-400">
              <span>{ONE_DISCOUNT_PCT}% off</span>
              <span>
                −$
                {(
                  PRICING_TOTALS_USD.factorialOneListPerMonth -
                  PRICING_TOTALS_USD.factorialOneDiscountedSubtotal
                ).toFixed(2)}
                /mês
              </span>
            </div>
            <div className="flex justify-between gap-2 border-t border-foreground/15 pt-2 font-medium">
              <span>Total</span>
              <span>${PRICING_TOTALS_USD.factorialOneDiscountedSubtotal.toFixed(2)}/mês</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-foreground/30 bg-foreground/[0.06] p-6 text-center">
              <p className="text-[12px] opacity-55 mb-2">Total mensal estimado</p>
              <p className="text-[44px] font-light leading-none">${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}</p>
              <p className="text-[11px] opacity-45 mt-2">Valores finais no order form · impostos se aplicável</p>
            </div>
            <p className="text-[11px] opacity-55">Cartão ou transferência em USD/EUR, conforme acordo.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "onboarding",
    title: "Implementação",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-14">
        <SectionLabel>Implementação</SectionLabel>
        <SlideTitle>Como entramos em produção</SlideTitle>
        <SlideSubtitle>
          Sessões semanais estruturadas. A Pratiq apoia consultoria em Moçambique; contrato e faturação do software
          com a Factorial.
        </SlideSubtitle>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="border border-foreground/20 p-5 bg-foreground/[0.03]">
            <p className="text-[11px] uppercase tracking-widest opacity-50 mb-2">Durante</p>
            <h3 className="text-[17px] font-medium mb-3">Especialista de onboarding</h3>
            <p className="text-[13px] opacity-70 leading-snug mb-4">
              Configuração do {PROPOSAL_PRICING.bundleName}: Core, horas, ausências, formações, desempenho,
              envolvimento, ATS {PROPOSAL_PRICING.recruitment.tier}, Factorial One e exportações para o PHC.
            </p>
            <ul className="space-y-2 text-[12px] opacity-75">
              <li className="flex gap-2">
                <Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Uma sessão ao vivo por semana
              </li>
              <li className="flex gap-2">
                <Check size={14} className="shrink-0 mt-0.5 opacity-70" /> 1 hora, focada em entregáveis
              </li>
              <li className="flex gap-2">
                <Check size={14} className="shrink-0 mt-0.5 opacity-70" /> ~1,5 meses até go-live
              </li>
            </ul>
          </div>

          <div className="border border-foreground/20 p-5">
            <p className="text-[11px] uppercase tracking-widest opacity-50 mb-2">Depois</p>
            <h3 className="text-[17px] font-medium mb-3">Gestor de conta</h3>
            <p className="text-[13px] opacity-70 leading-snug mb-4">
              Contacto nomeado para adopção e evolução da plataforma · com follow-up preventivo.
            </p>
            <ul className="space-y-2 text-[12px] opacity-75">
              <li className="flex gap-2">
                <Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Primeiro o especialista, depois um gestor de
                conta
              </li>
              <li className="flex gap-2">
                <Check size={14} className="shrink-0 mt-0.5 opacity-70" /> Acompanhamento de uso e próximos módulos
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 border-t border-foreground/15 pt-4 flex flex-wrap gap-4 items-center justify-between text-[12px] opacity-65">
          <span />
          <span className="opacity-50">Proposta preparada para {ORG} · 2026</span>
        </div>
      </div>
    ),
  },
];
