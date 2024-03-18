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
    </div>
  )
}

export default Conversations
