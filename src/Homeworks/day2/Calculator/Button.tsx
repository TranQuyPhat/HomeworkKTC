import React from 'react'
import style from './style.module.css'
type Props = {
    label:string;
    onClick:(label:string)=>void
}

export default function Button(props: Props) {
  return (
    <button onClick={()=>props.onClick(props.label)} className={style.button}>
        {props.label}
    </button>
  )
}