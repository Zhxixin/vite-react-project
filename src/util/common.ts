export const priceFormat = (num: number): string => Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}).format(num);