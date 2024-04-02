import React, { useContext } from 'react'
import Messages from './Messages'
import InputForm from './InputForm'
import Header from './Header'
import { ConversationContext } from '../../../contexs/conversationContext'
import { AuthContext } from '../../../contexs/authContext'

const Main = () => {
  const {selectedConversation} = useContext(ConversationContext);
  const {user} = useContext(AuthContext);
  return (
    <>
    {selectedConversation?._id ? 
      <div className='flex flex-col w-full h-full bg-slate-700 sm:w-2/3'>
          <Header />
          <Messages />
          <InputForm />
      </div> : 
      <div className='flex w-full h-full bg-slate-700 sm:w-2/3 items-center justify-center'>
        <div>
          <p className='text-2xl text-white'>
            Hello <span className='text-blue-500'>{user.fullName}</span>
          </p>
          <p className='text-sm text-slate-500 text-center'>Select a conversation from left</p>
        </div>
      </div>
    }
    </>
  )
}

export default Main
