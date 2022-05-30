import React from 'react'

const Button = ({buttonText}) => {
  return (
    <div>
        <button className='border-0 outline-none
          bg-cyan-700 p-2 w-52 lg:w-64 font-bold text-base md:text-lg
          text-gray-900 hover:border-2 hover:bg-white border-cyan-900'>
            {buttonText}
        </button>
    </div>
  )
}

export default Button