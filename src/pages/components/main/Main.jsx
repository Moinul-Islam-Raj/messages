import React, { useContext } from 'react'
import Messages from './Messages'
import InputForm from './InputForm'
import { ConversationContext } from '../../../contexs/conversationContext'
import { AuthContext } from '../../../contexs/authContext'

const Main = () => {
  const {selectedConversation} = useContext(ConversationContext);
  const {user} = useContext(AuthContext);
  return (
    <div className='relative md:w-2/3 sm:w-ful md:h-full h-4/6 bg-slate-700'>
      {selectedConversation?._id ? 
      <>
        <div className='border-b border-slate-500 px-4 py-2 text-white'>
          <span className='text-slate-400'>To: </span> <span>{selectedConversation.fullName}</span>
        </div>
        <Messages />
        <InputForm />
      </> :
      <>
        <div className='w-full h-full flex text-white items-center justify-center'>
          <div>
            <h2 className='text-center text-2xl'>Hello <span className='text-blue-500'>{user.fullName} 👋</span></h2>
            <p className='text-center text-sm text-slate-500'>select a conversation</p>
          </div>
        </div>
      </>}
    </div>
  )
}

export default Main
