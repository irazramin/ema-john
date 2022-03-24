import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {

    let totalPrice = 0;
    let tax = 0
    let shipping = 0;
    let quantity = 0
    for(const c of cart){
        totalPrice = totalPrice+c.price * c.quantity;
        shipping = shipping+ c.shipping;
        quantity = quantity + c.quantity;
    }

    tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + tax + shipping;

  return (
    <div className='bg-orange-200 sticky right-0 top-0 p-6 h-screen'>
      <h4 className='text-2xl font-normal text-center mt-7 '>Order Summery</h4>

      <p className='mt-12'>Selected Items : {quantity}</p>
      <p className='mt-6'>Total Price : ${totalPrice} </p>
      <p className='mt-6'>Shipping : ${shipping} </p>
      <p className='mt-6'>Tax : ${tax} </p>
      <p className='mt-6 font-semibold '>Grand Total : ${grandTotal} </p>
    </div>
  );
}

export default Cart