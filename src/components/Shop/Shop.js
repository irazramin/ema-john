import React, { useEffect, useState } from 'react'
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
      console.log(product.id)
    }
  return (
    <div className='shop-container'>
      <div className='px-7  py-20 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-11 '>
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
      <div className=''>cart</div>
    </div>
  );
}

export default Shop