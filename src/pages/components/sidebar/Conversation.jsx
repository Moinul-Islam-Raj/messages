import React, { useContext } from 'react'
import { ConversationContext } from '../../../contexs/conversationContext';
import {SocketContext} from '../../../contexs/socketContext'

const Conversation = ({conversation}) => {
  const {setSelectedConversation, selectedConversation} = useContext(ConversationContext);
  const isSelected = selectedConversation?._id?.toString() === conversation._id.toString();
  const {onlineUsers} = useContext(SocketContext);
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
        <div onClick={() => setSelectedConversation(conversation)} className={'hover:bg-blue-500 flex p-2 rounded-md items-center gap-1 text-white ' + (isSelected && 'bg-blue-500')}>
            <div className='relative'>
              <img className='w-8 ' src={conversation.profilePicture} alt="profile picture" />
              {isOnline && <div className='absolute top-0 right-0 w-2 h-2 rounded-full bg-green-500'></div>}
            </div>
            <h4 className='overflow-hidden whitespace-nowrap'>
              {conversation.fullName}
            </h4>
        </div>
        <div className='w-full h-px bg-slate-500 my-2'></div>
    </>
  )
}

export default Conversation
