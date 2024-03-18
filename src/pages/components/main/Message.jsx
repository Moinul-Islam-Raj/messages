import React, { useContext } from 'react'
import {AuthContext} from '../../../contexs/authContext'
import useConversation from '../../../hooks/useConversaton'

const Message = ({message}) => {
  const {user} = useContext(AuthContext);
  const [loading ,conversations] = useConversation();

  const isOur = message.senderId.toString() === user._id.toString();
  const profilePic = conversations.find(c => c._id.toString() === message.senderId.toString())?.profilePicture;
  return (
    <div className={`${isOur ? 'flex-row-reverse ml-auto' : ''} w-full flex gap-2 max-w-[70%]`}>
      <img className='w-8 h-8' src={isOur ? user.profilePicture : profilePic} alt="" />
      <div>
        <div className={`${isOur ? ' rounded-l-xl bg-blue-500' : 'rounded-r-xl bg-slate-500'} rounded-b-xl p-2 w-full`}>
          {message.text}
        </div>
        <p className={`${isOur && 'text-end' } text-xs text-slate-500`}>{new Date(message.createdAt).toLocaleTimeString()}</p>
      </div>
    </div>
  )
}   

export default Message
