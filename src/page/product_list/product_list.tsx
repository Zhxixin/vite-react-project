
import { ProductItemData } from "./../../util/types.ts";
import { useProducts } from "./product_list_with_card.tsx";
import addCartIcon from './../../assets/images/product_list/icon-add-to-cart.svg';
import { useEffect } from "react";

const allImage = import.meta.glob('../../assets/images/product_list/*.jpg', { eager: true });

export const ProductList: React.FC = () => {
    const { products } = useProducts();
    return (
        <div className="product-list">
            {products.map((item: ProductItemData) => {

                const image = (allImage[`../../assets/images/product_list/${item.image.desktop}`] as { default: string }).default;

                return (<div className="product-card" key={item.productId}>
                    <img src={image} alt={item.name} />
                    <AddCart item={item}></AddCart>

                    <div className="category">{item.category}</div>
                    <div className="name">{item.name}</div>
                    <div className="price">{`$ ${item.price}`}</div>


                </div>)
            })}
        </div>
    )
}

export const AddCart = (props: { item: ProductItemData }) => {
    const { addOrDeleteToCart } = useProducts();
    console.log('addOrDeleteToCart', props.item.selectQuantity);

    useEffect(() => {
        console.log('useEffect addOrDeleteToCart', props.item.selectQuantity);
    }, [props]);

    return <div className="add-card-button">
        {
            (props.item.selectQuantity != null && props.item.selectQuantity != undefined) ?
                <div className="quantity-control">
                    <button className="quantity-button" onClick={() => addOrDeleteToCart(props.item, false)}>
                        -
                    </button>
                    <span className="quantity">{props.item.selectQuantity}</span>
                    <button className="quantity-button" onClick={() => addOrDeleteToCart(props.item, true)}>
                        +
                    </button>
                </div>

                : <button className="add-to-cart" onClick={() => addOrDeleteToCart(props.item, true)}>
                    <img src={addCartIcon} alt="addCart" />
                    Add to Cart
                </button>


        }


    </div>
}