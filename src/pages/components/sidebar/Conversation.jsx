import React, { useContext } from 'react'
import { ConversationContext } from '../../../contexs/conversationContext';

const Conversation = ({conversation}) => {
  const {setSelectedConversation, selectedConversation} = useContext(ConversationContext);
  const isSelected = selectedConversation?._id?.toString() === conversation._id.toString();
  return (
    <>
        <div onClick={() => setSelectedConversation(conversation)} className={'hover:bg-blue-500 flex p-2 rounded-md items-center gap-1 text-white ' + (isSelected && 'bg-blue-500')}>
            <img className='w-8 ' src={conversation.profilePicture} alt="profile picture" />
            <h4 className='overflow-hidden whitespace-nowrap'>
              {conversation.fullName}
            </h4>
        </div>
        <div className='w-full h-px bg-slate-500 my-2'></div>
    </>
  )
}

export default Conversation
