import { ArrowDown, Check, ExternalLink } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CLIENT, PRICING_TOTALS_USD, PROPOSAL_PRICING } from "@/utils/constants";

/** Salto imediato (sem animação) — `scroll-behavior: smooth` no html pode atrasar o salto; desactivamos só neste clique. */
function scrollToInvestmentSection() {
  const el = document.getElementById("sec-investimento");
  if (!el) return;
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  el.scrollIntoView({ block: "start", behavior: "auto" });
  html.style.scrollBehavior = previous;
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });
}

const {
  seatCount: SEATS,
  licenseDiscountPercent: DISCOUNT_PCT,
  factorialOneDiscountPercent: ONE_DISCOUNT_PCT,
  organizationName: ORG,
} = CLIENT;

function Divider({ light }: { light?: boolean }) {
  return (
    <hr
      className={
        light
          ? "my-[2vw] border-none border-t border-white/50"
          : "my-[2vw] border-none border-t border-black/40"
      }
    />
  );
}

const labelCls = "text-xs font-bold uppercase tracking-[0.2em]";
const headCls =
  "text-[clamp(2.25rem,8vw,6.5rem)] font-bold leading-[0.9] uppercase tracking-tight";
const bodyCls = "text-[clamp(1rem,2.2vw,1.75rem)] font-normal leading-relaxed";
const cardTitleCls = "mb-2 text-sm font-bold uppercase tracking-wider";
const cardBodyCls = "text-[clamp(0.9rem,1.4vw,1.15rem)] leading-relaxed opacity-80";

