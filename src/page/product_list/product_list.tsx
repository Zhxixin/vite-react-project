
import { ProductItemData } from "./../../util/types.ts";
import { useProducts } from "./product_list_with_card.tsx";
import addCartIcon from './../../assets/images/product_list/icon-add-to-cart.svg';
import { useEffect, useReducer } from "react";
import { priceFormat } from "../../util/common.ts";

const allImage = import.meta.glob('../../assets/images/product_list/*.jpg', { eager: true });

export const ProductList: React.FC = () => {
    const { products } = useProducts();
    console.log('ProductList', products);
    return (
        <div className="product-list">
            {products.map((item: ProductItemData) => {

                const image = (allImage[`../../assets/images/product_list/${item.image.desktop}`] as { default: string }).default;

                return (<div className="product-card" key={item.productId}>
                    <img src={image} alt={item.name} className={`${(item.selectQuantity ?? 0) > 0 ? 'red-border' : ''}`} /> {/*  */}
                    <AddCart item={item}></AddCart>

                    <div className="category">{item.category}</div>
                    <div className="name">{item.name}</div>
                    <div className="price">{`$ ${priceFormat(item.price)}`}</div>


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


///例子


type State = { count: number };
type Action = { type: "increment" | "decrement" | "reset"; payload?: number };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return { count: state.count + (action.payload || 1) };
        case "decrement":
            return { count: state.count - (action.payload || 1) };
        case "reset":
            return { count: 0 };
        default:
            throw new Error("Unknown action");
    }
};

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
};

export default Counter;
