
import tipIcon from "./../../assets/images/product_list/icon-carbon-neutral.svg";
import deleteIcon from "./../../assets/images/product_list/icon-remove-item.svg";
import { useProducts } from "./product_list_with_card";
import { ProductItemData } from "../../util/types";



export const ShoppingCartCard: React.FC = () => {
    const { products } = useProducts();
    const addCardList: ProductItemData[] = products.filter(item => item.selectQuantity);
    return (
        <div className="cart-container">
            <div className="cart-title">  Your Cart ({addCardList.length})</div>
            {addCardList.map(item => <CartItem key={item.productId} product={item} />)}
            <TotalPrice />
            <div className="tip-container"><img src={tipIcon} alt="tip"></img><span>This is a carbon-neutral delivery</span></div>
            <button className="comfirm-order">Confirm Order</button>
        </div>
    )
}

export const CartItem = (props: { product: ProductItemData }) => {
    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-title">{props.product.name}</div>
                <div className="cart-item-price">${props.product.price}</div>
            </div>
            <button className="delete"><img src={deleteIcon} alt="delete" /></button>
        </div>

    )
}

export const TotalPrice: React.FC = () => {
    return (
        <div className="total-price-container">
            <div>Order Total</div>
            <div className="price">$46.5</div>
        </div>
    )
}