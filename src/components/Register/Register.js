import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword,user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailInput = e =>{
      setEmail(e.target.value);
  }

  const handlePasswordInput = e => {
      setPassword(e.target.value)
  }

  const handleConfirmPasswordInput = e =>{
    setConfirmPassword(e.target.value);
  }

  const handleFormSubmit = e =>{
    e.preventDefault();
    if(password !== confirmPassword){
      setError(`password doesn't match`);
      return;
    }

    createUserWithEmailAndPassword(email,password);

  }
  if(user){
    navigate('/home');
  }
  return (
    <div className='w-[450px] border-[1px] border-[#95A0A7]  mx-auto my-28 rounded-lg p-10'>
      <form onSubmit={handleFormSubmit}>
        <h2 className='text-4xl text-center'>Login</h2>
        <div className='mt-7'>
          <label htmlFor='email'>Email</label>
          <input
            onBlur={handleEmailInput}
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
            onBlur={handlePasswordInput}
            type='password'
            name='password'
            placeholder='password'
            className='h-[50px] p-2 w-full  border-[#95A0A7] border-[1px]  rounded-lg focus:outline-none'
            required
          />
        </div>
        <div className='mt-7'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            onBlur={handleConfirmPasswordInput}
            type='password'
            name='confirm-password'
            placeholder='confirm password'
            className='h-[50px] p-2 w-full  border-[#95A0A7] border-[1px]  rounded-lg focus:outline-none'
            required
          />
          <p className='text-red-500 text-lg font-medium  mt-5'>{error ? error : ''}</p>
        </div>
        <button type='submit' className='mt-11 w-full h-14 bg-[#ff99004d] hover:bg-[#ff9900b3] rounded-md duration-500'>
          Sign Up
        </button>
      </form>
      <div className='text-center'>
        <span>
          Already have an account?
          <Link className='text-[#FF9900]' to='/login'>
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
