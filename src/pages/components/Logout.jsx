import React from 'react'
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const [loading, logout] = useLogout();
  return (
    <div>
      <button className='w-24 p-4 bg-slate-500 text-white'  disabled={loading} onClick={logout}>{loading ? '. . .' : "LOGOUT"}</button>
    </div>
  )
}

export default Logout
