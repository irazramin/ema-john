import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromLocalStorage } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCarts] = useState([]);

    
   
    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(() =>{
      const shoppingCart = getDataFromLocalStorage()
      const storedItems = []
      for (const id in shoppingCart) {
        const cartItems = products.find(product => id === product.id);
        if(cartItems){
          const quantity = shoppingCart[id];
          if(quantity){
            cartItems.quantity = quantity;
            storedItems.push(cartItems);
          }
        }
      }
      setCarts(storedItems)
    },[products])

    const handleAddToCart = (selectedProduct) =>{
      console.log(cart)
      const exist = cart.find(product => product.id === selectedProduct.id);
      let newItems = []
      if(!exist){
        selectedProduct.quantity = 1;
         newItems = [...cart, selectedProduct];
      }else{
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exist.quantity = exist.quantity + 1;
        newItems = [...rest,exist];
      }
        setCarts(newItems)
        addToDb(selectedProduct.id);
    }
  return (
    <div className='shop-container relative'>
      <div className='px-10  py-20 grid xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-11 '>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className='cart-container h-full'>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Shop