
import { ProductEntity } from "./../../util/types.ts";
import addCartIcon from './../../assets/images/product_list/icon-add-to-cart.svg';
import { useEffect, useReducer, useState } from "react";
import { priceFormat } from "../../util/common.ts";
import { useProducts } from "../../util/context.ts";
import { setRem } from "../../util/rem.ts";

const allImage = import.meta.glob('./../../assets/images/product_list/*.jpg', { eager: true });

export const ProductList: React.FC = () => {
    const { products } = useProducts();
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    // console.log('ProductList', products);

    useEffect(() => {
        const handleResize = () => {
            console.log('handleResize', window.innerWidth);
            setIsDesktop(window.innerWidth >= 768);
            if (window.innerWidth < 768) {
                setRem({ baseSize: 18, scaleNum: 1.5 });
            } else {
                setRem({ baseSize: 16, scaleNum: 1 });
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="product-list-container">
            <div className="title">Desserts</div>
            <div className="product-list">
                {products.map((item: ProductEntity) => {

                    const image = (allImage[`../../assets/images/product_list/${isDesktop ? item.image.desktop : item.image.mobile}`] as { default: string }).default;

                    return (<div className="product-card" key={item.productId}>
                        <img src={`./${image}`} alt={item.name} className={`${(item.selectQuantity ?? 0) > 0 ? 'red-border' : ''}`} /> {/*  */}
                        <AddCart item={item}></AddCart>
                        <div className="category">{item.category}</div>
                        <div className="name">{item.name}</div>
                        <div className="price">{`$ ${priceFormat(item.price)}`}</div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export const AddCart = (props: { item: ProductEntity }) => {
    const { addOrDeleteToCart } = useProducts();
    console.log('addOrDeleteToCart', props.item.selectQuantity);

    useEffect(() => {
        console.log('useEffect addOrDeleteToCart', props.item.selectQuantity);
    }, [props]);

    return <div className="add-card-button">

        {
            (props.item.selectQuantity != null && props.item.selectQuantity != undefined && props.item.selectQuantity != 0) ?
                <div className="quantity-control">
                    <button className="quantity-button" onClick={() => addOrDeleteToCart(props.item, 'decrement')}>
                        -
                    </button>
                    <span className="quantity">{props.item.selectQuantity}</span>
                    <button className="quantity-button" onClick={() => addOrDeleteToCart(props.item, 'increment')}>
                        +
                    </button>
                </div>

                : <button className="add-to-cart" onClick={() => addOrDeleteToCart(props.item, "increment")}>
                    <img src={addCartIcon} alt="addCart" />
                    Add to Cart
                </button>
        }
    </div>
}
