
import confirmOrder from "./../../assets/images/product_list/icon-order-confirmed.svg";
import { TotalPrice } from "./shopping_cart_card";
import { priceFormat, selectedProductList, totalPrice } from "../../util/common";
import { useProducts } from "../../util/context";
const thumbnail = import.meta.glob('../../assets/images/product_list/*-thumbnail.jpg', { eager: true });

export const ConfirmOrderDialog = (props: { isOpenDialog: boolean, closeDialog: () => void }) => {
    const { products } = useProducts();
    const selectedList = selectedProductList(products);

    return (
        (!props.isOpenDialog) ? null :
            <div className="confirm-order-overlay">
                <div className="confirm-order-container">
                    <img src={confirmOrder} alt="confirmOrder"></img>
                    <div className="title">Confirm Order</div>
                    <div className="remark">We hope you enjoy your food!</div>
                    <div className="order-summary">
                        {selectedList.map(item => {
                            // console.log('item', `../../assets/images/product_list/${item.image.thumbnail}`, thumbnail);
                            const thumbnailImage = (thumbnail[`../../assets/images/product_list/${item.image.thumbnail}`] as { default: string }).default;

                            return <div className="confirm-item-container" key={item.productId}>
                                <img className="thumbnail" src={thumbnailImage} alt="thumbnail"></img>
                                <div className="confirm-item">
                                    <div className="confirm-item-title">{item.name}</div>
                                    <div className="confirm-item-price">
                                        <span>{item.selectQuantity}x</span>&nbsp;&nbsp;&nbsp;
                                        <span>@ ${priceFormat(item.price)}</span>
                                    </div>
                                </div>
                                <div className="total-price">{priceFormat(item.price * (item.selectQuantity ?? 0))}</div>
                            </div>
                        })}
                        <TotalPrice total={totalPrice(products)} />
                    </div>
                    <button className="comfirm-order" onClick={props.closeDialog}>Start New Order</button>

                </div>

            </div>);
}