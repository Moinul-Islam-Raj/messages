import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import { ConversationContext } from '../contexs/conversationContext';
import { useListenForMessages } from '../hooks/useListenForMessages';

const Home = () => {
  const {selectedConversation} = useContext(ConversationContext);

  useEffect(() => {
    if(Notification.permission !== 'granted'){
      Notification.requestPermission();
    }
  })

  useListenForMessages();
  return (
    <div className='flex items-center justify-center bg-blue-100 w-screen h-screen'>
      <div className="w-full h-full block sm:hidden">
        {selectedConversation?._id ? <Main /> : <Sidebar />}
      </div>
      <div className="w-3/4 max-w-[750px] h-4/5 hidden sm:flex overflow-hidden rounded-xl">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default Home
