import React from 'react'
import Messages from './Messages'
import InputForm from './InputForm'

const Main = () => {
  return (
    <div className='relative md:w-2/3 sm:w-ful md:h-full h-4/6 bg-slate-700'>
      <div className='border-b border-slate-500 px-4 py-2 text-white'>
        <span className='text-slate-400'>To: </span> <span>John doe</span>
      </div>
      <Messages />
      <InputForm />
    </div>
  )
}

export default Main
