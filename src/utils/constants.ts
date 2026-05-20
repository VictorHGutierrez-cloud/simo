/**
 * SIMO — proposta comercial (ROW USD, mensal).
 * Fonte: ROW USD Prices.xlsx + descoberta (call).
 */

export const CLIENT = {
  organizationName: "SIMO",
  seatCount: 80,
  /** Desconto acordado sobre licenças e implementação (lista ROW). */
  licenseDiscountPercent: 30,
} as const;

const D = CLIENT.licenseDiscountPercent / 100;

/**
 * Essentials PRO (Enterprise): Starter Essentials + Performance + Engagement.
 * Cobertura: Core, Time Tracking, Time Off, Trainings, Performance, Engagement.
 */
export const PRICING_ROW_USD = {
  bundleName: "Essentials PRO",
  listPricePerSeatPerMonth: 10.5,
  implementation: {
    listPriceOneTime: 500,
    discountedOneTime: 350,
  },
} as const;

const licenseList = CLIENT.seatCount * PRICING_ROW_USD.listPricePerSeatPerMonth;
const licenseDiscounted = licenseList * (1 - D);

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseDiscounted,
  /** Apenas licenças (sem recrutamento nesta fase). */
  monthlyTotal: licenseDiscounted,
  implementationListOneTime: PRICING_ROW_USD.implementation.listPriceOneTime,
  implementationOneTime: PRICING_ROW_USD.implementation.discountedOneTime,
} as const;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: "SIMO — equipa de RH",
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: PRICING_ROW_USD.listPricePerSeatPerMonth,
  minimoContrato: CLIENT.seatCount,
  valorMinimo_USD: PRICING_TOTALS_USD.monthlyTotal,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
