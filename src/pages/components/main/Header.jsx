import React, { useContext } from 'react'
import { ConversationContext } from '../../../contexs/conversationContext';

const Header = () => {
  const {selectedConversation, setSelectedConversation, setMessages} = useContext(ConversationContext);

  const handleClick =() => {
    setSelectedConversation({});
    setMessages([]);
  }
  return (
    <div className='flex items-center justify-between border-b border-slate-500 px-4 py-2 text-white'>
          <span className='text-slate-400'>To: </span> 
          <span className='flex gap-1 items-center'>
            <img className='w-8' src={selectedConversation.profilePicture} alt="profile picture" />
            {selectedConversation.fullName}
          </span>
          <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </button>
    </div>
  )
}

export default Header
