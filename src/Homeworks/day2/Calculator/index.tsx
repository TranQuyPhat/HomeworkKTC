import React, { useState } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import style from './style.module.css'
type Props = {}

export default function Calculator({}: Props) {
      const [input, setInput] = useState('');
      const handleClick = (label: string) => {
    if (label === 'C') {
      setInput('');
    } else if (label === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + label);
    }
  };
  return (
     <div className={style.container}>
        <div>
    <Display value={input}/>
        <ButtonPanel onButtonClick={handleClick}/>
        </div>
        
    </div>
  )
}