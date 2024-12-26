
import tipIcon from "./../../assets/images/product_list/icon-carbon-neutral.svg";
import deleteIcon from "./../../assets/images/product_list/icon-remove-item.svg";
import emptyCart from "./../../assets/images/product_list/illustration-empty-cart.svg";
import { useProducts } from "./product_list_with_card";
import { ProductItemData } from "../../util/types";
import { priceFormat } from "../../util/common";
// import { useEffect } from "react";



export const ShoppingCartCard: React.FC = () => {
    const { products } = useProducts();
    const addCardList: ProductItemData[] = products.filter(item => item.selectQuantity);

    const totalPrice = addCardList.reduce((current, next) =>
        current + (next.selectQuantity ?? 0) * next.price
        , 0);
    const totalQuantity = addCardList.reduce((cur, next) => cur + (next.selectQuantity ?? 0), 0);
    // useEffect(() => { console.log('ShoppingCartCard  render'); }, [products]);

    return (
        <div className="cart-container">
            <div className="cart-title">  Your Cart ({totalQuantity})</div>
            {totalQuantity == 0 ? <div className="empty-cart"><img src={emptyCart} alt="emptyCart" /><div>Your added items will appear here</div></div>
                : <div> {addCardList.map(item => <CartItem key={item.productId} product={item} />)}
                    <TotalPrice total={totalPrice} />
                    <div className="tip-container">
                        <img src={tipIcon} alt="tip"></img>
                        <span>This is a carbon-neutral delivery</span>
                    </div>
                    <button className="comfirm-order">Confirm Order</button>
                </div>
            }
        </div>
    )
}

export const CartItem = (props: { product: ProductItemData }) => {
    const { addOrDeleteToCart } = useProducts();

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-title">{props.product.name}</div>
                <div className="cart-item-price">
                    <span>{props.product.selectQuantity}x</span>&nbsp;&nbsp;&nbsp;
                    <span>@ ${priceFormat(props.product.price)}</span>&nbsp;&nbsp;
                    <span>${priceFormat(props.product.price * (props.product.selectQuantity ?? 0))}</span>

                </div>
            </div>
            <button className="delete" onClick={() => addOrDeleteToCart(props.product, "remove")}><img src={deleteIcon} alt="delete" /></button>
        </div>

    )
}

export const TotalPrice = (props: { total: number }) => {
    return (
        <div className="total-price-container">
            <div>Order Total</div>
            <div className="price">${priceFormat(props.total)}</div>
        </div>
    )
}