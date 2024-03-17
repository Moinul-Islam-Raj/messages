import React, { useEffect, useState } from 'react'
import Logout from './components/Logout'
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then(res => {
      if(!res.data.error)setData(res.data);
    })
  }, [])
  return (
    <div>
      <Logout />
      {data.map(u => (
        <div key={u._id} className='flex gap-2'>
          <img src={u.profilePicture} alt="" width={'40px'} />
          <h2>{u.fullName}</h2>
          <h4 className="text-xs text-gray-300">{u.username}</h4>
        </div>
      ))}
    </div>
  )
}

export default Home
