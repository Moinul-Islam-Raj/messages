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
      <div className="bg-white w-full h-full block">
        {selectedConversation?._id ? <Main /> : <Sidebar />}
      </div>
    </div>
  )
}

export default Home
