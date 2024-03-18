import React, { useEffect, useState } from 'react'
import Logout from './components/sidebar/Logout'
import axios from 'axios';
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'

const Home = () => {
  return (
    <div className='flex items-center justify-center bg-blue-100 w-screen h-screen'>
      <div className="bg-white rounded-xl overflow-hidden md:w-4/5 w-full max-w-[750px] md:h-4/5 h-full md:flex block">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default Home