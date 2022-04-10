import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [signInWithEmailAndPassword,user] = useSignInWithEmailAndPassword(auth );
  const navigate = useNavigate();
  const location = useLocation()
  const handleEmail = e =>{
    setEmail(e.target.value)
  }

  const handlePassword = e =>{
    setPassword(e.target.value)
  }
  const handleSignIn = e =>{
    e.preventDefault();
    signInWithEmailAndPassword(email,password);
  }

  const from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from,{replace:true});
  } 
  return (
    <div className='w-[450px] border-[1px] border-[#95A0A7]  mx-auto my-28 rounded-lg p-10'>
      <form onSubmit={handleSignIn} className=''>
        <h2 className='text-4xl text-center'>Login</h2>
        <div className='mt-7'>
          <label htmlFor='email'>Email</label>
          <input
          onBlur={handleEmail}
            type='email'
            name='email'
            placeholder='email'
            className='h-[50px] p-2 w-full  border-[#95A0A7] border-[1px]  rounded-lg focus:outline-none'
            required
          />
        </div>
        <div className='mt-7'>
          <label htmlFor='password'>Password</label>
          <input
          onBlur={handlePassword}
            type='password'
            name='password'
            placeholder='password'
            className='h-[50px] p-2 w-full  border-[#95A0A7] border-[1px]  rounded-lg focus:outline-none'
            required
          />
        </div>
        <button className='mt-11 w-full h-14 bg-[#ff99004d] hover:bg-[#ff9900b3] rounded-md duration-500'>
          Login
        </button>
      </form>
      <div className='text-center'>
        <span>
          New to Ema-john?{' '}
          <Link className='text-[#FF9900]' to='/register'>
            Create New Account
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login