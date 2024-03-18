import React from 'react'
import Message from './Message'
import useMessages from '../../../hooks/useMessages'

const Messages = () => {
  const[loading, messages] = useMessages();
  return (
    <div className='h-4/5 overflow-auto p-4 w-full text-white'>
      {messages.map(m => (
        <Message message={m} key={messages._id}/>
      ))}
    </div>
  )
}

export default Messages
