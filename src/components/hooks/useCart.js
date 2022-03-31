import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utilities/fakedb";

function useCart(products) {
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        const shoppingCart = getDataFromLocalStorage();
        const storedCart = [];
        for(const id in shoppingCart){
            const quantity = shoppingCart[id];
            const cartItem = products.find(product => product.id === id);
            if(cartItem){
                cartItem.quantity = quantity;
                storedCart.push(cartItem);
            }
        }
        setCart(storedCart);
    },[products])
    return [cart,setCart];
}

export default useCart