export default function ProposalFlow() {
  return (
    <FlowArt aria-label={`Proposta Factorial para ${ORG}`}>
      {/* 01 Capa */}
      <FlowSection aria-label="Capa" style={{ backgroundColor: "#FF355E", color: "#fff" }}>
        <p className={labelCls}>01 · Proposta Factorial</p>
        <Divider light />
        <div>
          <h1 className={headCls}>
            {ORG}
            <br />
            RH
            <br />
            Unificado
          </h1>
        </div>
        <Divider light />
        <p className={`mt-auto max-w-[55ch] ${bodyCls}`}>
          {PROPOSAL_PRICING.bundleName} (Enterprise), <strong>ATS em plano Business</strong> e{" "}
          <strong>Factorial One</strong> (tokens de IA) · um fluxo único de Core, operações, formações, desempenho e
          envolvimento, com dados preparados para o PHC.
        </p>
        <p className={`text-[clamp(0.85rem,1.3vw,1rem)] opacity-80`}>
          {SEATS} lugares · PEPM e recrutamento com {DISCOUNT_PCT}% · Factorial One com {ONE_DISCOUNT_PCT}% · Valores em
          USD (mensais), conforme acordo comercial
        </p>
        <div className="mt-4">
          <button
            type="button"
            onClick={scrollToInvestmentSection}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#FF355E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ir para investimento
            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/30 pt-6">
          <div className="flex h-12 w-12 items-center justify-center border border-white/40 text-xl font-light">
            F
          </div>
          <div>
            <p className="text-[clamp(1rem,1.5vw,1.2rem)] font-medium">Victor Gutierrez</p>
            <p className="text-sm opacity-70">Desenvolvimento de negócio · Factorial</p>
          </div>
        </div>
      </FlowSection>

      {/* 02 Contexto */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Contexto"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>02 · Contexto</p>
        <Divider />
        <h2 className={headCls}>
          Porquê um novo
          <br />
          sistema de RH
        </h2>
        <Divider />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className={`space-y-6 ${bodyCls}`}>
            <p>
              Hoje a avaliação de desempenho assenta em <strong className="font-semibold">folhas Excel</strong>, sem
              histórico estruturado de carreira. Querem começar de forma gradual (180°, evoluir depois para 360°) e{" "}
              <strong className="font-semibold">automatizar o processo</strong>.
            </p>
            <p>
              O registo de colaboradores é <strong className="font-semibold">em papel</strong>, as assinaturas são
              físicas e a equipa de RH faz a <strong className="font-semibold">baixa manual</strong> no PHC. O registo
              de horas, férias e ausências também é <strong className="font-semibold">manual</strong>, o que torna a
              conciliação com a folha mais lenta e pouco eficaz.
            </p>
            <p>
              Com cerca de <strong className="font-semibold">dois técnicos de RH</strong> para ~80 colaboradores, é
              preciso <strong className="font-semibold">self-service</strong> para colaboradores e gestores, dados
              fiáveis para o financeiro e <strong className="font-semibold">ATS</strong> dimensionado ao volume de vagas.
              Os valores de investimento abaixo são o <strong className="font-semibold">acordo SIMO</strong> (USD
              mensais).
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "📱",
                title: "Mobile em primeiro lugar",
                desc: "Picagem, pedidos de ausência, assinaturas e tarefas na app Factorial · menos papel e menos e-mail.",
              },
              {
                icon: "🧾",
                title: "Dados completos",
                desc: "Folhas de horas, painéis e exportações com os campos que o RH e o financeiro precisam para o PHC.",
              },
              {
                icon: "🌍",
                title: "Um só sistema",
                desc: "Ficha, presenças, ausências e documentos no mesmo sítio · não dispersos em folhas Excel.",
              },
              {
                icon: "🤝",
                title: "Preço acordo",
                desc: `PEPM e ATS com ${DISCOUNT_PCT}%; Factorial One com ${ONE_DISCOUNT_PCT}% · linha a linha na secção de investimento.`,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 border border-black/15 bg-white/50 p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-[clamp(0.85rem,1.2vw,1rem)] opacity-75 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FlowSection>

      {/* 03 Prioridades */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="O que pediram"
        style={{ backgroundColor: "hsl(347 50% 18%)", color: "#fff" }}
      >
        <p className={labelCls}>03 · O que pediram</p>
        <Divider light />
        <h2 className={headCls}>
          RH de ponta
          <br />
          a ponta
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Ficha e documentos digitais, registo de horas e ausências com aprovações, formações (LMS), avaliação de
          desempenho, envolvimento e recrutamento com <strong>ATS Business</strong> · e exportação estruturada para o{" "}
          <strong>PHC</strong>, que continua a processar a folha de retribuição.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "👤",
              title: "Core",
              desc: "Diretório, contratos, organograma, permissões, documentos na nuvem, assinaturas e fluxos de admissão.",
            },
            {
              icon: "⏱️",
              title: "Registo de horas",
              desc: "Picagem na app e na web, geolocalização, aprovação de folhas de horas, exportações.",
            },
            {
              icon: "🏖️",
              title: "Ausências",
              desc: "Pedidos e aprovações; políticas, saldos, calendários e anexos.",
            },
            {
              icon: "📈",
              title: "Avaliação de desempenho",
              desc: "Ciclos 180° (e 360° mais tarde), Ninebox, planos de ação e Factorial One (IA no ambiente Factorial).",
            },
            {
              icon: "🎓",
              title: "Formações",
              desc: "LMS / e-learning: catálogo, conteúdos, testes e ligação a planos de desenvolvimento.",
            },
            {
              icon: "💬",
              title: "Envolvimento",
              desc: "Inquéritos (clima, NPS), rituais de feedback e acompanhamento das equipas.",
            },
            {
              icon: "📣",
              title: `Recrutamento (${PROPOSAL_PRICING.recruitment.tier})`,
              desc: "ATS com páginas de carreira, pipeline, integrações e comunicação com candidatos · alinhado ao vosso ritmo de vagas.",
            },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-4">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-2 font-semibold text-[clamp(1rem,1.4vw,1.15rem)]">{f.title}</h3>
              <p className="mt-1 text-[clamp(0.85rem,1.2vw,1rem)] opacity-70 leading-snug">{f.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 04 Pacote */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Pacote recomendado"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>04 · Pacote recomendado</p>
        <Divider light />
        <h2 className={headCls}>
          {PROPOSAL_PRICING.bundleName}
          <br />
          Enterprise
        </h2>
        <Divider light />
        <p className={`max-w-[60ch] ${bodyCls}`}>
          Pacote mensal combinado para <strong>{SEATS}</strong> colaboradores: <strong>bundle</strong> com Core,{" "}
          <strong>registo de horas</strong>, <strong>ausências</strong>, <strong>formações</strong>,{" "}
          <strong>Performance</strong> e <strong>Engagement</strong>, mais <strong>ATS {PROPOSAL_PRICING.recruitment.tier}</strong> para suportar o volume de candidaturas e vagas activas · e pacote <strong>Factorial One</strong> para automação segura dentro da Factorial (tokens de IA, mensais).
        </p>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 border border-white/20 p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">No bundle</h3>
            <div className="space-y-4 text-[clamp(0.9rem,1.3vw,1.05rem)] opacity-90">
              <div>
                <p className="mb-2 font-semibold text-white">Core</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Diretório, contratos, organograma, equipas
                    e permissões
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Documentos na nuvem, envio em massa,
                    assinaturas com valor jurídico
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Admissão e saída com tarefas e recolha de
                    ficheiros
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Relatórios e exportações preparadas para o
                    ciclo de folha (PHC)
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-white">Registo de horas e ausências</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Picagem na app e na web; geolocalização
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Aprovação de folhas de horas; exportações
                    Excel/PDF
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Pedidos de ausência, saldos e calendários de
                    equipa
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-white">Formações, desempenho e envolvimento</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> LMS: catálogo, consumo, testes e rastreio
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Ciclos de avaliação, matriz Ninebox e planos
                    de ação
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 opacity-80" /> Inquéritos e rituais de feedback para
                    acompanhar o clima
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 border border-white/20 p-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">ATS {PROPOSAL_PRICING.recruitment.tier} + Factorial One</h3>
            <p className={`${bodyCls} opacity-90`}>
              O <strong>plano Business do recrutamento</strong> permite gerir vagas activas com pipeline claro:
              página de emprego, sourcing e comunicação, sem depender de folhas paralelas quando o volume ou a urgência
              sobem (ainda que o ritmo médio de contratação varie ao longo do ano).
            </p>
            <ul className="space-y-2 text-[clamp(0.9rem,1.3vw,1.05rem)] opacity-90">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Candidaturas integram com Core (dados e admissão) para o
                colaborador começar com ficha consolidada no dia um
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> <strong>Factorial One:</strong> tokens de IA dentro do
                ambiente Factorial (não modelo genérico externo); desconto de {ONE_DISCOUNT_PCT}% na linha de subscrição
                dos tokens
              </li>
            </ul>
            <p className="border-t border-white/20 pt-4 text-sm opacity-70">
              Referência interna: <strong>prazo operacional até final de junho de 2026</strong> · urgência registada na
              reunião com a equipa.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 05 Mobile */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Experiência móvel"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>05 · Experiência móvel</p>
        <Divider />
        <h2 className={headCls}>
          Feito para o
          <br />
          telemóvel
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Os colaboradores usam a app Factorial no dia a dia: picagem com contexto de localização, pedidos de
          ausência, assinaturas e tarefas de admissão · tudo a partir de uma única caixa de entrada.
        </p>
        <Divider />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              title: "Um login, vários papéis",
              desc: "O RH vê tudo; os gestores aprovam na sua área; cada colaborador só vê o que lhe diz respeito.",
            },
            {
              title: "Tarefas num só sítio",
              desc: "Assinaturas, revisões de ausências, uploads e passos de admissão como tarefas na app.",
            },
            {
              title: "Segurança de acesso",
              desc: "Camadas de SSO e registo de auditoria · útil quando partilham postos de trabalho e para IT avaliar risco.",
            },
          ].map((x) => (
            <div key={x.title} className="min-w-[200px] flex-1 border border-black/15 bg-white/60 p-5">
              <p className={cardTitleCls}>{x.title}</p>
              <p className={cardBodyCls}>{x.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 06 Operações */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Operações e folha"
        style={{ backgroundColor: "hsl(347 50% 18%)", color: "#fff" }}
      >
        <p className={labelCls}>06 · Operações</p>
        <Divider light />
        <h2 className={headCls}>
          Horas e
          <br />
          ausências
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Folhas de horas validadas, visibilidade em tempo real e exportações que o financeiro pode cruzar com o PHC,
          com menos reconciliação manual no fecho.
        </p>
        <Divider light />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: "📥",
              title: "Folhas de horas e exportações",
              desc: "Aprovação, regras onde estiverem configuradas, Excel/PDF com o detalhe necessário para o PHC.",
            },
            {
              icon: "📊",
              title: "Painel de presenças",
              desc: "Quem picou, quem falta, pausas · em tempo real para gestão e RH.",
            },
            {
              icon: "🏖️",
              title: "Ausências alinhadas",
              desc: "Férias e outras ausências com trilho de aprovação e impacto visível nas equipas.",
            },
            {
              icon: "⏱️",
              title: "Horas extraordinárias",
              desc: "Regras de HE e banco de horas, conforme política · suporte ao cálculo correto no processamento.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 border border-white/20 p-4">
              <span className="text-3xl shrink-0">{f.icon}</span>
              <div>
                <h4 className="font-semibold text-[clamp(1rem,1.4vw,1.1rem)]">{f.title}</h4>
                <p className="mt-1 text-[clamp(0.85rem,1.2vw,1rem)] opacity-75 leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 07 Documentos */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Documentos e admissão"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>07 · Documentos e admissão</p>
        <Divider light />
        <h2 className={headCls}>
          Assinar &
          <br />
          integrar
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Centralizar ficheiros de RH, recolher assinaturas válidas e conduzir admissões com tarefas · em vez de
          processos apenas em papel e arquivo físico.
        </p>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="space-y-3 text-[clamp(0.9rem,1.3vw,1.05rem)]">
            {[
              "Diretório, contratos e organograma num único espaço de trabalho",
              "Enviar, assinar e acompanhar documentos em massa (web e app)",
              "Fluxos de admissão e saída com tarefas atribuídas",
              "Recolha estruturada de documentos de identificação nas pastas certas",
              "Funções e permissões · controlar quem vê o quê",
            ].map((t) => (
              <li key={t} className="flex gap-3 border border-white/15 p-3">
                <Check className="mt-1 h-4 w-4 shrink-0 opacity-80" />
                <span className="opacity-90">{t}</span>
              </li>
            ))}
          </ul>
          <div className="border border-white/20 p-6">
            <h3 className="text-lg font-semibold mb-3">Do aceitar a oferta ao primeiro dia</h3>
            <p className="text-[clamp(0.95rem,1.35vw,1.1rem)] opacity-80 leading-relaxed">
              Depois da seleção interna, a admissão continua no Core: dados pessoais, assinaturas e anexos · para o
              colaborador poder picar e pedir ausências desde o primeiro dia, com menos trabalho repetitivo para o RH.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 08 Pessoas & desenvolvimento */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Desempenho formações envolvimento"
        style={{ backgroundColor: "#07A2AD", color: "#fff" }}
      >
        <p className={labelCls}>08 · Desempenho, formações e envolvimento</p>
        <Divider light />
        <h2 className={headCls}>
          Talentos
          <br />
          em evolução
        </h2>
        <Divider light />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Substituir as folhas Excel por ciclos de avaliação, ligar o desempenho a planos de ação e formar na mesma
          plataforma (LMS). O Factorial One permanece{" "}
          <strong>dentro do ambiente Factorial</strong> · útil quando a instituição se preocupa com confidencialidade e
          uso de IA genérica.
        </p>
        <Divider light />
        <div className="flex flex-wrap gap-[3vw]">
          {[
            {
              title: "Avaliação de desempenho",
              desc: "Modelos 180°, competências por cargo, Ninebox, feedback e planos de ação partilhados entre colaborador e gestor.",
            },
            {
              title: "Formações (LMS)",
              desc: "Catálogo, vídeos e PDFs, testes de conhecimento e pedidos de formação · inclusive a partir do PDI.",
            },
            {
              title: "Envolvimento",
              desc: "Inquéritos de clima e NPS para acompanhar sentimento e priorizar ações no RH.",
            },
          ].map((x) => (
            <div key={x.title} className="min-w-[200px] flex-1 border border-white/30 bg-black/10 p-5">
              <p className={cardTitleCls}>{x.title}</p>
              <p className={cardBodyCls}>{x.desc}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* 09 PHC */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="PHC e folha"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>09 · PHC e folha de retribuição</p>
        <Divider />
        <h2 className={headCls}>
          Factorial
          <br />
          e PHC
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          A Factorial prepara e ordena os dados de RH; o <strong>PHC</strong> continua a processar a folha de
          retribuição e a emitir recibos de vencimento. O objectivo é retirar o retrabalho manual de conciliação:
          contratos, horas, ausências e eventos passam a ter histórico estruturado.
        </p>
        <Divider />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-black/15 bg-white/70 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">O que a Factorial cobre</h3>
            <ul className={`space-y-2 ${cardBodyCls}`}>
              <li>• Ficha do colaborador e alterações contratuais relevantes para a folha</li>
              <li>• Registo de horas, ausências e excepções com trilho de aprovação</li>
              <li>• Documentos e recibos integrados no perfil quando aplicável (ex.: fluxo com o PHC)</li>
              <li>• Relatórios e exportações alinhados ao modelo que o PHC precisa</li>
            </ul>
          </div>
          <div className="border border-black/15 bg-white/70 p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">O que permanece no PHC</h3>
            <ul className={`space-y-2 ${cardBodyCls}`}>
              <li>• Processamento salarial e títulos de remuneração</li>
              <li>• Ficheiros bancários e obrigações legais (conforme o vosso processo)</li>
              <li>• Contabilização autoritativa no vosso ERP / financeiro</li>
            </ul>
            <p className="mt-4 text-sm opacity-70">
              A Factorial é <strong>SaaS na nuvem</strong> (alinhado com Azure/AWS). Para dúvidas de soberania de dados,
              o equipamento de IT pode validar a arquitectura · não há instalação &quot;on-premise&quot; da plataforma.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 10 Investimento */}
      <FlowSection
        id="sec-investimento"
        innerClassName="!justify-start gap-6"
        aria-label="Investimento"
        style={{ backgroundColor: "#0f0709", color: "#fff" }}
      >
        <p className={labelCls}>10 · Investimento</p>
        <Divider light />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 border border-white/20 p-6 text-[clamp(0.85rem,1.2vw,1.05rem)]">
            {/* Licenças PEPM */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Licenças (PEPM)</h3>
              <div className="flex justify-between gap-2 border-b border-white/10 pb-2">
                <span className="opacity-80">
                  ${PROPOSAL_PRICING.pepmListPrice.toFixed(2)} × {SEATS} lugares
                </span>
                <span className="font-medium">${PRICING_TOTALS_USD.licenseListSubtotal.toFixed(2)}/mês</span>
              </div>
              <div className="flex justify-between gap-2 text-emerald-400">
                <span>Desconto ({DISCOUNT_PCT}%)</span>
                <span>
                  −$
                  {(PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal).toFixed(2)}
                  /mês
                </span>
              </div>
              <div className="flex justify-between gap-2 pt-1 font-medium border-t border-white/10">
                <span className="opacity-80">Após desconto</span>
                <span>${PRICING_TOTALS_USD.licenseDiscountedSubtotal.toFixed(2)}/mês</span>
              </div>
            </div>
            {/* Recrutamento */}
            <div className="space-y-3 border-t border-white/15 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">
                Recrutamento ({PROPOSAL_PRICING.recruitment.tier})
              </h3>
              <div className="flex justify-between gap-2 border-b border-white/10 pb-2">
                <span className="opacity-80">Lista</span>
                <span className="font-medium">${PRICING_TOTALS_USD.recruitmentListPerMonth.toFixed(2)}/mês</span>
              </div>
              <div className="flex justify-between gap-2 text-emerald-400">
                <span>Desconto ({DISCOUNT_PCT}%)</span>
                <span>
                  −$
                  {(
                    PRICING_TOTALS_USD.recruitmentListPerMonth - PRICING_TOTALS_USD.recruitmentDiscountedSubtotal
                  ).toFixed(2)}
                  /mês
                </span>
              </div>
              <div className="flex justify-between gap-2 pt-1 font-medium border-t border-white/10">
                <span className="opacity-80">Após desconto</span>
                <span>${PRICING_TOTALS_USD.recruitmentDiscountedSubtotal.toFixed(2)}/mês</span>
              </div>
            </div>
            {/* Factorial ONE */}
            <div className="space-y-3 border-t border-white/15 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Tokens Factorial One</h3>
              <div className="flex justify-between gap-2 border-b border-white/10 pb-2">
                <span className="opacity-80">Lista</span>
                <span className="font-medium">${PRICING_TOTALS_USD.factorialOneListPerMonth.toFixed(2)}/mês</span>
              </div>
              <div className="flex justify-between gap-2 text-emerald-400">
                <span>Desconto ({ONE_DISCOUNT_PCT}%)</span>
                <span>
                  −$
                  {(
                    PRICING_TOTALS_USD.factorialOneListPerMonth -
                    PRICING_TOTALS_USD.factorialOneDiscountedSubtotal
                  ).toFixed(2)}
                  /mês
                </span>
              </div>
              <div className="flex justify-between gap-2 pt-1 font-medium border-t border-white/10">
                <span className="opacity-80">Após desconto</span>
                <span>${PRICING_TOTALS_USD.factorialOneDiscountedSubtotal.toFixed(2)}/mês</span>
              </div>
            </div>
            {/* Integração PHC e Compensação (PEPM fixo) */}
            <div className="space-y-3 border-t border-white/15 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Integração com PHC</h3>
              <div className="flex justify-between gap-2 pt-1 font-medium border-t border-white/10">
                <span className="opacity-80">
                  ${PROPOSAL_PRICING.phcIntegrationPerSeatUsd.toFixed(2)} × {SEATS} lugares
                </span>
                <span>${PRICING_TOTALS_USD.phcIntegrationMonthly.toFixed(2)}/mês</span>
              </div>
            </div>
            <div className="space-y-3 border-t border-white/15 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Funcionalidade Compensação</h3>
              <div className="flex justify-between gap-2 pt-1 font-medium border-t border-white/10">
                <span className="opacity-80">
                  ${PROPOSAL_PRICING.compensationPerSeatUsd.toFixed(2)} × {SEATS} lugares
                </span>
                <span>${PRICING_TOTALS_USD.compensationMonthly.toFixed(2)}/mês</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="border-2 border-white/30 bg-white/5 p-6 text-center">
              <p className="mb-2 text-sm opacity-70">Total mensal estimado</p>
              <p className="text-[clamp(2.25rem,7vw,3.75rem)] font-light leading-none">
                ${PRICING_TOTALS_USD.monthlyTotal.toFixed(2)}
              </p>
              <p className="mt-2 text-xs opacity-50">USD · valores finais no order form / impostos se aplicável</p>
            </div>
            <p className="text-sm opacity-60">Cartão ou transferência bancária em USD ou EUR, conforme acordo.</p>
            <a
              href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent(`${ORG}: Confirmação da proposta`)}`}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Responder para confirmar <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </FlowSection>

      {/* 11 Demo */}
      <FlowSection
        innerClassName="!justify-start gap-6"
        aria-label="Demonstração"
        style={{ backgroundColor: "#3d1522", color: "#fff" }}
      >
        <p className={labelCls}>11 · Experimentar</p>
        <Divider light />
        <h2 className={headCls}>
          Demo &
          <br />
          Visão geral
        </h2>
        <Divider light />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <p className={bodyCls}>
              Explorem o Factorial num ambiente de demonstração ou vejam uma visão geral curta do produto.
            </p>
            <div className="flex flex-col gap-4 border border-white/20 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 font-semibold">Credenciais demo</p>
                <p className="break-all font-mono text-xs opacity-70 sm:text-sm">
                  hellen@demob25acc00.com · Papapapa333!
                </p>
              </div>
              <a
                href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center bg-white px-5 py-2.5 text-sm font-medium text-black hover:opacity-90"
              >
                Abrir demo
              </a>
            </div>
            <div className="space-y-2">
              {[
                {
                  label: "Registo de horas (demo)",
                  url: "https://app.eu2.demo.factorial.dev/attendance",
                },
                {
                  label: "Ausências · Centro de ajuda",
                  url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939",
                },
                {
                  label: "Relatórios com IA (demo)",
                  url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/15 p-3 text-sm hover:bg-white/5"
                >
                  <ExternalLink className="h-4 w-4 shrink-0 opacity-70" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="aspect-video w-full max-w-3xl flex-1 border-2 border-white/25">
            <iframe
              title="Visão geral Factorial"
              src="https://www.youtube.com/embed/6sUn2w1hRv0?start=26"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </FlowSection>

      {/* 12 Implementação */}
      <FlowSection
        innerClassName="!justify-start gap-8"
        aria-label="Implementação"
        style={{ backgroundColor: "#F5F0E8", color: "#1a1a1a" }}
      >
        <p className={labelCls}>12 · Implementação</p>
        <Divider />
        <h2 className={headCls}>
          Como
          <br />
          arrancamos
        </h2>
        <Divider />
        <p className={`max-w-[55ch] ${bodyCls}`}>
          Sessões semanais estruturadas para a equipa adoptar o Factorial com confiança · sem parar a operação do dia a
          dia. A <strong>Pratiq</strong> acompanha consultoria e formação no terreno; o contrato e o billing do
          software são com a <strong>Factorial</strong>, como alinhado na sessão.
        </p>
        <Divider />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-black/15 bg-white/70 p-6">
            <p className="mb-2 text-xs uppercase tracking-widest opacity-50">Durante a implementação</p>
            <h3 className="mb-3 text-lg font-semibold">Especialista de onboarding</h3>
            <p className="mb-4 text-[clamp(0.95rem,1.35vw,1.05rem)] leading-relaxed opacity-80">
              Configuração do {PROPOSAL_PRICING.bundleName}: Core, registo de horas, ausências, formações, avaliação de
              desempenho, envolvimento, ATS {PROPOSAL_PRICING.recruitment.tier}, Factorial One e exportações orientadas ao PHC.
            </p>
            <ul className="space-y-2 text-[clamp(0.9rem,1.2vw,1rem)]">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Uma sessão ao vivo por semana
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Cada sessão: 1 hora, orientada a entregáveis
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> ~1,5 meses (cerca de 6 semanas) até go-live
              </li>
            </ul>
          </div>
          <div className="border border-black/15 bg-white/70 p-6">
            <p className="mb-2 text-xs uppercase tracking-widest opacity-50">Depois do go-live</p>
            <h3 className="mb-3 text-lg font-semibold">Gestor de conta</h3>
            <p className="mb-4 text-[clamp(0.95rem,1.35vw,1.05rem)] leading-relaxed opacity-80">
              Um contacto nomeado para adopção, renovações e evolução da plataforma · incluindo follow-up preventivo,
              mesmo quando está tudo a correr bem.
            </p>
            <ul className="space-y-2 text-[clamp(0.9rem,1.2vw,1rem)]">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Primeiro o especialista, depois um gestor de conta
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" /> Acompanhamento contínuo de uso e próximos módulos
              </li>
            </ul>
          </div>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
