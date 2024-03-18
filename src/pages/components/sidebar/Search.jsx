import React from 'react'

const Search = () => {
  return (
    <div className='mb-2'>
      <form className='flex w-full items-center justify-center gap-2'>
        <input 
          type="text" 
          placeholder='Search' 
          className='w-3/4 px-4 py-1 border rounded-full outline-none text-md'
        />
        <button className='text-white bg-blue-500 p-2 rounded-full' type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Search
