
import tipIcon from "./../../assets/images/product_list/icon-carbon-neutral.svg";
import deleteIcon from "./../../assets/images/product_list/icon-remove-item.svg";
import emptyCart from "./../../assets/images/product_list/illustration-empty-cart.svg";
import { ProductEntity } from "../../util/types";
import { priceFormat, selectedProductList, totalPrice } from "../../util/common";
import { useProducts } from "../../util/context";
// import { useEffect } from "react";



export const ShoppingCartCard = (props: { openConfirmDialog: () => void }) => {
    const { products } = useProducts();
    const selectedList = selectedProductList(products);
    const totalQuantity = selectedList.reduce((cur, next) => cur + (next.selectQuantity ?? 0), 0);
    // useEffect(() => { console.log('ShoppingCartCard  render'); }, [products]);
    ///确认订单


    return (
        <div className="cart-container">
            <div className="cart-title">  Your Cart ({totalQuantity})</div>
            {totalQuantity == 0 ? <div className="empty-cart"><img src={emptyCart} alt="emptyCart" /><div>Your added items will appear here</div></div>
                : <div> {selectedList.map(item => <CartItem key={item.productId} product={item} />)}
                    <TotalPrice total={totalPrice(products)} />
                    <div className="tip-container">
                        <img src={tipIcon} alt="tip"></img>
                        <span>This is a<code> carbon-neutral </code>delivery</span>
                    </div>
                    <button className="comfirm-order" onClick={props.openConfirmDialog}>Confirm Order</button>
                </div>
            }
        </div>
    )
}

export const CartItem = (props: { product: ProductEntity }) => {
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