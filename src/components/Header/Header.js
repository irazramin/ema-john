import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className=' bg-slate-900 h-20'>
      <div className='w-11/12 mx-auto flex items-center justify-between h-full'>
        <img src={logo} alt='' />
        <div>
          <a className='ml-7 text-lg hover:text-amber-500 text-white' href='/home'>
            Home
          </a>
          <a className='ml-7 text-lg hover:text-amber-500 text-white' href='/order'>
            Order
          </a>
          <a className='ml-7 text-lg hover:text-amber-500 text-white' href='/inventory'>
            Inventory
          </a>
          <a className='ml-7 text-lg hover:text-amber-500 text-white' href='/about'>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
