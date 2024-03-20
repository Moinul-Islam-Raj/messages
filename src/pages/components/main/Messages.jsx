import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useMessages from '../../../hooks/useMessages'
import {useListenForMessages} from '../../../hooks/useListenForMessages'

const Messages = () => {
  const [loading, messages] = useMessages();

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.lastElementChild?.scrollIntoView()
    }, 150);
  }, [messages])

  useListenForMessages();
  return (
    <div ref={ref} className='h-4/5 overflow-auto p-4 w-full text-white'>
      {messages.map((m, i) => (
        <Message message={m} key={i}/>
      ))}
    </div>
  )
}

export default Messages
