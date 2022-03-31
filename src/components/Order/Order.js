import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Order = () => {
  const [products,setProducts] = useProducts();
  const [cart,setCart] = useCart(products);
  return (
    <div className='my-[120px] mx-36 grid grid-cols-2 gap-10'>
      <div>
        {cart.map((product) => (
          <ReviewProduct key={product.id} product={product} />
        ))}
      </div>
      <div className='w-full mx-8'>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Order