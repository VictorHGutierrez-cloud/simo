import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CLIENT, PRICING_ROW_USD, PRICING_TOTALS_USD } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";

const InvestmentSection = () => {
  const licenseDiscountAmount =
    PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal;
  const implementationDiscountAmount =
    PRICING_TOTALS_USD.implementationListOneTime - PRICING_TOTALS_USD.implementationOneTime;

  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investimento</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">
          Resumo comercial — {CLIENT.organizationName}
        </p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          {CLIENT.seatCount} lugares · ROW USD mensal · {CLIENT.licenseDiscountPercent}% de desconto comercial nas
          licenças e na implementação
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <SummaryCard
            label="Implementação (única vez)"
            value={formatUSD(PRICING_TOTALS_USD.implementationOneTime)}
            sub={`Lista ${formatUSD(PRICING_TOTALS_USD.implementationListOneTime)} · −${formatUSD(implementationDiscountAmount)} desconto`}
            highlight
          />
          <SummaryCard
            label="Licenças (após desconto)"
            value={`${formatUSD(PRICING_TOTALS_USD.licenseDiscountedSubtotal)}/mês`}
          />
          <SummaryCard
            label="Total subscrição (mensal)"
            value={`${formatUSD(PRICING_TOTALS_USD.monthlyTotal)}/mês`}
            sub={`Apenas licenças (sem ATS nesta fase)`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Detalhe da subscrição</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between opacity-60">
                <span>Bundle</span>
                <span>{PRICING_ROW_USD.bundleName}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Lugares</span>
                <span>{CLIENT.seatCount}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Preço lista / lugar / mês</span>
                <span>{formatUSD(PRICING_ROW_USD.listPricePerSeatPerMonth)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Subtotal licenças (lista)</span>
                <span>{formatUSD(PRICING_TOTALS_USD.licenseListSubtotal)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Desconto comercial ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(licenseDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Licenças após desconto</span>
                <span>{formatUSD(PRICING_TOTALS_USD.licenseDiscountedSubtotal)}/mês</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Total mensal estimado</span>
                <span>{formatUSD(PRICING_TOTALS_USD.monthlyTotal)}</span>
              </div>
            </div>
          </div>

          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Implementação e notas</p>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between opacity-60">
                <span>Lista (referência)</span>
                <span>{formatUSD(PRICING_TOTALS_USD.implementationListOneTime)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Desconto comercial ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(implementationDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Taxa única</span>
                <span>{formatUSD(PRICING_TOTALS_USD.implementationOneTime)}</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                • O desconto de {CLIENT.licenseDiscountPercent}% aplica-se às linhas de licenças e implementação desta
                proposta.
              </li>
              <li>• Impostos, IVA e FX (USD vs EUR) confirmam-se no order form.</li>
              <li>• Custos do processador de folha (PHC) são externos a esta subscrição.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

function SummaryCard({
  label,
  value,
  highlight,
  sub,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-5", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      {sub && <p className="text-[10px] opacity-30 mb-1">{sub}</p>}
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{value}</p>
    </motion.div>
  );
}

export default InvestmentSection;
