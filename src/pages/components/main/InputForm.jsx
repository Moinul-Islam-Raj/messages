import React from 'react'

const InputForm = () => {
  return (
    <div className='absolute bottom-0 p-2 w-full bg-slate-700'>
      <form className='flex gap-2 items-center justify-center w-full'>
        <input 
            type="text"
            placeholder='Aa'
            className='outline-none w-4/5 px-4 py-1 rounded-sm text-lg'
        />
        <button className='p-2 bg-blue-500 rounded-sm text-white '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        </button>
      </form>
    </div>
  )
}

export default InputForm
