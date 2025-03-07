import { SUPPORTED_CURRENCIES } from "@shared/constants";

export function formatPrice(price: number, currencyCode: string): string {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  } catch (error) {
    console.error(`Error formatting price for currency ${currencyCode}:`, error);
    return `${SUPPORTED_CURRENCIES[currencyCode as keyof typeof SUPPORTED_CURRENCIES].symbol}${price.toFixed(2)}`;
  }
}
