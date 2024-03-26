import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useConversation from '../../../hooks/useConversaton'

const Conversations = () => {

  const [loading, conversations] = useConversation();
  return (
    <div className="h-4/5 overflow-auto">
      {conversations.map(c => (
        <Conversation conversation={c} key={c._id}/>
      ))}
      {(loading && !conversations?.length)&& (
      <>
        <div className={'animate-pulse flex p-2 rounded-md items-center gap-1'}>
            <div className='w-8 h-8 bg-slate-400 rounded-full'/>
            <div className='bg-slate-400 w-full h-6 rounded-2xl'/>
        </div>
        <div className='w-full h-px bg-slate-500 my-2'/>
        <div className={'animate-pulse flex p-2 rounded-md items-center gap-1'}>
            <div className='w-8 h-8 bg-slate-400 rounded-full'/>
            <div className='bg-slate-400 w-full h-6 rounded-2xl'/>
        </div>
      </>
      )
      }
    </div>
  )
}

export default Conversations
