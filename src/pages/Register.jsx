import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';

const Register = () => {
  const [inputs, setInputs] = useState({fullName:"", username:"", password:"", confirmPassword:"", gender:""});
  const [loading, signup] = useSignup();
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    signup(inputs);
  }

  return (
    <div className='h-screen bg-blue-50 mx-auto flex items-center justify-center'>
      <form  onSubmit={handleSubmit} className='flex flex-col w-96 mb-8 p-8 border border-gray-500 bg-slate-500 rounded-md'>
        <input
          value={inputs.fullName}
          onChange={(ev) => setInputs(prev => ({...prev, fullName:ev.target.value}))} 
          type="text" 
          placeholder='full name'
          name='fullName'
          className='border-2 text-white bg-slate-600 rounded-full px-4 py-2 text-md outline-none mb-2'
        />
        <input
          value={inputs.username}
          onChange={(ev) => setInputs(prev => ({...prev, username:ev.target.value}))}
          type="text" 
          placeholder='username'
          name='username'
          className='border-2 text-white bg-slate-600 rounded-full px-4 py-2 text-md outline-none mb-2'
        />
        <input 
          value={inputs.password}
          onChange={(ev) => setInputs(prev => ({...prev, password:ev.target.value}))}
          type="password" 
          placeholder='password'
          name='password'
          className='border-2 text-white bg-slate-600 rounded-full px-4 py-2 text-md outline-none mb-2'
        />
        <input 
          value={inputs.confirmPassword}
          onChange={(ev) => setInputs(prev => ({...prev, confirmPassword:ev.target.value}))}
          type="password" 
          placeholder='confirm password'
          name='confirmPassword'
          className='border-2 text-white bg-slate-600 rounded-full px-4 py-2 text-md outline-none mb-4'
        />
        <div className='w-full flex gap-2 px-2 text-white mb-2'>
        <label className='text-gray-300'>gender:</label>
          <div className='flex gap-2'>
            <label htmlFor="male">male</label>
            <input
              checked={inputs.gender === "male"}
              onChange={(ev) => setInputs(prev => ({...prev, gender:ev.target.checked ? "male" : "female"}))}
              id='male'
              type="radio"
              value="male"
              name='gender'
              className=''
            />
          </div>
          <div className='flex gap-2'>
            <label htmlFor="female">female</label>
            <input
              checked={inputs.gender === "female"}
              onChange={(ev) => setInputs(prev => ({...prev, gender:ev.target.checked ? "female" : "male"}))}
              id='female'
              type="radio"
              value="female"
              name='gender'
              className=''
            />
          </div>
        </div>

        <button disabled={loading} type="submit" className='hover:text-blue-500 transition-all hover:bg-white font-bold w-full rounded-full text-white bg-blue-500 p-2'>
          {loading ? ". . ." : "Submit"}
        </button>
        <Link to='/messages/login' className='mt-2 text-white text-xs hover:cursor-pointer hover:underline hover:text-blue-500'>Already have an accuont? Login here!</Link>
      </form>
    </div>
  )
}

export default Register
