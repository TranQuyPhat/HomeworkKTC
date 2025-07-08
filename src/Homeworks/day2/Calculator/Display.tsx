import React, { useEffect, useRef } from 'react'
import style from './style.module.css'
type Props = {
  value: string;
};
export default function Display({value}: Props) {
     const ref = useRef<HTMLDivElement>(null);

  // Khi value thay đổi, scroll về phải
  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.scrollLeft = el.scrollWidth;
    }
  }, [value]);
  return (
    <div ref={ref} className={style.result}>{value}</div>
  )
}