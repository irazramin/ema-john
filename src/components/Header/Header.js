import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <nav className=' bg-slate-900 h-20 sticky z-50 top-0'>
      <div className='w-11/12 mx-auto flex items-center justify-between h-full'>
        <img src={logo} alt='' />
        <div>
          <Link
            className='ml-7 text-lg hover:text-amber-500 text-white'
            to='/home'
          >
            Home
          </Link>
          <Link
            className='ml-7 text-lg hover:text-amber-500 text-white'
            to='/order'
          >
            Order
          </Link>
          <Link
            className='ml-7 text-lg hover:text-amber-500 text-white'
            to='/inventory'
          >
            Inventory
          </Link>
          <Link
            className='ml-7 text-lg hover:text-amber-500 text-white'
            to='/about'
          >
            About
          </Link>
          {user ? (
            <button onClick={handleSignOut} className='ml-7 text-lg bg-amber-500 px-2 py-1 rounded-lg text-white' >Sign out</button>
          ) : (
            <Link
              className='ml-7 text-lg hover:text-amber-500 text-white'
              to='/login'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
