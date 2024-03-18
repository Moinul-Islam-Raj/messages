 import React from 'react'
import Logout from './Logout'
import Search from './Search'
import Conversations from './Conversations'
 
 const Sidebar = () => {
   return (
     <div className='bg-slate-600 md:w-1/3 w-full p-4 min-w-48 relative md:h-full h-2/5'>
        <Search />
        <div className='w-full bg-slate-500 h-[2px] mb-2'></div>
        <Conversations/>
        <Logout />
     </div>
   )
 }
 
 export default Sidebar