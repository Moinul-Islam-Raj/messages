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
    <div className='flex flex-col w-ful h-full bg-slate-700'>
        <Header />
        <Messages />
        <InputForm />
    </div>
  )
}

export default Main
