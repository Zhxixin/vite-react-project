import { ProductsContext } from "../../util/context";
import { ProductList } from "./product_list";
import { ShoppingCartCard } from "./shopping_cart_card";
import productData from "./../../config/product_list_data.json";
import { useContext, useState } from "react";
import { Action, ProductItemData } from "../../util/types";


const ProductListWithCard: React.FC = () => {
    const [products, setProducts] = useState(productData);

    const quantity = (action: Action, item: ProductItemData): number => {
        let result: number = 0;
        switch (action) {
            case "increment":
                result = (item.selectQuantity ?? 0) + 1;
                break;
            case "decrement":
                result = (item.selectQuantity ?? 0) - 1;
                break;
            case "remove":
                result = 0;
                break;
            default:
                result = 0;
                break;
        };
        return result;
    }

    const addOrDeleteToCart = (item: ProductItemData, action: Action) => {

        setProducts((productList: ProductItemData[]) => {
            const updateList = productList.map((e: ProductItemData) => {
                let newQuantity = quantity(action, item);
                if (e.productId == item.productId) {
                    return { ...e, selectQuantity: newQuantity > 0 ? newQuantity : 0 };
                }
                return e;
            })
            if (action == 'increment' && !productList.some((pro) => pro.productId == item.productId)) {
                return [...productList, { ...item, selectQuantity: 1 }]
            }
            return updateList;
        });
    }

    console.log('setProducts-render', products);

    return (
        <ProductsContext.Provider value={{ products, addOrDeleteToCart: addOrDeleteToCart }}>
            <div className="product-list-container">
                <ProductList />
                <ShoppingCartCard />
            </div>
        </ProductsContext.Provider>
    )
}
export const useProducts = () => {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
}
export default ProductListWithCard;