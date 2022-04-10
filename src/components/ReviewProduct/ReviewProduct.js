import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const ReviewProduct = ({product,handleRemoveItem}) => {
    const { name, price, shipping, quantity, img } = product;
  return (
    <div className='mb-4 p-1 border-[1px] flex rounded'>
      <div className='flex items-center ml-1'>
        <img className='w-[91px] h-[91px]' src={img} alt='' />
      </div>
      <div className='ml-4'>
        <h4 className='text-lg text-[#1C2B35] font-medium'>{name}</h4>
        <p className='text-base'>
          Price : <span className='text-[#FF9900]'>${price}</span>
        </p>
        <p className='text-base'>
          Quantity : <span className='text-[#FF9900]'>{quantity}</span>
        </p>
        <p className='text-base'>
          Shipping cost : <span className='text-[#FF9900]'>${shipping}</span>
        </p>
      </div>
      <div className='flex justify-end items-center ml-auto mr-5 cursor-pointer active:scale-95'>
        <div className='w-10 h-10 bg-[] flex justify-center items-center rounded-full bg-red-100'>
          <button onClick={() => handleRemoveItem(product)}>
            <FontAwesomeIcon className='text-[#EB5757]' icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewProduct