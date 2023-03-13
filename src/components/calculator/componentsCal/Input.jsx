import React from 'react'

const Input = ({text,result}) => {
  return (
    <div className='h-24 flex justify-end items-end flex-col pr-10 py-5 bg-[#0c0c0c] my-4  rounded-md '>
        <result className='flex-1 text-base '>
            <h1 className=' text-blue-400'>{result}</h1>
        </result>
        <text className='flex-1 text-base '>
            <h3>{text}</h3>
        </text>
    </div>
  )
}

export default Input