/**
 * SIMO · preços da proposta (USD, mensal).
 * Acordo comercial específico; valores indicados são os da proposta, não lista ROW genérica.
 */

export const CLIENT = {
  organizationName: "SIMO",
  seatCount: 80,
  /** PEPM / recrutamento ATS (lista → preço aplicado). */
  licenseDiscountPercent: 40,
  /** Tokens Factorial ONE · desconto na linha própria. */
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
  /** USD por colaborador / mês · integração com PHC. */
  phcIntegrationPerSeatUsd: 2,
  /** USD por colaborador / mês · funcionalidade Compensação. */
  compensationPerSeatUsd: 1.2,
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

const phcIntegrationMonthly =
  CLIENT.seatCount * PROPOSAL_PRICING.phcIntegrationPerSeatUsd;
const compensationMonthly =
  CLIENT.seatCount * PROPOSAL_PRICING.compensationPerSeatUsd;

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseDiscounted,
  recruitmentListPerMonth: recruitmentList,
  recruitmentDiscountedSubtotal: recruitmentDiscounted,
  factorialOneListPerMonth: factorialOneList,
  factorialOneDiscountedSubtotal: factorialOneDiscounted,
  phcIntegrationMonthly,
  compensationMonthly,
  /** Licenças + ATS + Factorial ONE (descontos) + PHC + Compensação (PEPM fixo). */
  monthlyTotal:
    licenseDiscounted +
    recruitmentDiscounted +
    factorialOneDiscounted +
    phcIntegrationMonthly +
    compensationMonthly,
} as const;

const effectivePepm = PRICING_TOTALS_USD.monthlyTotal / CLIENT.seatCount;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: "SIMO · equipa de RH",
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: effectivePepm,
  minimoContrato: CLIENT.seatCount,
  valorMinimo_USD: PRICING_TOTALS_USD.monthlyTotal,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
