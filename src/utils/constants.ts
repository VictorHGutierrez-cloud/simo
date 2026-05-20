/**
 * SIMO — preços da proposta (USD, mensal).
 * Acordo comercial específico; valores indicados são os da proposta, não lista ROW genérica.
 */

export const CLIENT = {
  organizationName: "SIMO",
  seatCount: 80,
  /** PEPM / recrutamento (lista → preço aplicado). */
  licenseDiscountPercent: 30,
  /** Tokens Factorial ONE — desconto na linha própria. */
  factorialOneDiscountPercent: 50,
} as const;

const DLicense = CLIENT.licenseDiscountPercent / 100;
const DOne = CLIENT.factorialOneDiscountPercent / 100;

/**
 * Essentials PRO (Enterprise): Core, Time Tracking, Time Off, Trainings, Performance, Engagement + add-ons cotados à parte nesta folha (ATS Business, Factorial ONE).
 */
export const PROPOSAL_PRICING = {
  bundleName: "Essentials PRO",
  pepmListPrice: 5.9,
  recruitment: {
    tier: "Business" as const,
    listPricePerMonth: 65.9,
  },
  factorialOneTokens: {
    listPricePerMonth: 449,
  },
} as const;

const licenseList = CLIENT.seatCount * PROPOSAL_PRICING.pepmListPrice;
const licenseDiscounted = licenseList * (1 - DLicense);

const recruitmentList = PROPOSAL_PRICING.recruitment.listPricePerMonth;
const recruitmentDiscounted = recruitmentList * (1 - DLicense);

const factorialOneList = PROPOSAL_PRICING.factorialOneTokens.listPricePerMonth;
const factorialOneDiscounted = factorialOneList * (1 - DOne);

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseDiscounted,
  recruitmentListPerMonth: recruitmentList,
  recruitmentDiscountedSubtotal: recruitmentDiscounted,
  factorialOneListPerMonth: factorialOneList,
  factorialOneDiscountedSubtotal: factorialOneDiscounted,
  /** Licenças + ATS + Factorial ONE (tudo com os descontos indicados na proposta). */
  monthlyTotal: licenseDiscounted + recruitmentDiscounted + factorialOneDiscounted,
} as const;

const effectivePepm = PRICING_TOTALS_USD.monthlyTotal / CLIENT.seatCount;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: "SIMO — equipa de RH",
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: effectivePepm,
  minimoContrato: CLIENT.seatCount,
  valorMinimo_USD: PRICING_TOTALS_USD.monthlyTotal,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
