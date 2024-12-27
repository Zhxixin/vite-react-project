import { ProductsContext } from "../../util/context";
import { ProductList } from "./product_list";
import { ShoppingCartCard } from "./shopping_cart_card";
import productData from "./../../config/product_list_data.json";
import { useState } from "react";
import { Action, ProductEntity } from "../../util/types";
import { ConfirmOrderDialog } from "./confirm_order";


const ProductListWithCard: React.FC = () => {
    const [products, setProducts] = useState(productData);

    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

    const quantity = (action: Action, item: ProductEntity): number => {
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

    const addOrDeleteToCart = (item: ProductEntity, action: Action) => {

        setProducts((productList: ProductEntity[]) => {
            const updateList = productList.map((e: ProductEntity) => {
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

    // console.log('setProducts-render', products);
    const openConfirmDialog = () => {
        setIsConfirmDialogOpen(true);
    }

    const closeConfirmDialog = () => {
        setIsConfirmDialogOpen(false);
    }

    return (
        <ProductsContext.Provider value={{ products, addOrDeleteToCart: addOrDeleteToCart }}>
            <div className="product-container">
                <ProductList />
                <ShoppingCartCard openConfirmDialog={openConfirmDialog} />
                <ConfirmOrderDialog isOpenDialog={isConfirmDialogOpen} closeDialog={closeConfirmDialog} />
            </div>
        </ProductsContext.Provider>
    )
}

export default ProductListWithCard;