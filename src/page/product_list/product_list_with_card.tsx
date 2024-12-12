import { ProductsContext } from "../../util/context";
import { ProductList } from "./product_list";
import { ShoppingCartCard } from "./shopping_cart_card";
import productData from "./../../config/product_list_data.json";
import { useContext, useState } from "react";
import { ProductItemData } from "../../util/types";


const ProductListWithCard: React.FC = () => {
    const [products, setProducts] = useState(productData);

    const addOrDeleteToCart = (item: ProductItemData, isAdd: boolean) => {
        const index: number = products.findIndex((product: ProductItemData) => product.productId === item.productId);

        setProducts((productList: ProductItemData[]) => {
            if (index > -1) {
                if (productList[index].selectQuantity == undefined) {
                    productList[index].selectQuantity = isAdd ? 1 : null;
                } else {
                    if (isAdd) {
                        productList[index].selectQuantity++;
                    } else {
                        productList[index].selectQuantity--;
                    }
                }

            } else {
                item.selectQuantity = isAdd ? 1 : null;
                productList.push(item);
            }
            return productList;
        });
    }
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