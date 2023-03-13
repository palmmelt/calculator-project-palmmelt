import React from 'react'
import Button from './componentsCal/Button'
import Input from './componentsCal/Input'
import { useState } from 'react'
import * as math from 'mathjs'

const Calculator = () => {
    const [text,setText] = useState("");
    const [result,setResult] = useState("");

    //add text
    const addText = (val)=>{
        setText((text)=>[...text,val+""]);
    };
    //del text
    const delText = ()=>{
        setText(text.slice(0,-1));
    };

    //add symbols
    const addSymbols =(val)=>{
        if (text === ""){
            setText("");
        }else if (/[+\-*./]/.test(text.slice(-1)) ) {
            setText(text.slice(0, -1));
        } else {
            setText((text)=>[...text,val+""]);
        }
    };

    //reset reset input
    const resetInput = ()=>{
        setText("");
        setResult("");
    };
    

    //MathJS
    const calculateResult = ()=>{
        const input = text.join("");
        setResult(math.evaluate(input));
    };

  return (
    <div className='flex justify-center items-center mt-24 text-white '>
        <container className='bg-[#242424] w-[400px] rounded-2xl h-[420px] flex-col justify-center items-center px-2 py-4'>
            <header className='flex w-full justify-between mx-[-5px]'>
                <div className='pl-4 text-[#fcfcfcbd]' >PALMMELT<i class="fa-solid fa-code"></i></div>
                <div className='w-[150px] bg-[#bebebe60] rounded-md'></div>
            </header>
            <box className='w-full'>
                <Input text={text} result={result}/>
                <body className='flex bg-[#242424]'>
                    <Button symbol={'CLEAR'} color={'#5f0404'} handleClick={resetInput}/>
                    <Button symbol={'DEL'} color={'#a06d00'} handleClick={delText}/>
                    
                </body>
                <body className='flex bg-[#242424]'>
                    <Button symbol={'7'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'8'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'9'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={' / '} color={'#057969'} handleClick={addSymbols}/>
                </body>
                <body className='flex bg-[#242424]'>
                    <Button symbol={'4'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'5'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'6'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={' * '} color={'#057969'} handleClick={addSymbols} />
                </body>
                <body className='flex bg-[#242424]'>
                    <Button symbol={'1'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'2'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'3'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={' + '} color={'#057969'} handleClick={addSymbols}/>
                </body>
                <body className='flex bg-[#242424]'>
                    <Button symbol={'.'} color={'#3f3f3f'} handleClick={addSymbols}/>
                    <Button symbol={'0'} color={'#3f3f3f'} handleClick={addText}/>
                    <Button symbol={'='} color={'#00380cfd'} handleClick={calculateResult}/>
                    <Button symbol={' - '} color={'#057969'} handleClick={addSymbols}/>
                </body>
            </box>
        </container>
    </div>
  )
}

export default Calculator