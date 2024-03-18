import React from 'react'

const Message = ({isOur}) => {
  return (
    <div className={`${isOur ? 'flex-row-reverse ml-auto' : ''} w-full flex gap-2 max-w-[70%]`}>
      <img className='w-8 h-8' src="https://avatar.iran.liara.run/public/boy" alt="" />
      <div>
        <div className={`${isOur ? ' rounded-l-xl bg-blue-500' : 'rounded-r-xl bg-slate-500'} rounded-b-xl p-2 w-full`}>
          Hello everyone. this is not finished. fmfsjkn fsfsf snfsfsfsf
        </div>
        <p className={`${isOur && 'text-end' } text-xs text-slate-500`}>20:24</p>
      </div>
    </div>
  )
}   

export default Message
