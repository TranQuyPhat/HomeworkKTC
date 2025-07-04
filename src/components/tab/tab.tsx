import { Button } from '@mui/material';
import React from 'react'
import style from './style.module.css';
type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};
export default function Tab(props: TabButtonProps) {
    
  return (
   <button onClick={props.onClick} className={`${style.tab_button} ${props.isActive ? style.active : ''}` }>
    {props.label}
   </button>
  )
}