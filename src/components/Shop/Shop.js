import React, { useEffect, useState } from 'react'
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCarts] = useState([]);

    const allPrice = cart.map(c => c.price);
      const calculateTotalPrice = (previousValue,currentValue) => previousValue + currentValue;
      

    const totalPrice = allPrice.reduce(calculateTotalPrice, 0);
   
    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newItems = [...cart,product];
        setCarts(newItems)
    }
  return (
    <div className='shop-container relative'>
      <div className='px-10  py-20 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-11 '>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className='bg-orange-200   w-full right-0 p-6'>
        <h4 className='text-2xl font-normal text-center mt-7 '>
          Order Summery
        </h4>

        <p className='mt-12'>Selected Items : {cart.length}</p>
        <p className='mt-6'>Total Price : {totalPrice} </p>
      </div>
    </div>
  );
}

export default Shop