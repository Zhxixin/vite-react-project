import { ProductEntity } from "./types";

export const priceFormat = (num: number): string => Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}).format(num);

export const selectedProductList: (products: ProductEntity[]) => ProductEntity[] = (products: ProductEntity[]) => products.filter(item => item.selectQuantity);
export const totalPrice: (products: ProductEntity[]) => number = (products: ProductEntity[]) => selectedProductList(products).reduce((current, next) =>
    current + (next.selectQuantity ?? 0) * next.price
    , 0)