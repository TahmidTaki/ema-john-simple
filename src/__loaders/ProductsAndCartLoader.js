/* import React from 'react';

const ProductsAndCartLoader = () => {
    return (
        <div>
            
        </div>
    );
};

export default ProductsAndCartLoader; */

import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
    //get products data
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    /* const products2 = productsData;
    console.log(products2);
    have to do json as it is a fetch, it returns a response, will get response here
    */

    //get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    /* Here we will get only the key value pair, to get the real product detail about the products which are already in the cart, we do the following steps. 
    in a nutshell, savedCart is just the key:value pair of Id:quantity. while, previousCart is returning the full detail of the products which are in the cart. Additionally, we set the quantity of the product to previousCart, as by default in the detail of a product, quantity is 0 */
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };

}