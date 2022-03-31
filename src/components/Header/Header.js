import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className=' bg-slate-900 h-20 static top-0'>
      <div className='w-11/12 mx-auto flex items-center justify-between h-full'>
        <img src={logo} alt='' />
        <div>
          <Link className='ml-7 text-lg hover:text-amber-500 text-white' to='/home'>
            Home
          </Link>
          <Link className='ml-7 text-lg hover:text-amber-500 text-white' to='/order'>
            Order
          </Link>
          <Link className='ml-7 text-lg hover:text-amber-500 text-white' to='/inventory'>
            Inventory
          </Link>
          <Link className='ml-7 text-lg hover:text-amber-500 text-white' to='/about'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
