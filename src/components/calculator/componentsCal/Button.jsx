import React from 'react'

const Button = ({symbol, color, handleClick}) => {
  return (
    <div 
    onClick={()=> handleClick(symbol)}
    className='h-12 flex justify-center items-center bg-[slate-500] text-2xl flex-1 border-solid border border-[#242424] rounded-md cursor-pointer '
    style={{ backgroundColor: color}}>
        {symbol}
    </div>
  )
}

export default Button