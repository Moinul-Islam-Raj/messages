import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, login] = useLogin();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(username, password);
  }

  return (
    <div className='h-screen bg-blue-50 mx-auto flex items-center justify-center'>
      <form  onSubmit={handleSubmit} className='flex flex-col w-72 mb-8 p-8 border border-gray-500 bg-slate-500 rounded-md'>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text" 
          placeholder='username'
          name='username'
          className='border-2 text-white bg-slate-600 rounded-full px-4 py-2 text-md outline-none mb-2'
          autoComplete='username current-username'
        />
        <input 
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password" 
          placeholder='password'
          name='password'
          className='border-2 text-white bg-slate-600 rounded-full px-4 py-2 text-md outline-none mb-2'
          autoComplete='current-password'
        />
        <button disabled={loading} type="submit" className='hover:text-blue-500 transition-all hover:bg-white font-bold w-full rounded-full text-white bg-blue-500 p-2'>
          {loading ? ". . ." : "Submit"}
        </button>
        <Link to='/messages/signup' className='mt-2 text-white text-xs hover:cursor-pointer hover:underline hover:text-blue-500 text-center w-full'>Don't have an accuont? Signup here!</Link>
      </form>
    </div>
  )
}

export default Login
