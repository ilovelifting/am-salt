export const MONTHLY_PRICE = 39;
export const ONE_TIME_SURCHARGE = 8;
export const STICKS_PER_BOX = 30;

export function formatPricing(monthlyPrice: number = MONTHLY_PRICE) {
  return {
    priceLabel: `$${monthlyPrice}`,
    perDay: `$${(monthlyPrice / STICKS_PER_BOX).toFixed(2)}`,
    oneTime: `$${monthlyPrice + ONE_TIME_SURCHARGE}`,
  };
}
