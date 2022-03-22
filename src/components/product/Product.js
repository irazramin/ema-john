import React from 'react';
import './Product.css';
const Product = (props) => {
    const {handleAddToCart,product} = props;
  const { id,img, name, price, seller,ratings } = product;
  return (
    <div className='product   border-zinc-400 rounded-lg relative'>
      <img
        className=' h-72 object-cover mx-auto   rounded-lg'
        src={img}
        alt=''
      />
      <div className='mt-3 mx-3 '>
        <h4 title={name} className='text-lg font-normal '>
          {name.length > 20 ? name.slice(0, 15) + '......' : name}
        </h4>
        <p className='text-lg font-normal mt-1'>Price : ${price}</p>

        <p className='text-base mt-7 text-slate-600'>Manufacture : {seller}</p>
        <p className='text-base mt-3 text-slate-600'>Rating : {ratings}</p>
      </div>
      <button className='w-full border-t-2 border-zinc-400 h-12 rounded-b-lg  m-0 bg-orange-300 absolute bottom-0 left-0 hover:bg-orange-500'
      onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
