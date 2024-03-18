import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='h-4/5 overflow-auto p-4 w-full text-white'>
      <Message isOur={true}/>
      <Message isOur={true}/>
      <Message isOur={false}/>
      <Message isOur={true}/>
      <Message isOur={true}/>
      <Message isOur={false}/>
      <Message isOur={true}/>
      <Message isOur={true}/>
      <Message isOur={false}/>

    </div>
  )
}

export default Messages
