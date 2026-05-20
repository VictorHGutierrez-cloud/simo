import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CLIENT, PRICING_TOTALS_USD, PROPOSAL_PRICING } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";

const InvestmentSection = () => {
  const licenseDiscountAmount =
    PRICING_TOTALS_USD.licenseListSubtotal - PRICING_TOTALS_USD.licenseDiscountedSubtotal;
  const recruitmentDiscountAmount =
    PRICING_TOTALS_USD.recruitmentListPerMonth - PRICING_TOTALS_USD.recruitmentDiscountedSubtotal;
  const factorialOneDiscountAmount =
    PRICING_TOTALS_USD.factorialOneListPerMonth - PRICING_TOTALS_USD.factorialOneDiscountedSubtotal;

  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investimento</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">Resumo comercial · {CLIENT.organizationName}</p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          PEPM ${PROPOSAL_PRICING.pepmListPrice} × {CLIENT.seatCount} lugares ({CLIENT.licenseDiscountPercent}% off) ·
          Recrutamento {PROPOSAL_PRICING.recruitment.tier} ({CLIENT.licenseDiscountPercent}% off) · Factorial One ({CLIENT.factorialOneDiscountPercent}% off) · valores em USD mensais conforme esta proposta
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <SummaryCard
            label="Licenças (após desconto)"
            value={`${formatUSD(PRICING_TOTALS_USD.licenseDiscountedSubtotal)}/mês`}
          />
          <SummaryCard label="ATS (após desconto)" value={`${formatUSD(PRICING_TOTALS_USD.recruitmentDiscountedSubtotal)}/mês`} />
          <SummaryCard
            label="Factorial One (após desconto)"
            value={`${formatUSD(PRICING_TOTALS_USD.factorialOneDiscountedSubtotal)}/mês`}
          />
          <SummaryCard
            label="Total mensal"
            value={`${formatUSD(PRICING_TOTALS_USD.monthlyTotal)}/mês`}
            highlight
          />
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Detalhe mensal</p>
            <div className="space-y-3 text-sm">
              <p className="font-medium opacity-90">Licenças (PEPM)</p>
              <div className="flex justify-between opacity-60">
                <span>{PROPOSAL_PRICING.bundleName} · lista ({CLIENT.seatCount} × {formatUSD(PROPOSAL_PRICING.pepmListPrice)})</span>
                <span>{formatUSD(PRICING_TOTALS_USD.licenseListSubtotal)}</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Desconto ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(licenseDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Após desconto</span>
                <span>{formatUSD(PRICING_TOTALS_USD.licenseDiscountedSubtotal)}/mês</span>
              </div>

              <p className="font-medium opacity-90 pt-4">Recrutamento ({PROPOSAL_PRICING.recruitment.tier})</p>
              <div className="flex justify-between opacity-60">
                <span>Lista</span>
                <span>{formatUSD(PRICING_TOTALS_USD.recruitmentListPerMonth)}/mês</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Desconto ({CLIENT.licenseDiscountPercent}%)</span>
                <span>−{formatUSD(recruitmentDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Após desconto</span>
                <span>{formatUSD(PRICING_TOTALS_USD.recruitmentDiscountedSubtotal)}/mês</span>
              </div>

              <p className="font-medium opacity-90 pt-4">Tokens Factorial One</p>
              <div className="flex justify-between opacity-60">
                <span>Lista</span>
                <span>{formatUSD(PRICING_TOTALS_USD.factorialOneListPerMonth)}/mês</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Desconto ({CLIENT.factorialOneDiscountPercent}%)</span>
                <span>−{formatUSD(factorialOneDiscountAmount)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Após desconto</span>
                <span>{formatUSD(PRICING_TOTALS_USD.factorialOneDiscountedSubtotal)}/mês</span>
              </div>

              <div className="flex justify-between border-t border-foreground/20 pt-4 text-base font-medium">
                <span>Total estimado</span>
                <span>{formatUSD(PRICING_TOTALS_USD.monthlyTotal)}/mês</span>
              </div>
            </div>
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
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-5", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{value}</p>
    </motion.div>
  );
}

export default InvestmentSection;
