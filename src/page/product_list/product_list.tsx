
import { ProductItemData } from "./../../util/types.ts";
import { useProducts } from "./product_list_with_card.tsx";

const allImage = import.meta.glob('../../assets/images/product_list/*.jpg', { eager: true });

export const ProductList: React.FC = () => {
    const { products } = useProducts();
    return (
        <div className="product-list">
            {products.map((item: ProductItemData) => {

                const image = (allImage[`../../assets/images/product_list/${item.image.desktop}`] as { default: string }).default;

                return (<div className="product-card" key={item.productId}>
                    <img src={image} alt={item.name} />
                    <AddCard item={item}></AddCard>
                    <div className="category">{item.category}</div>
                    <div className="name">{item.name}</div>
                    <div className="price">{`$ ${item.price}`}</div>
                </div>)
            })}</div>
    )
}

export const AddCard = (props: { item: ProductItemData }) => {
    const { addOrDeleteToCart } = useProducts();
    return <div className="add-card-button">
        {
            (props.item.selectQuantity != null && props.item.selectQuantity != undefined) ?
                <button onClick={() => addOrDeleteToCart(props.item, false)}></button> : null
        }
        {
            (props.item.selectQuantity != null && props.item.selectQuantity != undefined) ?
                <span>{props.item.selectQuantity}</span> : null
        }
        <button onClick={() => addOrDeleteToCart(props.item, true)}></button>

    </div>
}