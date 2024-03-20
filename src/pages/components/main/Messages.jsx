import React from 'react'
import Message from './Message'
import useMessages from '../../../hooks/useMessages'
import {useListenForMessages} from '../../../hooks/useListenForMessages'

const Messages = () => {
  const [loading, messages] = useMessages();
  useListenForMessages();
  return (
    <div className='h-4/5 overflow-auto p-4 w-full text-white'>
      {messages.map((m, i) => (
        <Message message={m} key={i}/>
      ))}
    </div>
  )
}

export default Messages
