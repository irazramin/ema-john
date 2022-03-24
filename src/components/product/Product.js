import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { id, img, name, price, seller, ratings } = product;
  return (
    <div className='product   border-zinc-400 rounded-lg relative'>
      <img
        className=' h-72 object-cover mx-auto   rounded-lg'
        src={img}
        alt=''
      />
      <div className='mt-3 mx-3 '>
        <h4 title={name} className='text-lg font-medium capitalize'>
          {name.length > 20 ? name.slice(0, 20) + '......' : name}
        </h4>
        <p className='text-lg font-medium mt-1'>Price : ${price}</p>

        <p className='text-base mt-7 text-slate-600'>Manufacture : {seller}</p>
        <p className='text-base mt-3 text-slate-600'>Rating : {ratings}</p>
      </div>
      <button
        className='w-full border-t-2 border-zinc-400 h-12 rounded-b-lg  m-0 bg-orange-300 absolute bottom-0 left-0 hover:bg-orange-500 flex items-center justify-center'
        onClick={() => handleAddToCart(props.product)}
      >
        <p className='mr-2'>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
